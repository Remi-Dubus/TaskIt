import { Slot } from "expo-router"
import { View } from "react-native"

import Header from "@/components/layout/Header"

import { layoutStyle } from "./layoutStyle"

export default function sectionLayout() {
    return(
        <View style={layoutStyle.layout}>
            <Header />
            <Slot />
        </View>
    )
}