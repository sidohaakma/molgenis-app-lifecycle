import EntityToTreeMapper from '@/util/EntityToTreeMapper.js'
import EntityV2Response from '../mock-responses/EntityV2Response'
import TreeMapperResponse from '../mock-responses/TreeMapperResponse'

describe('EntityToTreeMapper', () => {
  const mockApiResponse = EntityV2Response.mockRawTreeData.items

  it('should use a list of items to generate an array of tree nodes', () => {
    const actual = EntityToTreeMapper.generateTreeNodes(mockApiResponse)
    const expected = TreeMapperResponse.mockTreeData

    expect(actual).to.deep.equal(expected)
  })

  it('returns false when node does not have variables', () => {
    const node = {
      'id': 'test',
      'variables': []
    }
    const isDisabled = EntityToTreeMapper.disableNode(node)
    expect(isDisabled).to.equal(true)
  })

  it('returns true when node has variables', () => {
    const node = {
      'id': 'test',
      'variables': ['test']
    }
    const isDisabled = EntityToTreeMapper.disableNode(node)
    expect(isDisabled).to.equal(false)
  })
})
