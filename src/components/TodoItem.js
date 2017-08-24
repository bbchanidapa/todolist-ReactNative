import React, { Component } from 'react'
import { View } from 'react-native'
import { 
	ListItem,
	CheckBox,
	Body,
	Text 
} from 'native-base'

class TodoItem extends Component {
  constructor(props){
		super(props)
  }

  render() {
    return (
      <View>
				<Text>{this.props.item}</Text>
      </View>
    )
  }
}
export default TodoItem