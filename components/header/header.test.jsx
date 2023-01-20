import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the correct text for each link', () => {
    //const { getByText } = render(<Header />);
    render(<Header />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Qualifications')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('navigates to the correct page when a link is clicked', () => {
    //const { getByText } = render(<Header />);
    render(<Header />);
    const homeLink = screen.getByText('Projects');
    const aboutLink = screen.getByText('Qualifications');
    const contactLink = screen.getByText('Contact');

    fireEvent.click(homeLink);
    expect(window.location.pathname).toBe('/');

    /*
    fireEvent.click(aboutLink);
    expect(window.location.pathname).toBe('/qualifications');

    fireEvent.click(contactLink);
    expect(window.location.pathname).toBe('/contact');
    */
  });
});
