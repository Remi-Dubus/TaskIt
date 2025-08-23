import type { Control, FieldErrors, FieldPath, SubmitHandler, UseFormHandleSubmit } from "react-hook-form";

export type envType = {
    FIREBASE_API_KEY: string;
    FIREBASE_AUTH_DOMAIN: string;
    FIREBASE_PROJECT_ID: string;
    FIREBASE_STORAGE_BUCKET: string;
    FIREBASE_MESSAGING_SENDER_ID: string;
    FIREBASE_APP_ID: string;
}

export type registerType = {
    email: string;
    password: string;
    confirmPassword: string;
}

export type loginType = {
    email: string;
    password: string;
}

export type floatingLabelInputType<T extends object> = {
    control: Control<T>;
    name: FieldPath<T>;
    label: string;
    autoCapitalize?: "none" | "sentences" | "words" | "characters";
    secureTextEntry?: boolean;
    errors: FieldErrors<T>;
}

export type buttonType<T extends object> = {
    buttonText: string;
    onSubmit: SubmitHandler<T>;
    handleSubmit: UseFormHandleSubmit<T>; 
}

export type taskType = {
    title: string;
    priority: number;
    date: Date;
    description?: string;
}

export type modalType = {
    isVisibleModal: boolean,
    setIsVisibleModal: (bool: boolean) => void 
}