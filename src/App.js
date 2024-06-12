import logo from './logo.svg';
import './App.css';
import { Add } from './components/Add';
import { View } from './components/View';
import { Search } from './components/Search';
import { Delete } from './components/Delete';

function App() {
  return (
    <div className="App">
      <Add></Add>
      <View></View>
      <Search></Search>
      <Delete></Delete>
    </div>
  );
}

export default App;
