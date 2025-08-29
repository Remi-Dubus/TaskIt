import { StyleSheet } from "react-native";

import { COLORS, FONT_FAMILY, FONT_SIZE } from "@/styles/themes";

export const tasksStyle = StyleSheet.create({
    view: { 
        flex: 1, 
        backgroundColor: COLORS.lightGreen, 
        position: "relative" 
    },
    scrollView: {
        paddingTop: 20,
        paddingBottom: 80, 
        marginHorizontal: 20
    },
    title: {
        marginBottom: 30,
        fontFamily: FONT_FAMILY.title,
        fontSize: FONT_SIZE.mainTitle,
        color: COLORS.dark,
        textAlign: "center"
    }
});