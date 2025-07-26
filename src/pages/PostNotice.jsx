import React from 'react';
import NoticeForm from '../components/NoticeForm';
import { useNavigate } from 'react-router-dom';

function PostNotice() {
  const navigate = useNavigate();

  const handlePost = (notice) => {
    // Assign a unique id
    const id = Date.now();
    const newNotice = { ...notice, id };
    // Get existing notices
    const notices = JSON.parse(localStorage.getItem('notices') || '[]');
    // Add new notice
    localStorage.setItem('notices', JSON.stringify([newNotice, ...notices]));
    // Redirect based on category
    if (notice.category === 'Event') navigate('/events');
    else if (notice.category === 'Buy/Sell') navigate('/buy-sell');
    else navigate('/announcements');
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Post a Notice</h2>
      <NoticeForm onSubmit={handlePost} />
    </section>
  );
}

export default PostNotice; 