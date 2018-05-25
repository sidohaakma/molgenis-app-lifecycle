// @flow
import api from '@molgenis/molgenis-api-client'
import {
  SET_DATA, SET_ERROR, SET_CORE_VARIABLE_COLUMNS, SET_CORE_VARIABLE_DATA, SET_COHORT_DATA, SET_HARMONIZATION_DATA,
  SET_SOURCE_VARIABLES, SET_NAVBAR_LOGO, SET_SELECTED_MENUITEM
} from './mutations'
import type { SelectedMenuItem, State } from '../flow.types'

/* ACTION CONSTANTS */
export const GET_TREE_DATA = '__GET_TREE_DATA__'
export const GET_CORE_VARIABLES = '__GET_CORE_VARIABLES__'
export const GET_COHORTS = '__GET_COHORTS__'
export const GET_HARMONIZATIONS = '__GET_HARMONIZATIONS__'
export const GET_SOURCE_VARIABLES = '__GET_SOURCE_VARIABLES__'
export const GET_NAVBAR_LOGO = '__GET_NAVBAR_LOGO__'
export const SELECTED_MENUITEM = '__SELECTED_MENUITEM__'

export default {
  [GET_TREE_DATA] ({state, commit}: {state: State, commit: Function}) {
    api.get('/api/v2/UI_Menu').then(response => {
      commit(SET_DATA, response.items)
    }, error => {
      commit(SET_ERROR, error)
    })
  },
  [GET_CORE_VARIABLES] ({state, commit, getters}: {state: State, commit: Function, getters: Function}) {
    api.get('/api/v2/LifeCycle_CoreVariables?q=variable=in=(' + getters.selectedTreeNodeVariableIds + ')').then(response => {
      commit(SET_CORE_VARIABLE_COLUMNS, response.meta.attributes)
      commit(SET_CORE_VARIABLE_DATA, response.items)
    }, error => {
      commit(SET_ERROR, error)
    })
  },
  [GET_COHORTS] ({state, commit}: {state: State, commit: Function}) {
    api.get('/api/v2/LifeCycle_Cohorts').then(response => {
      commit(SET_COHORT_DATA, response.items)
    }, error => {
      commit(SET_ERROR, error)
    })
  },
  [GET_HARMONIZATIONS] ({state, commit, dispatch}: {state: State, commit: Function, dispatch: Function}, harmonization: string) {
    api.get('/api/v2/LifeCycle_Harmonizations/' + harmonization).then(response => {
      commit(SET_HARMONIZATION_DATA, response)
      dispatch(GET_SOURCE_VARIABLES, response.sources)
    }, error => {
      commit(SET_ERROR, error)
    })
  },
  [GET_SOURCE_VARIABLES] ({state, commit}: {state: State, commit: Function}, sourceVariables: Array<Object>) {
    const variables = sourceVariables.map(sourceVariable => sourceVariable.variable).join(',')
    api.get('/api/v2/LifeCycle_SourceVariables?q=variable=in=(' + variables + ')').then(response => {
      commit(SET_SOURCE_VARIABLES, response.items)
    }, error => {
      commit(SET_ERROR, error)
    })
  },
  [GET_NAVBAR_LOGO] ({state, commit}: {state: State, commit: Function}) {
    api.get('/api/v2/sys_set_app/app').then(response => {
      commit(SET_NAVBAR_LOGO, response.logo_href_navbar)
    }, error => {
      commit(SET_ERROR, error)
    })
  },
  [SELECTED_MENUITEM] ({state, commit, dispatch, getters}: {state: State, commit: Function, dispatch: Function}, selectedMenuItem: SelectedMenuItem) {
    commit(SET_SELECTED_MENUITEM, selectedMenuItem)
    dispatch(GET_CORE_VARIABLES)
  }
}
