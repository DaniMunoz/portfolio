import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/react';
import SideBar from './sidebar';
import { Provider } from "react-redux";
import store from "../../src/store/store";

describe('SideBar', () => {
  
  it('contains an image', () => {
    //const { getByText } = render(<Header />);
    render(<Provider store={store}><SideBar /></Provider>);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders Daniel Muñoz Gil in the SideBar', () => {
    render(<Provider store={store}><SideBar /></Provider>);
    expect(screen.getByRole('name')).toHaveTextContent('Daniel Muñoz Gil');
  });

  it('renders Software Developer in the SideBar', () => {
    render(<Provider store={store}><SideBar /></Provider>);
    expect(screen.getByRole('title')).toHaveTextContent('Full Stack Developer');
  });

  it('renders email address image in the SideBar', () => {
    render(<Provider store={store}><SideBar /></Provider>);
    expect(screen.getByRole('toque')).toBeInTheDocument();
  });
  
});
