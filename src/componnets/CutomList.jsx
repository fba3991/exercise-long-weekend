const CustomList = ({ type, list }) => {
  /* // Verifica del tipo di lista fornito (ul o ol) e rendering della lista corrispondente */
  
  if (type === 'ul') {
    /* Se il tipo è "ul", restituisce una lista non ordinata (ul)*/
    return (
      <ul>
     {/*     Mapping degli elementi dell'array list per creare gli elementi della lista  */}
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul> /*  Crea un list item per ciascun elemento nell'array */
    );
  } else if (type === 'ol') {
    return (
      <ol>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    );
  } else {
   
  }
};

export default CustomList;