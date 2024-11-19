import React from "react";

const About: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
  
  <h1 className="text-3xl font-bold text-center mb-4">About Me</h1>
  
  
  <p className="text-gray-700 text-center mb-6">
 
  </p>

  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Card 1 */}
    <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      <img 
        src="project1.png" 
        alt="Project 1" 
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">Project 1</h2>
        <p className="text-gray-600 mt-2">
        Saya sedang mempelajari React JS untuk memahami cara membangun antarmuka pengguna yang interaktif dan dinamis dengan cara yang efisien.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      <img 
        src="project1.png" 
        alt="Project 2" 
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">Project 2</h2>
        <p className="text-gray-600 mt-2">
        Saya pernah belajar tentang HTML dan CSS, memahami dasar-dasar struktur dan gaya sebuah website. Dengan HTML, saya mengatur elemen-elemen pada halaman web, sedangkan CSS saya gunakan untuk memberikan tampilan yang menarik dan responsif. Pengalaman ini membantu saya menciptakan desain yang rapi dan terorganisir.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      <img 
        src="project1.png" 
        alt="Project 3" 
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">Project 3</h2>
        <p className="text-gray-600 mt-2">
        Saya sedang mempelajari prinsip dasar desain UI/UX untuk menciptakan pengalaman pengguna yang lebih baik dan intuitif.
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default About;
