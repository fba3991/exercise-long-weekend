import CustomList from "./componnets/CutomList";
import "./App.css";
import { useState } from "react";

function App() {
  // Definizione dell'array di oggetti allLists
  const allLists = [
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

  const [listaSeparata, setListaSeparata] = useState([]);
  const [inputValue, setInputValue] = useState(""); /* gestione dell input */
  const [msg, setMsg] = useState(""); /*Stato per il messaggio di benvenuto
  */

  const SalutaInvitato = (invitati) => {
    setMsg(<> ciao {invitati}, sei il benvenuto</>);
    /* Funzione che imposta il messaggio di benvenuto per un invitato specifico */
  };

  return (
    <div>
      {/* Iterazione attraverso ciascun oggetto in allLists */}
      {allLists.map((list, index) => (
        <div key={index}>
          {/* Mostra il titolo basato sul valore 'title' di ciascun oggetto */}
          <h2>{list.title}</h2>
          {/* Utilizza il componente CustomList con type e list dai dati di ciascun oggetto */}
          <CustomList type={list.type} list={list.list} />
        </div>
      ))}
      <div>
        <input
          type="text"
          value={
            inputValue
          } /* dobbiamo gestire il valore dell input, con lo stato 'inputValue' */
          onChange={(e) => {
            setInputValue(
              e.target.value
            ); /*Aggiorna lo stato 'inputValue' con il valore dell'input  */
          }}
        />
        {/* bottone per aggiungere valore alla lista */}
        <button
          onClick={() => {
            setListaSeparata([
              inputValue /* aggiunge il valore dell' input alla lista */,
              ...listaSeparata,
            ]);
            setInputValue("");
          }}
        >
          Aggiungi
        </button>
      </div>
      <ul>
        {listaSeparata.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>

        {listaSeparata.map((invitati) => (
          /*Crea un elemento di lista per ciascun invitato */
          <li key={invitati}>
            <strong>{invitati}</strong> {/*  Visualizza il nome dell'invitato in grassetto */ }
            <button onClick={() => SalutaInvitato(invitati)}>saluta</button>
          </li>
        ))}
      </ul>
      <p>{msg}</p>
    </div>
  );
}

export default App;
