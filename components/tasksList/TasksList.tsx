import { useState } from "react";
import { Text, View, VirtualizedList } from "react-native";

import data from "@/assets/data/task.json";
import { taskType } from "@/types/definition";
import Task from "./Task";
import { tasksListStyle } from "./tasksListStyle";

export default function TasksList({ tasksList }: { tasksList: taskType[]}) {
    if (!tasksList || tasksList.length === 0) {
        return (
            <View style={{ flex: 1 }}>
                <Text>{data.noTask}</Text>
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
        <View style={tasksListStyle.list}>
            <VirtualizedList
                data={tasksList}
                initialNumToRender={50}
                renderItem={({item}) => item.id ? (<Task 
                    task={item}
                    isCheckedTask={!!isCheckedTask[item.id]}
                    toggleTask={() => item.id && toggleTask(item.id)}/>
                ): null}
                keyExtractor={(item, index) => item.id?.toString() ?? index.toString()}
                getItemCount={getTasksCount}
                getItem={getTasks}
            />
        </View>
    )
}
