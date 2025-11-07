import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";

import SubmitButton from "@/components/button/SubmitButton";
import FloatingLabelInput from "@/components/input/FloatingLabelInput";
import Header from "@/components/layout/Header";
import ToastCustom from "@/components/modale/ToastCustom";
import { login } from "@/services/auth/auth";
import { accountValidationSchema } from "@/utils/validation";

import { loginType, resultStateType } from "@/types/definition";

import data from "../../assets/data/auth.json";
import { authStyle } from "../../styles/authStyle";
import { loginStyle } from "./loginStyle";

export default function Login() {
    // Call zod schema for resolver
    const validation = accountValidationSchema;

    // Call React-Hook-Form with zodResolver
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(validation),
    });

    // Call the database if email and password is correct
    const router = useRouter();

    // Toast state
    const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
    const [resultState, setResultState] = useState<resultStateType | null>(null);

    const onSubmit = async (data: loginType) => {
        const result = await login(data.email, data.password);
            
        if (!result.success) {
            setResultState({ message: result.message, type: "error" });
            setIsVisibleModal(true);
            reset();
        } else {
            setResultState({ message: result.message, type: "success" });
            setIsVisibleModal(true);
            reset();
        }
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={loginStyle.view}>
            <ToastCustom isVisibleModal={isVisibleModal} setIsVisibleModal={setIsVisibleModal} resultState={resultState}/>
            <ScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1 }}>
                <Header />
                <View style={authStyle.form}>
                    <Text style={authStyle.title}>{data.login}</Text>
                
                    <FloatingLabelInput control={control} name="email" label={data.email} autoCapitalize="none" errors={errors}/>
                    <FloatingLabelInput control={control} name="password" label={data.password} secureTextEntry autoCapitalize="none" errors={errors}/>

                    <SubmitButton buttonText={data.login} onSubmit={onSubmit} handleSubmit={handleSubmit}/>

                    <Text style={loginStyle.linkText}>{data.toRegister}
                        <Text onPress={() => router.push("/login/Register")} style={loginStyle.link}>{data.register}</Text>
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
