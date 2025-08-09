import { useState } from "react";
import { Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

import { COLORS, FONT_SIZE } from "@/styles/themes";
import { floatingLabelInputType } from "@/types/definition";
import { FloatingLabelInputStyle } from "./FloatingLabelInputStyle";

export default function FloatingLabelInput({ control, name, label, secureTextEntry = false, errors }: floatingLabelInputType) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <View style={FloatingLabelInputStyle.inputText}>
          <TextInput
            placeholder=""
            style={FloatingLabelInputStyle.input}
            secureTextEntry={secureTextEntry}
            onChangeText={onChange}
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <Text style={[
            FloatingLabelInputStyle.label,
            {
              top: isFocused || value ? -16 : 20,
              fontSize: isFocused || value ? FONT_SIZE.paragraphe * 1.2: FONT_SIZE.paragraphe,
              color: isFocused ? COLORS.dark : COLORS.darkGrey,
              position: "absolute",
              left: 8
            }
          ]}>
            {label}
          </Text>
          {errors[name] && <Text style={FloatingLabelInputStyle.error}>{errors[name].message}</Text>}
        </View>
      )}
    />
  );
}