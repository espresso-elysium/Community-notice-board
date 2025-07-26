import React, { useState, useEffect } from 'react';
import NoticeCard from '../components/NoticeCard';
import { onNoticesSnapshot } from '../services/noticeService';

function BuySell() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onNoticesSnapshot((allNotices) => {
      const buySellNotices = allNotices.filter(n => n.category === 'Buy/Sell');
      setItems(buySellNotices);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const filtered = items.filter(n =>
    n.title.toLowerCase().includes(search.toLowerCase()) ||
    n.description.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <section>
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Buy/Sell</h2>
        <div className="text-center py-8">
          <div className="text-gray-500">Loading items...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Buy/Sell</h2>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </section>
    );
  }

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