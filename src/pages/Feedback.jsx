import React from 'react';

const feedbacks = [
  { name: 'Amit (Student)', quote: 'This notice board keeps me updated about campus events and opportunities!' },
  { name: 'Neha (Resident)', quote: 'Very useful for our community. I found my lost keys thanks to a notice here.' },
  { name: 'Priya (CR)', quote: 'Posting reminders and contacts is so easy now. Great initiative!' },
  { name: 'Ravi (Volunteer)', quote: 'The buy/sell section helped me get affordable books.' },
];

function Feedback() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-blue-700">User Feedback & Quotes</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {feedbacks.map((f, i) => (
          <div key={i} className="bg-white shadow rounded p-4 border-l-4 border-blue-500">
            <div className="italic text-gray-700 mb-2">"{f.quote}"</div>
            <div className="text-blue-800 font-semibold">- {f.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feedback; 