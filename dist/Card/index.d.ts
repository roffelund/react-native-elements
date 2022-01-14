/// <reference types="react" />
import { RneFunctionComponent } from '../helpers';
import { CardBaseProps } from '@react-native-elements/base/dist/Card/Card';
declare const ThemedCardDivider: import("react").FunctionComponent<Omit<import("react-native").ViewProps & {
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
declare const ThemedCardFeaturedSubtitle: import("react").FunctionComponent<Omit<import("packages/base/dist/Text").TextProps & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("packages/base/dist/Text").TextProps & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>;
declare const ThemedCardFeaturedTitle: import("react").FunctionComponent<Omit<import("packages/base/dist/Text").TextProps & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("packages/base/dist/Text").TextProps & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>;
declare const ThemedCardImage: import("react").FunctionComponent<Omit<import("react-native").ImageProps & Partial<{
    pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
} & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & {
    Component?: typeof import("react").Component;
    onPress?(): void;
    onLongPress?(): void;
    ImageComponent?: typeof import("react").Component;
    PlaceholderContent?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    childrenContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    placeholderStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    transition?: boolean;
    transitionDuration?: number;
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").ImageProps & Partial<{
    pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
} & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & {
    Component?: typeof import("react").Component;
    onPress?(): void;
    onLongPress?(): void;
    ImageComponent?: typeof import("react").Component;
    PlaceholderContent?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    childrenContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    placeholderStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    transition?: boolean;
    transitionDuration?: number;
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>;
declare const ThemedCardTitle: import("react").FunctionComponent<Omit<import("packages/base/dist/Text").TextProps & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("packages/base/dist/Text").TextProps & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>;
export declare type CardProps = RneFunctionComponent<CardBaseProps> & {
    Divider: typeof ThemedCardDivider;
    Image: typeof ThemedCardImage;
    Title: typeof ThemedCardTitle;
    FeaturedTitle: typeof ThemedCardFeaturedTitle;
    FeaturedSubTitle: typeof ThemedCardFeaturedSubtitle;
};
export declare const Card: CardProps;
declare const ThemedCard: (import("react").FunctionComponent<Omit<CardBaseProps & Partial<import("../config").ThemeProps<CardBaseProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<CardBaseProps & Partial<import("../config").ThemeProps<CardBaseProps>>>) & {
    Divider: import("react").FunctionComponent<Omit<import("react-native").ViewProps & {
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
    Image: import("react").FunctionComponent<Omit<import("react-native").ImageProps & Partial<{
        pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
    } & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & {
        Component?: typeof import("react").Component;
        onPress?(): void;
        onLongPress?(): void;
        ImageComponent?: typeof import("react").Component;
        PlaceholderContent?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        childrenContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        placeholderStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        transition?: boolean;
        transitionDuration?: number;
    } & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").ImageProps & Partial<{
        pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
    } & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & {
        Component?: typeof import("react").Component;
        onPress?(): void;
        onLongPress?(): void;
        ImageComponent?: typeof import("react").Component;
        PlaceholderContent?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        childrenContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        placeholderStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        transition?: boolean;
        transitionDuration?: number;
    } & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }>;
    Title: import("react").FunctionComponent<Omit<import("packages/base/dist/Text").TextProps & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("packages/base/dist/Text").TextProps & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }>;
    FeaturedTitle: import("react").FunctionComponent<Omit<import("packages/base/dist/Text").TextProps & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("packages/base/dist/Text").TextProps & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }>;
    FeaturedSubtitle: import("react").FunctionComponent<Omit<import("packages/base/dist/Text").TextProps & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("packages/base/dist/Text").TextProps & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }>;
};
export default ThemedCard;
