import React from 'react';
import PageTransition from '../components/PageTransition';

const Portfolio = () => {
  const projects = [
    { title: 'E-commerce Website', image: 'https://via.placeholder.com/300x200', description: 'Một trang web bán hàng trực tuyến với đầy đủ tính năng' },
    { title: 'Blog cá nhân', image: 'https://via.placeholder.com/300x200', description: 'Trang blog cá nhân với thiết kế tối giản và tốc độ tải nhanh' },
    { title: 'Trang web công ty', image: 'https://via.placeholder.com/300x200', description: 'Website giới thiệu công ty với giao diện hiện đại' },
    { title: 'Ứng dụng Web', image: 'https://via.placeholder.com/300x200', description: 'Ứng dụng web đa nền tảng với React và Node.js' },
    { title: 'Landing Page', image: 'https://via.placeholder.com/300x200', description: 'Trang đích cho chiến dịch quảng cáo sản phẩm mới' },
    { title: 'Trang tin tức', image: 'https://via.placeholder.com/300x200', description: 'Website tin tức với khả năng tải nội dung nhanh' },
  ];

  return (
    <PageTransition>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a href="#" className="text-blue-600 hover:underline">Xem chi tiết</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Portfolio;