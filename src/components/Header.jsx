import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Web Design Co.</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Trang chủ</Link></li>
            <li><Link to="/dich-vu" className="hover:text-blue-200">Dịch vụ</Link></li>
            <li><Link to="/portfolio" className="hover:text-blue-200">Portfolio</Link></li>
            <li><Link to="/lien-he" className="hover:text-blue-200">Liên hệ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;