import Header from "@/components/layout/Header"
import { View } from "react-native"

import { layoutStyle } from "./layoutStyle"

export default function sectionLayout() {
    return(
        <View style={layoutStyle.layout}>
            <Header />
        </View>
    )
}