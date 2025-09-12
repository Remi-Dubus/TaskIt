import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import AddButton from "@/components/button/AddTaskButton";
import TasksList from "@/components/tasksList/TasksList";
import readTodayTasks from "@/services/task/readTodayTasks";
import { showToast } from "@/utils/toast";

import error from "@/assets/data/error.json";
import data from "@/assets/data/task.json";
import { taskType } from "@/types/definition";
import { tasksPageStyle } from "./tasksPageStyle";

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
        <View style={tasksPageStyle.view}>
            <Text style={tasksPageStyle.title}>{data.todayTaskTitle}</Text>
            {!tasksList || tasksList.length === 0 ? (
                <View style={{ flex: 1 }}>
                    <Text style={[tasksPageStyle.text, {textAlign: "center", width: "100%"}]}>{data.noTask}</Text>
                </View>
            ) : (
                <ScrollView contentContainerStyle={tasksPageStyle.scrollView}>
                    <TasksList title={null} tasksList={tasksList} setTasksList={setTasksList}/>
                </ScrollView>
            )}
            <AddButton tasksList={tasksList} setTasksList={setTasksList}/>
        </View>
    );
}
