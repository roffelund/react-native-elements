/// <reference types="react" />
import { CheckBox, CheckBoxProps } from '@react-native-elements/base/dist/CheckBox/CheckBox';
export { CheckBox };
export type { CheckBoxProps };
declare const _default: import("react").FunctionComponent<Omit<import("react-native").PressableProps & import("packages/base/dist/CheckBox/components/CheckBoxIcon").CheckBoxIconProps & {
    Component?: typeof import("react").Component;
    iconRight?: boolean;
    title?: string | import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>;
    titleProps?: import("react-native").TextProps;
    center?: boolean;
    right?: boolean;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    wrapperStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    textStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    checkedTitle?: string;
    fontFamily?: string;
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").PressableProps & import("packages/base/dist/CheckBox/components/CheckBoxIcon").CheckBoxIconProps & {
    Component?: typeof import("react").Component;
    iconRight?: boolean;
    title?: string | import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>;
    titleProps?: import("react-native").TextProps;
    center?: boolean;
    right?: boolean;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    wrapperStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    textStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    checkedTitle?: string;
    fontFamily?: string;
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>;
export default _default;
