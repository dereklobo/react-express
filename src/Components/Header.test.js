import { render, screen, fireEvent, userEvent } from '@testing-library/react';
import Header from './Header';
import { useState } from "react"
import { PhotoData } from '../mocks/data.js'
// import { http} from 'msw'
// import { setupServer } from 'msw/node'
// import { handlers } from './handler'

// const server =  setupServer(
//   http.get('http://localhost:9000/nasa', (req,res,ctx) => {
//     return res(ctx.status(200), ctx.json(PhotoData))
//   })
// )


//  const { worker } = await import('./mocks/browser')

describe("Header component", () => {
  const setup = () => {
    const Wrapper = () => {
      const [filterData, setFilterData] = useState([]); 
      return <Header data={PhotoData} setFilterData={setFilterData} />
    };
    const container  = render(<Wrapper/>);
    const inputSearch = screen.getByLabelText('camera-id-input')
    return {
      inputSearch,
      ...container,
    }
  }
  test('renders Header text in Header component', () => {
    const { container } = setup();
    const header = screen.getByText(/Header/i);
    expect(container).toMatchSnapshot()
    expect(header).toBeInTheDocument();
  });

  test('search bar: input is empty', async() => {
    const { container, inputSearch } = setup();
    expect(container).toMatchSnapshot()
    expect(inputSearch).toHaveAttribute('value', '')
  })

  test('search bar: input has value', async() => {
    const { container, inputSearch } = setup();
    const searchButton = screen.getByRole('button', {name: /search/i })
  
    let  searchValue = '2096'
    
    fireEvent.input(inputSearch, {target: {value : searchValue}})
    expect(inputSearch).toHaveValue(searchValue)

    fireEvent.click(searchButton)
    expect(container).toMatchSnapshot()
  })
})

