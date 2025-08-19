import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";

import Arrow from "@/components/ui/Arrow";

import { onboardingStyle } from "@/styles/onboardingStyle";
import title from "../../assets/data/layout.json";
import data from "../../assets/data/onboarding.json";

export default function Welcome() {
    const router = useRouter();

    return (
        <View style={onboardingStyle.view}>
            <Image
                source={require('../../assets/images/taskit-logo.png')}
                resizeMode="contain"
                style={{ width: 160, height: 160 }}
            />
            <Text style={onboardingStyle.text}>
                {data.welcome}
                <Text style={onboardingStyle.title}>{title.appTitle}</Text>
                {data.welcomeBis}
            </Text>
            <Arrow onPress={()=> router.push("/onboarding/addTask")}/>
        </View>
    )
}