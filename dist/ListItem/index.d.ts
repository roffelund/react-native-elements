/// <reference types="react" />
import { ListItemBaseProps } from '@react-native-elements/base/dist/ListItem/ListItem';
import { ListItemSwipeableProps } from '@react-native-elements/base/dist/ListItem/ListItem.Swipeable';
import { ListItemAccordionProps } from '@react-native-elements/base/dist/ListItem/ListItem.Accordion';
import { RneFunctionComponent } from '../helpers';
declare const ThemedListItemContent: import("react").FunctionComponent<Omit<import("packages/base/dist/Text").TextProps & {
    right?: boolean;
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("packages/base/dist/Text").TextProps & {
    right?: boolean;
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>;
declare const ThemedListItemChevron: import("react").FunctionComponent<Omit<Partial<import("packages/base/dist/Icon").IconProps> & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<Partial<import("packages/base/dist/Icon").IconProps> & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>;
declare const ThemedListItemInput: import("react").ForwardRefExoticComponent<Pick<import("react-native").TextInputProps & import("react").RefAttributes<import("react-native").TextInput> & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabled?: boolean;
    disabledInputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    inputContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    leftIcon?: import("packages/base/dist/Icon").IconNode;
    leftIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    rightIcon?: import("packages/base/dist/Icon").IconNode;
    rightIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    inputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    InputComponent?: import("react").ComponentType<{}> | import("react").ForwardRefExoticComponent<any>;
    errorProps?: object;
    errorStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    errorMessage?: string;
    label?: import("react").ReactNode;
    labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    labelProps?: object;
    renderErrorMessage?: boolean;
} & {
    theme?: import("packages/base/dist/helpers").Theme;
}, "disabled" | "containerStyle" | "theme" | keyof import("react-native").TextInputProps | "key" | "disabledInputStyle" | "inputContainerStyle" | "leftIcon" | "leftIconContainerStyle" | "rightIcon" | "rightIconContainerStyle" | "inputStyle" | "InputComponent" | "errorProps" | "errorStyle" | "errorMessage" | "label" | "labelStyle" | "labelProps" | "renderErrorMessage"> & import("react").RefAttributes<import("react-native").TextInput>> | import("react").FunctionComponent<Omit<Pick<import("react-native").TextInputProps & import("react").RefAttributes<import("react-native").TextInput> & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabled?: boolean;
    disabledInputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    inputContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    leftIcon?: import("packages/base/dist/Icon").IconNode;
    leftIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    rightIcon?: import("packages/base/dist/Icon").IconNode;
    rightIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    inputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    InputComponent?: import("react").ComponentType<{}> | import("react").ForwardRefExoticComponent<any>;
    errorProps?: object;
    errorStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    errorMessage?: string;
    label?: import("react").ReactNode;
    labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    labelProps?: object;
    renderErrorMessage?: boolean;
} & {
    theme?: import("packages/base/dist/helpers").Theme;
}, "disabled" | "containerStyle" | "theme" | keyof import("react-native").TextInputProps | "key" | "disabledInputStyle" | "inputContainerStyle" | "leftIcon" | "leftIconContainerStyle" | "rightIcon" | "rightIconContainerStyle" | "inputStyle" | "InputComponent" | "errorProps" | "errorStyle" | "errorMessage" | "label" | "labelStyle" | "labelProps" | "renderErrorMessage"> & import("react").RefAttributes<import("react-native").TextInput>, keyof import("../config").ThemeProps<T>>>;
declare const ThemedListItemCheckBox: import("react").FunctionComponent<Omit<import("react-native").PressableProps & import("packages/base/dist/CheckBox/components/CheckBoxIcon").CheckBoxIconProps & {
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
declare const ThemedListItemButtonGroup: import("react").FunctionComponent<Omit<Partial<{
    pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
} & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & {
    button?: object;
    Component?: typeof import("react").Component;
    onPress?(...args: any[]): void;
    buttons?: (string | import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>)[];
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    textStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    selectedTextStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    selectedButtonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    underlayColor?: string;
    selectedIndex?: number;
    selectedIndexes?: number[];
    activeOpacity?: number;
    onHideUnderlay?(): void;
    onShowUnderlay?(): void;
    setOpacityTo?: (value: number) => void;
    innerBorderStyle?: {
        color?: string;
        width?: number;
    };
    buttonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    buttonContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    selectMultiple?: boolean;
    disabled?: boolean | number[];
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledTextStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    disabledSelectedStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledSelectedTextStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    vertical?: boolean;
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<Partial<{
    pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
} & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & {
    button?: object;
    Component?: typeof import("react").Component;
    onPress?(...args: any[]): void;
    buttons?: (string | import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>)[];
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    textStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    selectedTextStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    selectedButtonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    underlayColor?: string;
    selectedIndex?: number;
    selectedIndexes?: number[];
    activeOpacity?: number;
    onHideUnderlay?(): void;
    onShowUnderlay?(): void;
    setOpacityTo?: (value: number) => void;
    innerBorderStyle?: {
        color?: string;
        width?: number;
    };
    buttonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    buttonContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    selectMultiple?: boolean;
    disabled?: boolean | number[];
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledTextStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    disabledSelectedStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledSelectedTextStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    vertical?: boolean;
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>;
declare const ThemedListItemTitle: import("react").FunctionComponent<Omit<import("react-native").TextProps & {
    right?: boolean;
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    right?: boolean;
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>;
declare const ThemedListItemSubtitle: import("react").FunctionComponent<Omit<import("react-native").TextProps & {
    right?: boolean;
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    right?: boolean;
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>;
declare const ThemedListItemSwipeable: import("react").FunctionComponent<Omit<import("react-native").PressableProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    linearGradientProps?: any;
    children?: any;
} & {
    leftContent?: import("react").ReactNode;
    rightContent?: import("react").ReactNode;
    leftStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    rightStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    leftWidth?: number;
    rightWidth?: number;
    onLeftSwipe?: () => any;
    onRightSwipe?: () => any;
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").PressableProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    linearGradientProps?: any;
    children?: any;
} & {
    leftContent?: import("react").ReactNode;
    rightContent?: import("react").ReactNode;
    leftStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    rightStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    leftWidth?: number;
    rightWidth?: number;
    onLeftSwipe?: () => any;
    onRightSwipe?: () => any;
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>;
declare const ThemedListItemAccordion: import("react").FunctionComponent<Omit<import("react-native").PressableProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    linearGradientProps?: any;
    children?: any;
} & {
    isExpanded?: boolean;
    icon?: import("packages/base/dist/Icon").IconNode;
    expandIcon?: import("packages/base/dist/Icon").IconNode;
    content?: import("react").ReactNode;
    noRotation?: boolean;
    noIcon?: boolean;
    animation?: boolean | {
        type?: "spring" | "timing";
        duration?: number;
    };
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").PressableProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    linearGradientProps?: any;
    children?: any;
} & {
    isExpanded?: boolean;
    icon?: import("packages/base/dist/Icon").IconNode;
    expandIcon?: import("packages/base/dist/Icon").IconNode;
    content?: import("react").ReactNode;
    noRotation?: boolean;
    noIcon?: boolean;
    animation?: boolean | {
        type?: "spring" | "timing";
        duration?: number;
    };
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>;
export declare type ListItemProps = RneFunctionComponent<ListItemBaseProps> & {
    Accordion: typeof ThemedListItemAccordion;
    Chevron: typeof ThemedListItemChevron;
    Content: typeof ThemedListItemContent;
    Input: typeof ThemedListItemInput;
    Title: typeof ThemedListItemTitle;
    Subtitle: typeof ThemedListItemSubtitle;
    Swipeable: typeof ThemedListItemSwipeable;
    CheckBox: typeof ThemedListItemCheckBox;
    ButtonGroup: typeof ThemedListItemButtonGroup;
};
export declare const ListItem: ListItemProps;
export type { ListItemAccordionProps, ListItemSwipeableProps };
declare const ThemedListItem: (import("react").FunctionComponent<Omit<import("react-native").PressableProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    linearGradientProps?: any;
    children?: any;
} & Partial<import("../config").ThemeProps<ListItemBaseProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").PressableProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    linearGradientProps?: any;
    children?: any;
} & Partial<import("../config").ThemeProps<ListItemBaseProps>>>) & {
    Accordion: import("react").FunctionComponent<Omit<import("react-native").PressableProps & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        isExpanded?: boolean;
        icon?: import("packages/base/dist/Icon").IconNode;
        expandIcon?: import("packages/base/dist/Icon").IconNode;
        content?: import("react").ReactNode;
        noRotation?: boolean;
        noIcon?: boolean;
        animation?: boolean | {
            type?: "spring" | "timing";
            duration?: number;
        };
    } & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").PressableProps & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        isExpanded?: boolean;
        icon?: import("packages/base/dist/Icon").IconNode;
        expandIcon?: import("packages/base/dist/Icon").IconNode;
        content?: import("react").ReactNode;
        noRotation?: boolean;
        noIcon?: boolean;
        animation?: boolean | {
            type?: "spring" | "timing";
            duration?: number;
        };
    } & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }>;
    Chevron: import("react").FunctionComponent<Omit<Partial<import("packages/base/dist/Icon").IconProps> & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<Partial<import("packages/base/dist/Icon").IconProps> & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }>;
    Content: import("react").FunctionComponent<Omit<import("packages/base/dist/Text").TextProps & {
        right?: boolean;
    } & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("packages/base/dist/Text").TextProps & {
        right?: boolean;
    } & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }>;
    Input: import("react").ForwardRefExoticComponent<Pick<import("react-native").TextInputProps & import("react").RefAttributes<import("react-native").TextInput> & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabled?: boolean;
        disabledInputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        inputContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftIcon?: import("packages/base/dist/Icon").IconNode;
        leftIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightIcon?: import("packages/base/dist/Icon").IconNode;
        rightIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        inputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        InputComponent?: import("react").ComponentType<{}> | import("react").ForwardRefExoticComponent<any>;
        errorProps?: object;
        errorStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        errorMessage?: string;
        label?: import("react").ReactNode;
        labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        labelProps?: object;
        renderErrorMessage?: boolean;
    } & {
        theme?: import("packages/base/dist/helpers").Theme;
    }, "disabled" | "containerStyle" | "theme" | keyof import("react-native").TextInputProps | "key" | "disabledInputStyle" | "inputContainerStyle" | "leftIcon" | "leftIconContainerStyle" | "rightIcon" | "rightIconContainerStyle" | "inputStyle" | "InputComponent" | "errorProps" | "errorStyle" | "errorMessage" | "label" | "labelStyle" | "labelProps" | "renderErrorMessage"> & import("react").RefAttributes<import("react-native").TextInput>> | import("react").FunctionComponent<Omit<Pick<import("react-native").TextInputProps & import("react").RefAttributes<import("react-native").TextInput> & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabled?: boolean;
        disabledInputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        inputContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftIcon?: import("packages/base/dist/Icon").IconNode;
        leftIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightIcon?: import("packages/base/dist/Icon").IconNode;
        rightIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        inputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        InputComponent?: import("react").ComponentType<{}> | import("react").ForwardRefExoticComponent<any>;
        errorProps?: object;
        errorStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        errorMessage?: string;
        label?: import("react").ReactNode;
        labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        labelProps?: object;
        renderErrorMessage?: boolean;
    } & {
        theme?: import("packages/base/dist/helpers").Theme;
    }, "disabled" | "containerStyle" | "theme" | keyof import("react-native").TextInputProps | "key" | "disabledInputStyle" | "inputContainerStyle" | "leftIcon" | "leftIconContainerStyle" | "rightIcon" | "rightIconContainerStyle" | "inputStyle" | "InputComponent" | "errorProps" | "errorStyle" | "errorMessage" | "label" | "labelStyle" | "labelProps" | "renderErrorMessage"> & import("react").RefAttributes<import("react-native").TextInput>, keyof import("../config").ThemeProps<T>>>;
    Title: import("react").FunctionComponent<Omit<import("react-native").TextProps & {
        right?: boolean;
    } & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        right?: boolean;
    } & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }>;
    Subtitle: import("react").FunctionComponent<Omit<import("react-native").TextProps & {
        right?: boolean;
    } & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        right?: boolean;
    } & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }>;
    Swipeable: import("react").FunctionComponent<Omit<import("react-native").PressableProps & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        leftContent?: import("react").ReactNode;
        rightContent?: import("react").ReactNode;
        leftStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftWidth?: number;
        rightWidth?: number;
        onLeftSwipe?: () => any;
        onRightSwipe?: () => any;
    } & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").PressableProps & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        leftContent?: import("react").ReactNode;
        rightContent?: import("react").ReactNode;
        leftStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftWidth?: number;
        rightWidth?: number;
        onLeftSwipe?: () => any;
        onRightSwipe?: () => any;
    } & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }>;
    CheckBox: import("react").FunctionComponent<Omit<import("react-native").PressableProps & import("packages/base/dist/CheckBox/components/CheckBoxIcon").CheckBoxIconProps & {
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
    ButtonGroup: import("react").FunctionComponent<Omit<Partial<{
        pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
    } & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & {
        button?: object;
        Component?: typeof import("react").Component;
        onPress?(...args: any[]): void;
        buttons?: (string | import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>)[];
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        textStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        selectedTextStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        selectedButtonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        underlayColor?: string;
        selectedIndex?: number;
        selectedIndexes?: number[];
        activeOpacity?: number;
        onHideUnderlay?(): void;
        onShowUnderlay?(): void;
        setOpacityTo?: (value: number) => void;
        innerBorderStyle?: {
            color?: string;
            width?: number;
        };
        buttonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        buttonContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        selectMultiple?: boolean;
        disabled?: boolean | number[];
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledTextStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        disabledSelectedStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledSelectedTextStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        vertical?: boolean;
    } & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<Partial<{
        pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
    } & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & {
        button?: object;
        Component?: typeof import("react").Component;
        onPress?(...args: any[]): void;
        buttons?: (string | import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>)[];
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        textStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        selectedTextStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        selectedButtonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        underlayColor?: string;
        selectedIndex?: number;
        selectedIndexes?: number[];
        activeOpacity?: number;
        onHideUnderlay?(): void;
        onShowUnderlay?(): void;
        setOpacityTo?: (value: number) => void;
        innerBorderStyle?: {
            color?: string;
            width?: number;
        };
        buttonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        buttonContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        selectMultiple?: boolean;
        disabled?: boolean | number[];
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledTextStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        disabledSelectedStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledSelectedTextStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        vertical?: boolean;
    } & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }>;
};
export default ThemedListItem;
