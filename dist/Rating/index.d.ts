/// <reference types="react" />
import { Rating, SwipeRatingProps } from '@react-native-elements/base/dist/Rating/Rating';
export { Rating };
export type { SwipeRatingProps };
declare const _default: import("react").FunctionComponent<Omit<import("react-native-ratings/dist/SwipeRating").SwipeRatingProps & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native-ratings/dist/SwipeRating").SwipeRatingProps & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>;
export default _default;
