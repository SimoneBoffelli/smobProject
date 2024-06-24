/*
Search.js
Autore: Simone e Sabri
Utilità: questa componente è stata sviluppata per cercare le fermate in un campo di testo
Utilizzo: per utilizzare questa componente è necessario includerla nell'App.js
Utilizza le API dei trasporti publici Svizzeri
*/
import React, { useState, useEffect } from "react";
import {
  Dimensions,
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import { globalStyles } from "../style/globalStyle";

import { TRANSPORT_URL } from "../config/Config";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const screenHeight = Dimensions.get("window").height;
  const [stopData, setStop] = useState([]);
  const navigation = useNavigation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${TRANSPORT_URL}locations?query=${query}&type=all`
      );

      const data = await response.json();
      setStop(data);
    };

    if (query) {
      fetchData();
    }
  }, [query]);

  return (
    <>
      <View style={{ flex: 3, height: screenHeight }}>
        <Text style={globalStyles.searchTitle}>Search</Text>
        <TextInput
          style={globalStyles.input}
          onChangeText={(newText) => setQuery(newText)}
        />

        {stopData && (
          <ScrollView>
            {stopData.stations?.slice(1).map((object, index) => (
              <View key={index}>
                <Pressable
                  onPress={() =>
                    navigation.push("RowStopDetail", { itemId: object.id })
                  }
                >
                  <Text style={globalStyles.border}>{object.name}</Text>
                </Pressable>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </>
  );
};

export default Search;
