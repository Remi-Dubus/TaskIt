import { useState } from "react";
import { View } from "react-native";

import AddTaskButton from "@/components/button/AddTaskButton";
import AddTaskModal from "@/components/modale/AddTaskModal";

export default function Home() {
    const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

    return (
        <View style={{ flex: 1 }}>
            <AddTaskModal isVisibleModal={isVisibleModal} setIsVisibleModal={setIsVisibleModal}/>
            <AddTaskButton setIsVisibleModal={setIsVisibleModal}/>
        </View>
    );
}      