import { Stack } from "expo-router"

export default function onboardingLayout() {
    return(
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="addTask" />
            <Stack.Screen name="unfinishedTask" />
            <Stack.Screen name="doneTask" />
        </Stack>
    )
}