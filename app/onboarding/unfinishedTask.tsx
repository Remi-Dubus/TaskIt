import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";

import Arrow from "@/components/ui/Arrow";

import { onboardingStyle } from "@/styles/onboardingStyle";
import { COLORS } from "@/styles/themes";
import data from "../../assets/data/onboarding.json";

export default function unfinishedTask() {
    const router = useRouter();

    return (
        <View style={[onboardingStyle.view, { backgroundColor: COLORS.lightYellow, padding:40 }]}>
            <Image
                source={require('../../assets/images/unfinished-tasks.png')}
                resizeMode="contain"
                style={onboardingStyle.image}
            />
            <Text style={onboardingStyle.text}>
                {data.unfinishedTask}
            </Text>
            <Arrow onPress={()=> router.push("/onboarding/doneTask")}/>
        </View>
    )
}