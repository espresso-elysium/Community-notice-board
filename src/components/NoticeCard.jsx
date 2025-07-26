import React from 'react';

function NoticeCard({ notice, onDelete, onAdmin }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4 border-l-4 border-blue-500">
      <div className="flex flex-col space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-0">
            <span className="inline-block px-2 py-1 text-xs rounded bg-blue-100 text-blue-700 font-semibold">{notice.category}</span>
            <span className="text-gray-500 text-xs">{notice.date}</span>
          </div>
          {onAdmin && (
            <button
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition text-sm"
              onClick={() => onDelete(notice.id)}
            >
              Delete
            </button>
          )}
        </div>
        <h3 className="text-lg font-bold text-blue-800">{notice.title}</h3>
        <p className="text-gray-700 leading-relaxed">{notice.description}</p>
        {notice.contact && (
          <div className="text-sm text-gray-600 pt-1">Contact: {notice.contact}</div>
        )}
      </div>
    </div>
  );
}

export default NoticeCard; 