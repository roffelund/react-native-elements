/// <reference types="react" />
import { RneFunctionComponent } from '../helpers';
import { TabViewBaseProps } from '@react-native-elements/base/dist/TabView/TabView';
import { TabViewItemProps } from '@react-native-elements/base/dist/TabView/TabView.Item';
declare const ThemedTabViewItem: import("react").FunctionComponent<Omit<import("react-native").ViewProps & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    theme?: {
        colors: import("packages/base/dist/helpers/colors").Colors;
    };
}>;
export declare type TabViewProps = RneFunctionComponent<TabViewBaseProps> & {
    Item: typeof ThemedTabViewItem;
};
export declare const TabView: TabViewProps;
export type { TabViewBaseProps, TabViewItemProps };
export declare const ThemedTabView: (import("react").FunctionComponent<Omit<TabViewBaseProps & Partial<import("../config").ThemeProps<TabViewBaseProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<TabViewBaseProps & Partial<import("../config").ThemeProps<TabViewBaseProps>>>) & {
    Item: import("react").FunctionComponent<Omit<import("react-native").ViewProps & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
        theme?: {
            colors: import("packages/base/dist/helpers/colors").Colors;
        };
    }>;
};
export default ThemedTabView;
