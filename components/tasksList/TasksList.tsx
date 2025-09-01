import { Text, View } from "react-native";
import Toast from "react-native-toast-message";

import { showToast } from "@/utils/toast";
import updateDoneTasks from "../../services/task/updateDoneTask";
import Task from "./Task";

import data from "@/assets/data/task.json";
import { taskType } from "@/types/definition";
import error from "../../assets/data/error.json";
import { tasksListStyle } from "./tasksListStyle";

export default function TasksList({ title, tasksList, setTasksList }: { title: string | null, tasksList: taskType[], setTasksList: (tasks: taskType[]) => void}) {
    if (!tasksList || tasksList.length === 0) {
        return (
            <View style={{ flex: 1 }}>
                <Text style={tasksListStyle.text}>{data.noTask}</Text>
            </View>
        );
    }

    const toggleTask = async (id: string) => {
        const findTaskById = tasksList.find( task => task.id === id);
        
        if(!findTaskById) {
            showToast("error", error.default)
            return;
        }

        const result = await updateDoneTasks({id, isDone: findTaskById.done!});

        if(!result?.success) {
            showToast("error", error.default);
        } else {
            const updatedTasksList = tasksList.map( task => task.id === id ? {... task, done: !task.done} : task);
            setTasksList(updatedTasksList);
        }
    };

    return (
        <View style={[tasksListStyle.list, !title && {paddingTop: 30}]}>
            { title && <Text style={tasksListStyle.title}>{title}</Text> }
            {tasksList.map((item) => 
                item.id ? (
                    <Task
                        key={item.id}
                        task={item}
                        toggleTask={() => item.id && toggleTask(item.id)}
                    />
                ) : null
            )}
            <Toast position="top"/>
        </View>
    )
}
