import '../styles/Post.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ( {id, name, description, image, rating, onClick} ) => {

    const LikeButton = (props) =>{
        if(props.isFavorite){
            return <Favorite />
        }
        return <NotFavorite />
    }
    
    function Favorite(props) {
      return <img className="like" alt = "star filled" src="star-filled.svg"></img>;
    }
    
    function NotFavorite(props) {
      return <img className="like" alt = "star" src="star.svg"></img>;
    }

    return (
        <button onClick = {onClick} id="post">
            <div className="left">
                <h1>{name}</h1>
                <h2>Description:</h2>
                <p>{description}</p>
                <h3>AUTHOR</h3>
            </div>
            <div className="right">
                <img className="postImg" alt="Recipe" src="logo512.png"></img>
                <h3>LIKES</h3>
                <button id="favButton"><LikeButton isFavorite={false}/></button>
            </div>
        </button>
    );
};