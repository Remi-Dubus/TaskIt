import { useState } from "react";
import { Text, View } from "react-native";

import updateDoneTasks from "../../services/task/updateDoneTask";
import ToastCustom from "../modale/ToastCustom";
import Task from "./Task";

import error from "@/assets/data/error.json";

import { resultStateType, taskType } from "@/types/definition";
import { tasksListStyle } from "./tasksListStyle";

export default function TasksList({ title, tasksList, setTasksList }: { title: string | null, tasksList: taskType[], setTasksList: (tasks: taskType[]) => void}) {
    // Toast state
    const [isVisibleToastModal, setIsVisibleToastModal] = useState<boolean>(false);
    const [resultState, setResultState] = useState<resultStateType | null>(null);
    
    const toggleTask = async (id: string) => {
        const findTaskById = tasksList.find( task => task.id === id);
        
        if(!findTaskById) {
            setResultState({ message: error.default, type: "success" });
            setIsVisibleToastModal(true);
            return;
        }

        const result = await updateDoneTasks({id, isDone: findTaskById.done!});

        if(!result?.success) {
            setResultState({ message: error.default, type: "success" });
            setIsVisibleToastModal(true);
        } else {
            const updatedTasksList = tasksList.map( task => task.id === id ? {... task, done: !task.done} : task);
            setTasksList(updatedTasksList);
        }
    };

    return (
        <View style={[tasksListStyle.list, !title && {paddingTop: 30}]}>
            <ToastCustom isVisibleModal={isVisibleToastModal} setIsVisibleModal={setIsVisibleToastModal} resultState={resultState}/>
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
        </View>
    );
};
