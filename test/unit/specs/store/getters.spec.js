import getters from '@/store/getters'

describe('getters', () => {
  const state = {
    harmonizationData: [
      {id: 'entity1', sources: ['source1'], cohort: {id: 'cohort1'}, target: {variable: 'variable1'}},
      {id: 'entity2', sources: ['source1'], cohort: {id: 'cohort1'}, target: {variable: 'variable2'}},
      {id: 'entity3', sources: ['source1'], cohort: {id: 'cohort2'}, target: {variable: 'variable1'}},
      {id: 'entity4', sources: ['source1'], cohort: {id: 'cohort2'}, target: {variable: 'variable3'}},
      {id: 'entity5', sources: ['source1'], cohort: {id: 'cohort3'}, target: {variable: 'variable10'}}
    ],
    harmonizationMetadata: {
      attributes: [
        {
          name: 'target',
          refEntity: {
            attributes: ['attr1', 'attr2']
          }
        }
      ]
    }
  }

  describe('getCohortVariableMapping', () => {
    it('should return a cohortVariableMapping based on the harmonization data in the state', () => {
      const actual = getters.getCohortVariableMapping(state)
      const expected = {
        'cohort1': {
          'variable1': {id: 'entity1', sources: ['source1']},
          'variable2': {id: 'entity2', sources: ['source1']}
        },

        'cohort2': {
          'variable1': {id: 'entity3', sources: ['source1']},
          'variable3': {id: 'entity4', sources: ['source1']}
        },

        'cohort3': {
          'variable10': {id: 'entity5', sources: ['source1']}
        }
      }

      expect(actual).to.deep.equal(expected)
    })
  })

  describe('getCoreVariableFields', () => {
    it('should return a list of core variable fields based on the harmonization metadata in the state', () => {
      const actual = getters.getCoreVariableFields(state)
      const expected = ['attr1', 'attr2']
      expect(actual).to.deep.equal(expected)
    })
  })

  describe('getHarmonizationTable', () => {
    it('should return a harmonization table based on the harmonization data in the state', () => {
      const actual = getters.getHarmonizationTable(state)
      const expected = {
        'cohort1': [
          'variable1',
          'variable2'
        ],
        'cohort2': [
          'variable1',
          'variable3'
        ],
        'cohort3': [
          'variable10'
        ]
      }

      expect(actual).to.deep.equal(expected)
    })
  })

  describe('getSelectedHarmonization', () => {
    it('should return the selected harmonization based on the harmonization data in the state', () => {
      const actual = getters.getSelectedHarmonization(state)
      const expected = {id: 'entity1', sources: ['source1'], cohort: {id: 'cohort1'}, target: {variable: 'variable1'}}
      expect(actual).to.deep.equal(expected)
    })
  })
})
