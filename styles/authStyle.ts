import { StyleSheet } from "react-native";

import { COLORS, FONT_FAMILY, FONT_SIZE } from "@/styles/themes";

export const authStyle = StyleSheet.create({
    form: {
        borderWidth: 4,
        borderColor: COLORS.dark,
        borderRadius: 20,
        padding: 20,
        marginTop: "20%",
        marginHorizontal: "5%",
        backgroundColor: COLORS.light,
        elevation: 5
    },
    title: {
        marginBottom: 30,
        fontFamily: FONT_FAMILY.title,
        fontSize: FONT_SIZE.mainTitle,
        color: COLORS.dark,
        textAlign: "center"
    },
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
