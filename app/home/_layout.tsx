import { Slot, useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";

export default function HomeLayout() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const router = useRouter();

    useEffect(() => {
        (async () => {
            const token = await SecureStore.getItemAsync("userToken");
            if (!token) {
                router.replace("/login");
            } else {
                setIsAuthenticated(true);
            }
        })();
    }, []);

    if (isAuthenticated === null) return null;

    return <Slot />;
}
