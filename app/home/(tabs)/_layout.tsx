import { COLORS } from "@/styles/themes";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: COLORS.green,
                headerStyle: {
                    backgroundColor: COLORS.light,
                },
                headerShadowVisible: false,
                headerTintColor: COLORS.dark,
                tabBarStyle: {
                    backgroundColor: COLORS.light,
                    height: 120,
                },
                tabBarItemStyle: {
                    padding: 16
                }
            }}
        >
            <Tabs.Screen 
                name="todayTasks" 
                options={{ 
                    title: "Tâches de la journée",
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? "calendar-clear-sharp" : "calendar-clear-outline"} color={color} size={24} />
                    )
                }}
            />
            <Tabs.Screen 
                name="futurTasks" 
                options={{ 
                    title: "Tâches futures",
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? "calendar-sharp" : "calendar-outline"} color={color} size={24} />
                    )
                }}
            />
            <Tabs.Screen 
                name="unfinishedTasks" 
                options={{ 
                    title: "Tâches non abouti",
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? "ban-sharp" : "ban-outline"} color={color} size={24} />
                    )
                }}
            />
            <Tabs.Screen 
                name="doneTasks" 
                options={{ 
                    title: "Tâches terminées",
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? "checkmark-done-sharp" : "checkmark-done-outline"} color={color} size={24} />
                    )
                }}
            />
            <Tabs.Screen 
                name="profil" 
                options={{ 
                    title: "Profil",
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? "person-sharp" : "person-outline"} color={color} size={24} />
                    )
                }}
            />
        </Tabs>
    );
}
