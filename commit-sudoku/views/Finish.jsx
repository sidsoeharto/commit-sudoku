import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button } from 'react-native';
import { useSelector } from 'react-redux'

export default function Finish ({ navigation: { navigate }, route }) {
  const { username, level } = route.params

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: 'https://i.imgur.com/fs3Lkmj.png'}}></Image>
      <Text>Congratulations, {username}-san!</Text>
      <Text>You have commited sudoku</Text>
      <View>
        <Button
          title="Play Again"
          color='#7c9473'
          onPress={() => navigate('Home')}
        ></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    height: 300,
    width: Dimensions.get('screen').width - 40,
  }
})