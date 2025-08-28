import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import AddTaskModal from "../modale/AddTaskModal";

import { addButtonStyle } from "./addTaskButtonStyle";

export default function AddButton() {
    const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

    return (
        <View style={addButtonStyle.view}>
            <TouchableOpacity style={addButtonStyle.button} onPress={() => setIsVisibleModal(true)}>
                <View style={addButtonStyle.buttonContainer}>
                    <Text style={addButtonStyle.buttonText}>+</Text>
                </View>
            </TouchableOpacity>

            <AddTaskModal isVisibleModal={isVisibleModal} setIsVisibleModal={setIsVisibleModal}/>
        </View>
    )
}