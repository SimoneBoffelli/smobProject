/*
StopDetail.js
Autore: Sabri
Utilità: questa componente è stata sviluppata per estrapolare i dati delle info di una fermata
Utilizzo: per utilizzare questa componente è necessario includerla RowStopDetail.js
Utilizza le API dei trasporti publici Svizzeri e utilizza come PROPS l'id della stazione passata dal componente RowStopDetail.js,
inoltre manipola le API per modificare il formato della data dell'arrivo dei bus da visualizzare, il formato e HH:mm
*/
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../style/globalStyle";
import { TRANSPORT_URL } from "../config/Config";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';

const StopDetail = ({ route }) => {
    const navigation = useNavigation();
    const goTo = () =>{
        navigation.push("Stop");
    }
    const [stopDetailData, setStopDetailData] = useState([])
    useEffect(() => {
        const fecthStopDetailData = async () => {
            const response = await fetch(`${TRANSPORT_URL}stationboard?id=${route}&limit=20`)
            const data = await response.json()
            data.stationboard.map((data) => {
                data.stop.departure = moment(data.stop.departure).format('HH:mm')
            })
            setStopDetailData(data)
        }
        fecthStopDetailData()
    }, [])
    return (
        <View style={{flex:3, margin: 50}}>
            <Text style={globalStyles.detailTitle}>{stopDetailData.station?.name}</Text>
            {stopDetailData.stationboard?.map((stop, index) => (
                <View style={globalStyles.border} key={index}>
                    <Text style={globalStyles.subTitle}>Linea {stop.number}</Text>
                    <Text>Direzione {stop.to}</Text>
                    <Text>Partenza {stop.stop.departure}</Text>
                </View>
            ))}
        </View>
    );
}

export default StopDetail;