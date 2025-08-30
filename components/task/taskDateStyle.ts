import { COLORS, FONT_FAMILY, FONT_SIZE } from "@/styles/themes";
import { StyleSheet } from "react-native";

export const taskDateStyle = StyleSheet.create({
    view: {
        borderWidth: 2,
        borderRadius: 5,
        borderBlockColor: COLORS.dark,
        marginHorizontal: 4,
        padding: 2
    },
    text: {
        fontFamily: FONT_FAMILY.paragraphe,
        fontSize: FONT_SIZE.paragraphe,
        color: COLORS.dark,
        textAlign: "center"
    }
});
