
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Digital ToolBox</div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
          <li><Link to="/social-enterprises" className="hover:text-yellow-300">Social Enterprises</Link></li>
          <li><Link to="/development-organizations" className="hover:text-yellow-300">Development Organizations</Link></li>
          <li><Link to="/funding-opportunities" className="hover:text-yellow-300">Funding Opportunities</Link></li>
          <li><Link to="/private-sector" className="hover:text-yellow-300">Private Sector</Link></li>
          <li><Link to="/government-partnerships" className="hover:text-yellow-300">Government Partnerships</Link></li>
          <li><Link to="/community-forum" className="hover:text-yellow-300">Community Forum</Link></li>
          <li><Link to="/resources" className="hover:text-yellow-300">Resources</Link></li>
          <li><Link to="/about-us" className="hover:text-yellow-300">About Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
