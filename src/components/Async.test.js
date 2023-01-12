import { render,screen } from "@testing-library/react"
import Async from "./Async";

//Test For Async Functions and Components
describe('async component', () => {
    test('renders posts if requests succeeds',async ()=>{
        //Arrange
        //We are simulating The Response To test our Components
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id:'p1', title:"First Post"}]
        });
        render(<Async />)

        //Act -no need
        //Assert
        const listItemElements =await screen.findAllByRole('listitem')
        expect(listItemElements).not.toHaveLength(0)
    });
})