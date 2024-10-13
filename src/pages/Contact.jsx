import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';

const Contact = () => {
  return (
    <PageTransition>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Liên hệ với chúng tôi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <form className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Họ tên</label>
                  <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Nội dung</label>
                  <textarea id="message" rows="4" className="w-full px-3 py-2 border rounded-lg"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Gửi</button>
              </form>
            </div>
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Thông tin liên hệ</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <FaEnvelope className="text-blue-600 mr-2" />
                    <span>info@webdesignco.com</span>
                  </li>
                  <li className="flex items-center">
                    <FaPhone className="text-blue-600 mr-2" />
                    <span>(123) 456-7890</span>
                  </li>
                  <li className="flex items-center">
                    <FaMapMarkerAlt className="text-blue-600 mr-2" />
                    <span>123 Đường ABC, Quận XYZ, Thành phố HCM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;