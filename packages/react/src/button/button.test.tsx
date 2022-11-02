import { render, screen } from '@testing-library/react';
import { Button } from './button';
import Icon from './mock-icon';
import { expect, it, test } from 'vitest';

it('should render children', () => {
  // arrange
  const children = 'Button';

  // act
  render(<Button>Button</Button>);
  const button = screen.getByRole('button');

  // assert
  expect(button).toHaveTextContent(children);
});

it('should have type=button', () => {
  // act
  render(<Button>Button</Button>);
  const button = screen.getByRole('button');

  // assert
  expect(button).toHaveAttribute('type', 'button');
});

it('should have class from className prop', () => {
  // arrange
  const stubClass = 'stub';

  // act
  render(<Button className={stubClass}>Button</Button>);
  const button = screen.getByRole('button');

  // assert
  expect(button).toHaveClass(stubClass);
});

test('renders with icons', () => {
  const { getByText } = render(
    <>
      <Button leftIcon={<Icon />}>Email</Button>
      <Button rightIcon={<Icon />}>Arrow Forward</Button>
    </>
  );
  expect(getByText('Email')).toBeTruthy();
  expect(getByText('Arrow Forward')).toBeTruthy();
});

test('should be disabled when loading', () => {
  render(<Button loading>Email</Button>);
  const button = screen.getByRole('button');
  expect(button).toBeDisabled();
});

test('shows spinner if isLoading', () => {
  render(<Button loading>Email</Button>);

  // children text is hidden
  expect(screen.queryByText(/Email/i)).not.toBeInTheDocument();

  // "Loading..." visually hidden label shown
  screen.getByText('Loading...');
});

test('shows spinner and loading text if isLoading and loadingText', () => {
  const { rerender } = render(
    <Button loading loadingText="Submitting" spinner={<>Spinner at start</>}>
      Submit
    </Button>
  );

  // children text is replaced by `loadingText`
  screen.getByText('Submitting');
  expect(screen.queryByText('Submit')).toBeNull();

  // Confirm spinner position
  expect(screen.getByText(/Spinner at start/i)).toHaveClass('mr-2');

  rerender(
    <Button
      loading
      spinnerPlacement="end"
      loadingText="Test if spinner placement"
      spinner={<>Spinner at end</>}
    >
      Submit
    </Button>
  );

  expect(screen.getByText(/Spinner at end/i)).toHaveClass('ml-2');

  // Should be able to use a custom spinner
  rerender(
    <Button
      loading
      spinnerPlacement="end"
      loadingText="Test if spinner placement"
      spinner={<>FakeSpinner</>}
    >
      Submit
    </Button>
  );
  expect(screen.queryByText(/FakeSpinner/i)).toBeInTheDocument();
});

test('Should be disabled', () => {
  const { getByRole } = render(<Button disabled>I'm a invalid button</Button>);
  const button = getByRole('button');
  expect(button).toBeDisabled();
});
