const Education = () => {
  return (
      <div className="bg-[#121212] text-white md:-mt-32 lg:-mt-64 xl:-mt-128">
          <div className="mx-auto px-4 pb-8 md:max-w-7xl md:px-8">
              <div className="flex flex-col md:flex-row">
                  {/* Left Profile Section Spacer - Hidden on mobile */}
                  <div className="hidden md:block w-[255px] flex-shrink-0"></div>

                  {/* Education Section */}
                  <div className="flex-1 bg-[#1e1e1e] text-white shadow-lg py-6 px-6 md:py-8 md:px-10 md:ml-8">
                      <h1 className="text-2xl font-bold mb-4 text-white md:text-3xl md:mb-6">
                          Education
                      </h1>

                      {/* Border with smaller width */}
                      <div className="border-b-4 md:border-b-6 border-yellow-400 w-[50px] mb-4 md:mb-6 rounded-lg"></div>

                      {/* University Education */}
                      <div className="mb-6 pb-6 border-b border-gray-700 md:mb-10 md:pb-8">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                              <div className="mb-4 md:mb-0">
                                  <h2 className="text-xl font-bold mb-2 md:text-2xl">
                                      Ahsanullah University of Science and Technology
                                  </h2>
                                  <p className="text-base md:text-lg">- B.Sc. in Computer Science and Engineering</p>
                              </div>
                              <p className="text-gray-300 px-2 py-1 text-sm md:text-base md:px-3">2022 - Ongoing</p>
                          </div>
                          
                          <h3 className="text-lg font-semibold mt-4 mb-3 md:text-xl md:mt-6 md:mb-4">Notable Courses:</h3>
                          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                              {[
                                  "CSE 1205 - Object Oriented Programming",
                                  "CSE 1203 - Discrete Mathematics",
                                  "CSE 2103 - Data Structures",
                                  "CSE 2105 - Digital Logic Design",
                                  "MATH 2101 - Mathematics-III",
                                  "CSE 2201 - Numerical Methods",
                                  "CSE 2207 - Algorithms",
                                  "CSE 2213 - Computer Architecture",
                                  "MATH 2203 - Mathematics-IV",
                                  "CSE 2200 - Software Development-III",
                                  "CSE 2214 - Assembly Language Programming",
                              ].map((course, index) => (
                                  <div key={index} className="flex items-start">
                                      <span className="text-yellow-400 mr-2">•</span>
                                      <span className="text-sm md:text-base">{course}</span>
                                  </div>
                              ))}
                          </div>
                      </div>

                      {/* College Education */}
                      <div className="pt-2">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                              <div className="mb-4 md:mb-0">
                                  <h2 className="text-xl font-bold mb-2 md:text-2xl">
                                      National Ideal College, Dhaka
                                  </h2>
                                  <p className="text-base md:text-lg">- Higher Secondary Certificate (HSC)</p>
                              </div>
                              <div className="text-left md:text-right">
                                  <p className="text-gray-300 text-sm md:text-base">2021</p>
                                  <p className="text-gray-300 mt-2 text-sm md:text-base md:mt-4">GPA: 5.00/5.00</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Education;