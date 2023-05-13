import type { ButtonColor } from './button-color';
import type { ButtonShape } from './button-shape';
import type { ButtonTag } from './button-tag';

export interface NavbarItemType {
  name: string;
  tag: ButtonTag;
  route?: string;
  buttonColor?: ButtonColor;
  buttonShape?: ButtonShape;
  action?: () => void;
}
