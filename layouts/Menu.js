import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { backgroundColor } from "react-native";
import Navigate from "../navigate";

export default function Menu({ navigation }) {

    const loadScene = () => {
        navigation.navigate('Stavka1');
    }
    const loadScenee = () => {
        navigation.navigate('Stavka2');
    }
    const loadSceneeee = () => {
        navigation.navigate('Stavka3');
    }
    const loadSceneeeee = () => {
        navigation.navigate('Stavka4');
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}> Welcom Enjoy Casino 2.0 </Text>
            <Text onPress={loadScene} style = {styles.stavki}> заэнджоеться 1 </Text>
            <Text onPress={loadScenee} style = {styles.stavki}> заэнджоеться 2 </Text>
            <Text onPress={loadSceneeee} style = {styles.stavki}> заэнджоеться 3 </Text>
            <Text onPress={loadSceneeeee} style = {styles.stavki}> заэнджоеться 4 </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    title: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        padding: 13,
        backgroundColor: '#f0f',
        borderBottomLeftRadius: 10,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderBottomRightRadius: 10,
    },
    stavki: {
        fontSize: 15,
        textAlign: 'center',
        padding: 13,
        borderColor: '#000',
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,

    }
})