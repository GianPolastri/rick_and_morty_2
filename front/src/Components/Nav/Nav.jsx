import SearchBar from "../SearchBar/SearchBar"
import {Link} from 'react-router-dom'
import React from 'react'

class Nav extends React.Component{
    constructor(props){
        super(props)
    }


    
    render(){
        return(
            <nav>
                <Link to='/home'>
                    <h4>Home</h4>
                </Link>
                <Link to='/about'>
                    <h4>About</h4>
                </Link>
                <Link to='/favorites'>
                    <h4>My Favorites</h4>
                </Link>
                <SearchBar onSearch={this.props.onSearch}/>
            </nav>
        )
    }
        
        
    
}

export default Nav;