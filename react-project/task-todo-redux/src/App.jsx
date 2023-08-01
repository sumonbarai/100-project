import Tasks from "./components/Task/Tasks";
import useIsTaskInLocalStorage from "./hooks/useIsTaskInLocalStorage";

function App() {
  const [isStorage] = useIsTaskInLocalStorage();
  return !isStorage ? <div>checking localStorage</div> : <Tasks />;
}

export default App;
