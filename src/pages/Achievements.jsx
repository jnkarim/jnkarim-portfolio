import { FaCode, FaLaptopCode } from "react-icons/fa";

const Achievement = () => {
  return (
    <div className="bg-[#121212] text-white md:-mt-32 lg:-mt-64 xl:-mt-128">
      <div className="mx-auto px-4 pb-8 md:max-w-7xl md:px-8">
        <div className="flex flex-col md:flex-row">
          {/* Left Profile Section Spacer - Hidden on mobile */}
          <div className="hidden md:block w-[255px] flex-shrink-0"></div>

          {/* Achievements Section */}
          <div className="flex-1 bg-[#1e1e1e] text-white shadow-lg py-6 px-6 md:py-8 md:px-10 md:ml-8 rounded-lg">
            <div className="flex items-center mb-6 md:mb-8">
              <h1 className="text-2xl font-bold md:text-3xl">
                Achievements
              </h1>
            </div>

            {/* Border with smaller width */}
            <div className="border-b-4 md:border-b-6 border-yellow-400 w-[50px] mb-4 md:mb-6 rounded-lg"></div>

            {/* Programming Competitions Section */}
            <div className="mb-8 pb-6 border-b border-gray-700 md:mb-10 md:pb-8">
              <div className="flex items-center mb-4 md:mb-6">
                <FaCode className="text-yellow-400 mr-3 text-lg md:text-xl" />
                <h2 className="text-xl font-bold md:text-2xl">
                  Programming Competitions
                </h2>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-1 md:text-xl">Junior Segment Winner</h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      Won the Junior Segment Programming Contest at the Cefalo AUST CSE Carnival 2.0
                    </p>
                  </div>
                  <span className="bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full text-xs md:text-sm sm:ml-4 sm:whitespace-nowrap w-fit">
                    1st Place
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-1 md:text-xl">Inter-University Contest</h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      Placed as top team in inter university programming contest at University of Asia Pacific (UAP)
                    </p>
                  </div>
                  <span className="bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full text-xs md:text-sm sm:ml-4 sm:whitespace-nowrap w-fit">
                    Top Team
                  </span>
                </div>
              </div>
            </div>

            {/* Academic Achievements Section */}
            <div>
              <div className="flex items-center mb-4 md:mb-6">
                <FaLaptopCode className="text-yellow-400 mr-3 text-lg md:text-xl" />
                <h2 className="text-xl font-bold md:text-2xl">
                  Academic Exhibitions
                </h2>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-1 md:text-xl">Software Exhibition Runner-up</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Secured second place in the Software Exhibition at the AUST CSE Carnival 4.0
                  </p>
                </div>
                <span className="bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full text-xs md:text-sm sm:ml-4 sm:whitespace-nowrap w-fit">
                  2nd Place
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;