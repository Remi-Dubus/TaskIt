import { taskType } from "@/types/definition";

export default function convertTasksListToFuturTaskList(tasksList: taskType[]) {
    const now = new Date();
    let nextTwoDaysTasks: taskType[] = [];
    let currentMonthTasks: taskType[] = [];

    const begginOfNextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    const endOfNextTwoDays = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2, 23, 59, 59);
    const endOfLastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0);

    for(const task of tasksList) {
        if(new Date(task.date) > begginOfNextDay && new Date(task.date) <= endOfNextTwoDays) {
            nextTwoDaysTasks.push(task);
        } else if (new Date(task.date) > endOfNextTwoDays && new Date(task.date) <= endOfLastDayOfMonth){
            currentMonthTasks.push(  task)
        }
    }

    return {
        "nextTwoDayTask": nextTwoDaysTasks.sort((a, b) => (b.priority ?? 1) - (a.priority ?? 1)),
        "currentMonthTask": currentMonthTasks.sort((a, b) => (b.priority ?? 1) - (a.priority ?? 1))
    };
}
