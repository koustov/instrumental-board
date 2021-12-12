import { ActionTypes } from '../constants'

const intialState = {
  variables: []
}

export const variableReducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.VARIABLE_UPDATED:
      return Object.assign({}, state, {
        variables: action.variables
      })
    default:
      return state
  }
}
