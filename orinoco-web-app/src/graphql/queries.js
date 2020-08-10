/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHistory = /* GraphQL */ `
  query GetHistory($id: ID!) {
    getHistory(id: $id) {
      id
      individualId
      name
      calllogs
      smsLogs
      createdAt
      updatedAt
    }
  }
`;
export const listHistorys = /* GraphQL */ `
  query ListHistorys(
    $filter: ModelHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHistorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        individualId
        name
        calllogs
        smsLogs
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
