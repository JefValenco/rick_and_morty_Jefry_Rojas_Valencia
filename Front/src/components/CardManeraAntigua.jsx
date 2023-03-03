/* Esta es uan manera de hacerlo, mas a la antigua */

function Card(props) {
  return (
    <div>
      <button onClick={props.onClose}>X</button>
      {/*  Si escribo props.onClose() los () hacen que la función se haga ejecute y
      no escuche el evento , por eso no se ponen */}
      <h2>{props.name}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <img src={props.image} alt="" />
    </div>
  );
}
