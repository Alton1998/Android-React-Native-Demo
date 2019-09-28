import React, { Component, } from 'react';
import { Text, View,StyleSheet,FlatList} from 'react-native';
import axios from 'axios'
export default class Detail extends Component {
  constructor(props)
  {
    super(props);
    this.state={
        events:'',
    }
  }
  componentDidMount()
  {
    const {navigation}=this.props
    const token = navigation.getParam('token', '');
    console.log(token)
    const name = navigation.getParam('name', '');
    console.log(name)
    console.log(token)
    const authpayload='Token '+token
    console.log(authpayload)
    axios.get('http://192.168.43.158/api/FestEvent/'+name+'/', { headers: { Authorization:authpayload } })
 .then(response => {
     // If request is good...
     console.log(response.data);
     this.setState(
         {
             events:response.data
         }
     )
  })
 .catch((error) => {
     console.log('error ' + error);
  });
  }
  render() {
    return (
      <View >
           <FlatList  
                    data={this.state.events}  
                    renderItem={({item}) =>  
                    <View style={styles.cards}>
                        <Text style={styles.text}>
                            {item.name}
                        </Text>
                    </View>
                        }  
                />  
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cards:
  {
    backgroundColor:"#E3F2FD",
    padding:20,
    borderBottomColor:'#2196F3',
    borderBottomWidth:1,
  },
  text:
  {
    fontSize:20,
  }

});