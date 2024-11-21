import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import AppConnect from './AppConnect';
import reportWebVitals from './reportWebVitals';

async function enableMocking() {
  // if (process.env.NODE_ENV !== 'development') {
  //   return
  // }
 
  const { worker } = await import('./mocks/browser')
 
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}
 
enableMocking().then(() => {
  // ReactDOM.render(<App />, rootElement)
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <AppConnect></AppConnect>
    </React.StrictMode>
  );
})



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
