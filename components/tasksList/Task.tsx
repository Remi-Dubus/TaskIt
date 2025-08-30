import { Text, View } from "react-native";

import { COLORS } from "@/styles/themes";
import { taskType } from "@/types/definition";
import CheckBox from "../task/CkeckBox";
import TaskDate from "../task/TaskDate";
import { taskStyle } from "./taskStyle";

export default function Task( { task, isCheckedTask, toggleTask }: { task: taskType, isCheckedTask: boolean, toggleTask: (id: string | number) => void } ) {
    // Calculate the current day
    const now = new Date();
    const beginOfTheDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
    const endOfTheDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);

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
                { beginOfTheDay <= new Date(task.date) && endOfTheDay >= new Date(task.date)    
                    ? ( <CheckBox task={task} isCheckedTask={isCheckedTask} toggleTask={() => task.id && toggleTask(task.id)} />)
                    : ( <TaskDate date={task.date}/> )
                } 
            </View>
            <Text style={taskStyle.text}>{task.title}</Text>
        </View>
    )
}
