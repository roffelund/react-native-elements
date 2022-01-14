/// <reference types="react" />
import { RneFunctionComponent } from '../helpers';
import { TabBaseProps } from '@react-native-elements/base/dist/Tab/Tab';
import { TabItemProps } from '@react-native-elements/base/dist/Tab/Tab.Item';
declare const ThemedTabItem: import("react").FunctionComponent<Omit<import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
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
    active?: boolean;
    variant?: "primary" | "default";
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
    active?: boolean;
    variant?: "primary" | "default";
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>;
export declare type TabProps = RneFunctionComponent<TabBaseProps> & {
    Item: typeof ThemedTabItem;
};
export declare const Tab: TabProps;
export type { TabBaseProps, TabItemProps };
export declare const ThemedTab: (import("react").FunctionComponent<Omit<import("react-native").ViewProps & {
    value?: number;
    onChange?: (value: number) => void;
    disableIndicator?: boolean;
    indicatorStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    variant?: "primary" | "default";
} & Partial<import("../config").ThemeProps<TabBaseProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    value?: number;
    onChange?: (value: number) => void;
    disableIndicator?: boolean;
    indicatorStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    variant?: "primary" | "default";
} & Partial<import("../config").ThemeProps<TabBaseProps>>>) & {
    Item: import("react").FunctionComponent<Omit<import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
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
        active?: boolean;
        variant?: "primary" | "default";
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
        active?: boolean;
        variant?: "primary" | "default";
    } & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }>;
};
export default ThemedTab;
