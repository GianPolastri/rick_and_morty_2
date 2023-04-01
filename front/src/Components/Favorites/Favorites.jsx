import React from "react";
import { connect } from "react-redux";
import Card from '../Card/Card'
import { useSelector } from "react-redux";

// class Favorites extends React.Component{
//     constructor(props){
//         super(props)
//     }

//     render(){
//         return(
//                 {this.props.myFavorites.map((pj) => {
//                     return (<Card
//                     id={pj.id}
//                     name={pj.name}
//                     species={pj.species}
//                     gender={pj.gender}
//                     image={pj.image}
//                   />)
//                 })}
//         )
//     }

// }

const Favorites = ({myFavorites}) => {

    // const favorites = useSelector(state => state.myFavorites)

    return(
        <div>
            {myFavorites.map(pj => {
                return (
                    <Card
                    id={pj.id}
                    name={pj.name}
                    species={pj.species}
                    gender={pj.gender}
                    image={pj.image}
                  />
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        myFavorites: state.myFavorites
    })
}

export default connect(mapStateToProps,null)(Favorites)