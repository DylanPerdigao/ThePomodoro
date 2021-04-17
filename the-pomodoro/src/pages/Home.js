import Post from './../components/Post'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
      <div id="home">
        <div id="search">
          <div className="label">Procurar receita por ingredientes</div>
          <input type="text" placeholder="Nome da receita ou dos ingredientes"></input>
        </div>
        <div id="feed">
          <Post />
        </div>
      </div>
    );
};