import { RneFunctionComponent } from '@react-native-elements/base/src/helpers';
export declare type CircularSliderProps = {
    trackRadius?: number;
    thumbRadius?: number;
    trackWidth?: number;
    value?: number;
    onChange?: (x: number) => any;
    trackColor?: string;
    thumbColor?: string;
    trackTintColor?: string;
    thumbTextColor?: string;
    thumbTextSize?: number;
    noThumb?: boolean;
    showText?: boolean;
    showThumbText?: boolean;
    textColor?: string;
    textSize?: number;
    minimumValue?: number;
    maximumValue?: number;
    maxAngle?: number;
    minAngle?: number;
};
declare const CircularSlider: RneFunctionComponent<CircularSliderProps>;
export default CircularSlider;