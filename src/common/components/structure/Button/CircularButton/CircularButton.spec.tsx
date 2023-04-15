import { render, screen } from '@testing-library/react';

import CircularButton from './CircularButton';

describe('CircularButton component', () => {
  it('should be in the document', () => {
    render(
      <CircularButton type="button" name="circular-button">
        Click here
      </CircularButton>,
    );

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toBeInTheDocument();
  });

  it('should contain child value "Click here"', () => {
    render(
      <CircularButton type="button" name="circular-button" disabled>
        Click here
      </CircularButton>,
    );

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveTextContent(/^Click here$/);
  });

  it('should check if the button is disabled', () => {
    render(
      <CircularButton type="button" name="circular-button" disabled>
        Click here
      </CircularButton>,
    );

    const buttonElement = screen.getByRole('button', {
      name: 'Click here',
    });

    expect(buttonElement).toBeDisabled();
  });

  it('should check focus', () => {
    render(
      <CircularButton type="button" name="circular-button">
        Click here
      </CircularButton>,
    );

    const buttonElement = screen.getByRole('button', {
      name: 'Click here',
    });

    buttonElement.focus();
    expect(buttonElement).toHaveFocus();
  });
});
