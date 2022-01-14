/// <reference types="react" />
import { SearchBar, SearchBarProps } from '@react-native-elements/base/dist/SearchBar/SearchBar';
import { SearchBarAndroidProps } from '@react-native-elements/base/dist/SearchBar/SearchBar-android';
import { SearchBarIosProps } from '@react-native-elements/base/dist/SearchBar/SearchBar-ios';
import { SearchBarDefaultProps } from '@react-native-elements/base/dist/SearchBar/SearchBar-default';
export { SearchBar };
export type { SearchBarProps, SearchBarAndroidProps, SearchBarDefaultProps, SearchBarIosProps, };
declare const _default: import("react").FunctionComponent<Omit<SearchBarProps & {
    theme?: import("packages/base/dist/helpers").Theme;
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<SearchBarProps & {
    theme?: import("packages/base/dist/helpers").Theme;
}>;
export default _default;
