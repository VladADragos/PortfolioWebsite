import React, { Component, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioItem = props => {
  const { id, portfolioItemData, enlarge } = props;

  const { title, text, isLive, tags, url, enlargen } = portfolioItemData;

  console.log(id == 0);
  return (
    <div
      className={id == '0' ? `portfolio-item enlarge` : `portfolio-item `}
      onClick={enlarge}
      id={`${id}`}>
      <img
        className='portfolio-item__image'
        src={require(`../images/${title}.png`)}
        alt=''
      />
      <div className='portfolio-item__info-container'>
        <div className='portfolio-item___text-container'>
          <h2 className='portfolio-item__title'>{title}</h2>
          {text.map(p => {
            return (
              <p key={p} className='portfolio-item__paragraph'>
                {' '}
                {p}
              </p>
            );
          })}
        </div>
        <div className='portfolio-item__buttons-container'>
          <div className='portfolio-item__links-container'>
            {isLive && (
              <a href={url} className='portfolio-item__button' target='_blank'>
                View Demo
              </a>
            )}
            <a
              target='_blank'
              href={`https://github.com/VladADragos/${title}`}
              className='portfolio-item__button portfolio-item__button--github'>
              Github
            </a>
          </div>
          <div className='portfolio-item__tags-container'>
            {tags.map(tag => (
              <p key={tag} className='portfolio-item__tag'>
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
      <p className='view-button'>VIEW</p>
    </div>
  );
};

export default PortfolioItem;
