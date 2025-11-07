import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";

import SubmitButton from "@/components/button/SubmitButton";
import ToastCustom from "@/components/modale/ToastCustom";
import { register } from "@/services/auth/auth";
import { resolverSchema } from "@/utils/validation";
import FloatingLabelInput from "../../components/input/FloatingLabelInput";

import Header from "@/components/layout/Header";
import { authStyle } from "@/styles/authStyle";
import { registerType, resultStateType } from "@/types/definition";
import data from "../../assets/data/auth.json";

export default function Register() {
    // Call zod schema for resolver and check if password and confirmPassword is the same
    const validation = resolverSchema.refine(
    (data) => data.password === data.confirmPassword,
    { path: ['confirmPassword'], message: 'Les mots de passe ne correspondent pas'}
    );

    // Call React-Hook-Form with zodResolver
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(validation),
    });

    // Submit the data to database
    const router = useRouter();

    // Toast state
    const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
    const [resultState, setResultState] = useState<resultStateType | null>(null);

    const onSubmit = async (data: registerType) => {
        const result = await register(data.email, data.password);
        
        if (!result.success) {
            setResultState({ message: result.message, type: "error" });
            setIsVisibleModal(true);
            reset();
        } else {
            setResultState({ message: result.message, type: "success" });
            setIsVisibleModal(true);
            reset();
            setTimeout(() => router.replace("./login"), 2000);
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }} >
            <ToastCustom isVisibleModal={isVisibleModal} setIsVisibleModal={setIsVisibleModal} resultState={resultState}/>
            <ScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1 }}>
                <Header />
                <View style={authStyle.form}>
                    <Text style={authStyle.title}>{data.createAccount}</Text>
                
                    <FloatingLabelInput control={control} name="email" label={data.email} autoCapitalize="none" errors={errors}/>
                    <FloatingLabelInput control={control} name="password" label={data.password} autoCapitalize="none" secureTextEntry errors={errors}/>
                    <FloatingLabelInput control={control} name="confirmPassword" label={data.confirmPassword} autoCapitalize="none" secureTextEntry errors={errors}/>

                    <SubmitButton buttonText={data.register} onSubmit={onSubmit} handleSubmit={handleSubmit}/>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
