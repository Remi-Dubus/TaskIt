import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";
import Toast from "react-native-toast-message";

import Button from "@/components/ui/Button";
import FloatingLabelInput from "@/components/ui/FloatingLabelInput";
import { login } from "@/services/auth/auth";
import { showToast } from "@/utils/toast";
import { accountValidationSchema } from "@/utils/validation";

import { loginType } from "@/types/definition";
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
    
    const onSubmit = async (data: loginType) => {
        const result = await login(data.email, data.password);
            
        if (!result.success) {
            showToast("error", result.message);
            reset();
        } else {
            showToast("success", result.message);
            reset();
            setTimeout( () => {
                router.replace("./register");
            },
            1600)
        }
    }
    
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={loginStyle.view}>
            <ScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1 }}>
                <View style={authStyle.form}>
                    <Text style={authStyle.title}>{data.login}</Text>
                
                    <FloatingLabelInput control={control} name="email" label={data.email} errors={errors}/>
                    <FloatingLabelInput control={control} name="password" label={data.password} errors={errors}/>

                    <Button buttonText={data.login} onSubmit={onSubmit} handleSubmit={handleSubmit}/>

                    <Text style={loginStyle.linkText}>{data.toRegister}
                        <Link href="./login/register" style={loginStyle.link}>{data.register}</Link>
                    </Text>
                </View>
            </ScrollView>
            <Toast position="top"/>
        </KeyboardAvoidingView>
    )
}
