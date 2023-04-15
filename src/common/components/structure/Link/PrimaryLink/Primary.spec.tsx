import { render, screen } from '@testing-library/react';

import PrimaryLink from './PrimaryLink';

describe('PrimaryLink component', () => {
  it('should be in the document', () => {
    render(<PrimaryLink href="faq">FAQ</PrimaryLink>);

    const linkElement = screen.getByRole('link');

    expect(linkElement).toBeInTheDocument();
  });

  it('should have href property with value "faq"', () => {
    render(<PrimaryLink href="faq">FAQ</PrimaryLink>);

    const linkElement = screen.getByRole('link');

    expect(linkElement).toHaveAttribute('href', 'faq');
  });

  it('should contain the text "Go to about page"', () => {
    render(<PrimaryLink href="faq">Go to about page</PrimaryLink>);

    const linkElement = screen.getByRole('link');

    expect(linkElement).toHaveTextContent(/^Go to about page$/);
  });
});
