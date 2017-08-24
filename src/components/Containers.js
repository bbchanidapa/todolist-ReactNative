import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { 
	Container,
	Content,
	Form,
	Item,
	Label,
	Input
} from 'native-base'
import ListTodo from './ListTodo'

class Containers extends Component {
	constructor(props) {
		super(props)
		this.state = {
			textInput: []
		}
	}

	addTodo (event){
		const text = this.textInput.wrappedInstance._lastNativeText
		if(event.nativeEvent.key == "Enter"){
			this.setState({
				textInput: [...this.state.textInput,text]
			})
		}
	}

  render() {
    return (
      <Container>
				<Text>{this.state.textInput}</Text>
        <Content>
          <Form>
            <Item inlineLabel>
              <Input ref={(input)=>this.textInput = input}
								onKeyPress={(e)=>this.addTodo(e)}
							/>
            </Item>
						<ListTodo lists={this.state.textInput}/>
          </Form>
					
        </Content>
      </Container>
    )
  }
}
export default Containers