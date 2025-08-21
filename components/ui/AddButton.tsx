import { Text, TouchableOpacity, View } from "react-native";
import { addButtonStyle } from "./addButtonStyle";

export default function AddButton() {
    return (
        <TouchableOpacity style={addButtonStyle.button}>
            <View style={addButtonStyle.buttonContainer}>
                <Text style={addButtonStyle.buttonText}>+</Text>
            </View>
        </TouchableOpacity>
    )
}