import React from 'react';

function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-blue-700">Community Notice Board</h1>
      <p className="text-base md:text-lg lg:text-xl max-w-2xl mb-6 leading-relaxed">
        Welcome to the digital notice board for college students and local residents! Stay updated with the latest announcements, events, buy/sell offers, and important contacts. Empowering our community through information and connection.
      </p>
      <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded shadow mb-6 max-w-lg">
        <span className="font-semibold">Social Impact:</span> Bridging gaps, sharing opportunities, and building a stronger, more informed community.
      </div>
      <a href="/post" className="inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition font-semibold text-lg">Post a Notice</a>
    </section>
  );
}

export default Home; 