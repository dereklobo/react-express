import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// class AppConnect extends React.Component {
  //     constructor(props) {
  //         super(props);
  //         this.state = { 
  //             error: null,
  //             isLoaded: false,
  //             photos: []
  //         };
  //     }
  //     async callAPI() {
  //         await fetch("http://localhost:9000/nasa", {
  //             headers: {
  //               "Content-Type": "application/json",
  //             }})            
  //             .then(response => response.json())
  //             .then(result => this.setState({ 
  //                 isLoaded: true,
  //                 photos: result })
  //             )
  //             // error handler
  //             .catch((error) => {
  //                 this.setState({
  //                 isLoaded: true,
  //                 error
  //                 });
  //             })
  //     }
  //     componentDidMount() {
  //         this.callAPI();
  //     }
  //     render() {
  //         const { error, isLoaded, photos } = this.state;
  
  //         if (error) {
  //             return (
  //               <div className="col">
  //                 <div className='text-red-500'>App</div>
  //                 <p>Error: {error.message}</p>
  //               </div>
  //             );
  //           } else if (!isLoaded) {
  //             return (
  //               <div className="col">
  //                 Loading...
  //               </div>
  //             );
  //           } else {
  //             return (
  //               <div className="App">
  //                  {/* <header className="App-header"> */}
  //                     <img src={logo} className="App-logo" alt="logo" width='250px' height='250px' />
  //                  {/* </header> */}
  //                 <h1>Nasa Mars Photos</h1>
  //                 <p>Discover our intergalactic multimedia collections</p>
  //                 <p>{JSON.stringify(photos)}</p>
  //                 {/* <div className="col">
  //                     {
  //                     photos.map(photo => 
  //                         <div>{photo.id}</div>
  //                     )
  //                     }
  //                 </div> */}
  //               </div>
  //             );
  //           }
  //         // return(
  //         //     <div className='App'>
  //         //         <header className="App-header">
  //         //             <img src={logo} className="App-logo" alt="logo" />
  //         //             <p>
  //         //             Edit <code>src/AppConnect.js</code> and save to reload.
  //         //             </p>
  //         //             {/* <p className="App-intro">{this.state.apiResponse}</p> */}
  //         //             <div className="col">
  //         //                 <h1>Mi Casa</h1>
  //         //                 <p>This is my house y&apos;all!</p>
  //         //                 {this.state.apiResponse}
  //         //                 {/* {this.state.apiResponse.map(home => <div>{home.name}</div>)} */}
  //         //                 </div>
  //         //         </header>
  //         //     </div>
  //         // )
  //     }
  // }

export default App;
