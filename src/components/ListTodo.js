import React, { Component } from 'react'
import TodoItem from './TodoItem'
import { Text, View } from 'react-native'
import {
  List,
  ListItem
} from 'native-base'

class ListTodo extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: []
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      list: nextProps
    })
  }
  
  render() {
    return (
      <View>
        <List>
          <TodoItem lists={this.state.list}/>
        </List>
      </View>
    )
  }
}

export default ListTodo