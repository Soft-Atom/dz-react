import { ReactNode } from 'react';
import { MovieTypes } from '~entities/movie';

export interface IProps {
	movieShort: MovieTypes.TMovieShort;
	ratingAction: ReactNode;
	favoriteAction: ReactNode;
}
