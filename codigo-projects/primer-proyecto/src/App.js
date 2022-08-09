// cuando se importa algo de REACT, debe ir al comienzo.
import {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  // crear una Fn que aumente el contador
  const increment = () => {
    setCounter(counter + 1);
  }
  const decrase = () => setCounter(counter - 1);
  return (
    <div className="App">
      <Header/>
      <Counter contador={counter} incrementar={increment} decrementar={decrase}/>
      <Footer/>
    </div>
  );
}

export default App;
