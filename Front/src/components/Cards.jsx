import Card from "./Card";
/* import characters from "../data.js"; */

/* 
Aí me llegó el ejercicio y abajo simplemente lo organicé colocando el destructuring como las props recibidas.
function Cards(props) {
  const { characters } = props; */

/* 
* Para las funcionales esto es muy importante: 
decir esto:
const Cards = ({ characters }) => {
es lo mismo que declarar esto:
function Cards({ characters }) {
 */
//10B) agregamos onclose
function Cards({ characters, onClose }) {
  //Acá el characters del componente character ya esta siendo traido de forma destructurado
  return (
    <div>
      {/* Acá le puse character por que quise y sin s para diferenciar un poco*/}
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          /* Este Card es el iport de la línea uno. basicamente acá se esta haciendo lo mismo que hay
         Es lo mismo que se está haciendo en App.jsx es la misma estructura que se hizo con rick. */
          <Card
            key={id} // Esta es por el React para su uso interno. No podemos acceder a el
            name={name}
            species={species}
            gender={gender}
            image={image}
            // onClose no se paso como distracturing ya que la acabsmos de declara aquí abajo
            onClose={() => onClose(id)}
            // 10C)le paso el onClose que tengo por aprametro
            // 11B) Le paso la proiedad id y voy a "Card" el componente
            id={id}
            // Con esto el padre le estría mandando este parametro al hijo. en este caso a Card
          />
        );
      })}
    </div>
  );
}

export default Cards;
