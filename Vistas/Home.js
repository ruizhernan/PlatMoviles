import { Text, StyleSheet } from "react-native"

import Btn from "../componentes/Btn"
import ScreenUnoB from "./ScreenUnoB"


export default function Home({ navigation }) {
    return (
        <>
            <Text>
                Este es el Home
            </Text>
            <Btn texto="Ir a componente " presionado={() => navigation.navigate("ScreenUnoB")}></Btn>
            <Btn texto="Ir a componente 1" presionado={() => navigation.navigate("PrimerComponente")}></Btn>
            <Btn texto="Ir a componente 3" presionado={() => navigation.navigate("TercerComponente")}></Btn>
            
        </>
    )
}