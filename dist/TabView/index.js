import { withTheme } from '../config';
import { TabViewBase, } from '@react-native-elements/base/dist/TabView/TabView';
import { TabViewItem, } from '@react-native-elements/base/dist/TabView/TabView.Item';
const ThemedTabViewItem = withTheme(TabViewItem, 'TabViewItem');
export const TabView = Object.assign(TabViewBase);
export const ThemedTabView = Object.assign(withTheme(TabView, 'TabView'), {
    Item: ThemedTabViewItem,
});
export default ThemedTabView;
