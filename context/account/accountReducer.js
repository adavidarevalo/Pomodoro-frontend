import {
  CHANGE_ACCOUNT
} from "../../type"

export default (state, action) => {
  switch (action.type) {
    case CHANGE_ACCOUNT:
      return{
        ...state,
        account: action.payload
      }
    default:
      return state;
  }
}