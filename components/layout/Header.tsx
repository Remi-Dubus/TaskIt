import { Image, Text, View } from 'react-native';
import { headerStyle } from './headerStyle';

import data from "@/assets/data/onboarding.json";

export default function Header() {
    return (
        <View style={headerStyle.view}>
            <Image
                source={require('../../assets/images/taskit-logo.png')}
                style={headerStyle.logo}
                resizeMode="contain"
            />
            <Text style={headerStyle.title}>{data.appTitle}</Text>
        </View>
    );
}