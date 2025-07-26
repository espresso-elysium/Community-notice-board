import React, { useState, useEffect } from 'react';
import NoticeCard from '../components/NoticeCard';

const ADMIN_PASSWORD = 'admin123';

function Admin() {
  const [notices, setNotices] = useState([]);
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setNotices(JSON.parse(localStorage.getItem('notices') || '[]'));
  }, []);

  const handleDelete = (id) => {
    const updated = notices.filter(n => n.id !== id);
    setNotices(updated);
    localStorage.setItem('notices', JSON.stringify(updated));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password.');
    }
  };

  if (!authenticated) {
    return (
      <section className="max-w-md mx-auto mt-12 bg-white shadow rounded p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-2 focus:outline-none focus:ring focus:border-blue-400"
          />
          {error && <div className="text-red-600 mb-2">{error}</div>}
          <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition font-semibold w-full">Login</button>
        </form>
      </section>
    );
  }

  return (
    <section>
<<<<<<< HEAD
      <div className="mb-2 text-right">
=======
        <div className="mb-2 text-right">
>>>>>>> f666a3a027d0d9ee04a3104e872d01b0d8eb8537
        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded font-semibold shadow">Admin: Kritika Tyagi</span>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Admin View</h2>
      {notices.length === 0 ? (
        <div className="text-gray-500">No notices to manage.</div>
      ) : (
        notices.map(notice => (
          <NoticeCard key={notice.id} notice={notice} onDelete={handleDelete} onAdmin />
        ))
      )}
    </section>
  );
}

export default Admin; 
