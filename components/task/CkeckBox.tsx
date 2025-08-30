import { Image, TouchableOpacity, View } from "react-native"

import { COLORS } from "@/styles/themes"
import { taskType } from "@/types/definition"
import { checkBoxStyle } from "./checkBoxStyle"

export default function CheckBox( { task, isCheckedTask, toggleTask }: { task: taskType, isCheckedTask: boolean, toggleTask: (id: string | number) => void } ) {
    return (
        <View style={checkBoxStyle.view}>
            <TouchableOpacity 
                style={[checkBoxStyle.button, isCheckedTask && {borderColor: COLORS.green}]} 
                onPress={() => task.id && toggleTask(task.id)}>
            </TouchableOpacity>
            {task.id && isCheckedTask && (
                <Image source={require("@/assets/images/checked.png" )} style={checkBoxStyle.image} />
            )}
        </View>
    )
};
