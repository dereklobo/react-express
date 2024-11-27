import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
import { render, screen, waitFor } from '@testing-library/react';
import AppConnect from './AppConnect';
// import { setupServer } from 'msw/node'
// import { handlers } from './mocks/handler';


// const server = setupServer(...handlers)

// beforeAll(()=> server.listen())
// afterAll(()=> server.close())
// afterEach(()=>server.resetHandlers())

test('renders learn react link', async() => {
  const { getByText} = render(<AppConnect />);
  expect(getByText(/Mars Rover Photos/i)).toBeInTheDocument();
    await waitFor(()=>{
        expect(getByText(/Something went wrong./i)).toBeInTheDocument()
    
    })
});
