import CustomList from "./componnets/CutomList";
import "./App.css";
import { useState } from "react";

const listaOrdinata = ["alessio", "laura", "maks"];
  const listaNonOrdinata = ["Alex", "laura", "maks"];
  const allList = [
    {
      title: "Invitati",
      type: "ul",
      list: ["Tizio", "Caio"],
    },

    {
      title: "Invitati",
      type: "ul",
      list: ["Tizio", "Caio"],
    },
    {
      title: "Invitati",
      type: "ul",
      list: ["Tizio", "Caio"],
    },
    {
      title: "Invitati",
      type: "ul",
      list: ["Tizio", "Caio"],
    },
  ];
function App() {
  

  const [listParty, setListParty] =useState(allList)



  return (
    <div>
       <CustomList type="ol" list={listaOrdinata} />
      <CustomList type="ul" list={listaNonOrdinata} />
      
       <h2></h2>
      {allList.map((e, i) => (
        <section key={i}>
          <div>{e.title}</div>
          <CustomList type={e.type} list={e.list} />
        </section>
      ))}  

      <h3>esercizio3</h3>
      {allList.map((e, i) => (
        <section key={i}>
          <input type="text" 
          value={listParty}
          onChange={(e) => setListParty(e.target.value)}/>
          <button onClick={()=>
           setListParty([
            ...allList,])}>aggiungi</button>
          <div>{e.title}</div>
         
        </section>
      ))}

    </div>
  );
}

export default App;
