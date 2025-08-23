import { Text, TouchableOpacity } from "react-native";

import { buttonType } from "@/types/definition";
import { buttonStyle } from "./buttonStyle";

export default function Button<T extends object>({buttonText, handleSubmit, onSubmit}: buttonType<T>) {
    return (
        <TouchableOpacity style={buttonStyle.button} onPress={handleSubmit(onSubmit)}>
            <Text style={buttonStyle.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    )
}