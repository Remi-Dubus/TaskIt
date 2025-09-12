import { COLORS, FONT_FAMILY, FONT_SIZE } from "@/styles/themes";
import { StyleSheet } from "react-native";

export const tasksListStyle = StyleSheet.create({
    list: {
        borderWidth: 4,
        borderRadius: 20,
        borderColor: COLORS.dark,
        backgroundColor: COLORS.light,
        paddingHorizontal: 20,
        paddingBottom: 30,
        marginBottom: 10
    },
    title: {
        marginVertical: 10,
        fontFamily: FONT_FAMILY.title,
        fontSize: FONT_SIZE.secondTitle,
        color: COLORS.dark,
        textAlign: "center"
    }
});
