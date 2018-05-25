/**
 * Recursively lookup children for nested parent entities
 */
const lookupChildren = (parent, entitiesByKey) => ({
  ...parent, children: parent.children.map(child => lookupChildren(entitiesByKey[child.key], entitiesByKey))
})

/**
 * Turn flat entity data to a tree structure
 */
const createEntityTree = (entities) => {
  const entitiesByKey = entities.reduce((accumulator, entity) => ({...accumulator, [entity.key]: entity}), {})
  return entities.filter(entity => !entity.parent).map(parent => lookupChildren(parent, entitiesByKey))
}

/**
 * Transform a MOLGENIS entity into a tree node used by vue-jstree
 */
const createTreeNode = (entity) => ({
  id: entity.key,
  value: entity.title,
  text: entity.title,
  icon: !entity.children || entity.children.length === 0 ? 'fa fa-table' : 'fa fa-folder-o',
  opened: true,
  disabled: disableNode(entity),
  loading: false,
  selected: false,
  variables: entity.variables,
  children: entity.children.map(createTreeNode)
})

/**
 * Generates an array of tree nodes
 *
 * @param entities
 * @returns {Array}
 */
const generateTreeNodes = (entities) => {
  return createEntityTree(entities).map(createTreeNode)
}

const disableNode = (node) => {
  return node.variables.length === 0
}

export default {
  generateTreeNodes,
  disableNode
}
