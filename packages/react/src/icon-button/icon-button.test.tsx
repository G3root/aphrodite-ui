import { render, screen } from '@testing-library/react';
import { IconButton } from './icon-button';
import Icon from '../mocks/mock-icon';

it('should render icon button with aria-label', () => {
  // arrange
  const label = 'Button';

  // act
  render(<IconButton icon={<Icon />} aria-label={label} />);
  const button = screen.getByRole('button');

  // assert
  expect(button).toHaveAttribute('aria-label', label);
});
