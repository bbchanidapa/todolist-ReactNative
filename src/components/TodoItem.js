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
	
	dsfdsf(lists) {
		return  this.props.lists.map((item) => {
			console.log(item)
			return null
		})
	}

  render() {
    return (
      <View>
				{ this.dsfdsf() }
      </View>
    )
  }
}
export default TodoItem