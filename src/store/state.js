// @flow
import type { State } from '../flow.types'

const state: State = {
  treeSettings: {
    id: 'key',
    label: 'title',
    folderIcon: '',
    leafIcon: 'fa fa-table',
    isOpened: true,
    isSelected: false,
    isLoading: false
  },
  menuItems: [],
  coreVariables: {
    columns: [],
    data: [],
    sourceVariables: []
  },
  selectedMenuItem: {
    id: '',
    text: '',
    value: ''
  },
  cohorts: [],
  harmonizations: [],
  navbarLogo: '',
  error: ''
}

export default state
