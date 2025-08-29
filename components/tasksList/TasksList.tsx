import { useState } from "react";
import { Text, View } from "react-native";

import data from "@/assets/data/task.json";
import { taskType } from "@/types/definition";
import Task from "./Task";
import { tasksListStyle } from "./tasksListStyle";

export default function TasksList({ title, tasksList }: { title: string | null, tasksList: taskType[]}) {
    if (!tasksList || tasksList.length === 0) {
        return (
            <View style={{ flex: 1 }}>
                <Text style={tasksListStyle.text}>{data.noTask}</Text>
            </View>
        );
    }

    const getTasksCount = (tasks: taskType[]) => tasks.length;

    const getTasks = (tasks: taskType[], index: number) => tasks[index];

    const [isCheckedTask, setIsCheckedTask] = useState<{ [key: string]: boolean }>({});

    const toggleTask = (id: string | number) => {
        setIsCheckedTask(prev => ({
        ...prev,
        [id]: !prev[id],
        }));
    };

    return (
        <View style={[tasksListStyle.list, !title && {paddingTop: 30}]}>
            { title && <Text style={tasksListStyle.title}>{title}</Text> }
            {tasksList.map((item) => 
                item.id ? (
                    <Task
                        key={item.id}
                        task={item}
                        isCheckedTask={!!isCheckedTask[item.id]}
                        toggleTask={() => item.id && toggleTask(item.id)}
                    />
                ) : null
            )}
        </View>
    )
}
