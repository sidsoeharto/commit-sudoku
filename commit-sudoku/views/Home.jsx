import React from 'react'
import { View, Text, Button, StyleSheet, TextInput, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AwesomeAlert from 'react-native-awesome-alerts';

export default function Home ({ navigation }) {
  const [username, setUsername] = React.useState('')
  const [alert, setAlert] = React.useState(false);

  function onPress(level) {
    if(!username) {
      setAlert(true)
    } else {
      navigation.navigate('Game', {
        username,
        level
      })
    }
  }

  return (
    <SafeAreaView style={ styles.container }>
      <Image
        style={styles.image}
        source={require('../assets/sudoku-logo.png')}
      ></Image>
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
      <AwesomeAlert
        show={alert}
        showProgress={false}
        title="No Username!"
        message="Please input your name"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="OK"
        confirmButtonColor="#DD6B55"
        onConfirmPressed={() => {
          setAlert(false);
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#8db596'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    width: 150,
    height: 150
  }
})