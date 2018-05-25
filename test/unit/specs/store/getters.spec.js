import getters from '@/store/getters'
import EntityV2Response from '../mock-responses/EntityV2Response'
import ColumnsMapperResponse from '../mock-responses/ColumnsMapperResponse'

describe('getters', () => {
  const mockedState = {
    treeSettings: {},
    coreVariables: {
      data: EntityV2Response.mockCoreVariablesResponse.items,
      sourceVariables: EntityV2Response.mockSourceVariablesResponse.items,
      columns: ColumnsMapperResponse.mockColumns
    },
    cohorts: EntityV2Response.mockCohortsResponse.items,
    harmonizations: EntityV2Response.mockHarmonizationResponse,
    selectedMenuItem: {
      id: 'test',
      text: 'test'
    }
  }

  it('generate treenodes for data in tree', () => {
    const clone = getters.treeNodes(mockedState)
    expect(clone).to.not.equal(mockedState.coreVariables.data)
    // expect(clone).to.deep.equal(mockedState.tree.data)
  })

  it('compute generateSelectedVariableIds', () => {
    const clone = getters.selectedTreeNodeVariableIds(mockedState)
    expect(clone).to.not.equal(mockedState.coreVariables.data)
  })
})
