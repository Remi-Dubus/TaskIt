import { auth } from "@/firebaseConfig";
import { Slot, useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

import Header from "@/components/layout/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { layoutStyle } from "./layoutStyle";

export default function HomeLayout() {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                router.replace("/login");
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [router]);

    if (loading) return null;

    return (
        <SafeAreaView style={layoutStyle.view}>
            <Header />
            <Slot />
        </SafeAreaView>
    );
}
