import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, TextInput, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { fetchBoard, updateBoard } from '../store/actions'

import { useDispatch, useSelector } from 'react-redux'

export default function Game ({ navigation: {navigate}, route }) {
  const { username, level } = route.params
  const board = useSelector(state => state.boardReducer.board)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchBoard(level))
  }, [])

  function onChangeText(text, indexRow, indexCol) {
    dispatch(updateBoard(text, indexRow, indexCol))
  }

  function validate () {
    
  }

  function solve () {
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>{ `Name: ${username}` }</Text>
      <Text>{ `Level: ${level}` }</Text>
      <View style={{ padding: 8 }}>
        {
          board.map((rowArray, indexRow) => {
            return (
              <View style={styles.column} key={indexRow}>
                {
                  rowArray.map((colCell, indexCol) => {
                    return (
                      <TextInput
                        style={ fancyStyle(board, indexRow, indexCol) }
                        onChangeText={ (text) => onChangeText(text, indexRow, indexCol) }
                        value={String(colCell)}
                        keyboardType = 'number-pad'
                        key={indexCol}
                      ></TextInput>
                    )
                  })
                }
              </View>
            )
          })
        }
      </View>
      <View style={styles.buttons}>
        <Button style={styles.button} color='#7c9473' onPress={validate} title="Validate"></Button>
        <Button style={styles.button} color='#7c9473' onPress={() => {solve(board)}} title="Solve"></Button>
      </View>
    </SafeAreaView>
  )
}

const cellWidth = Dimensions.get('window').width / 10

function fancyStyle(board, indexRow, indexCol) {
  let style = {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    width: cellWidth,
    height: cellWidth,
    textAlign: 'center'
  }

  if(board[indexRow][indexCol] !== 0){
    style.backgroundColor = '#cdd0cb'
  }

  if(board[indexRow][indexCol] === 0){
    style.backgroundColor = '#e8eae6'
  }

  if (indexRow % 3 === 0) {
    style.borderTopWidth = 3,
    style.borderTopColor = '#7c9473'
  }

  if (indexCol % 3 === 0) {
    style.borderLeftWidth = 3,
    style.borderLeftColor = '#7c9473'
  }

  if (indexRow === 8) {
    style.borderBottomWidth = 3,
    style.borderBottomColor = '#7c9473'
  }

  if (indexCol === 8) {
    style.borderRightWidth = 3,
    style.borderRightColor = '#7c9473'
  }

  return style
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  column: {
    flexDirection: 'row'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    marginRight: 5,
  }
})