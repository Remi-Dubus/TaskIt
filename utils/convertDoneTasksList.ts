import { taskType } from "@/types/definition";

export default function converDoneTasksList(tasksList: taskType[]) {
    const now = new Date();
    let yesterdayDoneTasks: taskType[] = [];
    let threeLastDaysTasks: taskType[] = [];
    let lastMonthDoneTasks: taskType[] = [];
    let otherDoneTasks: taskType[] = [];

    const begginYesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 0, 0, 0);
    const endYesterdayDays = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 23, 59, 59);
    const endOfThreeLastDays = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 3, 23, 59, 59);
    const endOfTheMonth = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate(), 23, 59, 59);
    
    for(const task of tasksList) {
        const taskDate = new Date(task.date)

        if(taskDate > begginYesterday && taskDate <= endYesterdayDays) {
            yesterdayDoneTasks.push(task);
        } else if (taskDate >= endOfThreeLastDays && taskDate < endYesterdayDays ) {
            threeLastDaysTasks.push(task);
        } else if (taskDate >= endOfTheMonth && taskDate < endOfThreeLastDays) {
            lastMonthDoneTasks.push(task);
        } else {
            otherDoneTasks.push(task);
        }
    }

    return {
        "yesterdayDoneTasks" : yesterdayDoneTasks,
        "threeLastDaysTasks" : threeLastDaysTasks,
        "lastMonthDoneTasks" : lastMonthDoneTasks,
        "otherDoneTasks": otherDoneTasks
    };
};
