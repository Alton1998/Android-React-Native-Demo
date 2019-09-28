import React, { Component, } from 'react';
import { Text, View,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import axios from 'axios';
export default class Fest extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      isLoading:true,
      token:'',
      fests:'',
    };
    this.navigateToDetail=this.navigateToDetail.bind(this);
  }
  componentDidMount()
  {
    const { navigation } = this.props; 
    const token = navigation.getParam('token', '');
    this.setState(
      {
        token:token
      }
    )
    console.log(token)
    const authpayload='Token '+token
    console.log(authpayload)
    axios.get('http://192.168.43.158/api/Fests/', { headers: { Authorization:authpayload } })
 .then(response => {
     // If request is good...
     console.log(response.data);
     this.setState(
       {
         fests:response.data,
       }
     );
     console.log(this.state.fests)
  })
 .catch((error) => {
     console.log('error ' + error);
  });

  }
  navigateToDetail()
  {
    
  }
  
  render() {
    return (
      <View>  
                <FlatList  
                    data={this.state.fests}  
                    renderItem={({item}) =>  
                    <View>
                      <TouchableOpacity style={styles.card} onPress={()=>
                      {
                        const {navigate}=this.props.navigation
                        console.log("Navigated")
                        console.log(item.name)
                        navigate('Detail',{token:this.state.token,name:item.name})
                       
                      }}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text>{item.description}</Text>
                      </TouchableOpacity>
                    </View>
                        }  
                />  
            </View>  
    );
  }
}
const styles = StyleSheet.create({
  card:{
    backgroundColor:"#E3F2FD",
    padding:20,
    borderBottomColor:'#2196F3',
    borderBottomWidth:1,
  },
  title:
  {
    fontSize:25,
  },

});