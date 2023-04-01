import Card from "../Card/Card";
import styles from './Cards.module.css';

function Cards ({ characters, onClose }){
  return (
    <div className={styles.DivCards}>
      {characters.map((pj) => (
        <Card
          id={pj.id}
          name={pj.name}
          species={pj.species}
          gender={pj.gender}
          image={pj.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
};

export default Cards;
