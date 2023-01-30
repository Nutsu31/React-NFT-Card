import appCSS from "./App.module.css";
import { Card } from "./components/Card.js";

function App() {
  return (
    <div className={appCSS.App}>
      <Card />
    </div>
  );
}

export default App;
