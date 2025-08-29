import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import AddButton from "@/components/button/AddTaskButton";
import TasksList from "@/components/tasksList/TasksList";
import readTodayTasks from "@/services/task/readTodayTasks";
import { showToast } from "@/utils/toast";

import error from "@/assets/data/error.json";
import data from "@/assets/data/task.json";
import { taskType } from "@/types/definition";
import { tasksStyle } from "./tasksStyle";

export default function TodayTasksPage() {
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
        <View style={tasksStyle.view}>
            <ScrollView contentContainerStyle={tasksStyle.scrollView}>
                <Text style={tasksStyle.title}>{data.todayTaskTitle}</Text>
                <TasksList title={null} tasksList={tasksList}/>
            </ScrollView>
            <AddButton tasksList={tasksList} setTasksList={setTasksList}/>
        </View>
    );
}
