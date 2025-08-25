import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";

import Arrow from "@/components/button/Arrow";

import { onboardingStyle } from "@/styles/onboardingStyle";
import data from "../assets/data/onboarding.json";

export default function Index() {
  const [fontsLoaded] = useFonts({
    "Inter-SemiBold": require("../assets/fonts/inter-semibold.ttf"),
    "Maven-Regular": require("../assets/fonts/maven-regular.ttf"),
  });

  const router = useRouter();

  return (
    <View style={onboardingStyle.view}>
                <Image
                    source={require('../assets/images/taskit-logo.png')}
                    resizeMode="contain"
                    style={{ width: 160, height: 160 }}
                />
                <Text style={onboardingStyle.text}>
                    {data.welcome}
                    <Text style={onboardingStyle.title}>{data.appTitle}</Text>
                    {data.welcomeBis}
                </Text>
                <Arrow onPress={()=> router.push("/onboarding/addTask")}/>
            </View>
  );
}