import React from 'react';

const contacts = [
  { name: 'College Helpline', info: '1800-123-456', type: 'Helpline' },
  { name: 'Student Counselor', info: 'counselor@college.edu', type: 'Email' },
  { name: 'CR - First Year', info: 'Rahul Sharma: +91-9876543210', type: 'CR' },
  { name: 'CR - Second Year', info: 'Priya Singh: +91-9123456780', type: 'CR' },
  { name: 'Security', info: '+91-9000000000', type: 'Security' },
];

function Contacts() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Important Contacts</h2>
      <ul className="space-y-4">
        {contacts.map((c, i) => (
          <li key={i} className="bg-white shadow rounded p-4 flex flex-col md:flex-row md:items-center md:justify-between border-l-4 border-blue-500">
            <div>
              <span className="font-semibold text-blue-800">{c.name}</span>
              <span className="ml-2 text-gray-600">({c.type})</span>
            </div>
            <div className="text-gray-700 mt-2 md:mt-0">{c.info}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contacts; 