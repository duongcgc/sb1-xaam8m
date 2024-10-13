import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Web Design Co.</h3>
            <p>Chúng tôi tạo ra những trang web tuyệt vời cho doanh nghiệp của bạn.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Liên hệ</h3>
            <p>Email: info@webdesignco.com</p>
            <p>Điện thoại: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Theo dõi chúng tôi</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-blue-400">Twitter</a>
              <a href="#" className="hover:text-blue-400">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Web Design Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;