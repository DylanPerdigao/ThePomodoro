// eslint-disable-next-line import/no-anonymous-default-export
const LikeButton = (props) =>{
    if(props.isFavorite){
        return <Favorite />
    }
    return <NotFavorite />
}

function Favorite(props) {
  return <img className="like" src="heart-filled.svg"></img>;
}

function NotFavorite(props) {
  return <img className="like" src="heart.svg"></img>;
}

export default ( {id, name, description, image, rating} ) => {
    return (
        <button id="post">
            <div className="left">
                <h1>{name}</h1>
                <h2>Description:</h2>
                <p>{description}</p>
                <h3>AUTHOR</h3>
            </div>
            <div className="right">
                <img className="postImg" alt="Recipe" src="logo512.png"></img>
                <h3>LIKES</h3>
                <LikeButton isFavorite={false}/>
            </div>
        </button>
    );
};