import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";

import Arrow from "@/components/button/Arrow";

import { onboardingStyle } from "@/styles/onboardingStyle";
import { COLORS } from "@/styles/themes";
import data from "../../assets/data/onboarding.json";

export default function AddTask() {
    const router = useRouter();

    return (
        <View style={[onboardingStyle.view, { backgroundColor: COLORS.lightGreen, justifyContent: "flex-start", paddingTop: 140}]}>
            <Image
                source={require('../../assets/images/add-tasks.png')}
                resizeMode="contain"
                style={{ marginRight: 12, height: 180}}
            />
            <Image
                source={require('../../assets/images/add-button.png')}
                resizeMode="contain"
                style={{ width: 75, height: 75, marginBottom: 20 }}
            />
            <Text style={onboardingStyle.text}>
                {data.addTask}
            </Text>
            <Arrow onPress={()=> router.push("/onboarding/unfinishedTask")}/>
        </View>
    )
}