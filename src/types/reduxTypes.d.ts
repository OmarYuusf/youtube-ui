interface ActionsReduxType {
  type: ActionsReduxTypesString,
  payload: object[]
}

interface InitStateReduxType {
  searchResult: any
  searchResultIsLoading: boolean
}