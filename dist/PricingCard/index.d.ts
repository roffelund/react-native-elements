/// <reference types="react" />
import { PricingCard, PricingCardProps } from '@react-native-elements/base/dist/PricingCard/PricingCard';
export { PricingCard };
export type { PricingCardProps };
declare const _default: import("react").FunctionComponent<Omit<PricingCardProps & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<PricingCardProps & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>;
export default _default;
