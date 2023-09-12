import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { axe, toHaveNoViolations } from 'jest-axe';
import StoriesList from './components/list/list';

expect.extend(toHaveNoViolations);

test('Stories should be accessible', async () => {
  const { container } = render(<StoriesList />);

  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
