/*
globalStyle.js
Autore: Simone
Utilità: questa componente è stata sviluppata per modificare lo stile globale visualizzato 
Utilizzo: per utilizzare questa componente è necessario includerla nei componenti in cui viene usata
*/
import { StyleSheet } from "react-native"; 

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    title: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: -50,
        marginTop: 50,
    },
    detailTitle: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 25,
        marginTop: 0,
    },
    searchTitle: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 50,
    },
    subTitle: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    border: {
        padding: 5,
        border: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        marginBottom: 10,
        /* Non funziona 
        elevation: 5,*/
        /* Elementi per ombra */
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717', 
        shadowOpacity: 0.2,  
        shadowRadius: 3,
    },
    input: {
        paddingLeft: 10,
        borderWidth: 1,
        backgroundColor: 'transparent',
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 25,
        paddingLeft: 25,
        margin: 10,
        borderRadius: 50,
        shadowRadius: 15,
        fontWeight: 'bold',
        fontSize: 22,
        borderColor: 'lightgray',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
});

export {globalStyles}; 
