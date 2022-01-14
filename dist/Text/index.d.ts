/// <reference types="react" />
import { Text, TextProps } from '@react-native-elements/base/dist/Text/Text';
export { Text };
export type { TextProps };
declare const _default: import("react").FunctionComponent<Omit<TextProps & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<TextProps & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>;
export default _default;
