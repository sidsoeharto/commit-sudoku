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
      <Text style={styles.title}>Welcome to Commit Sudoku</Text>
      <Text style={styles.subtitle}>What is your name?</Text>
      <TextInput
        onChangeText={ (text) => setUsername(text) }
        value={ username }
        placeholder="Insert your name"
        style={styles.input}
      ></TextInput>
      <View style={styles.buttons}>
        <Button color='blue' onPress={() => onPress('easy')} title="Easy"></Button>
        <Button color='orange' onPress={() => onPress('medium')} title="Medium"></Button>
        <Button color='red' onPress={() => onPress('hard')} title="Hard"></Button>
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
        onDismiss={() => {
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
    justifyContent: 'space-around',
    backgroundColor: '#8db596'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 75
  },
  image: {
    width: 150,
    height: 150
  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
    color: 'white'
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "200",
    color: 'white'
  },
  input: {
    height: 50,
    width: 200,
    padding: 15,
    backgroundColor: '#e8eae6',
    borderRadius: 10
  }
})