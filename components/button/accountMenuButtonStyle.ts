import { StyleSheet } from "react-native";


export const accountMenuButtonStyle = StyleSheet.create({
    view: {
        flex: 1,
        position: "relative"
    },
    button: {
        position: "absolute",
        top: 50,
        right: 20,
    },
    gear: {
        height: 50,
        width: 50,
        resizeMode: "contain",
        elevation: 5
    },
});