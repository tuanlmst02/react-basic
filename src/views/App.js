import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world with (Tuan)
        </p>
        <MyComponent />
        {/* <MyComponent></MyComponent> */}
      </header>
    </div >
  );
}

export default App;
