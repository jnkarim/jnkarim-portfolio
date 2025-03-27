const Skills = () => {
  return (
      <div className="bg-[#121212] text-white md:-mt-32 lg:-mt-64 xl:-mt-128">
          <div className="mx-auto px-4 pb-8 md:max-w-7xl md:px-8">
              <div className="flex flex-col md:flex-row">
                  {/* Left Profile Section Spacer - Hidden on mobile */}
                  <div className="hidden md:block w-[255px] flex-shrink-0"></div>

                  {/* Skills Section */}
                  <div className="flex-1 bg-[#1e1e1e] text-white shadow-lg py-6 px-6 md:py-8 md:px-10 md:ml-8">
                      <h1 className="text-2xl font-bold mb-4 text-white md:text-3xl md:mb-6">
                          Skills
                      </h1>

                      {/* Border with smaller width */}
                      <div className="border-b-4 md:border-b-6 border-yellow-400 w-[50px] mb-4 md:mb-6 rounded-lg"></div>

                      {/* Programming Languages Section */}
                      <div className="mb-6 pb-6 border-b border-gray-700 md:mb-10 md:pb-8">
                          <h2 className="text-xl font-semibold mb-3 md:text-2xl md:mb-4">
                              Programming Languages
                          </h2>
                          <div className="flex flex-wrap gap-2 md:gap-3">
                              <img
                                  src="https://img.shields.io/badge/-C++-00599C?logo=cplusplus&logoColor=white"
                                  alt="C++"
                                  className="h-8 md:h-auto"
                              />
                              <img
                                  src="https://img.shields.io/badge/-Java-E76F00?logo=java&logoColor=white"
                                  alt="Java"
                                  className="h-8 md:h-auto"
                              />
                              <img
                                  src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black"
                                  alt="JavaScript"
                                  className="h-8 md:h-auto"
                              />
                              <img
                                  src="https://img.shields.io/badge/-PHP-777BB4?logo=php&logoColor=white"
                                  alt="PHP"
                                  className="h-8 md:h-auto"
                              />
                          </div>
                      </div>

                      {/* Frontend Development Section */}
                      <div className="mb-6 pb-6 border-b border-gray-700 md:mb-10 md:pb-8">
                          <h2 className="text-xl font-semibold mb-3 md:text-2xl md:mb-4">
                              Frontend
                          </h2>
                          <div className="flex flex-wrap gap-2 md:gap-3">
                              <img
                                  src="https://img.shields.io/badge/-React-38BDF8?logo=react&logoColor=black"
                                  alt="React"
                                  className="h-8 md:h-auto"
                              />
                              <img
                                  src="https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white"
                                  alt="HTML5"
                                  className="h-8 md:h-auto"
                              />
                              <img
                                  src="https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white"
                                  alt="CSS3"
                                  className="h-8 md:h-auto"
                              />
                          </div>
                      </div>

                      {/* Backend Section */}
                      <div className="mb-6 pb-6 border-b border-gray-700 md:mb-10 md:pb-8">
                          <h2 className="text-xl font-semibold mb-3 md:text-2xl md:mb-4">
                              Backend
                          </h2>
                          <div className="flex flex-wrap gap-2 md:gap-3">
                              <img
                                  src="https://img.shields.io/badge/-Laravel-F72D20?logo=laravel&logoColor=white"
                                  alt="Laravel"
                                  className="h-8 md:h-auto"
                              />
                              <img
                                  src="https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white"
                                  alt="Node.js"
                                  className="h-8 md:h-auto"
                              />
                          </div>
                      </div>

                      {/* Frameworks Section */}
                      <div className="mb-6 pb-6 border-b border-gray-700 md:mb-10 md:pb-8">
                          <h2 className="text-xl font-semibold mb-3 md:text-2xl md:mb-4">
                              Frameworks
                          </h2>
                          <div className="flex flex-wrap gap-2 md:gap-3">
                              <img
                                  src="https://img.shields.io/badge/-Tailwind_CSS-0F172A?logo=tailwind-css&logoColor=white"
                                  alt="Tailwind CSS"
                                  className="h-8 md:h-auto"
                              />
                          </div>
                      </div>

                      {/* Databases Section */}
                      <div className="mb-6 pb-6 border-b border-gray-700 md:mb-10 md:pb-8">
                          <h2 className="text-xl font-semibold mb-3 md:text-2xl md:mb-4">
                              Databases
                          </h2>
                          <div className="flex flex-wrap gap-2 md:gap-3">
                              <img
                                  src="https://img.shields.io/badge/-MySQL-4479A1?logo=mysql&logoColor=white"
                                  alt="MySQL"
                                  className="h-8 md:h-auto"
                              />
                              <img
                                  src="https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white"
                                  alt="MongoDB"
                                  className="h-8 md:h-auto"
                              />
                          </div>
                      </div>

                      {/* Tools & Platforms Section */}
                      <div className="pb-6 md:pb-8">
                          <h2 className="text-xl font-semibold mb-3 md:text-2xl md:mb-4">
                              Tools & Platforms
                          </h2>
                          <div className="flex flex-wrap gap-2 md:gap-3">
                              <img
                                  src="https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white"
                                  alt="Git"
                                  className="h-8 md:h-auto"
                              />
                              <img
                                  src="https://img.shields.io/badge/-VS_Code-007ACC?logo=visual-studio-code&logoColor=white"
                                  alt="VS Code"
                                  className="h-8 md:h-auto"
                              />
                              <img
                                  src="https://img.shields.io/badge/-Postman-FF6C37?logo=postman&logoColor=white"
                                  alt="Postman"
                                  className="h-8 md:h-auto"
                              />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Skills;