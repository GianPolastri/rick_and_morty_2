import React from "react";
import styles from "./SearchBar.module.css";

// class SearchBar extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = ''
//     }

//     handleChange = function (event) {
//         this.setState(event.target.value);
//     }

//     render(){
//         return(
//             <><input type="search" handleChange={handleChange()}/>
//             <button onClick={()=>this.props.onSearch(id)}>Agregar</button>
//             </>
//         )
//     }
// }

// export default SearchBar;

export default function SearchBar(props) {
  const [id, setId] = React.useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <input type="search" onChange={handleChange} />
      <button
        className={styles.SearchButton}
        onClick={() => props.onSearch(id)}
      >
        Agregar
      </button>
    </div>
  );
}
