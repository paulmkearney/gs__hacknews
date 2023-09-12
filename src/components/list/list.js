import React, { useEffect, useState } from 'react';
import './list.scss';
import NewsItem from '../date.js';
import Button from '../button/button';

function StoriesList() {
  const [topStoryIds, setTopStoryIds] = useState([]);
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    const apiUrl =
      'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setTopStoryIds(data);

        const top30StoryIds = data.slice(0, 30);
        const storyPromises = top30StoryIds.map(id => {
          return fetch(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
          ).then(response => response.json());
        });

        return Promise.all(storyPromises);
      })
      .then(stories => {
        setTopStories(stories);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="list__container">
      <ol className="list__stories">
        {topStories.map((story, index) => (
          <li key={story.id} data-index={index + 1}>
            <div className="flex__cell flex__column cell__main">
              <a
                className="list__link link__bold link__text"
                href={story.url}
                target="_blank"
              >
                {story.title}
              </a>
              <p className="list__by">
                {story.score} points by{' '}
                <a href="" className="list__link">
                  {story.by}
                </a>{' '}
                <NewsItem timestamp={story.time} />
              </p>
              <a href="#" className="list__link">
                {story.descendants} comments
              </a>
            </div>
            <div className="flex__cell flex__row flex__end item__controls cell__secondary">
              <Button text="Hide" srtext={story.title} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default StoriesList;
