import { useState } from "react";
import { View } from "react-native";

import AddTaskModal from "@/components/modale/AddTaskModal";
import AddTaskButton from "@/components/ui/AddTaskButton";

export default function Home() {
    const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

    return (
        <View style={{ flex: 1 }}>
            <AddTaskModal isVisibleModal={isVisibleModal} setIsVisibleModal={setIsVisibleModal}/>
            <AddTaskButton setIsVisibleModal={setIsVisibleModal}/>
        </View>
    );
}      