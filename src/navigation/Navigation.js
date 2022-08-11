import React from 'react';
import { Image } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from 'react-native-vector-icons/FontAwesome5'
import  FavoriteNavegation from './FavoriteNavegation'
import  PokedexNavegation from './PokedexNavigation'
import  AccountNavegation from './AccountNavigation'

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <Tab.Navigator>
            {/* <Tab.Screen name="Favorite" component={FavoriteNavegation} options={{
                tabBarLabel: "FAVORITOS",
                tabBarIcon: ({color, size}) => (<Icon name="heart" color={color} size={size} />)
            }} /> */}

            <Tab.Screen name="Pokedex" component={PokedexNavegation}  options={{
                tabBarLabel: "",
                tabBarIcon: () => renderPokeBall(),
            }} />

            {/* <Tab.Screen name="Account" component={AccountNavegation} options={{
                tabBarLabel: "MI CUENTA",
                tabBarIcon: ({color, size}) => (<Icon name="user" color={color} size={size} />)
            }} /> */}
        </Tab.Navigator>
        )
}

function renderPokeBall(){
    return (
        <Image
            source={require("../assets/pokeball.png")}
            style={{ width: 75, height: 75, top: -15 }}
        />
    );
}