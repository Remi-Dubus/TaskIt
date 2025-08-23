import { Text, TouchableOpacity, View } from "react-native";
import { addButtonStyle } from "./addTaskButtonStyle";

export default function AddButton({ setIsVisibleModal }: { setIsVisibleModal: (bool: boolean) => void}) {
    return (
        <TouchableOpacity style={addButtonStyle.button} onPress={() => setIsVisibleModal(true)}>
            <View style={addButtonStyle.buttonContainer}>
                <Text style={addButtonStyle.buttonText}>+</Text>
            </View>
        </TouchableOpacity>
    )
}