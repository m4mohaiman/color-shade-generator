import { useState } from "react";
import Values from "values.js";
import "./App.css";
import Footer from "./components/Footer/Footer";
import SingleColor from "./components/SingleColor";


function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#113a5d').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      let colors = new Values(color).all(10);
      console.log(colors)
      setList(colors)
    }catch(error){
      setError(true)
      console.log(error)
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Shade Generator</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" value={color} onChange={(e)=> setColor(e.target.value)} placeholder="#ff0000"
            className={`${error ? 'error' : null}`}
            />
            <button className="btn">submit</button>
        </form>
      </section>
      <section className="colors">
         {
           list.map((color , index) => <SingleColor key={index} {...color} index={index} hexColor={color.hex}></SingleColor>)
         }
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
