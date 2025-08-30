import { StyleSheet } from "react-native";

import { COLORS } from "@/styles/themes";

export const checkBoxStyle = StyleSheet.create({
    view: {
        height:30, 
        display: "flex",
        justifyContent: "center"
    },
    button: {
        height: 25,
        width: 25,
        borderColor: COLORS.dark,
        borderWidth: 4,
        marginHorizontal: 8,
        zIndex: 2
    },
    image: {
        width: 30, 
        height: 30, 
        position: "absolute", 
        zIndex: 1, 
        left: "20%",
        bottom: 4 
    }
});
