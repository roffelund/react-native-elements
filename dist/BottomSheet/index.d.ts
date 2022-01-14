/// <reference types="react" />
import { BottomSheet, BottomSheetProps } from '@react-native-elements/base/dist/BottomSheet/BottomSheet';
export { BottomSheet };
export type { BottomSheetProps };
declare const _default: import("react").FunctionComponent<Omit<BottomSheetProps & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<BottomSheetProps & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>;
export default _default;
