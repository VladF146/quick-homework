import "./App.css";
import { persons } from "./assets/persons";
import Person from "./components/Person";

function App() {
  return (
    <div className="App">
      <ul>
        {persons.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </ul>
    </div>
  );
}

export default App;
