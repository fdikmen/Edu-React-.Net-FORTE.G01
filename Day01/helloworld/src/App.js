import About from "./About";
import Blog from "./components/Blog";

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Blog username="USER007" usernum={321}/>
      <About />
      <About />
      <About />
      <About />
      <br/>
      <About></About>
    </div>
  );
}

export default App;
