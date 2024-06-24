/*
App.js
Autore: Simone e Sabri
Utilità: questa componente è stata sviluppata per gestire le Route dei vari componenti/screens
*/
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import Stops from "./screens/Stops";
import RowStopDetail from "./components/RowStopDetail";
import Search from "./components/Search";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Stop"
      screenOptions={{ headerShown: false }}
      >
        <Stack.Screen 
          name="RowStopDetail" 
          component={RowStopDetail} 
            options={{headerShown:true}}
          />
          <Stack.Screen 
          name="Stop" 
          component={TabNavigator} />
          <Stack.Screen 
          name="Search" 
          component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Fermate"
        component={Stops}
        options={{
          headerShown: false,
          tabBarLabel: "Fermate",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cerca"
        component={Search}
        options={{
          headerShown: false,
          tabBarLabel: "Cerca",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default App;
