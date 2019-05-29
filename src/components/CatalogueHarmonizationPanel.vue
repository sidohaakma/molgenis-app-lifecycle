<template>
  <div class="harmonization-panel mt-3">
    <div class="table-responsive">
      <template  v-if="harmonizedVariables.length > 0">
        <table class="table table-sm table-striped">
          <thead>
          <tr>
            <th scope="col" class="pr-5">Cohort</th>

            <th v-for="variable in selectedNodeVariables" v-if="isVariableHarmonized(variable.variable)" @mouseover="showCohortSummaryStatistics(variable.variable, cohorts, summaries)">
                {{ variable.variable }}
            </th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="cohort in cohorts" v-if="doesCohortHaveHarmonization(cohort)">
            <th scope="row" class="number-of-harmonizations-cell pr-5">
              {{ cohort }}
              <span class="badge badge-success badge-pill">
                  {{ getNumberOfHarmonizations(cohort) }} / {{ selectedNodeVariables.length }}
                </span>
            </th>

            <td class="icon-cells" v-for="variable in selectedNodeVariables"
                v-if="isVariableHarmonized(variable.variable)">

              <template v-if="variableCompleteHarmonizedForCohort(cohort, variable.variable)">
                <a href="" @click.prevent="navigateToHarmonizationComparison(getHarmonizationRowId(cohort, variable.variable))" @mouseover="showSummaryStatistics(variable.variable, cohort)" @mouseout="hideSummaryStatistics">
                  <font-awesome-icon icon="circle" class="text-success" size="s"/>
                </a>
              </template>

              <template v-else-if="variablePartialHarmonizedForCohort(cohort, variable.variable)">
                <a href="" @click.prevent="navigateToHarmonizationComparison(getHarmonizationRowId(cohort, variable.variable))">
                  <font-awesome-icon icon="circle" class="text-warning" size="s"/>
                </a>
              </template>

              <template v-else-if="variableNAHarmonizedForCohort(cohort, variable.variable)">
                <a href="" @click.prevent="navigateToHarmonizationComparison(getHarmonizationRowId(cohort, variable.variable))">
                  <font-awesome-icon icon="times" class="text-secondary" size="s"/>
                </a>
              </template>

              <template v-else>
                <font-awesome-icon icon="question" class="text-secondary" size="s"/>
              </template>
            </td>
          </tr>
          </tbody>
        </table>
      </template>

      <template v-else>
        <table>
          <tr>
            <td scope="col" class="pr-1">No harmonized variables available</td>
          </tr>
        </table>
      </template>

      <modals-container/>

    </div>
  </div>
</template>

<style>
  .harmonization-panel table {
    text-align: center;
  }

  .icon-cells {
    vertical-align: middle !important;
  }

  .number-of-harmonizations-cell {
    width: 4rem;
  }
</style>
<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faCheckCircle, faQuestion, faTimes, faCircle } from '@fortawesome/free-solid-svg-icons'
  import VModal from 'vue-js-modal'
  import SummaryStatistics from '../components/SummaryStatistics'
  import CohortSummaryStatistics from '../components/CohortSummaryStatistics'
  library.add(faCheckCircle, faQuestion, faTimes, faCircle)

  export default {
    name: 'CatalogueHarmonizationPanel',
    methods: {
      getNumberOfHarmonizations (cohort) {
        if (this.harmonizationTableData[cohort] === undefined) {
          return 0
        }
        return this.harmonizationTableData[cohort].filter(harmonization => harmonization.status !== 'zna').length
      },

      isVariableHarmonized (variable) {
        return this.harmonizedVariables.some((harmonization) => {
          return harmonization.variable === variable
        })
      },

      doesCohortHaveHarmonization (cohort) {
        return this.harmonizationTableData[cohort] !== undefined
      },

      variableCompleteHarmonizedForCohort (cohort, variable) {
        return this.harmonizationTableData[cohort].some(harmonization => harmonization.variable === variable && harmonization.status === 'complete')
      },

      variablePartialHarmonizedForCohort (cohort, variable) {
        return this.harmonizationTableData[cohort].some(harmonization => harmonization.variable === variable && harmonization.status === 'partial')
      },

      variableNAHarmonizedForCohort (cohort, variable) {
        return this.harmonizationTableData[cohort].some(harmonization => harmonization.variable === variable && harmonization.status === 'zna')
      },

      getHarmonizationRowId (cohort, variable) {
        return this.cohortVariableMapping[cohort][variable].id
      },

      navigateToHarmonizationComparison (harmonizationId) {
        this.$router.push(this.$route.path + '/' + harmonizationId)
      },
      showSummaryStatistics (variable, cohort) {
        this.$modal.show(SummaryStatistics, {
          variable: variable,
          cohort: cohort
        }, {
          draggable: true,
          height: 'auto'
        })
      },
      showCohortSummaryStatistics (variable, cohorts, summaries) {
        this.$modal.show(CohortSummaryStatistics, {
          variable: variable,
          cohorts: cohorts
        }, {
          draggable: true,
          height: 'auto',
          weight: '1rm'
        })
      },
      hideSummaryStatistics () {
        this.$modal.hide()
      }
    },
    computed: {
      cohorts () {
        return this.$store.state.cohorts
      },

      cohortVariableMapping () {
        return this.$store.getters.getCohortVariableMapping
      },

      harmonizationTableData () {
        return this.$store.getters.getHarmonizationTable
      },

      harmonizedVariables () {
        return Object.values(this.harmonizationTableData).reduce((accumulator, value) => {
          return [...accumulator, ...value]
        }, [])
      },

      selectedNodeVariables () {
        return this.$store.state.selectedNodeVariables
      }
    },
    components: {
      FontAwesomeIcon,
      VModal,
      SummaryStatistics,
      CohortSummaryStatistics
    }
  }
</script>
