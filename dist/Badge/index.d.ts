/// <reference types="react" />
import { Badge, BadgeProps } from '@react-native-elements/base/dist/Badge/Badge';
import { withBadge } from '@react-native-elements/base/dist/Badge/withBadge';
export { Badge, withBadge };
export type { BadgeProps };
declare const _default: import("react").FunctionComponent<Omit<{
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    badgeStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    textProps?: import("react-native").TextProps;
    textStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    value?: import("react").ReactNode;
    Component?: typeof import("react").Component;
    status?: "primary" | "success" | "warning" | "error";
} & Partial<{
    pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
} & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<{
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    badgeStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    textProps?: import("react-native").TextProps;
    textStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    value?: import("react").ReactNode;
    Component?: typeof import("react").Component;
    status?: "primary" | "success" | "warning" | "error";
} & Partial<{
    pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
} & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>;
export default _default;
