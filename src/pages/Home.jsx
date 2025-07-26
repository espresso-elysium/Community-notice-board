import React from 'react';

function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-700">Community Notice Board</h1>
      <p className="text-lg md:text-xl max-w-2xl mb-6">
        Welcome to the digital notice board for college students and local residents! Stay updated with the latest announcements, events, buy/sell offers, and important contacts. Empowering our community through information and connection.
      </p>
      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded shadow mb-4">
        <span className="font-semibold">Social Impact:</span> Bridging gaps, sharing opportunities, and building a stronger, more informed community.
      </div>
      <a href="/post" className="mt-4 inline-block bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition font-semibold">Post a Notice</a>
    </section>
  );
}

export default Home; 