import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import TasksList from "@/components/tasksList/TasksList";
import { readAllDoneTasks } from "@/services/task/readAllTasks";
import converDoneTasksList from "@/utils/convertDoneTasksList";
import { showToast } from "@/utils/toast";

import error from "@/assets/data/error.json";
import data from "@/assets/data/task.json";

import { COLORS } from "@/styles/themes";
import { taskType } from "@/types/definition";
import { tasksPageStyle } from "./tasksPageStyle";

export default function DoneTasksPage() {
    const [tasksList, setTasksList] = useState<taskType[]>([]);
    const [yesterdayTasks, setYesterdayTasks] = useState<taskType[]>([]);

    useEffect(()=> {
        const fetchTasks = async() => {
            const todayTasks = await readAllDoneTasks();

            if(todayTasks?.success && todayTasks.result) {
                setTasksList(todayTasks?.result);
            } else {
                showToast("error", error.default);
            }
        }
        fetchTasks();
    }, [])
    
    // Convert tasks list to yesterday done tasks
    useEffect( () => {
        const convertTasksList = converDoneTasksList(tasksList);
        setYesterdayTasks(convertTasksList.yesterdayDoneTasks);
    }, [tasksList]);

    return (
        <View style={[tasksPageStyle.view, { backgroundColor: COLORS.lightGrey}]}>
            <Text style={tasksPageStyle.title}>{data.doneTasksTitle}</Text>
            {!yesterdayTasks || yesterdayTasks.length === 0 ? (
                <View style={{ flex: 1 }}>
                    <Text style={[tasksPageStyle.text, {textAlign: "center", width: "100%"}]}>{data.noTask}</Text>
                </View>
            ) : (
                <ScrollView contentContainerStyle={tasksPageStyle.scrollView}>
                    { yesterdayTasks.length > 0 && (<TasksList title={data.yesterdayDoneTaskTitle} tasksList={yesterdayTasks} setTasksList={setYesterdayTasks}/>)}
                </ScrollView>
            )}
        </View>
    );
};
