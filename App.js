import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
   Text,
    View
   } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
//=======importing components here=========
import OnBoarding from './screens/OnBoarding';

//=========================================
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="welcome" component={OnBoarding}/>

      </Stack.Navigator>
    </NavigationContainer>
    // <OnBoarding/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
