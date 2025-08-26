import { COLORS, FONT_FAMILY, FONT_SIZE } from "@/styles/themes";
import { StyleSheet } from "react-native";

export const taskStyle = StyleSheet.create({
    element: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: COLORS.darkGrey,
        paddingBottom: 10
    },
    priorityAndCheckBox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    checkbox: {
        height:30, 
        display: "flex",
        justifyContent: "center"
    },
    box: {
        height: 25,
        width: 25,
        borderColor: COLORS.dark,
        borderWidth: 4,
        marginHorizontal: 8,
        zIndex: 2
    },
    check: {
        width: 30, 
        height: 30, 
        position: "absolute", 
        zIndex: 1, 
        left: "20%",
        bottom: 4 
    },
    text: {
        width: "80%",
        color: COLORS.dark,
        fontFamily: FONT_FAMILY.paragraphe,
        fontSize: FONT_SIZE.paragraphe,
        marginLeft: 4,
        paddingRight: 8
    }
});
