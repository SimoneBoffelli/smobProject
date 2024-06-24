/*
Stop.js
Autore: Simone
Utilità: questa componente è stata sviluppata per geolacalizzare la posizione dell'utente per estrapolare la lista di stazioni vicino all'utente
Utilizzo: per utilizzare questa componente è necessario includerla Screens/Stops.js
Utilizza le API dei trasporti publici Svizzeri e la posizione dell'utente e passa l'id della stazione al componente RowStopDetail.js
*/
import React, { useState, useEffect } from "react";
import { Dimensions, View, Text, Pressable } from "react-native";
import usePosition from "../hooks/usePosition";
import { globalStyles } from "../style/globalStyle";

import { TRANSPORT_URL } from "../config/Config";
import { useNavigation } from "@react-navigation/native";

const Stop = () => {
  const screenHeight = Dimensions.get("window").height;
  const [stopData, setStop] = useState([]);
  const { location, errorMessage } = usePosition();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${TRANSPORT_URL}locations?x=${location.coords.latitude}&y=${location.coords.longitude}&type=all`
      );

      const data = await response.json();

      setStop(data);
    };

    if (location) {
      fetchData();
    }
  }, [location]);

  return (
    <>
      <View style={{ flex: 3, height: screenHeight }}>
        {stopData && (
          <View>
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
          </View>
        )}
      </View>
    </>
  );
};

export default Stop;
