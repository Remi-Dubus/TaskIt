import { Image, Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "@/styles/themes";
import { taskType } from "@/types/definition";
import { taskStyle } from "./taskStyle";

export default function Task( { task, isCheckedTask, toggleTask }: { task: taskType, isCheckedTask: boolean, toggleTask: (id: string | number) => void } ) {
    return (
        <View style={taskStyle.element}>
            <View style={taskStyle.priorityAndCheckBox}>
                <View
                    style={{
                        width: 20,
                        height: 20,
                        borderRadius: 30,
                        backgroundColor: task.priority === 1 ? COLORS.green : task.priority === 2 ? COLORS.orange : COLORS.red,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                />
                <View style={taskStyle.checkbox}>
                    <TouchableOpacity 
                        style={[taskStyle.box, isCheckedTask && {borderColor: COLORS.green}]} 
                        onPress={() => task.id && toggleTask(task.id)}>
                    </TouchableOpacity>
                    {task.id && isCheckedTask && (
                        <Image source={require("@/assets/images/checked.png" )} style={taskStyle.check} />
                    )}
                </View>
            </View>
            <Text style={taskStyle.text}>{task.title}</Text>
        </View>
    )
}
