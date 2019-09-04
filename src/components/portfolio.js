import React, { useState } from 'react';
import PortfolioItem from './PortfolioItem';

export const Portfolio = () => {
  const initialState = [
    {
      title: 'Catbook',
      url: 'http://www.catbook.se/',
      isLive: true,
      tags: ['PHP', 'JavaScript', 'CSS', 'SQL'],
      enlargen: 'enlarge',
      text: [
        'WORK IN PROGRESS',
        'Semy finished(working version 1.0)',
        'Social media app for cats',
        'User creation,edit & delete. Login & logout',
        'Password encryption',
        'Validation on all the things'
      ]
    },
    {
      title: 'React-Calculator',
      url: '/React-Calculator',
      isLive: true,
      tags: ['React', 'JavaScript'],
      enlargen: '',
      text: [
        'A simple calculator app build with React and styled with SASS.',
        'The app makes use of the eval function that turns strings into javascript statements.',
        'Validation is implemented to avoid errors and stop malicious code from being run'
      ]
    },
    {
      title: 'Openstocks',
      url: 'http://www.openstocks.se/',
      isLive: false,
      tags: ['React', 'Node', 'Express', 'TS', 'Charts'],
      enlargen: '',
      text: [
        'WORK IN PROGRESS',
        'Fetches api data through an express server to avoid cors errors and hide api keys',
        'Data displayed in chart and table form'
      ]
    }
  ];
  const [portfolio, setPortfolio] = useState(initialState);

  const enlarge = e => {
    const index = parseInt(e.currentTarget.id, 10);
    const first = portfolio[0];
    portfolio[0] = portfolio[index];
    portfolio[index] = first;

    setPortfolio([...portfolio]);
  };
  return (
    <div className='portfolio'>
      <div className='portfolio__grid'>
        {portfolio.map((portfolioItem, index) => {
          return (
            <PortfolioItem
              key={index}
              id={index}
              portfolioItemData={portfolioItem}
              enlarge={enlarge}
            />
          );
        })}
      </div>
    </div>
  );
};
