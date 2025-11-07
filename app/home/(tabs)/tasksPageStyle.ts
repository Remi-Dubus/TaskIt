import { StyleSheet } from "react-native";

import { COLORS, FONT_FAMILY, FONT_SIZE } from "@/styles/themes";

export const tasksPageStyle = StyleSheet.create({
    scrollView: { 
        flex: 1, 
        position: "relative",
        backgroundColor: COLORS.lightGreen,
    },
    view: {
        paddingTop: 20,
        paddingBottom: 80, 
        marginHorizontal: 20
    },
    title: {
        marginBottom: 20,
        marginTop: 20,
        marginHorizontal: 10,
        fontFamily: FONT_FAMILY.title,
        fontSize: FONT_SIZE.mainTitle,
        color: COLORS.dark,
        textAlign: "center"
    },
    text: {
        width: "80%",
        color: COLORS.dark,
        fontFamily: FONT_FAMILY.paragraphe,
        fontSize: FONT_SIZE.paragraphe,
        marginLeft: 4,
        paddingRight: 8
    }
});
