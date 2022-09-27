import "./App.css";
import { persons } from "./assets/persons";
import Person from "./components/Person";



function App() {
  return <div className="App">{persons.map(e => <Person name={e.name} image={e.image}/>)}</div>;
}

export default App;
