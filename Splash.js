import React, { Component, } from 'react';
import { Text, View,StyleSheet } from 'react-native';

export default class Splash extends Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    return (
      <View style={[styles.splash,this.props.style]}>
          <Text style={styles.splashtext}>
              uf
          </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  splash:{
    backgroundColor:'#1565C0',
    width:200,
    height:200,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:200,
    shadowColor: '#000000',
    shadowOffset: { width: 5, height: 100 },
    shadowOpacity: 1,
    shadowRadius: 20,  
    elevation: 20,
  },
  splashtext:
  {
      
      color:'white',
      fontSize:100,
    //   width:200,
    //   height:200,
  }

});