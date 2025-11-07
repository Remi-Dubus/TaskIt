import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";

import AccountMenuButton from "@/components/button/AccountMenuButton";
import FloatingLabelInput from "@/components/input/FloatingLabelInput";
import Header from "@/components/layout/Header";
import ToastCustom from "@/components/modale/ToastCustom";
import { profilSchema } from "@/utils/validation";

import data from "@/assets/data/auth.json";
import { getUserByEmail } from "@/services/user/userService";
import { authStyle } from "@/styles/authStyle";
import type { registerType, resultStateType } from "@/types/definition";

export default function Register() {
    // Call zod schema for resolver and check if password and confirmPassword is the same
    const validation = profilSchema.refine(
    (data) => data.password === data.confirmPassword,
    { path: ['confirmPassword'], message: 'Les mots de passe ne correspondent pas'}
    );

    // user state
    const [user, setUser] = useState<registerType | null>(null);

    // Call React-Hook-Form with zodResolver
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(validation),
        defaultValues: {
            pseudo: user?.pseudo ?? "",
            email: user?.email ?? "",
            password: "",
            confirmPassword: "",
        }
    });

    // is Edit mode state
    const [isEditInfo, setIsEditInfo] = useState<boolean>(false);

    // Toast state
    const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
    const [resultState, setResultState] = useState<resultStateType | null>(null);

    useEffect( () => {
        const fetchUser = async () => {
            const result = await getUserByEmail();
            if(result?.success && result.result) {
                setUser(result.result);
                reset({
                    pseudo: result.result.pseudo ?? "",
                    email: result.result.email ?? "",
                    password: "**********",
                    confirmPassword: "**********",
                });
            } 
            if(result?.message) {
                setResultState({ message: result?.message, type: "error" });
                setIsVisibleModal(true);
            }
        };
        fetchUser();
    }, [getUserByEmail]);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }} >
            <ToastCustom isVisibleModal={isVisibleModal} setIsVisibleModal={setIsVisibleModal} resultState={resultState}/>
            <AccountMenuButton />
            <ScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1 }}>
                <Header />
                
                <View style={[authStyle.form, !isEditInfo && { paddingBottom: 60}]}>
                    <Text style={authStyle.title}>{!isEditInfo ? data.profil : data.editAccount}</Text>
                
                    <FloatingLabelInput control={control} name="pseudo" isEditInfo={isEditInfo} label={data.pseudo} autoCapitalize="none" errors={errors}/>
                    <FloatingLabelInput control={control} name="email" isEditInfo={isEditInfo} label={data.email} autoCapitalize="none" errors={errors}/>
                    <FloatingLabelInput control={control} name="password" isEditInfo={isEditInfo} label={data.password} autoCapitalize="none" secureTextEntry errors={errors}/>
                    <FloatingLabelInput control={control} name="confirmPassword" isEditInfo={isEditInfo} label={data.confirmPassword} autoCapitalize="none" secureTextEntry errors={errors}/>

                </View>
            </ScrollView>

        </KeyboardAvoidingView>
    );
};
