import Post from '../../components/Post'
import './Home.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
      <div id="home">
        <div id="searchBar">
          <label>Procurar receita por ingredientes</label>
          <input type="text" placeholder="Nome da receita ou dos ingredientes"></input>
        </div>
        <div id="feed">
          <label>Receitas Populares</label>
          <Post />
        </div>
      </div>
    );
};