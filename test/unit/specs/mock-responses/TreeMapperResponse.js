const mockTreeData =
  [
    {
      'id': 'p2',
      'text': 'Parent2',
      'value': 'Parent2',
      'icon': 'fa fa-table',
      'opened': true,
      'selected': false,
      'disabled': true,
      'loading': false,
      'children': [],
      'variables': []
    },
    {
      'id': 'p1',
      'text': 'Parent1',
      'value': 'Parent1',
      'icon': 'fa fa-folder-o',
      'opened': true,
      'selected': false,
      'disabled': true,
      'loading': false,
      'variables': [],
      'children': [
        {
          'id': 'c1',
          'text': 'Child1',
          'value': 'Child1',
          'icon': 'fa fa-table',
          'opened': true,
          'selected': false,
          'disabled': false,
          'loading': false,
          'children': [],
          'variables': [
            'test'
          ]
        },
        {
          'id': 'c2',
          'text': 'Child2',
          'value': 'Child2',
          'icon': 'fa fa-folder-o',
          'opened': true,
          'selected': false,
          'disabled': false,
          'loading': false,
          'variables': [
            'test'
          ],
          'children': [
            {
              'id': 'gc1',
              'text': 'Grandchild1',
              'value': 'Grandchild1',
              'icon': 'fa fa-table',
              'opened': true,
              'selected': false,
              'disabled': false,
              'loading': false,
              'children': [],
              'variables': [
                'test'
              ]
            }
          ]
        }
      ]
    }
  ]

export default {
  mockTreeData
}
