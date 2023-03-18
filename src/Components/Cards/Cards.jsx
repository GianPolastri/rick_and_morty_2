import Card from "../Card/Card";

function Cards ({ characters, onClose }){
  return (
    <div>
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
