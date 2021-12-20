import React,{useState} from "react";
import { Alert, StyleSheet, Text,View } from "react-native";
import { TextInput } from "react-native";
import { Button } from "react-native";

export default function Stavka1({ navigation }) {

    const LoadMenu = () => {
        navigation.navigate('Menu');
        Alert.alert("THX <3")
    }

    return (
        <View style = {styles.container}>
            <Text > Description to Stavka 4 </Text>
            <TextInput placeholder="spend your money" style = {styles.description}></TextInput>
            <View style = {styles.fixToText}>
                <Button title="x3" onPress={LoadMenu}/>
                <Button title="x2" onPress={LoadMenu}/>
                <Button title="x4" onPress={LoadMenu}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginHorizontal: 16,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
      borderBottomWidth: 1,
      margin: 10,
      height: 40,
  }
});