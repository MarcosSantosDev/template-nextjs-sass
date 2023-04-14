import { render, screen } from '@testing-library/react';

import TextArea from './TextArea';

describe('TextArea component', () => {
  it('should be in the document', () => {
    render(
      <TextArea
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
      <TextArea
        id="description"
        name="description"
        placeholder="Write a description"
      />,
    );

    const inputElement = screen.getByPlaceholderText('Write a description');
    expect(inputElement).toBeTruthy();
  });

  it('must check component attributes "id" and "name"', () => {
    render(
      <TextArea
        id="description"
        name="description"
        placeholder="Write a description"
      />,
    );

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toHaveAttribute('id', 'description');
    expect(inputElement).toHaveAttribute('name', 'description');
  });
});
