import Post from './../components/Post'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const resp = {
        "bio": "",
        "id": 1,
        "image": "",
        "name": "teste testinho",
        "recipes": [
            {
                "id": 8,
                "image": "",
                "name": "Pão com fiambre",
                "description": "Yah bro... é só um pão com fiambre",
                "post_date": "04/17/2021, 04:22:21",
                "rating": 0.0
            },
            {
                "id": 9,
                "image": "",
                "name": "Pão sem fiambre",
                "description": "Mano... juro... Este pão com fambre é diferente... Juro pela minha morte Joca",
                "post_date": "04/17/2021, 12:55:11",
                "rating": 0.0
            }
        ],
        "username": "teste"
    };

    const myRecipes = resp["recipes"];

    const myRecipesComponents = myRecipes.map( p => (
        <Post 
            id={p.id}
            name={p.name}
            description={p.description}
            image={p.image}
            rating= {p.rating}

            /*onClick = {window.location.href=`/recipe=${p.id}`}*/
        />
   ));

    return (
        <div id="profile">
            <div id="inner">
                <h1>{resp.name}</h1>

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