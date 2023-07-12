import "./App.css";
import AddTodo from "./conatiner/AddTodo";
import Footer from "./conatiner/Footer";
import Todolist from "./conatiner/Todolist";

function App() {
	return (
		<div className="App">
			<h1>Lista zadań</h1>
			<AddTodo />
			<Todolist />
			<Footer />
		</div>
	);
}

export default App;
