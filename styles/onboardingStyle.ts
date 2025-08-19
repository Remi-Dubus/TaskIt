import { StyleSheet } from "react-native";

import { COLORS, FONT_FAMILY, FONT_SIZE } from "@/styles/themes";

export const onboardingStyle = StyleSheet.create({
    view: {
        backgroundColor: COLORS.light,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 60
    },
    picture: {
        width: 160,
        height: 160,
    },
    title:{
        fontFamily: FONT_FAMILY.title
    },    
    text: {
        marginBottom: 30,
        fontFamily: FONT_FAMILY.paragraphe,
        fontSize: FONT_SIZE.onboardingText,
        color: COLORS.dark,
        textAlign: "center",
    }
});