import '@testing-library/jest-dom';
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Modal from "./modal";
import store from "../../src/store/store";

const fakeBtnClassName = "fakeBtnClassName";
const fakeBtnText = "fakeBtnText";
const fakeTitle = "fakeTitle";
const fakeText = "fakeText";
const fakeCloseBtnText = "fakeCloseBtnText";

describe("Modal", () => {

    beforeEach(() => {
        // IntersectionObserver isn't available in test environment
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
          observe: () => null,
          unobserve: () => null,
          disconnect: () => null
        });
        window.IntersectionObserver = mockIntersectionObserver;
      });

    test('renders the Modal component (open button)', async () => {        
        render(<Provider store={store}>
                    <Modal btnClassName={fakeBtnClassName} btnText={fakeBtnText} title={fakeTitle} text={fakeText} closeBtnText={fakeCloseBtnText}/>
                </Provider>);
        const buttonOpen = screen.getByTestId('btnOpen');
        expect(buttonOpen).toBeInTheDocument();
        expect(buttonOpen).toHaveClass('fakeBtnClassName');
        expect(buttonOpen).toHaveTextContent('fakeBtnText');
    });

    test('open button opens the dialog', async () => {        
        render(<Provider store={store}>
                    <Modal btnClassName={fakeBtnClassName} btnText={fakeBtnText} title={fakeTitle} text={fakeText} closeBtnText={fakeCloseBtnText}/>
                </Provider>);
        const buttonOpen = screen.getByTestId('btnOpen');
        expect(buttonOpen).toBeInTheDocument();
        expect(buttonOpen).toHaveClass('fakeBtnClassName');
        expect(buttonOpen).toHaveTextContent('fakeBtnText');

        fireEvent.click(buttonOpen);
        expect(await screen.findByText('fakeTitle')).toBeInTheDocument();
        expect(await screen.findByText('fakeTitle')).toBeInTheDocument();
        const dialogTitle = screen.getByTestId('dialogTitle')
        expect(dialogTitle).toBeInTheDocument();
        expect(dialogTitle).toHaveTextContent('fakeTitle');
        expect(await screen.findByText('fakeText')).toBeInTheDocument();
        const buttonClose = screen.getByTestId('btnClose');
        expect(buttonClose).toBeInTheDocument();
        expect(buttonClose).toHaveTextContent('fakeCloseBtnText');
    });

    test('close button closes the dialog', async () => {        
        render(<Provider store={store}>
                    <Modal btnClassName={fakeBtnClassName} btnText={fakeBtnText} title={fakeTitle} text={fakeText} closeBtnText={fakeCloseBtnText}/>
                </Provider>);
        const buttonOpen = screen.getByTestId('btnOpen');
        expect(buttonOpen).toBeInTheDocument();
        expect(buttonOpen).toHaveClass('fakeBtnClassName');
        expect(buttonOpen).toHaveTextContent('fakeBtnText');

        fireEvent.click(buttonOpen);
        const buttonClose = screen.getByTestId('btnClose');

        fireEvent.click(buttonClose);
        expect(screen.queryByText('fakeTitle')).not.toBeInTheDocument();
        expect(screen.queryByTestId('dialogTitle')).not.toBeInTheDocument();
        expect(screen.queryByText('fakeText')).not.toBeInTheDocument();
        expect(screen.queryByTestId('btnClose')).not.toBeInTheDocument();
    });

});