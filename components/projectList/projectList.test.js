import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import ProjectList from "./projectList";
import projectsData from "../../public/json/projects.json";

describe("ProjectList", () => {

  it('renders the ProjectList component', () => {
    //const { getByText } = render(<Header />);
    render(<Provider store={store}><ProjectList projects={projectsData} /></Provider>);
    expect(screen.queryAllByRole('projectCard')).not.toHaveLength(0);
  });

});