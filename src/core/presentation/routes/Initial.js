import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SplashScreen } from "../ui/screens/SplashScreen"

export const Inital = () => {
  const Stack = createNativeStackNavigator()

  return <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false, animation: "fade" }} />
    </Stack.Navigator>
  </NavigationContainer>
}