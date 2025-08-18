import { COLORS } from "@/styles/themes";
import { TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function Arrow({ onPress }: { onPress: () => void }){
    return (
        <TouchableOpacity onPress={onPress} style={{ position: "absolute", right: 30, bottom: 60 }}> 
            <Svg
                width="70"
                height="70"
                viewBox="0 0 24 24"
                fill="none"
            >
                <Path
                    d="M4 12h16M14 6l6 6-6 6"
                    stroke={COLORS.green}
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </TouchableOpacity>
    )
}