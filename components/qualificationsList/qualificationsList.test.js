import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import QualificationsList from "./qualificationsList";
import qualificationsData from "../../public/json/qualifications.json";

describe("QualificationsList", () => {

  it('renders the QualificationsList component', () => {
    //const { getByText } = render(<Header />);
    render(<Provider store={store}><QualificationsList qualifications={qualificationsData} /></Provider>);
    expect(screen.queryAllByRole('qualificationCard')).not.toHaveLength(0);
  });

});