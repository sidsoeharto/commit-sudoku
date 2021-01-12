import React from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home ({ navigation }) {
  const [username, setUsername] = React.useState('')

  function onPress(level) {
    navigation.navigate('Game', {
      username,
      level
    })
  }

  return (
    <SafeAreaView style={ styles.container }>
      <Text>Welcome to Commit Sudoku</Text>
      <Text>What is your name?</Text>
      <TextInput
        onChangeText={ (text) => setUsername(text) }
        value={ username }
        placeholder="Insert your name"
      ></TextInput>
      <View style={styles.buttons}>
        <Button color='#7c9473' onPress={() => onPress('easy')} title="Easy"></Button>
        <Button color='#7c9473' onPress={() => onPress('medium')} title="Medium"></Button>
        <Button color='#7c9473' onPress={() => onPress('hard')} title="Hard"></Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})