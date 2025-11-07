import { Text, TouchableOpacity, View } from "react-native";

import { logout } from "@/services/auth/auth";
import { useState } from "react";

import data from "@/assets/data/accountMenu.json";
import ToastCustom from "@/components/modale/ToastCustom";
import type { resultStateType } from "@/types/definition";
import { logoutButtonStyle } from "./logoutButtonStyle";

export default function LogoutButton({ setIsVisibleModal }: { setIsVisibleModal: (bool: boolean) => void }) {
    const [isVisibleToastModal, setIsVisibleToastModal] = useState<boolean>(false);
    const [resultState, setResultState] = useState<resultStateType | null>(null);
    
    // Logout button
    const handleLogout = async() => {
        const result = await logout();

        setIsVisibleModal(false);

        if(!result.success) {
            setResultState({ message: result.message, type: "error" });
            setIsVisibleModal(true);
        } 
    };

    return (
        <View>
            <ToastCustom isVisibleModal={isVisibleToastModal} setIsVisibleModal={setIsVisibleToastModal} resultState={resultState}/>
            <TouchableOpacity
                onPress={handleLogout}
            >
                <Text style={logoutButtonStyle.buttonText}>{data.logout}</Text>
            </TouchableOpacity>
        </View>
    )
};
