const initialState = {
  board: [],
  copyBoard: [],
  status: ''
}

export default function boardReducer (state = initialState, action) {
  switch (action.type) {
    case 'SET_BOARD' :
      return {...state, board: action.payload}
    case 'SET_COPY_BOARD' :
      return {...state, copyBoard: action.payload}
    case 'UPDATE_BOARD':
      let { text, indexRow, indexCol } = action.payload
      let newBoard = JSON.parse(JSON.stringify(state.board)) //trick
      newBoard[indexRow][indexCol] = Number(text)
      return { ...state, board: newBoard }
    default:
      return state
  }
}