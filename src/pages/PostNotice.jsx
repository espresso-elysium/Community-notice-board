import React, { useState } from 'react';
import NoticeForm from '../components/NoticeForm';
import { useNavigate } from 'react-router-dom';
import { addNotice } from '../services/noticeService';

function PostNotice() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handlePost = async (notice) => {
    setIsSubmitting(true);
    setError('');
    
    try {
      const result = await addNotice(notice);
      
      if (result.success) {
        // Redirect based on category
        if (notice.category === 'Event') navigate('/events');
        else if (notice.category === 'Buy/Sell') navigate('/buy-sell');
        else navigate('/announcements');
      } else {
        setError('Failed to post notice. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Post a Notice</h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      <NoticeForm onSubmit={handlePost} isSubmitting={isSubmitting} />
    </section>
  );
}

export default PostNotice; 