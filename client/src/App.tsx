import { useState } from 'react';
import CardComponent from './components/Card';
import './App.css';
import { useFetchCards } from './hooks/UseFetchCards';

function App() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState('name');
  const { cards, isLoading, error } = useFetchCards(search, page, order);

  if (isLoading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className="container-header center">
        <h2>Search your Magic Card </h2>
        <input
          type="text"
          placeholder="Search for a card"
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
          />
      <div className="button-container">
        <button className="custom-button" onClick={() => setOrder('released')}>Sort by Release Date</button>
        <button className="custom-button" onClick={() => setOrder('power')}>Sort by Power</button>
        <button className="custom-button" onClick={() => setOrder('usd')}>Sort by Price</button>
      </div>
      </div>
      <div className="grid">
        {cards.map((card) => (
          <div key={card.id}>
            <CardComponent
              name={card.name}
              image_uris={card.image_uris}
              oracle_text={card.oracle_text}
              price={card.prices.usd}
              releaseDate={card.released_at}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;