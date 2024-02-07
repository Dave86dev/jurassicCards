import { AppContextProvider } from "./context/AppContext";

import { Details } from "./pages/Details/Details";
import { Controls } from "./pages/Controls/Controls";
import { Overview } from "./pages/Overview/Overview";
import Jurassic from "./assets/jurassic.png";

import "./App.css";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <header><img src={Jurassic} alt="jcards"/></header>
        <main>
          <section>
            <Details />
            <Controls />
          </section>
          <section>
            <Overview />
          </section>
        </main>
        <footer></footer>
      </div>
    </AppContextProvider>
  );
}

export default App;
