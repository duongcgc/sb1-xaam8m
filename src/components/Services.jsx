import React from 'react';
import { FaPencilAlt, FaCode, FaSearch } from 'react-icons/fa';

const Services = () => {
  const services = [
    { icon: <FaPencilAlt />, title: 'Thiết kế UI/UX', description: 'Tạo giao diện người dùng đẹp và dễ sử dụng' },
    { icon: <FaCode />, title: 'Phát triển Web', description: 'Xây dựng website chuyên nghiệp và đáp ứng' },
    { icon: <FaSearch />, title: 'Tối ưu hóa SEO', description: 'Cải thiện thứ hạng tìm kiếm của website' },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Dịch vụ của chúng tôi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;