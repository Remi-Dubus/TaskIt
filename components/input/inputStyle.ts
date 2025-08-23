import { StyleSheet } from "react-native";

import { COLORS, FONT_FAMILY, FONT_SIZE } from "@/styles/themes";

export const inputStyle = StyleSheet.create({
    inputText: {
        marginTop: 8,
        height: 80
    },
    label: {
        fontFamily: FONT_FAMILY.paragraphe,
        fontSize: FONT_SIZE.paragraphe,
    },
    input: {
        height: 48,
        borderBottomWidth: 1,
        fontFamily: FONT_FAMILY.paragraphe,
        fontSize: FONT_SIZE.paragraphe,
        borderColor: COLORS.lightGrey,
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 0
    },
    textArea: {
        height: 180,
        textAlignVertical: "top",
    },
    error: {
        color: COLORS.orange,
        marginLeft: 8,
        marginTop: 2,
    }
});