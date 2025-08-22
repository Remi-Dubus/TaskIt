import { auth } from "@/firebaseConfig";
import { Stack, useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function LoginLayout() {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                router.replace("/home");
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [router]);

    if (loading) return null;

    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "Se connecter" }} />
            <Stack.Screen name="Register" options={{ title: "S'inscrire" }} />
        </Stack>
    );
}
