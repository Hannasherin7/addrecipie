import logo from './logo.svg';
import './App.css';
import { Add } from './components/Add';
import { View } from './components/View';
import { Search } from './components/Search';

function App() {
  return (
    <div className="App">
      <Add></Add>
      <View></View>
      <Search></Search>
    </div>
  );
}

export default App;
