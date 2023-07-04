import type {StyleProp, ViewStyle} from 'react-native';

interface IProgressBar {
  style?: StyleProp<ViewStyle>;
  /**
   * Progress value (between 0 and 1).
   */
  progress?: number;
  /**
   * Color of the progress bar. The background color will be calculated based on this but you can change it by passing `backgroundColor` to `style` prop.
   */
  color?: string;
}

export type {IProgressBar};
