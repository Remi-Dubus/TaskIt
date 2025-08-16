import { StyleSheet } from "react-native";

import { COLORS, FONT_FAMILY, FONT_SIZE } from "@/styles/themes";

export const buttonStyle = StyleSheet.create({
    button: {
        color: COLORS.light,
        backgroundColor: COLORS.dark,
        borderRadius: 100,
        height: 40,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "50%",
        marginHorizontal: "auto",
        marginTop: 30,
        elevation: 5
    },
    buttonText: {
        fontFamily: FONT_FAMILY.paragraphe,
        fontSize: FONT_SIZE.button,
        color: COLORS.light,
        textAlign: "center",
    }
});