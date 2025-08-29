import { StyleSheet } from "react-native";

import { COLORS } from "@/styles/themes";

export const addButtonStyle = StyleSheet.create({
    view: { 
        position: "absolute",
        bottom: 10,
        alignSelf: "center"
    },
    button: {
        height: 70,
        width: 70,
        borderRadius: 35,
        backgroundColor: COLORS.dark,
        elevation: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonContainer: {
        backgroundColor: COLORS.dark,
        borderRadius: 5,
        height: 70,
        width: 70,
    },
    buttonText: {
        fontSize: 70,
        color: COLORS.light,
        position: "absolute",
        left: 16,
        top: -16
    }
});
