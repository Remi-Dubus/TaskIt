import { Stack } from "expo-router"

export default function loginLayout() {
    return(
        <Stack>
            <Stack.Screen name="index" options={{ title: "Se connecter" }} />
            <Stack.Screen name="Register" options={{ title: "S'inscrire" }} />
        </Stack>
    )
}
