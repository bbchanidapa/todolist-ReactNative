import React, { Component } from 'react'
import Containers from './components/Containers'
import { 
    AppRegistry, 
    View,
    Text 
} from 'react-native'
import { Container } from 'native-base'

class App extends Component {
    render () {
        return (
            <Container>
                <Text>App</Text>
                <Containers />
            </Container>
        )
    }
}

export default App