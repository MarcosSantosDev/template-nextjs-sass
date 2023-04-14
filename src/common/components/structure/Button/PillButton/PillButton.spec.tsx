import { render, screen } from '@testing-library/react';

import PillButton from './PillButton';

describe('PillButton component', () => {
  it('should be in the document', () => {
    render(
      <PillButton type="button" name="pill-button">
        Click here
      </PillButton>,
    );

    const buttonElement = screen.getByRole('button', {
      name: 'Click here',
    });

    expect(buttonElement).toBeInTheDocument();
  });

  it('should check if the button is disabled', () => {
    render(
      <PillButton type="button" name="pill-button" disabled>
        Click here
      </PillButton>,
    );

    const buttonElement = screen.getByRole('button', {
      name: 'Click here',
    });

    expect(buttonElement).toBeDisabled();
  });

  it('should check focus', () => {
    render(
      <PillButton type="button" name="pill-button">
        Click here
      </PillButton>,
    );

    const buttonElement = screen.getByRole('button', {
      name: 'Click here',
    });

    buttonElement.focus();
    expect(buttonElement).toHaveFocus();
  });
});
