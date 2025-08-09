import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";

import { register } from "@/services/auth/auth";
import { showToast } from "@/utils/toast";
import { resolverSchema } from "@/utils/validation";
import FloatingLabelInput from "../../components/ui/FloatingLabelInput";

import { registerType } from "@/types/definition";
import data from "../../assets/data/auth.json";
import { registerStyle } from "./registerStyle";

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

    const onSubmit = async (data: registerType) => {
        const result = await register(data.email, data.password);
        
        if (!result.success) {
            showToast("error", result.message);
            reset();
        } else {
            showToast("success", result.message);
            reset();
            router.replace("/");
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={registerStyle.view} >
            <ScrollView keyboardShouldPersistTaps="handled" style={registerStyle.form}>

                <Text style={registerStyle.title}>{data.createAccount}</Text>
                
                <FloatingLabelInput control={control} name="email" label={data.email} errors={errors}/>
                <FloatingLabelInput control={control} name="password" label={data.password} secureTextEntry errors={errors}/>
                <FloatingLabelInput control={control} name="confirmPassword" label={data.confirmPassword} secureTextEntry errors={errors}/>

                <TouchableOpacity style={registerStyle.button} onPress={handleSubmit(onSubmit)}>
                    <Text style={registerStyle.buttonText}>{data.register}</Text>
                </TouchableOpacity>

            </ScrollView>
            <Toast position="top"/>
        </KeyboardAvoidingView>
    )
}
