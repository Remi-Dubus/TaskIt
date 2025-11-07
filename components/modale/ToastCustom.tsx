import { COLORS } from "@/styles/themes";
import { modalType, toastType } from "@/types/definition";
import { useEffect, useRef } from "react";
import { Animated, Text } from "react-native";
import { toastCustomStyle } from "./toastCustomStyle";

export default function ToastCustom({
    isVisibleModal,
    setIsVisibleModal,
    resultState,
}: modalType & toastType) {
    // Begin state: top and invisible
    const slideAnimation = useRef(new Animated.Value(-50)).current;
    const opacityAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (isVisibleModal) {
            // Start animation: slide and opacity
            Animated.parallel([
                Animated.timing(slideAnimation, {
                    toValue: 0,
                    duration: 400,
                    useNativeDriver: true,
                }),
                Animated.timing(opacityAnimation, {
                    toValue: 1,
                    duration: 400,
                    useNativeDriver: true,
                }),
            ]).start();

            // Delay before animation end
            const timer = setTimeout(() => {
                setIsVisibleModal(false);
            }, 1600);

            return () => clearTimeout(timer);
        } else {
            // End of animation
            Animated.parallel([
                Animated.timing(slideAnimation, {
                    toValue: -50,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(opacityAnimation, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [isVisibleModal]);

    const backgroundColor = resultState?.type === "warning"
        ? COLORS.orange
        : resultState?.type === "error"
            ? COLORS.red
            : resultState?.type === "success"
                ? COLORS.green
                : COLORS.darkGrey;

    const message = resultState?.type === "warning"
        ? `⚠ ${resultState?.message}`
        : resultState?.type === "error"
            ? `✖ ${resultState?.message}`
            : resultState?.type === "success"
                ? `✔ ${resultState?.message}`
                : resultState?.message;

    return (
        <Animated.View
            style={[
                toastCustomStyle.view,
                {
                    backgroundColor,
                    opacity: opacityAnimation,
                    transform: [{ translateY: slideAnimation }],
                },
            ]}
        >
            <Text style={toastCustomStyle.text}>{message}</Text>
        </Animated.View>
    );
};
