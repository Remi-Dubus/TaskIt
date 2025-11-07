import { auth } from "@/firebaseConfig";
import { COLORS } from "@/styles/themes";
import { Stack, useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function LoginLayout() {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setTimeout(() => {
                    setLoading(false);
                    router.replace("./home")
                }, 2000);
            } else {
                setLoading(false)
            }
        });
        return () => unsubscribe();
    }, [router]);

    if (loading) {
        return (
            <View style={{flex: 1, backgroundColor: COLORS.lightGrey, alignItems: "center", justifyContent: "center"}}>
                <ActivityIndicator size={70} color={COLORS.darkGrey} />
            </View>
        );     
    }

    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "Se connecter" }} />
            <Stack.Screen name="Register" options={{ title: "S'inscrire" }} />
        </Stack>
    );
};
