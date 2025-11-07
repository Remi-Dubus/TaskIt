import { StyleSheet } from "react-native";

export const accountMenuButtonStyle = StyleSheet.create({
    view: {
        position: "relative",
        zIndex: 10,
    },
    button: {
        position: "absolute",
        top: 16,
        right: 16,
        zIndex: 10,
        height: 60,
        width: 60,
    },
    gear: {
        height: 50,
        width: 50,
        resizeMode: "contain",
        elevation: 5
    },
});