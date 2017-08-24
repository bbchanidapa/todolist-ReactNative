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
  listItem (){
    return this.props.lists.map((text, index)=>{
      return (
        <TodoItem key={index} item={text}/>
      )
    })
  }
  
  render() {
    return (
      <View>
        <List>
          {this.listItem()}
        </List>
      </View>
    )
  }
}

export default ListTodo