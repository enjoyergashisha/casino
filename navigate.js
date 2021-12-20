import React from "react";
import Menu from "./layouts/Menu";
import Stavka1 from "./layouts/stavka1";
import Stavka2 from "./layouts/stavka2";
import Stavka3 from "./layouts/stavka3";
import Stavka4 from "./layouts/stavka4";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name = "Menu"
                component = {Menu}
                options={{title: 'Menu'}}
            />
            <Stack.Screen 
                name = "Stavka1"
                component = {Stavka1}
                options={{title: 'Stavka1'}}
            />
            <Stack.Screen 
                name = "Stavka2"
                component = {Stavka2}
                options={{title: 'Stavka2'}}
            />
            <Stack.Screen 
                name = "Stavka3"
                component = {Stavka3}
                options={{title: 'Stavka3'}}
            />
            <Stack.Screen 
                name = "Stavka4"
                component = {Stavka4}
                options={{title: 'Stavka4'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
}