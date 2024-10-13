import { ImgHTMLAttributes } from 'react';
import { TIconPath } from './icon-path.type';

export interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
	src: TIconPath;
}
