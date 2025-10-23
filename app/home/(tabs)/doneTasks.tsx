import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import ToastCustom from "@/components/modale/ToastCustom";
import TasksList from "@/components/tasksList/TasksList";
import { readAllDoneTasks } from "@/services/task/readAllTasks";
import converDoneTasksList from "@/utils/convertDoneTasksList";

import error from "@/assets/data/error.json";
import data from "@/assets/data/task.json";

import { COLORS } from "@/styles/themes";
import { resultStateType, taskType } from "@/types/definition";
import { tasksPageStyle } from "./tasksPageStyle";

export default function DoneTasksPage() {
    const [tasksList, setTasksList] = useState<taskType[]>([]);
    const [yesterdayTasks, setYesterdayTasks] = useState<taskType[]>([]);
    const [threeLastDaysTasks, setThreeLastDaysTasks] = useState<taskType[]>([]);
    const [lastMonthTasks, setLastMonthTasks] = useState<taskType[]>([]);
    const [otherTasks, setOtherTasks] = useState<taskType[]>([]);

    // Toast state
    const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
    const [resultState, setResultState] = useState<resultStateType | null>(null);

    useEffect(()=> {
        const fetchTasks = async() => {
            const todayTasks = await readAllDoneTasks();
            if(todayTasks?.success && todayTasks.result) {
                setTasksList(todayTasks?.result);
            } else {
                setResultState({ message: error.default, type: "error" });
                setIsVisibleModal(true);
            }
        }
        fetchTasks();
    }, [])

    // Convert tasks list to yesterday done tasks
    useEffect( () => {
        if(tasksList.length > 0) {
            const convertTasksList = converDoneTasksList(tasksList);
            setYesterdayTasks(convertTasksList.yesterdayDoneTasks);
            setThreeLastDaysTasks(convertTasksList.threeLastDaysTasks);
            setLastMonthTasks(convertTasksList.lastMonthDoneTasks);
            setOtherTasks(convertTasksList.otherDoneTasks);
        }
    }, [tasksList]);

    const isNoTask = (!yesterdayTasks || yesterdayTasks.length === 0) && (!threeLastDaysTasks || threeLastDaysTasks.length === 0) && (!lastMonthTasks || lastMonthTasks.length === 0) && (!otherTasks || otherTasks.length === 0); 

    return (
        <View style={[tasksPageStyle.scrollView, { backgroundColor: COLORS.lightGrey}]}>
            <ScrollView>
                <ToastCustom isVisibleModal={isVisibleModal} setIsVisibleModal={setIsVisibleModal} resultState={resultState}/>
                <Text style={tasksPageStyle.title}>{data.doneTasksTitle}</Text>
                {isNoTask ? (
                    <View style={{ flex: 1 }}>
                        <Text style={[tasksPageStyle.text, {textAlign: "center", width: "100%"}]}>{data.noTask}</Text>
                    </View>
                ) : (
                    <View style={tasksPageStyle.view}>
                        { yesterdayTasks.length > 0 && (<TasksList title={data.yesterdayDoneTaskTitle} tasksList={yesterdayTasks} setTasksList={setYesterdayTasks}/>)}
                        { threeLastDaysTasks.length > 0 && (<TasksList title={data.threeLastsDaysDoneTasksTitle} tasksList={threeLastDaysTasks} setTasksList={setThreeLastDaysTasks}/>)}
                        { lastMonthTasks.length > 0 && (<TasksList title={data.lastMonthDoneTasksTitle} tasksList={lastMonthTasks} setTasksList={setLastMonthTasks}/>)}
                        { otherTasks.length > 0 && (<TasksList title={null} tasksList={otherTasks} setTasksList={setOtherTasks}/>)}
                    </View>
                )}
            </ScrollView>
        </View>
    );
};
