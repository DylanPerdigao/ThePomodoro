import '../styles/Post.css';
import star from '../images/star.svg' 
import starFilled from '../images/star-filled.svg' 

// eslint-disable-next-line import/no-anonymous-default-export
export default ( {id, name, description, image, rating, author,  onClick} ) => {

    const LikeButton = (props) =>{
        if(props.isFavorite){
            return <Favorite />
        }
        return <NotFavorite />
    }
    
    function Favorite(props) {
      return <img className="like" alt = "star filled" src={starFilled}></img>;
    }
    
    function NotFavorite(props) {
      return <img className="like" alt = "star" src={star}></img>;
    }

    return (
        <button onClick = {onClick} id="post">
            <div className="left">
                <h1>{name}</h1>
                <h2>Description:</h2>
                <p>{description}</p>
                <h3>AUTHOR: {author}</h3>
            </div>
            <div className="right">
                <img className="postImg" alt="Recipe" src="logo512.png"></img>
                <h3>LIKES</h3>
                <button id="favButton"><LikeButton isFavorite={false}/></button>
            </div>
        </button>
    );
};