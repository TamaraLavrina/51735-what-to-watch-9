import { useState } from 'react';
import { CardType, TABS } from '../../mocks/mocks';
import OverviewTab from '../movie-tabs/movie-overview-tab';
import DetailsTab from '../movie-tabs/movie-details-tab';
import ReviewTab from '../movie-tabs/movie-review-tab';
import cn from 'classnames';

type MovieNavTabsProps = {
  movie: CardType;
};

function MovieNavTabs({ movie }: MovieNavTabsProps): JSX.Element {
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
        return <ReviewTab movie={movie} />;
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
