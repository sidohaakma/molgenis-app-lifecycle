<template>
  <div class="card">
    <div class="card-header">
      <button class="btn btn-sm py-0 btn-secondary" @click="collapsed = !collapsed">
        <span v-if="collapsed">+</span>
        <span v-else>-</span>
      </button>

      Catalogue
    </div>

    <div class="card-body" v-if="!collapsed">
      <div class="row mb-2">
        <div class="col-12">
          <input
            class="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="searchInput">
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <v-jstree
            @item-click="itemClickHandler"
            :onselectstart="false"
            :data="treeData"
            ref="tree"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import VJstree from 'vue-jstree'
  export default {
    name: 'Tree',
    props: {
      treeNodes: {
        type: Array,
        required: true
      },
      itemClickHandler: {
        type: Function,
        required: true
      }
    },
    data () {
      return {
        collapsed: false,
        searchInput: ''
      }
    },
    computed: {
      treeData () {
        return JSON.parse(JSON.stringify(this.treeNodes))
      }
    },
    watch: {
      searchInput (newValue) {
        const red = '#D11313'
        const black = '#000'
        const pattern = new RegExp(newValue, 'i')
        this.$refs.tree.handleRecursionNodeChilds(this.$refs.tree, function (node) {
          if (newValue !== '') {
            const str = node.model.text
            node.$el.querySelector('.tree-anchor').style.color = pattern.test(str) ? red : black
          } else {
            node.$el.querySelector('.tree-anchor').style.color = black
          }
        })
      }
    },
    components: {
      VJstree
    }
  }
</script>
