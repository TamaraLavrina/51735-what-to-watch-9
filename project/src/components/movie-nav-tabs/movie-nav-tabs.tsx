import { useState } from 'react';
import { CardType, ReviewType } from '../../types/types';
import { TABS } from '../../const/const';
import OverviewTab from '../movie-tabs/overview-tab';
import DetailsTab from '../movie-tabs/details-tab';
import ReviewTab from '../movie-tabs/review-tab';
import cn from 'classnames';

type MovieNavTabsProps = {
  movie: CardType;
  reviews: ReviewType[];
};

function MovieNavTabs({ movie, reviews }: MovieNavTabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>(TABS[0]);

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderTab = () => {
    switch (activeTab) {
      case 'Overview':
        return <OverviewTab movie={movie} />;
      case 'Details':
        return <DetailsTab movie={movie} />;
      case 'Reviews':
        return <ReviewTab  reviews={reviews}/>;
      default:
        throw new Error(`Unknown tab type ${activeTab}`);
    }
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {TABS.map((tab: string) => (
            <li
              key={tab}
              className={cn('film-nav__item', {
                'film-nav__item--active': activeTab === tab,
              })}
            >
              <a
                href="/#"
                className="film-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  handleClick(tab);
                }}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {renderTab()}
    </>
  );
}
export default MovieNavTabs;
