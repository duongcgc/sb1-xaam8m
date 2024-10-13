import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: 'E-commerce Website', image: 'https://via.placeholder.com/300x200' },
    { title: 'Blog cá nhân', image: 'https://via.placeholder.com/300x200' },
    { title: 'Trang web công ty', image: 'https://via.placeholder.com/300x200' },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <a href="#" className="text-blue-600 hover:underline">Xem chi tiết</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;