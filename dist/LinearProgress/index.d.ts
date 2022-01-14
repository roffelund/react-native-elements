/// <reference types="react" />
import { LinearProgress, LinearProgressProps } from '@react-native-elements/base/dist/LinearProgress/LinearProgress';
export { LinearProgress };
export type { LinearProgressProps };
declare const _default: (import("react").FunctionComponent<Omit<import("react-native").ViewProps & {
    value?: number;
    variant?: "indeterminate" | "determinate";
    color?: string;
    trackColor?: string;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    animation?: boolean | {
        duration?: number;
    };
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    value?: number;
    variant?: "indeterminate" | "determinate";
    color?: string;
    trackColor?: string;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    animation?: boolean | {
        duration?: number;
    };
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>) & {
    INDETERMINATE: "indeterminate" | "determinate";
    DETERMINATE: "indeterminate" | "determinate";
};
/**
 * ### Linear Progress
 *
 * Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates. They communicate an app’s state and indicate available actions, such as whether users can navigate away from the current screen.
 *
 * Usage ```<LinearProgress variant={LinearProgress.INDETERMINATE}  />```
 *
 * [API Documentation](https://reactnativeelements.com/docs/linearProgress)
 */
export default _default;
