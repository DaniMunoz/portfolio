import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/react';
import SideBar from './sidebar';

describe('SideBar', () => {
  
  it('contains an image', () => {
    //const { getByText } = render(<Header />);
    render(<SideBar />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders Daniel Muñoz Gil in the SideBar', () => {
    render(<SideBar />);
    expect(screen.getByRole('name')).toHaveTextContent('Daniel Muñoz Gil');
  });

  it('renders Software Developer in the SideBar', () => {
    render(<SideBar />);
    expect(screen.getByRole('title')).toHaveTextContent('Software Developer');
  });

  it('renders email address image in the SideBar', () => {
    render(<SideBar />);
    expect(screen.getByRole('toque')).toBeInTheDocument();
  });
  
});
