import { StyleSheet } from "react-native";

import { COLORS, FONT_FAMILY, FONT_SIZE } from "@/styles/themes";

export const logoutButtonStyle = StyleSheet.create({
    buttonText: {
        fontFamily: FONT_FAMILY.paragraphe,
        fontSize: FONT_SIZE.secondTitle,
        color: COLORS.dark,
        borderBottomWidth: 2,
        borderColor: COLORS.dark,
        paddingBottom: 16
    }
});
