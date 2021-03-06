// @flow
import api from '@molgenis/molgenis-api-client'

/* Mappers */
import mapEntitiesToTreeMenu from '../mappers/entitiesToTreeMenuMapper'

/* Flow types */
import type { VuexContext } from '../flow.types'

export default {
  'FETCH_COHORTS' ({commit}: VuexContext) {
    api.get('/api/v2/LifeCycle_Cohorts?num=10000').then(response => {
      commit('SET_COHORTS', response.items.map(item => item.id))
    }, error => {
      commit('SET_ERROR', error)
    })
  },

  // TODO Make flow type for Tree Node object
  'FETCH_DATA_FOR_SELECTED_NODE' ({commit, dispatch}: VuexContext, selectedNode: Object) {
    const variables = selectedNode.variables.map(variable => variable.variable).join(',')
    dispatch('FETCH_HARMONIZATIONS', variables)
    commit('SET_SELECTED_NODE', selectedNode)
  },

  'FETCH_HARMONIZATIONS' ({commit}: VuexContext, variables: string) {
    // Expand target to include the core variable data
    api.get('/api/v2/LifeCycle_Harmonizations?q=target=in=(' + variables + ')&attrs=*,sources(*),target(*)&num=10000').then(response => {
      commit('SET_HARMONIZATION_DATA', response.items)
      commit('SET_HARMONIZATION_METADATA', response.meta)
    }, error => {
      commit('SET_ERROR', error)
    })
  },

  'FETCH_HARMONIZATIONS_BY_ID' ({commit}: VuexContext, id: string) {
    // Expand target to include the core variable data
    api.get('/api/v2/LifeCycle_Harmonizations/' + id + '?attrs=*,sources(*),target(*)&num=10000').then(response => {
      commit('SET_HARMONIZATION_DATA', [response])
      commit('SET_HARMONIZATION_METADATA', response._meta)
    }, error => {
      commit('SET_ERROR', error)
    })
  },

  'FETCH_TREE_MENU' ({commit}: VuexContext, selectedNodeId?: string) {
    // Expand variables to include the core variable data
    api.get('/api/v2/UI_Menu?attrs=*,variables(*)&num=10000').then(response => {
      commit('SET_TREE_MENU', mapEntitiesToTreeMenu(response.items, selectedNodeId))
    }, error => {
      commit('SET_ERROR', error)
    })
  }
}
