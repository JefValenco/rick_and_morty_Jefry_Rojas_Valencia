function SearchBar(props) {
  return (
    <div>
      <input type="search" />
      <button onClick={props.onSearch}>Agregar</button>
      {/* Solo le pasamos props.onSearch que es al funcíon de busqueda por
      aprametro */}
    </div>
  );
}
