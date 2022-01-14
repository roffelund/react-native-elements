/// <reference types="react" />
import { FAB, FABProps } from '@react-native-elements/base/dist/FAB/FAB';
export { FAB };
export type { FABProps };
declare const _default: import("react").FunctionComponent<Omit<import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
    title?: string | import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>;
    titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    titleProps?: import("packages/base/dist/Text").TextProps;
    buttonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    type?: "solid" | "clear" | "outline";
    loading?: boolean;
    loadingStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    loadingProps?: import("react-native").ActivityIndicatorProps;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    icon?: import("packages/base/dist/Icon").IconNode;
    iconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    iconRight?: boolean;
    linearGradientProps?: object;
    TouchableComponent?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    disabled?: boolean;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledTitleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    raised?: boolean;
    iconPosition?: "bottom" | "left" | "right" | "top";
} & {
    color?: string;
    size?: "small" | "large";
    placement?: "left" | "right";
    visible?: boolean;
    upperCase?: boolean;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
    title?: string | import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>;
    titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    titleProps?: import("packages/base/dist/Text").TextProps;
    buttonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    type?: "solid" | "clear" | "outline";
    loading?: boolean;
    loadingStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    loadingProps?: import("react-native").ActivityIndicatorProps;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    icon?: import("packages/base/dist/Icon").IconNode;
    iconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    iconRight?: boolean;
    linearGradientProps?: object;
    TouchableComponent?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    disabled?: boolean;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledTitleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    raised?: boolean;
    iconPosition?: "bottom" | "left" | "right" | "top";
} & {
    color?: string;
    size?: "small" | "large";
    placement?: "left" | "right";
    visible?: boolean;
    upperCase?: boolean;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>;
export default _default;
