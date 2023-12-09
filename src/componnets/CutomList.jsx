export default function ({ type, list }) {
    const lista = list.map((el, indx) => <li key={indx}>{el}</li>);
    return type === "ul" ? <ul>{lista}</ul> : <ol>{lista}</ol>;
  }