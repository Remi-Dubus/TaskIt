import { StyleSheet } from "react-native";

import { COLORS, FONT_FAMILY, FONT_SIZE } from "@/styles/themes";

export const loginStyle = StyleSheet.create({
    view: { 
        flex: 1,
    },
    linkText: {
        fontFamily: FONT_FAMILY.paragraphe,
        fontSize: FONT_SIZE.paragraphe,
        textAlign: "center",
        marginTop: 16
    },
    link: {
        color: COLORS.green,
    }
});
