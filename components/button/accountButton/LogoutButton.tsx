import { Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

import { logout } from "@/services/auth/auth";
import { showToast } from "@/utils/toast";

import data from "@/assets/data/accountMenu.json";
import { logoutButtonStyle } from "./logoutButtonStyle";

export default function LogoutButton({ setIsVisibleModal }: { setIsVisibleModal: (bool: boolean) => void }) {
    // Logout button
    const handleLogout = async() => {
        const result = await logout();

        if(!result.success) {
            showToast("error", result.message);
        } 
    }

    return (
        <View>
            <TouchableOpacity
                onPress={handleLogout}
            >
                <Text style={logoutButtonStyle.buttonText}>{data.logout}</Text>
            </TouchableOpacity>
            <Toast position="top"/>
        </View>
    )
}