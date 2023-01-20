import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/react';
import MainContent from './mainContent';

describe('MainContent', () => {
  it('renders the correct text in the Main Content', () => {
    //const { getByText } = render(<Header />);
    render(<MainContent />);
    expect(screen.getByText('Main Content')).toBeInTheDocument();
  });

  /*
  it('navigates to the correct page when a link is clicked', () => {
    //const { getByText } = render(<Header />);
    render(<Header />);
    const homeLink = screen.getByText('Projects');
    const aboutLink = screen.getByText('Qualifications');
    const contactLink = screen.getByText('Contact');

    fireEvent.click(homeLink);
    expect(window.location.pathname).toBe('/');

    fireEvent.click(aboutLink);
    expect(window.location.pathname).toBe('/qualifications');

    fireEvent.click(contactLink);
    expect(window.location.pathname).toBe('/contact');
  });
  */
});
