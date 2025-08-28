import { useEffect, useState } from "react";
import { Text, View } from "react-native";

import AddButton from "@/components/button/AddTaskButton";
import TasksList from "@/components/tasksList/TasksList";
import readTodayTasks from "@/services/task/readTodayTasks";
import { showToast } from "@/utils/toast";

import error from "@/assets/data/error.json";
import data from "@/assets/data/task.json";
import { taskType } from "@/types/definition";
import { todayTaskStyle } from "./todayTaskStyle";

export default function TodayTaskPage() {
    const [tasksList, setTasksList] = useState<taskType[]>([]);

    useEffect(()=> {
        const fetchTasks = async() => {
            const todayTasks = await readTodayTasks();

            if(todayTasks?.success && todayTasks.result) {
                setTasksList(todayTasks?.result);
            } else {
                showToast("error", error.default);
            }
        }
        fetchTasks();
    }, [])
    
    return (
        <View style={todayTaskStyle.view}>
            <Text style={todayTaskStyle.title}>{data.todayTaskTitle}</Text>
            <TasksList tasksList={tasksList}/>
            <AddButton tasksList={tasksList} setTasksList={setTasksList}/>
        </View>
    );
}
