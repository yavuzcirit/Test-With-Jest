import Greeting from "./Greeting"
import userEvent from "@testing-library/user-event"
import { render,screen } from "@testing-library/react"
//Grouping Test
describe('Greeting Component', () => {
    test('renders learn Hello World is in docs',()=>{
        //Arrange
        render(<Greeting/>)
    
        //Act  ..nothing now
        
        //Assert
        const headerTwo = screen.getByText(/hello world/i);
        expect(headerTwo).toBeInTheDocument()
    })


    test('renders good to see you if the button was not clicked',()=>{
        render(<Greeting />)
        const outputElement = screen.getByText('good to see you',{exact:false})
        expect(outputElement).toBeInTheDocument()
    })

    test('renders changed if the button was clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        //Assert
        const outputElement = screen.getByText('Changed!')
        expect(outputElement).toBeInTheDocument()

    })

    test('does not render good to see you when button was clicked', () => {
        //Arrange
        render(<Greeting/>)

        //Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        //Assert
        const outputElement = screen.queryByText('good to see you', {exact:false})
        expect(outputElement).toBeNull()


        

    })
})

