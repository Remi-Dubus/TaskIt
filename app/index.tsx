import { useFonts } from "expo-font";
import { Text, View } from "react-native";

export default function Index() {
  const [fontsLoaded] = useFonts({
    "Inter-SemiBold": require("../assets/fonts/inter-semibold.ttf"),
    "Khula-Regular": require("../assets/fonts/khula-regular.ttf"),
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}