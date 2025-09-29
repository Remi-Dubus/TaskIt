import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import AddButton from "@/components/button/AddTaskButton";
import TasksList from "@/components/tasksList/TasksList";
import { showToast } from "@/utils/toast";

import error from "@/assets/data/error.json";
import data from "@/assets/data/task.json";
import readUnfinishedTasks from "@/services/task/readUnfinishedTask";
import { COLORS } from "@/styles/themes";
import { taskType } from "@/types/definition";
import { tasksPageStyle } from "./tasksPageStyle";

export default function UnfinishedTasksPage() {
    const [tasksList, setTasksList] = useState<taskType[]>([]);

    useEffect(()=> {
        const fetchTasks = async() => {
            const todayTasks = await readUnfinishedTasks();

            if(todayTasks?.success && todayTasks.result) {
                setTasksList(todayTasks?.result);
            } else {
                showToast("error", error.default);
            }
        }
        fetchTasks();
    }, [])
    
    return (
        <View style={[tasksPageStyle.view, { backgroundColor: COLORS.lightYellow}]}>
            <Text style={tasksPageStyle.title}>{data.unfinishedTasksTitle}</Text>
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
