import React, { useState } from 'react';

const categories = [
  'Announcement',
  'Event',
  'Buy/Sell',
  'Lost & Found',
  'Reminder',
];

function NoticeForm({ onSubmit, isSubmitting = false }) {
  const [form, setForm] = useState({
    title: '',
    category: '',
    description: '',
    date: '',
    contact: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.category || !form.description || !form.date) {
      setError('Please fill in all required fields.');
      return;
    }
    onSubmit(form);
    setSuccess('Notice posted successfully!');
    setForm({ title: '', category: '', description: '', date: '', contact: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded p-6 max-w-xl mx-auto">
      <div className="mb-4">
        <label className="block font-semibold mb-1">Title<span className="text-red-500">*</span></label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Category<span className="text-red-500">*</span></label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          required
          disabled={isSubmitting}
        >
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Description<span className="text-red-500">*</span></label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          rows={3}
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Date<span className="text-red-500">*</span></label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Contact (optional)</label>
        <input
          type="text"
          name="contact"
          value={form.contact}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          disabled={isSubmitting}
        />
      </div>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      {success && <div className="text-green-600 mb-2">{success}</div>}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full px-6 py-2 rounded font-semibold transition ${
          isSubmitting 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-700 text-white hover:bg-blue-800'
        }`}
      >
        {isSubmitting ? 'Posting...' : 'Post Notice'}
      </button>
    </form>
  );
}

export default NoticeForm; 