import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";

import Arrow from "@/components/ui/Arrow";

import { onboardingStyle } from "@/styles/onboardingStyle";
import { COLORS } from "@/styles/themes";
import data from "../../assets/data/onboarding.json";

export default function unfinishedTask() {
    const router = useRouter();

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
            <Arrow onPress={()=> router.push("/login")}/>
        </View>
    )
}