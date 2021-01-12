const boardUrl = 'https://sugoku.herokuapp.com/'; 

const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')

const encodeParams = (params) => 
  Object.keys(params)
  .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
  .join('&');

export function fetchBoard(level) {
  return (dispatch, getState) => {
    fetch(`${boardUrl}board?difficulty=${level}`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'SET_BOARD',
        payload: data.board
      })
      dispatch({
        type: 'SET_COPY_BOARD',
        payload: data.board
      })
    })
    .catch(err => console.log(err))
  }
}

export function updateBoard(text, indexRow, indexCol) {
  console.log(text, indexRow, indexCol)
  return {
    type: 'UPDATE_BOARD',
    payload: {
      text, indexRow, indexCol
    }
  }
}