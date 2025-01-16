import { Button, ButtonAppearance } from '~shared/ui/button';
import type { IProps } from './interfaces';
import { Icon, IconSet } from '~shared/ui/icon';

export function SetRaiting({ movieShort }: IProps) {
	return (
		<Button appearance={ButtonAppearance.rating}>
			<Icon src={IconSet.star} />
			{movieShort.ratingValue}
		</Button>
	);
}
