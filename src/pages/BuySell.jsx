import React, { useState, useEffect } from 'react';
import NoticeCard from '../components/NoticeCard';

function BuySell() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem('notices') || '[]');
    setItems(all.filter(n => n.category === 'Buy/Sell'));
  }, []);

  const filtered = items.filter(n =>
    n.title.toLowerCase().includes(search.toLowerCase()) ||
    n.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Buy/Sell</h2>
      <input
        type="text"
        placeholder="Search buy/sell items..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="mb-4 w-full max-w-md border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
      />
      {filtered.length === 0 ? (
        <div className="text-gray-500">No buy/sell items found.</div>
      ) : (
        filtered.map(item => (
          <NoticeCard key={item.id} notice={item} />
        ))
      )}
    </section>
  );
}

export default BuySell; 