// @flow
import _ from 'lodash'
import type { MenuItem, State } from '../flow.types'
import EntityToTreeMapper from '../util/EntityToTreeMapper'

export default {
  treeNodes: (state: State) => {
    return EntityToTreeMapper.generateTreeNodes(state.menuItems)
  },
  // treeNodeVariables: (state: State) => state.menuItems.reduce((accumulator, item: MenuItem) => ({...accumulator, [item.key]: item.variables}), {}),
  selectedTreeNodeVariableIds: (state: State) => {
    if (state.selectedMenuItem.id) {
      const selectedMenuItem: ?MenuItem = state.menuItems.find(item => item.key === state.selectedMenuItem.id)
      if (selectedMenuItem) {
        return _.cloneDeep(selectedMenuItem.variables.map(variable => variable.variable))
      }
    }
    return undefined
  }
}
