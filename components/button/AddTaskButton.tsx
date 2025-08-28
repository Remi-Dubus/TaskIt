import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import AddTaskModal from "../modale/AddTaskModal";

import { addTaskType } from "@/types/definition";
import { addButtonStyle } from "./addTaskButtonStyle";

export default function AddButton({ tasksList, setTasksList }: addTaskType) {
    const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

    return (
        <View style={addButtonStyle.view}>
            <TouchableOpacity style={addButtonStyle.button} onPress={() => setIsVisibleModal(true)}>
                <View style={addButtonStyle.buttonContainer}>
                    <Text style={addButtonStyle.buttonText}>+</Text>
                </View>
            </TouchableOpacity>

            <AddTaskModal isVisibleModal={isVisibleModal} setIsVisibleModal={setIsVisibleModal} tasksList={tasksList} setTasksList={setTasksList}/>
        </View>
    )
}
