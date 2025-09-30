import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import AddButton from "@/components/button/AddTaskButton";
import TasksList from "@/components/tasksList/TasksList";
import { readAllTasks } from "@/services/task/readAllTasks";
import convertTasksListToFuturTaskList from "@/utils/convertTasksListToFuturTaskList";
import { showToast } from "@/utils/toast";

import error from "@/assets/data/error.json";
import data from "@/assets/data/task.json";

import { taskType } from "@/types/definition";
import { tasksPageStyle } from "./tasksPageStyle";

export default function FuturTasksPage() {
    const [tasksList, setTasksList] = useState<taskType[]>([]);
    const [nextTwoDayTasksList, setNextTwoDayTasksList] = useState<taskType[]>([]);
    const [currentMonthTasksList, setCurrentMonthTasksList] = useState<taskType[]>([]);

    useEffect(()=> {
        const fetchTasks = async() => {
            const futurTasksList = await readAllTasks();

            if(futurTasksList?.success && futurTasksList.result) {
                setTasksList(futurTasksList.result)
            } else {
                showToast("error", error.default);
            }
        }
        fetchTasks();
    }, []);
            
    // Convert tasks list to next 2 days tasks and current month tasks 
    useEffect( () => {
        const convertTasksList = convertTasksListToFuturTaskList(tasksList);
        setNextTwoDayTasksList(convertTasksList.nextTwoDayTask);
        setCurrentMonthTasksList(convertTasksList.currentMonthTask);
    }, [tasksList]);

    return (
        <View style={tasksPageStyle.view}>
            <Text style={tasksPageStyle.title}>{data.futurTasksTitle}</Text>
            {(!nextTwoDayTasksList || nextTwoDayTasksList.length === 0) && (!currentMonthTasksList || currentMonthTasksList.length === 0) ? (
                <View style={{ flex: 1 }}>
                    <Text style={[tasksPageStyle.text, {textAlign: "center", width: "100%"}]}>{data.noTask}</Text>
                </View>
            ) : (
                <ScrollView contentContainerStyle={tasksPageStyle.scrollView}>
                    {nextTwoDayTasksList.length > 0 && (<TasksList title={data.nextTwoDaysTaskTitle} tasksList={nextTwoDayTasksList} setTasksList={setNextTwoDayTasksList}/>)}
                    {currentMonthTasksList.length > 0 && (<TasksList title={data.tasksOfTheMonthTitle} tasksList={currentMonthTasksList} setTasksList={setCurrentMonthTasksList}/>)}
                </ScrollView>
            )}
        <AddButton tasksList={tasksList} setTasksList={setTasksList}/>
        </View>
    );
}
