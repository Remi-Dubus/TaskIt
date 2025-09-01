import { COLORS, FONT_FAMILY, FONT_SIZE } from "@/styles/themes";
import { StyleSheet } from "react-native";

export const taskStyle = StyleSheet.create({
    element: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: COLORS.darkGrey,
        paddingBottom: 10
    },
    priorityAndCheckBox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
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
