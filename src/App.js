import "./App.css";
import Header from "./Header";
function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <div className="app__container">{/* Card */}</div>
      </div>
    </div>
  );
}

export default App;
