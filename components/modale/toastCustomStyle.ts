import { COLORS, FONT_FAMILY, FONT_SIZE } from "@/styles/themes";
import { StyleSheet } from "react-native";

export const toastCustomStyle = StyleSheet.create({
    view: {
        flex: 1,
        height: "15%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        width: "100%",
        top: 0,
        zIndex: 1000 
    },
    text: {
        fontFamily: FONT_FAMILY.paragraphe,
        fontSize: FONT_SIZE.paragraphe,
        color: COLORS.light
    }
});
