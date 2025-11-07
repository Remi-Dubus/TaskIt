import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../styles/themes";

export const headerStyle = StyleSheet.create({
    view: {
        flexDirection: "row",
        height: "12%",
        width: "70%"
    },
    title: {
        fontFamily: FONT_FAMILY.title,
        fontSize: FONT_SIZE.appTitle,
        color: COLORS.dark,
    },
    logo: {
        width: 80,
        height: 80,
    }
});