/// <reference types="react" />
import { Switch, SwitchProps } from '@react-native-elements/base/dist/Switch/Switch';
export { Switch };
export type { SwitchProps };
declare const _default: import("react").FunctionComponent<Omit<import("react-native").SwitchProps & {
    color?: string;
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").SwitchProps & {
    color?: string;
} & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>;
export default _default;
