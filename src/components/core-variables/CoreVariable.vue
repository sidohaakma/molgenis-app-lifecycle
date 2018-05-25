<template>
  <div class="card">
    <div class="card-header">
      Core variable: <strong>{{ data.label }}</strong>
    </div>
    <div class="card-body table-responsive">
      <table class="table table-striped">
        <tr v-for="column in columns">
          <th>{{ column.label }}</th>
          <td>
            <span v-if="typeof data[column.name] === 'object'">test {{ data[column.name].label }}</span>
            <pre v-else-if="column.name === 'values'">{{ data[column.name] }}</pre>
            <pre class="pre-wrap" v-else-if="column.name === 'comments'">{{ data[column.name] }}</pre>
            <span v-else>{{ data[column.name] }}</span>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'CoreVariable',
    computed: {
      ...mapState({
        columns: state => state.coreVariables.columns,
        // TODO rewrite to select a value from state.coreVariables.data
        // TODO add an index to the state like state.selectedCoreVariableIndex
        data: state => state.coreVariables.data[0]
      })
    }
  }
</script>

<style scoped>
  pre {
    display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 1.42857143;
    color: #333;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .pre-wrap {
    white-space: pre-wrap;       /* css-3 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
  }
</style>



