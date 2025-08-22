import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";

import { COLORS, FONT_SIZE } from "@/styles/themes";
import { taskType } from "@/types/definition";
import { FloatingLabelInputStyle } from "../ui/FloatingLabelInputStyle";

export default function DatePicker({control, errors }: {control: Control<taskType>, errors: FieldErrors<taskType>}) {
    // use for save the date on a state
    const [date, setDate] = useState(new Date());
    // state of modal
    const [show, setShow] = useState(false);

    return (
        <Controller
            control={control}
            name="date"
            render={({ field: { onChange, value } }) => (
                <View style={{  width: "48%" }}>
                    <View style={FloatingLabelInputStyle.input}>
                        <TouchableOpacity onPress={() => setShow(true)} style={{ position: "relative" }}>
                            <Text style={[
                                FloatingLabelInputStyle.label,
                                {
                                    top: value ? -16 : 12,
                                    fontSize: value ? FONT_SIZE.paragraphe * 1.2: FONT_SIZE.paragraphe,
                                    color: value ? COLORS.dark : COLORS.darkGrey,
                                    position: "absolute",
                                    
                                }
                            ]}>Date</Text>
                        </TouchableOpacity>
                        {value && <Text style={[FloatingLabelInputStyle.label, { marginTop: 12 }]}>{new Date(value).toLocaleDateString()}</Text>}
                    </View>

                    {show && (
                        <DateTimePicker
                            value={value || date}
                            mode="date"
                            display="default"
                            onChange={(_, selectedDate) => {
                                onChange(selectedDate);
                                setDate(selectedDate || date);
                                setShow(false);
                            }}
                        />
                    )}
                    {errors && <Text style={FloatingLabelInputStyle.error}>{errors.date?.message as string}</Text>}
                </View>
            )}
        />
    )
}