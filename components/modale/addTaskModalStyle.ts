import { StyleSheet } from "react-native";

import { COLORS, FONT_FAMILY, FONT_SIZE } from "@/styles/themes";

export const addTaskModalStyle = StyleSheet.create({
    title: {
        fontFamily: FONT_FAMILY.title,
        fontSize: FONT_SIZE.mainTitle,
        color: COLORS.dark,
        textAlign: "center",
        marginHorizontal: 20
    },
    view: {
        borderWidth: 8, 
        borderRadius: 20,
        borderColor: COLORS.dark,
        marginHorizontal: 8,
        backgroundColor: COLORS.light,
        paddingHorizontal: 8,
        paddingTop: 8,
        paddingBottom: 36,
    },
    dateAndPriority: { 
        display: "flex", 
        flexDirection: "row", 
    }
});