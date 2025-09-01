import convertDate from "@/utils/convertDate";
import { Text, View } from "react-native";

import { taskDateStyle } from "./taskDateStyle";

export default function TaskDate({ date }: { date: Date}) {
    const formatedDate = convertDate(date);

    return (
        <View style={taskDateStyle.view} >
            <Text style={taskDateStyle.text}>{formatedDate}</Text>
        </View>
    )
}
