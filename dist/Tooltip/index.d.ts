/// <reference types="react" />
import { Tooltip, TooltipProps } from '@react-native-elements/base/dist/Tooltip/Tooltip';
export { Tooltip };
export type { TooltipProps };
declare const _default: import("react").FunctionComponent<Omit<TooltipProps & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<TooltipProps & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>;
export default _default;
