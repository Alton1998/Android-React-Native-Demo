import React, { Component, } from 'react';
import { Text, View,StyleSheet,TextInput,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import axios from 'axios';

export default class SignUp extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      Username:"",
      Password:"",
      ConfirmPassword:"Password Does Not Match",
      color:"",
      response:"",
      error:"",
    }
    this.handlesubmit=this.handlesubmit.bind(this);
  }
  handlesubmit()
  {
    const {navigate}=this.props.navigation;
    console.log(this.state.Username,this.state.Password)
    if(this.state.ConfirmPassword==="Passwords Match"&&!(this.state.Username===""))
    {
      axios.post('http://192.168.43.158/api/auth/register/', {
      username: this.state.Username,
      password: this.state.Password,
    })
    .then((response) => {
      console.log(response);
      this.setState(
        {
          response:response,
          error:"",
        }
      );
      console.log(this.state.response)
      navigate('Home')
    })
    .catch((error)=> {
      console.log(error);
      this.setState(
        {
          error:""+error,
        }
      )
    });
    }
  }
  render() {
    return (
      <View style={styles.content}>
        <View style={styles.input}>
        <TextInput placeholder="Enter Username" style={styles.inputUsername} onChangeText={(Username) => this.setState({Username})} />
        <TextInput secureTextEntry={true} placeholder="Enter Password" style={styles.inputUsername} onChangeText={(Password) => this.setState({Password})} />
        <TextInput secureTextEntry={true} placeholder="Confirm Password" style={styles.inputUsername} onChangeText={(CPassword) =>{if(this.state.Password===CPassword){this.setState({ConfirmPassword:"Passwords Match",color:"green"})}}}
       />
        <TouchableOpacity style={styles.buttonSubmit} onPress={this.handlesubmit}>
              <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <Text style={[{alignSelf:"center",color:this.state.color||'red'}]}>{this.state.ConfirmPassword}</Text>
          <Text style={[{alignSelf:"center",color:'red'}]}>{this.state.error}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inputUsername:
  {
  alignSelf:"flex-start",   
  height:50,
  width:300,
  borderBottomColor:'#0D47A1',
  borderBottomWidth:1,
  fontSize:20,
  marginBottom: 30,
  },
  input:
{
    width:300,
},
content:{
  flex:1,
  flexDirection:"column",
  justifyContent:"space-around",
  alignItems:"center",
},
buttonSubmit:
{
  backgroundColor:'#1565C0',
  width:300,
  height:50,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 5,
},
buttonText:
{
  color:'white',
  alignSelf:'center',
  fontSize:20,
}
});