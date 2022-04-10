import {NameSpace} from '../../const/const';
import {State} from '../../types/state';

const getIsReviewPosted = (state: State): boolean => state[NameSpace.reviews].isReviewPosted;

export { getIsReviewPosted };

