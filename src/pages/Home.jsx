const Home = () => {
    return (
        <div className="bg-[#121212] text-white md:-mt-32 lg:-mt-64 xl:-mt-128">
            <div className="mx-auto px-4 pb-8 md:max-w-7xl md:px-8">
                <div className="flex flex-col md:flex-row">
                    
                    <div className="hidden md:block w-[255px] flex-shrink-0"></div>

                    
                    <div className="flex-1 bg-[#1e1e1e] text-white shadow-lg py-6 px-6 md:py-8 md:px-10 md:ml-8 mt-0">
                        <h1 className="text-2xl font-bold mb-4 text-white md:text-3xl md:mb-6">
                            About Me
                        </h1>

                       
                        <div className="border-b-4 md:border-b-6 border-yellow-400 w-[50px] mb-4 md:mb-6 rounded-lg"></div>

                        <div className="text-gray-300 space-y-4 text-base md:text-lg">
                            <p>
                                Hello, I'm Julker Nayeen Karim, a 3rd-year Computer
                                Science and Engineering undergraduate at
                                Ahsanullah University of Science and Technology
                                (AUST) with a passion for transforming complex
                                problems into elegant software solutions.
                            </p>

                            <p>
                                With a strong foundation in both theoretical
                                computer science and practical development, I
                                have experience in full-stack web development
                                and competitive programming. My technical
                                expertise spans across C++ Java, and JavaScript
                                ecosystems, including modern frameworks like
                                React.js, Express.js, Node.js, and Laravel.
                            </p>

                            <p>
                                I have also won several prizes in
                                intra-university contests, showcasing my
                                problem-solving skills and teamwork. When I'm
                                not coding, you'll likely find me enjoying a
                                good detective or mystery novel or playing
                                console games. I'm also an avid football fan.
                            </p>
                            <div className="mt-2 pt-4">
                                <blockquote className="text-base italic border-l-4 border-yellow-400 pl-4 py-2 text-gray-300 md:text-xl md:pl-6">
                                    "I think, therefore I am." — My philosophy
                                    emphasizing continuous learning and
                                    self-improvement in both professional and
                                    personal spheres.
                                </blockquote>
                            </div>

                            <p>
                                I strive for growth every day, whether through
                                coding, learning new technologies, or diving
                                into my hobbies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
