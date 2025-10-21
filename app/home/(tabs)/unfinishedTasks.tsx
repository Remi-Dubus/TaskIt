import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import TasksList from "@/components/tasksList/TasksList";

import ToastCustom from "@/components/modale/ToastCustom";
import readUnfinishedTasks from "@/services/task/readUnfinishedTask";

import error from "@/assets/data/error.json";
import data from "@/assets/data/task.json";

import { COLORS } from "@/styles/themes";
import { resultStateType, taskType } from "@/types/definition";
import { tasksPageStyle } from "./tasksPageStyle";

export default function UnfinishedTasksPage() {
    const [tasksList, setTasksList] = useState<taskType[]>([]);

    // Toast state
    const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
    const [resultState, setResultState] = useState<resultStateType | null>(null);

    useEffect(()=> {
        const fetchTasks = async() => {
            const todayTasks = await readUnfinishedTasks();

            if(todayTasks?.success && todayTasks.result) {
                setTasksList(todayTasks?.result);
            } else {
                setResultState({ message: error.default, type: "error" });
                setIsVisibleModal(true);
            }
        }
        fetchTasks();
    }, [])
    
    return (
        <View style={[tasksPageStyle.view, { backgroundColor: COLORS.lightYellow}]}>
            <ToastCustom isVisibleModal={isVisibleModal} setIsVisibleModal={setIsVisibleModal} resultState={resultState}/>
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
        </View>
    );
};
