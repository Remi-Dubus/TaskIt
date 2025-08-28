import { COLORS, FONT_FAMILY, FONT_SIZE } from "@/styles/themes";
import { StyleSheet } from "react-native";

export const tasksListStyle = StyleSheet.create({
    list: {
        borderWidth: 4,
        borderRadius: 20,
        borderColor: COLORS.dark,
        backgroundColor: COLORS.light,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text: {
        marginTop: 30,
        fontFamily: FONT_FAMILY.paragraphe,
        fontSize: FONT_SIZE.paragraphe,
        color: COLORS.dark,
        textAlign: "center"
    }
});
