import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../styles/themes";

export const headerStyle = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: "row",
        height: "100%"
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