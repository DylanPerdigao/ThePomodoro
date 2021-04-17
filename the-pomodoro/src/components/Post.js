// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <button id="post">
            <div className="left">
                <h1>NAME</h1>
                <h2>Descrição</h2>
                <p>Lorem Ipsum Dolor</p>
                <h3>AUTHOR</h3>
            </div>
            <div className="right">
                <img className="postImg" alt="Recipe" src="logo512.png"></img>
                <h3>LIKES</h3>
            </div>
        </button>
    );
};