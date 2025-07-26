import React from 'react';

function NoticeCard({ notice, onDelete, onAdmin }) {
  return (
    <div className="bg-white shadow rounded p-4 mb-4 border-l-4 border-blue-500 flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <div className="flex items-center mb-2">
          <span className={`inline-block px-2 py-1 text-xs rounded bg-blue-100 text-blue-700 font-semibold mr-2`}>{notice.category}</span>
          <span className="text-gray-500 text-xs">{notice.date}</span>
        </div>
        <h3 className="text-lg font-bold text-blue-800 mb-1">{notice.title}</h3>
        <p className="text-gray-700 mb-2">{notice.description}</p>
        {notice.contact && (
          <div className="text-sm text-gray-600">Contact: {notice.contact}</div>
        )}
      </div>
      {onAdmin && (
        <button
          className="mt-2 md:mt-0 md:ml-4 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
          onClick={() => onDelete(notice.id)}
        >
          Delete
        </button>
      )}
    </div>
  );
}

export default NoticeCard; 