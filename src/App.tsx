import { AppContextProvider } from "./context/AppContext";

import { Details } from "./pages/Details/Details";
import { Controls } from "./pages/Controls/Controls";
import { Overview } from "./pages/Overview/Overview";

import "./App.css";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <header>Jurassic Card. Beta 0.1</header>
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
