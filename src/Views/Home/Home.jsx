import Cards from '../../Components/Cards/Cards'


const Home = ({characters, onClose}) =>{
    return (
        <>
            <Cards characters={characters} onClose={onClose}/>
        </>
    )
}

export default Home;