import AsyncStorage from "@react-native-async-storage/async-storage";
import { Slot, useRouter } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    const checkOnboarding = async() => {
      const hasSeenOnboarding = await AsyncStorage.getItem("onboardingSeen");

      if(hasSeenOnboarding) {
        router.replace("/login");
      } else {
        router.replace("/onboarding/welcome");
      }
    }

    checkOnboarding();
  }, [])

  return <Slot />;
}
