/// <reference types="react" />
import { Divider, DividerProps } from '@react-native-elements/base/dist/Divider/Divider';
export { Divider };
export type { DividerProps };
declare const _default: import("react").FunctionComponent<Omit<import("react-native").ViewProps & {
    color?: string;
    inset?: boolean;
    insetType?: "left" | "right" | "middle";
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    subHeader?: string;
    subHeaderStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    orientation?: "vertical" | "horizontal";
    width?: number;
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    color?: string;
    inset?: boolean;
    insetType?: "left" | "right" | "middle";
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    subHeader?: string;
    subHeaderStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    orientation?: "vertical" | "horizontal";
    width?: number;
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>;
export default _default;
