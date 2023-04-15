import { render, screen } from '@testing-library/react';

import Input from './Input';

describe('Input component', () => {
  it('should be in the document', () => {
    render(
      <Input
        type="text"
        id="description"
        name="description"
        defaultValue="Loren ipsum"
      />,
    );

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toBeInTheDocument();
  });

  it('should contain the placeholder "Write a description"', () => {
    render(
      <Input
        type="text"
        id="description"
        name="description"
        placeholder="Write a description"
      />,
    );

    const inputElement = screen.getByPlaceholderText('Write a description');
    expect(inputElement).toBeTruthy();
  });

  it('should check if component attributes "id", "name" and "aria-invalid" are present', () => {
    render(
      <Input
        type="text"
        id="description"
        name="description"
        aria-invalid="false"
        placeholder="Write a description"
      />,
    );

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toHaveAttribute('id', 'description');
    expect(inputElement).toHaveAttribute('name', 'description');
    expect(inputElement).toHaveAttribute('aria-invalid', 'false');
  });
});
