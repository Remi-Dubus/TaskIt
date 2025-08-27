import { Control, Controller, FieldErrors } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";

import { COLORS, FONT_SIZE } from "@/styles/themes";
import { taskType } from "@/types/definition";
import { inputStyle } from "./inputStyle";

export default function PriorityButton({ control, errors }: { control: Control<taskType>, errors: FieldErrors<taskType>}) {
    const nextPriority = (current: number) => {
        if (current === 1) return 2;
        if (current === 2) return 3;
        return 1;
    };

    return (
        <Controller
            control={control}
            name="priority"
            render={({ field: { onChange, value } }) => (
                <View style={[inputStyle.input, { width: "30%", marginLeft: "4%" }]}>
                    <TouchableOpacity onPress={() => onChange(nextPriority(value || 1))} style={{display: "flex", flexDirection: "row"}}>
                        <Text style={[inputStyle.label, { marginTop: 8, fontSize: FONT_SIZE.paragraphe * 1.2 }]}>Priorité: </Text>
                        <View
                            style={{
                                width: 20,
                                height: 20,
                                borderRadius: 30,
                                backgroundColor: value === 1 ? COLORS.green : value === 2 ? COLORS.orange : COLORS.red,
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 12
                            }}
                        />
                    </TouchableOpacity>
                    {errors && <Text style={inputStyle.error}>{errors.priority?.message as string}</Text>}
                </View>
            )}
        />
    );
}
