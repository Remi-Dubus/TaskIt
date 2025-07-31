import { StyleSheet } from "react-native";
import { FONT_FAMILY, FONT_SIZE } from "./themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    appTitle: {
        fontSize: FONT_SIZE.appTitle,
        fontFamily: FONT_FAMILY.title
    },
    mainTitle: {
        fontSize: FONT_SIZE.mainTitle,
        fontFamily: FONT_FAMILY.title
    },
    secondTitle: {
        fontSize: FONT_SIZE.secondTitle,
        fontFamily: FONT_FAMILY.title
    },
    paragraph: {
        fontSize: FONT_SIZE.paragraphe,
        fontFamily: FONT_FAMILY.paragraphe
    },
    buttonText: {
        fontSize: FONT_SIZE.button,
        fontFamily: FONT_FAMILY.paragraphe
    },
});