import "./App.css";
import TodoWrapper from "./components/Todo/TodoWrapper";
import { TodoContextProvider } from "./store/TodoContext";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <TodoWrapper />
      </TodoContextProvider>
    </div>
  );
}

export default App;
