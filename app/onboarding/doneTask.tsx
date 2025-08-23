import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";

import Arrow from "@/components/button/Arrow";

import { onboardingStyle } from "@/styles/onboardingStyle";
import { COLORS } from "@/styles/themes";
import data from "../../assets/data/onboarding.json";

export default function unfinishedTask() {
    const router = useRouter();

    const finishOnboarding = async () => {
        await AsyncStorage.setItem("onboarding", "true");
        router.push("/login");
    }

    return (
        <View style={[onboardingStyle.view, { backgroundColor: COLORS.lightGrey, padding: 50 }]}>
            <Image
                source={require('../../assets/images/done-tasks.png')}
                resizeMode="contain"
                style={onboardingStyle.image}
            />
            <Text style={onboardingStyle.text}>
                {data.doneTask}
            </Text>
            <Arrow onPress={() => finishOnboarding()}/>
        </View>
    )
}