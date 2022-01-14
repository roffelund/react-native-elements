/// <reference types="react" />
import { Avatar, AvatarProps } from '@react-native-elements/base/dist/Avatar/Avatar';
import { Accessory, AccessoryProps } from '@react-native-elements/base/dist/Avatar/Avatar.Accessory';
declare const ThemedAvatar: (import("react").FunctionComponent<Omit<{
    Component?: typeof import("react").Component;
    onPress?(): void;
    onLongPress?(): void;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    source?: import("react-native").ImageSourcePropType;
    avatarStyle?: import("react-native").ImageStyle;
    rounded?: boolean;
    title?: string;
    titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    overlayContainerStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    activeOpacity?: number;
    icon?: import("packages/base/dist/Icon").IconObject & {
        iconStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    };
    iconStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    size?: number | "small" | "medium" | "large" | "xlarge";
    placeholderStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    renderPlaceholderContent?: import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>;
    imageProps?: Partial<import("packages/base/dist/Image").ImageProps>;
    ImageComponent?: import("react").ComponentClass<{}, any>;
} & Partial<{
    pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
} & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<{
    Component?: typeof import("react").Component;
    onPress?(): void;
    onLongPress?(): void;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    source?: import("react-native").ImageSourcePropType;
    avatarStyle?: import("react-native").ImageStyle;
    rounded?: boolean;
    title?: string;
    titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    overlayContainerStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    activeOpacity?: number;
    icon?: import("packages/base/dist/Icon").IconObject & {
        iconStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    };
    iconStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    size?: number | "small" | "medium" | "large" | "xlarge";
    placeholderStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    renderPlaceholderContent?: import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>;
    imageProps?: Partial<import("packages/base/dist/Image").ImageProps>;
    ImageComponent?: import("react").ComponentClass<{}, any>;
} & Partial<{
    pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
} & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>) & {
    Accessory: import("react").FunctionComponent<Omit<Partial<import("packages/base/dist/Icon").IconProps> & Partial<import("packages/base/dist/Image").ImageProps> & {
        underlayColor?: import("react-native").ColorValue;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    } & Partial<{
        pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
    } & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<Partial<import("packages/base/dist/Icon").IconProps> & Partial<import("packages/base/dist/Image").ImageProps> & {
        underlayColor?: import("react-native").ColorValue;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    } & Partial<{
        pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
    } & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }>;
};
export { Avatar, Accessory };
export type { AccessoryProps, AvatarProps };
export default ThemedAvatar;
