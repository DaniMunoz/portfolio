import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/react';
import Header from './Header';
import { Provider } from 'react-redux';
import store from '../../src/store/store';

describe('Header', () => {
  it('renders the correct text for each link', () => {
    //const { getByText } = render(<Header />);
    render(<Provider store={store}><Header /></Provider>);
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Qualifications')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('navigates to the correct page when a link is clicked', () => {
    //const { getByText } = render(<Header />);
    render(<Provider store={store}><Header /></Provider>);
    const homeLink = screen.getByText('Projects');
    const aboutLink = screen.getByText('Qualifications');
    const contactLink = screen.getByText('Contact');

    fireEvent.click(homeLink);
    expect(window.location.pathname).toBe('/');

    fireEvent.click(aboutLink);
    expect(window.location.pathname).toBe('/');

    fireEvent.click(contactLink);
    expect(window.location.pathname).toBe('/');
  });
});
