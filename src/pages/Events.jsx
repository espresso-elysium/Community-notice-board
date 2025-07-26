import React, { useState, useEffect } from 'react';
import NoticeCard from '../components/NoticeCard';

function Events() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem('notices') || '[]');
    setEvents(all.filter(n => n.category === 'Event'));
  }, []);

  const filtered = events.filter(n =>
    n.title.toLowerCase().includes(search.toLowerCase()) ||
    n.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Events</h2>
      <input
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="mb-4 w-full max-w-md border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
      />
      {filtered.length === 0 ? (
        <div className="text-gray-500">No events found.</div>
      ) : (
        filtered.map(event => (
          <NoticeCard key={event.id} notice={event} />
        ))
      )}
    </section>
  );
}

export default Events; 