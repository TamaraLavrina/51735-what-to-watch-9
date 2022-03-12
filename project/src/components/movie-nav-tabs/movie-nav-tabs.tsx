import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CardType } from '../../mocks/mocks';
import OverviewTab from '../movie-tabs/movie-overview-tab';
import DetailsTab from '../movie-tabs/movie-details-tab';
import ReviewTab from '../movie-tabs/movie-review-tab';

type MovieNavTabsProps = {
  movie: CardType;
};

type MovieTabItemProps = {
  title: string;
};

function MovieNavTabs({ movie }: MovieNavTabsProps): JSX.Element {
  const movieTabs: MovieTabItemProps[] = [
    {
      title: 'Overview',
    },
    {
      title: 'Details',
    },
    {
      title: 'Reviews',
    },
  ];

  const [activeTab, setActiveTab] = useState<string>('Overview');

  const handleClick = (title: string) => {
    setActiveTab(title);
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {movieTabs.map((tab) => (
            <li
              key={tab.title}
              className={`film-nav__item ${
                activeTab === tab.title ? 'film-nav__item--active' : ''
              }`}
              onClick={() => handleClick(tab.title)}
            >
              <Link to={'#'} className="film-nav__link">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {activeTab === 'Overview' && <OverviewTab movie={movie} />}
      {activeTab === 'Details' && <DetailsTab movie={movie} />}
      {activeTab === 'Reviews' && <ReviewTab movie={movie} />}
    </>
  );
}
export default MovieNavTabs;
