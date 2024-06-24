/*
Stops.js
Autore: Simone
Utilità: questa componente è stata sviluppata per visualizzare la lista delle fermate a partire dalla posizione dell'utente
Utilizzo: per utilizzare questa componente è necessario includerla App.js
*/
import { StatusBar } from "expo-status-bar";
import { Dimensions, Text, View } from "react-native";
import { globalStyles } from "../style/globalStyle";
import Stop from "../components/Stop";
import { ScrollView } from "react-native-web";

export default function App() {
  const screenHeight = Dimensions.get('window').height

  return (
    <View style={{height:screenHeight}}>
      <ScrollView>
        <Text style={globalStyles.title}>Stops</Text>
        <Stop />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}
