import { Dimensions, StyleSheet } from "react-native";

import { COLORS, FONT_FAMILY, FONT_SIZE } from "@/styles/themes";

// Get dimensions of the device
const { height } = Dimensions.get("window");

export const addTaskModalStyle = StyleSheet.create({
    title: {
        fontFamily: FONT_FAMILY.title,
        fontSize: FONT_SIZE.mainTitle,
        color: COLORS.dark,
        textAlign: "center",
        marginHorizontal: 20
    },
    view: {
        flex: 1, 
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    modal: {
        borderWidth: 4, 
        borderRadius: 20,
        borderColor: COLORS.dark,
        marginHorizontal: 8,
        marginTop: height / 8,
        backgroundColor: COLORS.light,
        paddingHorizontal: 28,
        paddingTop: 8,
        paddingBottom: 36,
    },
    dateAndPriority: { 
        flex: 1,
        display: "flex", 
        justifyContent: "space-between",
        paddingHorizontal: 8,
        flexDirection: "row", 
    }
});
