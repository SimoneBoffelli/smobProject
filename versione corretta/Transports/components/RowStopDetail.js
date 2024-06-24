/*
RowStopDetail.js
Autore: Sabri
Utilità: questa componente è stata sviluppata per visualizzare le informazioni di una specifica stazione
Utilizzo: per utilizzare questa componente è necessario includerla App.js
Passa l'id della stazione al componente StopDetail.js
*/
import { Dimensions, ScrollView, View } from "react-native";
import StopDetail from "./StopDetail";


const RowStopDetail = ({ route }) => {
    const { itemId } = route.params;
    const screenHeight = Dimensions.get('window').height
    return (
        <View style={{ height: screenHeight }}>
            <ScrollView>
                    <StopDetail route={itemId}></StopDetail>
            </ScrollView>
        </View>
    );
}

export default RowStopDetail; 