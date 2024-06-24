import React, { useState, useEffect } from 'react';
//importo la libreria expo-location
import * as Location from 'expo-location';

const usePosition = () => {
    const [location, setLocation] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        (async () => {
            
            //chiedo il permesso di utilizzare la posizione del dispositivo
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMessage('Permesso per accedere alla posizione negato');
                return;
            }
			//chiedo la posizione corrente
            const currentLocation = await Location.getCurrentPositionAsync();
            // console.log(currentLocation);
            setLocation(currentLocation);
        })();
    }, []);
    
    //ritorno posizione e eventuale errore
    return { location, errorMessage };
};

export default usePosition;