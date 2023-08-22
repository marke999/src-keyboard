import './NavigationBar.css';
import NavigationBar from './NavigationBar';
import KeyboardApp from './keyboard';
import TextInput from './TextInput';

function App() {
  return (
    <div className="App">
      <div >
        <NavigationBar />
      </div>
      <div>
        <KeyboardApp />
      </div>
      <div>
        <TextInput />
      </div>
    </div>
  );
}

export default App;