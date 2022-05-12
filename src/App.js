import {
  Career,
  Choose,
  Footer,
  Header,
  NavBar,
  News,
  People,
  Team,
} from "./components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Choose />
      <Team />
      <News />
      <People />
      <Career />
      <Footer />
    </div>
  );
}

export default App;
