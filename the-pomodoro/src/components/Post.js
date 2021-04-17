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
export default () => {
    return (
        <button id="post">
            <div className="left">
                <h1>NAME</h1>
                <h2>Descrição</h2>
                <p>Lorem Ipsum Dolor</p>
            </div>
            <div className="right">
                <img className="postImg" src="logo512.png"></img>
            </div>
            <div>
                <h3>AUTHOR</h3>
                <h3>LIKES</h3>
                <LikeButton isFavorite={false}/>
            </div>
        </button>
    );
};