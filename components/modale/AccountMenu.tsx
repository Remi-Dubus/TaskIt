import { Modal, Text, View } from "react-native";

import { modalType } from "@/types/definition";

import data from "../../assets/data/accountMenu.json";
import LogoutButton from "../button/accountButton/LogoutButton";
import { accountMenuStyle } from "./accountMenuStyle";

export default function AccountMenu({ isVisibleModal, setIsVisibleModal }: modalType) {
    return (
        <Modal
            visible={ isVisibleModal }
            transparent={false}
            animationType="slide" 
            onRequestClose={() => setIsVisibleModal(false)}
        >
            <View style={accountMenuStyle.view}>
                <Text style={accountMenuStyle.title}>{data.title}</Text>

                <View style={accountMenuStyle.buttons}>
                    <LogoutButton setIsVisibleModal={setIsVisibleModal} />
                </View>
            </View>
        </Modal>
    );
}