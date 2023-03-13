import "./App.css";
import { CakeView } from "./Feature/cake/cakeView";
import { IceCreamView } from "./Feature/icecream/IceCreamView";

function App() {
  return (
    <div className="App">
      <CakeView />
      <IceCreamView />
    </div>
  );
}

export default App;
