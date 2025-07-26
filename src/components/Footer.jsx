import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-4 mt-8">
      <div className="container mx-auto text-center text-sm">
        <div>© {new Date().getFullYear()} Community Notice Board. Social Internship Project by First-Year Engineering Student.</div>
        <div className="mt-1">Empowering communities through digital connection.</div>
      </div>
    </footer>
  );
}

export default Footer; 