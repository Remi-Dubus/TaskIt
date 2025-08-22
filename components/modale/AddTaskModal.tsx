import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { KeyboardAvoidingView, Modal, Platform, ScrollView, Text, View } from "react-native";

import { showToast } from "@/utils/toast";
import { addTaskValidation } from "@/utils/validation";
import { createTask } from "../../services/task/createTask";
import DatePicker from "../input/DatePicker";
import FloatingLabelInput from "../input/FloatingLabelInput";
import FloatingLabelTextArea from "../input/FloatingLabelTextArea";
import PriorityButton from "../input/PriorityButton";
import Button from "../ui/Button";

import { taskType } from "@/types/definition";
import data from "../../assets/data/addTask.json";
import { addTaskModalStyle } from "./addTaskModalStyle";

export default function AddTaskModale({ isVisibleModal, setIsVisibleModal }: { isVisibleModal: boolean, setIsVisibleModal: (bool: boolean) => void }) {
    // Call zod schema for resolver
    const validation = addTaskValidation;
    
    // Call React-Hook-Form with zodResolver
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<taskType>({
        resolver: zodResolver(validation),
        defaultValues: {
            priority: 1
        }
    });
    
    // Submit the data to database
    const onSubmit = async (data: taskType) => {
        const result = await createTask(data);

        if(!result?.success) {
            result && showToast("error", result?.message);
        } else {
            result && showToast("success", result?.message);
            reset;
            setIsVisibleModal(false);
        }
    }

    return (
        <Modal
            visible={isVisibleModal}
            transparent={true}
            animationType="slide" 
            onRequestClose={() => setIsVisibleModal(false)}
        >   
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1}}>
                <ScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1 }}>
                    <View style={addTaskModalStyle.view}>
                        <Text style={addTaskModalStyle.title}>{data.title}</Text>
                        
                        <View style={addTaskModalStyle.dateAndPriority}>
                            <DatePicker control={control} errors={errors}/>
                            <PriorityButton control={control} errors={errors} />    
                        </View>
                        
                        <FloatingLabelInput control={control} name="title" label={data.title} errors={errors}/>
                        <FloatingLabelTextArea control={control} name="description" label={data.description} errors={errors}/>

                        <Button buttonText={data.validateButton} onSubmit={onSubmit} handleSubmit={handleSubmit}/>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Modal>
    )
}