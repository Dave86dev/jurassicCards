import { AppContextProvider } from "./context/AppContext";

import { Details } from "./pages/Details/Details";
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
