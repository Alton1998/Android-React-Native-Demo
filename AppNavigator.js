import {createStackNavigator} from 'react-navigation-stack'
import Home from './Home';
import SignUp from './SignUp'
import Fest from './Fest'
import Detail from './Detail'
const AppNavigator = createStackNavigator(  
    {  
        Home: {screen:Home,
            navigationOptions:{  
                header:null,  
              }  
        }, 
        SignUp:{ screen: SignUp,
            navigationOptions:{  
                title:'Sign Up',  
              }  
        },
        Fest:{
            screen:Fest,
            navigationOptions:{
                title:'Fests',
                headerLeft: null,
            }
        },
        Detail:{
            screen:Detail,
            navigationOptions:{
                title:'Events',
            }
        }

    },  
    {  
        initialRouteName: "Home"  
    }  
  );
  export default AppNavigator;