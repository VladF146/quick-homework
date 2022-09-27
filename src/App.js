import "./App.css";
import { persons } from "./assets/persons";
import Person from "./components/Person";

function App() {
  return (
    <div className="App">
      {persons.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  );
}

export default App;
