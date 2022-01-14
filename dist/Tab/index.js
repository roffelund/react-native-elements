import { withTheme } from '../config';
import { TabBase, } from '@react-native-elements/base/dist/Tab/Tab';
import { TabItem, } from '@react-native-elements/base/dist/Tab/Tab.Item';
const ThemedTabItem = withTheme(TabItem, 'TabItem');
export const Tab = Object.assign(TabBase);
export const ThemedTab = Object.assign(withTheme(Tab, 'Tab'), {
    Item: ThemedTabItem,
});
export default ThemedTab;
