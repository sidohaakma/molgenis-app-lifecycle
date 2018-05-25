// @flow
export type TreeSettings = {
  id: string,
  label: string,
  folderIcon: string,
  leafIcon: string,
  isOpened: boolean,
  isSelected: boolean,
  isLoading: boolean
}

export type CoreVariable = Object

export type SourceVariable = Object

export type CoreVariableColumn = {
  name: string,
  label: string,
  description: string
}

export type CoreVariableRef = {
  variable: string,
  label: string
}

export type CoreVariables = {
  columns: Array<CoreVariableColumn>,
  data: Array<CoreVariable>,
  sourceVariables: Array<SourceVariable>
}

export type SelectedMenuItem = {
  id: string,
  value: string,
  text: string
}

export type MenuItemRef = {
  key: string,
  title: string
}

export type MenuItem = {
  key: string,
  value: string,
  title: string,
  children: Array<MenuItemRef>,
  variables: Array<CoreVariableRef>
}

export type State = {
  treeSettings: TreeSettings,
  menuItems: Array<MenuItem>,
  selectedMenuItem: SelectedMenuItem,
  coreVariables: CoreVariables,
  cohorts: Array<Object>,
  harmonizations: Array<Object>,
  navbarLogo: string,
  error: string
}
