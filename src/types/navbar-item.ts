import type { ButtonColor } from './button-color';
import type { ButtonShape } from './button-shape';
import type { ButtonTag } from './button-tag';

export interface NavbarItemType {
  name: string;
  tag: ButtonTag;
  type?: 'button' | 'submit';
  route?: string;
  buttonColor?: ButtonColor;
  buttonShape?: ButtonShape;
  action?: () => void;
}
