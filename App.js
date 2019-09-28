import React, { Component} from 'react';
import {createAppContainer } from 'react-navigation';
import Home from './Home';
import { View,StyleSheet } from 'react-native';
import Splash from './Splash.js';
import SignUp from './SignUp'
import AppNavigator from './AppNavigator'



const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = { isLoading: true }
      }
      componentDidMount()
    {
      setTimeout(() => {
        this.setState({isLoading: false});
      },5000)
    }
    render() {
        if(this.state.isLoading)
        return(
          <View style={styles.splash}>
            <Splash/>
          </View>
        )
        return <AppContainer />;  
    }  
} 
const styles = StyleSheet.create({
    splash:{
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center",
      backgroundColor: '#448AFF',
    },
  });