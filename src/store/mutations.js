// @flow
import type { CoreVariable, CoreVariableColumn, MenuItem, SelectedMenuItem, SourceVariable, State } from '../flow.types'

export const SET_DATA = '__SET_DATA__'
export const SET_SELECTED_MENUITEM = '__SET_SELECTED_MENUITEM__'
export const SET_CORE_VARIABLE_COLUMNS = '__SET_CORE_VARIABLE_COLUMNS__'
export const SET_CORE_VARIABLE_DATA = '__SET_CORE_VARIABLE_DATA__'
export const SET_SOURCE_VARIABLES = '__SET_SOURCE_VARIABLES__'
export const SET_COHORT_DATA = '__SET_COHORT_DATA__'
export const SET_HARMONIZATION_DATA = '__SET_HARMONIZATION_DATA__'
export const SET_NAVBAR_LOGO = '__SET_NAVBAR_LOGO__'
export const SET_ERROR = '__SET_ERROR__'

export default {
  [SET_DATA] (state: State, menuItems: Array<MenuItem>) {
    state.menuItems = menuItems
  },
  [SET_CORE_VARIABLE_COLUMNS] (state: State, columns: Array<CoreVariableColumn>) {
    state.coreVariables.columns = columns
  },
  [SET_CORE_VARIABLE_DATA] (state: State, data: Array<CoreVariable>) {
    state.coreVariables.data = data
  },
  [SET_SOURCE_VARIABLES] (state: State, sources: Array<SourceVariable>) {
    state.coreVariables.sourceVariables = sources
  },
  [SET_COHORT_DATA] (state: State, data: Array<String>) {
    state.cohorts = data
  },
  [SET_HARMONIZATION_DATA] (state: State, data: Array<String>) {
    state.harmonizations = data
  },
  [SET_ERROR] (state: State, error: string) {
    state.error = error
  },
  [SET_NAVBAR_LOGO] (state: State, logo: string) {
    state.navbarLogo = logo
  },
  [SET_SELECTED_MENUITEM] (state: State, selectedMenuItem: SelectedMenuItem) {
    state.selectedMenuItem = selectedMenuItem
  }
}
