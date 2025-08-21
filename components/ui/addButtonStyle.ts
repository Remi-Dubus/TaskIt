import { StyleSheet } from "react-native";

import { COLORS } from "@/styles/themes";

export const addButtonStyle = StyleSheet.create({
    button: {
        height: 70,
        width: 70,
        position: "absolute",
        bottom: 130,
        left: "50%",
        transform: [{translateX: -35}],
        elevation: 5
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