
// Action Creators
// TODO: Create action creators as defined in tests
export const addQuote = quote => {
  return {
    type: "quote/add",
    payload: quote
  }
}
export const removeQuote = id => {
  return {
    type: "quote/remove",
    payload: id
  }
}
export const upvote = id => {
  return {
    type: "quote/upvote",
    payload: id
  }
}
export const downvote = id => {
  return {
    type: "quote/downvote",
    payload: id
  }
}

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case "quote/add":
      return [...state, action.payload]
    case "quote/remove":
      return state.filter(quote => quote.id !== quote.payload)
    default:
      return state;
  }
}
