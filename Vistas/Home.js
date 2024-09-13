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
            <Btn texto="Ir a componente " presionado={() => navigation.navigate("ScreenUnoB")}></Btn>
            <Btn texto="Ir a componente 1" presionado={() => navigation.navigate("PrimerComponente")}></Btn>
            <Btn texto="Ir a componente 3" presionado={() => navigation.navigate("TercerComponente")}></Btn>
            
        </>
    )
}