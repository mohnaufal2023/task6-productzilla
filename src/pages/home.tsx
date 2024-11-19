import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
  
  <img 
    src="moafit.jpg" 
    alt="Deskripsi gambar" 
    className="w-40 h-40 rounded-full object-cover mb-4"
  />
  
  
  <h1 className="text-3xl font-bold text-center mb-2">Moh Hafiz Naufal</h1>
  
  
  <p className="text-center text-gray-600 leading-relaxed">
    "Saya adalah seorang UI/UX designer yang berfokus pada menciptakan pengalaman pengguna yang intuitif dan desain antarmuka yang menarik. Dengan pendekatan kreatif dan user-centric, saya berkomitmen untuk menghadirkan solusi desain yang tidak hanya estetis, tetapi juga fungsional dan mempermudah interaksi pengguna."
  </p>
</div>

  );
};

export default Home;
