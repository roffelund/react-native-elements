/// <reference types="react" />
import { DialogLoadingProps } from '@react-native-elements/base/dist/Dialog/Dialog.Loading';
import { DialogTitleProps } from '@react-native-elements/base/dist/Dialog/Dialog.Title';
import { DialogActionsProps } from '@react-native-elements/base/dist/Dialog/Dialog.Actions';
import { DialogBaseProps } from '@react-native-elements/base/dist/Dialog/Dialog';
export type { DialogBaseProps as DialogProps, DialogLoadingProps, DialogTitleProps, DialogActionsProps, };
declare const ThemedDialog: (import("react").FunctionComponent<Omit<Omit<import("packages/base/dist/Overlay").OverlayProps, "fullScreen"> & {
    children?: import("react").ReactNode;
    isVisible?: boolean;
    overlayStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<Omit<import("packages/base/dist/Overlay").OverlayProps, "fullScreen"> & {
    children?: import("react").ReactNode;
    isVisible?: boolean;
    overlayStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>) & {
    Loading: import("react").FunctionComponent<Omit<DialogLoadingProps & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<DialogLoadingProps & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }>;
    Title: import("react").FunctionComponent<Omit<DialogTitleProps & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<DialogTitleProps & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }>;
    Actions: import("react").FunctionComponent<Omit<DialogActionsProps & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<DialogActionsProps & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }>;
    Button: import("react").FunctionComponent<Omit<import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
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
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }>;
};
export default ThemedDialog;
