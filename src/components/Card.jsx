function Card(props) {
  props = props.userCard;
  return (
    <div className="card">
      <div className="imgBox">
        <img className="profilePic" src={props.picture.thumbnail} alt="user thumbnail" />
      </div>
      <div className="cardText">
        <span className="cardName">
          {props.name.title} {props.name.first} {props.name.last}
        </span>
        <span className="cardEmail">{props.email}</span>
      </div>
    </div>
  );
}

export default Card;
