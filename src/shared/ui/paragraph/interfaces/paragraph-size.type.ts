import { ParagraphSizes } from '../paragraph-sizes.constant';

export type TParagraphSize =
	(typeof ParagraphSizes)[keyof typeof ParagraphSizes];
