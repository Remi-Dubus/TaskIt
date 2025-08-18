import { StyleSheet } from "react-native";

import { COLORS, FONT_FAMILY, FONT_SIZE } from "@/styles/themes";

export const authStyle = StyleSheet.create({
    form: {
        borderWidth: 4,
        borderColor: COLORS.dark,
        borderRadius: 20,
        padding: 20,
        paddingBottom: 40,
        marginTop: "10%",
        marginHorizontal: "5%",
        backgroundColor: COLORS.light,
        elevation: 5
    },
    title: {
        marginBottom: 30,
        fontFamily: FONT_FAMILY.title,
        fontSize: FONT_SIZE.mainTitle,
        color: COLORS.dark,
        textAlign: "center"
    }
});
