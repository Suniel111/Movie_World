import "./App.css";
import Container from "./Components/Container";
import Header from "./Components/Header";
import movies from "./Movie.json";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-wrap m-10">
        {movies.map((element) => {
          return (
            <Container
              title={element.title}
              year={element.year}
              img={element.posterurl}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
