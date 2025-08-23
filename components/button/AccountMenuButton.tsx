import { useRef, useState } from "react";
import { Animated, Pressable, View } from "react-native";

import AccountMenu from "../modale/AccountMenu";

import { accountMenuButtonStyle } from "./accountMenuButtonStyle";

export default function AccountMenuButton() {
    const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

    // Animation of pressable
    const rotateValue = useRef(new Animated.Value(0)).current;
    const rotate = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "180deg"]
    });

    // Open account menu
    const openAcountMenu = () => {
        // Rotate pressable on press
        rotateValue.setValue(0);
        Animated.timing(rotateValue, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start(() => {
            // Reset value
            rotateValue.setValue(0);
        });

        // Open menu
        setTimeout(() => {
            setIsVisibleModal(true);
        }, 400);
    };

    return (
        <View style={accountMenuButtonStyle.view}>
            <Pressable
                onPress={openAcountMenu}
                style={accountMenuButtonStyle.button}
            >
                    <Animated.Image
                        source={require("@/assets/images/gear.png")}
                        style={[accountMenuButtonStyle.gear, { transform: [{ rotate: rotate }]}]}
                    />
            </Pressable>

            <AccountMenu isVisibleModal={isVisibleModal} setIsVisibleModal={setIsVisibleModal}/>
        </View>
    );
}