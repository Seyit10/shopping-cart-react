import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-500 text-white py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">Yemekye.com</h1>
            <p className="text-white text-sm font-bold">© {new Date().getFullYear()} Yemekye.com Tüm Hakları Saklıdır.</p>
          </div>
          <div className="flex flex-col md:flex-row">
            <a href="#" className="text-gray-300 hover:text-white px-2 py-1 font-bold">Hakkımızda</a>
            <a href="#" className="text-gray-300 hover:text-white px-2 py-1 font-bold">İletişim</a>
            <a href="#" className="text-gray-300 hover:text-white px-2 py-1 font-bold">Gizlilik Politikası</a>
            <a href="#" className="text-gray-300 hover:text-white px-2 py-1 font-bold">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
