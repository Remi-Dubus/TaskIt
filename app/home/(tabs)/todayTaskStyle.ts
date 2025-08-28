import { StyleSheet } from "react-native";

import { COLORS, FONT_FAMILY, FONT_SIZE } from "@/styles/themes";

export const todayTaskStyle = StyleSheet.create({
    view: { 
        flex: 1, 
        padding: 20, 
        backgroundColor: COLORS.lightGreen, 
        position: "relative" 
    },
    title: {
        marginBottom: 30,
        fontFamily: FONT_FAMILY.title,
        fontSize: FONT_SIZE.mainTitle,
        color: COLORS.dark,
        textAlign: "center"
    }
});