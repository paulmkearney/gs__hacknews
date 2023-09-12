import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StoriesList from './list';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get(
    'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        ])
      );
    }
  ),
  rest.get(
    'https://hacker-news.firebaseio.com/v0/item/:id.json?print=pretty',
    (req, res, ctx) => {
      const { id } = req.params;
      return res(
        ctx.status(200),
        ctx.json({
          id: parseInt(id, 10),
          title: `Story Title ${id}`,
          url: `https://example.com/story/${id}`,
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('gets top 30 stories', async () => {
  render(<StoriesList />);

  await waitFor(() => {
    expect(screen.getAllByRole('listitem')).toHaveLength(30);
  });
});
