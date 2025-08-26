import { COLORS } from "@/styles/themes";
import { StyleSheet } from "react-native";

export const tasksListStyle = StyleSheet.create({
    list: {
        borderWidth: 4,
        borderRadius: 20,
        borderColor: COLORS.dark,
        backgroundColor: COLORS.light,
        paddingHorizontal: 20,
        paddingVertical: 30
    }
});
