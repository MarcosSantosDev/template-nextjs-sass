import { render, screen } from '@testing-library/react';

import Error from './Error';

import '@/common/sass/main.scss';

describe('Error component', () => {
  const errorText = 'This field is required!';

  it(`should have a text "${errorText}" in the document`, () => {
    render(<Error>{errorText}</Error>);

    const elementError = screen.getByText(errorText);

    expect(elementError).toBeInTheDocument();
  });

  it(`should have a text "${errorText}" inside element`, () => {
    render(<Error>{errorText}</Error>);

    const elementError = screen.getByRole('alert');

    expect(elementError.innerHTML).toEqual(errorText);
  });
});
