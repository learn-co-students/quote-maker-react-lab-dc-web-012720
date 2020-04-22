function quotesReducer(state = [], action){
  switch (action.type){
    case "ADD_QUOTE":
      return [...state, action.quote]

    case "REMOVE_QUOTE":
      let quoteArray = state
      return quoteArray.filter(quote => quote.id !== action.quoteId)
    
    case "UPVOTE_QUOTE":
      let quoteArray2 = state
      return quoteArray2.map(quote => {
        if (quote.id === action.quoteId) { 
          quote.votes += 1 
        }
        return quote
        })

    case "DOWNVOTE_QUOTE":
      let quoteArray3 = state
      return quoteArray3.map(quote => {
        if (quote.id === action.quoteId && quote.votes > 0) {
          quote.votes -= 1
        }
        return quote
      })

    default: return state
  }
}

export default quotesReducer

// let idx;
//   switch (action.type) {
//     case "ADD_AUTHOR":
//       return [...state, action.author];
 
//     case "REMOVE_AUTHOR":
//       idx = state.findIndex(book => book.id === action.id);
//       return [...state.slice(0, idx), ...state.slice(idx + 1)];
 
//     case "ADD_BOOK":
//       let existingAuthor = state.filter(
//         author => author.authorName === action.book.authorName
//       );
//       if (existingAuthor.length > 0) {
//         return state;
//       } else {
//         return [...state, { authorName: action.book.authorName, id: uuid() }];
//       }
 
//     default:
//       return state;
//   }