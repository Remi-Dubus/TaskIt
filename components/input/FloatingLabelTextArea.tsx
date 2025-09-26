import { useState } from "react";
import { Controller, get } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

import { COLORS, FONT_SIZE } from "@/styles/themes";
import { floatingLabelInputType } from "@/types/definition";
import { inputStyle } from "./inputStyle";

export default function FloatingLabelTextArea<T extends object>({
  control,
  name,
  label,
  errors
  }: floatingLabelInputType<T>) {
  const [isFocused, setIsFocused] = useState(false);
  const error = get(errors, name);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <View style={[inputStyle.inputText, { height: 180}]}>
          <TextInput
            placeholder=""
            style={[inputStyle.input, inputStyle.textArea]}
            underlineColorAndroid="transparent"
            multiline={true}
            numberOfLines={10} 
            onChangeText={onChange}
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <Text style={[
            inputStyle.label,
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
          {error && <Text style={inputStyle.error}>{error.message as string}</Text>}
        </View>
      )}
    />
  );
};
