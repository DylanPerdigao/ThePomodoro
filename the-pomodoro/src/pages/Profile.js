import Post from './../components/Post'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const myRecipes = {};

    const myRecipesComponents = myRecipes.map( p => (
        <Product 
            key={'product-'+p.id}
            id={p.id}
            title={p.title}
            description={p.description}
            url={p.url}
            votes= {p.votes}
            submitterAvatarUrl={p.submitterAvatarUrl}
            productImageUrl = {p.productImageUrl}
            onVote = {this.handleProductUpVote}
        />
   ));

    return (
        <div id="profile">
            <div id="inner">
                <h1>NOME</h1>

                <button>Follow</button>
                <button>Unfollow</button>
                

                <h2>Minhas Receitas</h2>
                <div className="myRecipes">
                    {myRecipesComponents}
                </div>
                

                <h2>Minhas Receitas</h2>
                <div className="favRecipes">
                    <Post />
                </div>

            </div>
        </div>
    );
};