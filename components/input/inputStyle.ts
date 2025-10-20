import { StyleSheet } from "react-native";

import { COLORS, FONT_FAMILY, FONT_SIZE } from "@/styles/themes";

export const inputStyle = StyleSheet.create({
    inputText: {
        marginTop: 30,
        height: 50,
        borderBottomWidth: 1,
        borderColor: COLORS.darkGrey,
        borderRadius: 6,
        paddingHorizontal: 10,
        justifyContent: "center",
    },
    label: {
        fontFamily: FONT_FAMILY.paragraphe,
        fontSize: FONT_SIZE.paragraphe,
    },
    input: {
        fontFamily: FONT_FAMILY.paragraphe,
        fontSize: FONT_SIZE.paragraphe,
        padding: 0,
        margin: 0,
        height: "80%",
    },
    dateValue: {
        marginTop: 12, 
        borderBottomWidth: 1, 
        borderBottomColor: COLORS.darkGrey,
        paddingBottom: 6, 
        width: "60%"
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
