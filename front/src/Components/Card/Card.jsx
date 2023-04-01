import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { removeFavorite } from "../../Redux/actions";
import axios from "axios";
import styles from './Card.module.css';

function Card({
  id,
  species,
  name,
  image,
  gender,
  onClose,
  removeFavorite,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const addFavorite = (char) => {
    axios
      .post("http://localhost:3001/rickandmorty/fav", char)
      .then((res) => console.log("0k"));
  };

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({ id, species, name, image, gender });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.DivCard}>
      <span className={styles.ButtonSpan}>
      {isFav ? (
        <button className={styles.favButton} onClick={handleFavorite}>❤️</button>
      ) : (
        <button className={styles.favButton} onClick={handleFavorite}>🤍</button>
      )}
      <button className={styles.CardButton} onClick={() => onClose(id)}>X</button>
      </span>

      <div className={styles.DivPersonaje}>

        <img src={image} alt="" className={styles.CardImg}/>
        <Link to={`/detail/${id}`}>
          <h3 className={styles.CardName}>{name}</h3>
        </Link>
      </div>
      <div className={styles.spanAtributtes}>
        <span className={styles.CardAtributtes} style={{marginRight: '2em'}}>{species}</span>
        <span className={styles.CardAtributtes} style={{marginRight: '2em'}}>{gender}</span>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
