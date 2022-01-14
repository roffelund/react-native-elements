/// <reference types="react" />
import { Slider, SliderProps } from '@react-native-elements/base/dist/Slider/Slider';
export { Slider };
export type { SliderProps };
declare const _default: import("react").FunctionComponent<Omit<SliderProps & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<SliderProps & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>;
export default _default;
