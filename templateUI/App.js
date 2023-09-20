import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login, Signup, Welcome, Splash } from './src/screens';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >

        <Stack.Screen
          name='Splash'
          component={Splash}
        />

        <Stack.Screen
          name='Welcome'
          component={Welcome}
        />

        <Stack.Screen
          name='Login'
          component={Login}
        />

        <Stack.Screen
          name='Signup'
          component={Signup}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}