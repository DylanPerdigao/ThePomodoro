import Post from './../components/Post'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div id="profile">
            <div id="inner">
                <h1>NOME</h1>

                <button>Follow</button>
                <button>Unfollow</button>
                

                <h2>Minhas Receitas</h2>
                <div className="myRecipes">
                    <Post />
                </div>
                

                <h2>Minhas Receitas</h2>
                <div className="favRecipes">
                    <Post />
                </div>

            </div>
        </div>
    );
};