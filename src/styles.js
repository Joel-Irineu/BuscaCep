import React from 'react';
import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        flex: 1,
        alignContent: 'center',
    },
    header:{
        margin: 20,
    },
    Title:{ 
        alignSelf: 'center', 
        margin: 20, 
        marginTop: 50,
        fontWeight: 'bold',
    },
    input:{
        textAlign: 'center',
        fontSize: 20,
        alignSelf: 'center',
        width: '80%',
        height: 50,
        borderBottomColor: '#333',
        borderBottomWidth: 3,
        margin: 10,
        padding: 5,
    },
    btn:{
        backgroundColor: '#262626',
        color: '#fff'
    },
    cardAdress:{
        backgroundColor: '#eee',
        margin: 20,
        borderRadius: 8,
        padding: 10,
    },
    DetailAdress:{ 
        marginBottom: 10, 
    }
})