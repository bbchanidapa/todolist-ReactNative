import React, { Component } from 'react'
import { 
  AppRegistry, 
  View,
  StyleSheet 
} from 'react-native'
import App from './src/App'

export default class todolist extends Component {
  render() {
    return (
      <View style={styles.container}>
        <App />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
})

AppRegistry.registerComponent('todolist', () => todolist)
