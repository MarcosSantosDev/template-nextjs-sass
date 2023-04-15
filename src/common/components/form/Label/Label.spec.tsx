import { render, screen } from '@testing-library/react';

import Label from './Label';

describe('Label component', () => {
  const labelText = 'Label here';

  it('should have a text "Label here" in the document', () => {
    render(<Label>{labelText}</Label>);

    const label = screen.getByText(labelText);

    expect(label).toBeInTheDocument();
  });

  it('should have a text "Label here" inside element', () => {
    render(<Label>{labelText}</Label>);

    const label = screen.getByText(labelText);

    expect(label.innerHTML).toEqual(labelText);
  });
});
