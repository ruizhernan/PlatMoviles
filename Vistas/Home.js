import { Text, StyleSheet } from "react-native"

import Btn from "../componentes/Btn"
import ScreenUnoB from "./ScreenUnoB"
import ScrollV from "../componentes/Scroll"
import HorizontalScrollView from "../componentes/ScrollVIew"


export default function Home({ navigation }) {
    return (
        <>
            <Text>
                Este es el Home
            </Text>
            <HorizontalScrollView></HorizontalScrollView>
            <Btn texto="Ir a Number " presionado={() => navigation.navigate("UseStateNumber")}></Btn>
            <Btn texto="Ir a String" presionado={() => navigation.navigate("UseStateString")}></Btn>
            <Btn texto="Ir a Array" presionado={() => navigation.navigate("UseStateArray")}></Btn>
            <Btn texto="Ver usuarios" presionado={() => navigation.navigate("VerUsuarios")}></Btn>
        </>
    )
}