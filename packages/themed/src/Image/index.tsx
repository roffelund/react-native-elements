import { Image as ImageNative } from 'react-native';
import { withTheme } from '../config';
import {
  Image,
  ImageProps,
} from '@react-native-elements/base/dist/Image/Image';

export { Image };
export type { ImageProps };

const ThemedImage = Object.assign(withTheme(Image, 'Image'), {
  getSize: ImageNative.getSize,
  getSizeWithHeaders: ImageNative.getSizeWithHeaders,
  prefetch: ImageNative.prefetch,
  abortPrefetch: ImageNative.abortPrefetch,
  queryCache: ImageNative.queryCache,
  resolveAssetSource: ImageNative.resolveAssetSource,
});

export default ThemedImage;
