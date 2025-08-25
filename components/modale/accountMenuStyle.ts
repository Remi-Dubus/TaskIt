import { StyleSheet } from "react-native";

import { COLORS, FONT_FAMILY, FONT_SIZE } from "@/styles/themes";

export const accountMenuStyle = StyleSheet.create({
    title: {
        fontFamily: FONT_FAMILY.title,
        fontSize: FONT_SIZE.mainTitle,
        color: COLORS.dark,
        textAlign: "center",
        marginHorizontal: 20,
        borderBottomWidth: 6,
        borderColor: COLORS.dark,
        width: "80%",
        paddingVertical: 20
    },
    view: {
        flex: 1, 
        display: "flex",
        alignItems: "center",
        backgroundColor: COLORS.light
    },
    buttons: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});