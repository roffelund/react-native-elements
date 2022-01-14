import { Avatar, } from '@react-native-elements/base/dist/Avatar/Avatar';
import { Accessory, } from '@react-native-elements/base/dist/Avatar/Avatar.Accessory';
import { withTheme } from '../config';
const ThemedAccessory = withTheme(Accessory, 'Accessory');
const ThemedAvatar = Object.assign(withTheme(Avatar, 'Avatar'), {
    Accessory: ThemedAccessory,
});
export { Avatar, Accessory };
export default ThemedAvatar;
