<template>
  <div class="container-fluid">

    <molgenis-menu></molgenis-menu>

    <div class="row mt-3">

      <div class="col-xl-4 col-lg-4 col-12 mb-2">
        <Tree :treeNodes="treeNodes" :itemClickHandler="treeClick"></Tree>
      </div>

      <div class="col-xl-8 col-lg-8 col-12 mb-2">
        <CoreVariables></CoreVariables>
      </div>

    </div>

    <div class="row">

      <div class="col-xl-4 col-lg-4 col-12 mb-2"></div>
      <div class="col-xl-8 col-lg-8 col-12 mb-2">
        <Harmonizations></Harmonizations>
      </div>

    </div>

  </div>
</template>
<script>
  import Tree from './Tree'
  import CoreVariables from './core-variables/CoreVariables'
  import Harmonizations from './harmonization/Harmonizations'
  import MolgenisMenu from './MolgenisMenu'
  import { SELECTED_MENUITEM, GET_TREE_DATA, GET_COHORTS } from '../store/actions'
  import { mapGetters, mapState } from 'vuex'

  export default {
    name: 'LifeCycleCatalogue',
    components: {
      Tree,
      CoreVariables,
      Harmonizations,
      MolgenisMenu
    },
    computed: {
      ...mapGetters(['treeNodes']),
      ...mapState(['selectedMenuItem'])
    },
    methods: {
      treeClick (node) {
        this.$store.dispatch(SELECTED_MENUITEM, node.model)
      }
    },
    mounted () {
      this.$store.dispatch(GET_TREE_DATA)
      this.$store.dispatch(GET_COHORTS)
    }
  }
</script>
