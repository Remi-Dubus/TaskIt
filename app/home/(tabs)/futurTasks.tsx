import { useEffect, useState } from "react";
import { Text, View } from "react-native";

import AddButton from "@/components/button/AddTaskButton";
import TasksList from "@/components/tasksList/TasksList";
import { showToast } from "@/utils/toast";

import error from "@/assets/data/error.json";
import data from "@/assets/data/task.json";
import readNextTwoDaysTasks from "@/services/task/readNextTwoDaysTasks";
import { taskType } from "@/types/definition";
import { tasksStyle } from "./tasksStyle";

export default function FuturTasksPage() {
    const [tasksList, setTasksList] = useState<taskType[]>([]);

    useEffect(()=> {
        const fetchTasks = async() => {
            const nextTwoDaysTasks = await readNextTwoDaysTasks();

            if(nextTwoDaysTasks?.success && nextTwoDaysTasks.result) {
                setTasksList(nextTwoDaysTasks?.result);
            } else {
                showToast("error", error.default);
            }
        }
        fetchTasks();
    }, [])
    
    return (
        <View style={tasksStyle.view}>
            <Text style={tasksStyle.title}>{data.nextTwoDaysTaskTitle}</Text>
            <TasksList tasksList={tasksList}/>
            <AddButton tasksList={tasksList} setTasksList={setTasksList}/>
        </View>
    );
}
