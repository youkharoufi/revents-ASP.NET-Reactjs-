import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import './app/layout/styles.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './app/store/configureStore';
import ScrollToTop from './app/scrollToTop/ScrollToTop';

const store = configureStore();
console.log(store.getState());

function render(){

  const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>

<BrowserRouter>
  <ScrollToTop/>
  <App />
</BrowserRouter>

  </Provider>
);

}

if(module.hot){
  module.hot.accept('./app/layout/App', function(){
    setTimeout(render)
  })
}

render();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
