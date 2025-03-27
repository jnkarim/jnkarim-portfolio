import { Link } from "react-router-dom";
import { MdEmail, MdLocationOn, MdMenu, MdClose } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";
import profilePic from "../assets/pp.jpeg";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="bg-[#121212] text-white">
            <div className="flex flex-col md:flex-row px-6 md:px-8 py-6 md:py-10 max-w-7xl mx-auto">
                <div className="bg-[#1e1e1e] text-white p-6 flex flex-col items-center shadow-lg w-full md:w-[255px] h-fit md:sticky top-10">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 object-cover border-2 border-yellow-400"
                    />

                    <h2 className="text-xl md:text-2xl font-bold text-center">
                        <span className="block">Julker</span>
                        <span className="block">Nayeen Karim</span>
                    </h2>

                    <div className="flex gap-4 mt-4 md:mt-6">
                        <a
                            href="https://www.linkedin.com/in/julkernkarim"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-yellow-400 transition-colors"
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <a
                            href="https://github.com/jnkarim"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-yellow-400 transition-colors"
                        >
                            <FaGithub size={20} />
                        </a>
                    </div>

                    <div className="w-full h-[1px] bg-gray-600 my-4 md:my-6"></div>

                    <div className="text-sm text-gray-400 w-full space-y-3">
                        <div className="flex flex-col items-center bg-[#262626] p-3 rounded-lg">
                            <div className="flex items-center gap-2 mb-1">
                                <MdEmail className="text-yellow-400" />
                                <span>Email</span>
                            </div>
                            <span className="text-white text-sm">julkernkarim@gmail.com</span>
                        </div>
                        <div className="flex flex-col items-center bg-[#262626] p-3 rounded-lg">
                            <div className="flex items-center gap-2 mb-1">
                                <MdLocationOn className="text-yellow-400" />
                                <span>Location</span>
                            </div>
                            <span className="text-white text-sm">Dhaka, Bangladesh</span>
                        </div>
                    </div>
                </div>


                <div className="flex-1 md:ml-8 mt-6 md:mt-0">
 
                    <div className="md:hidden flex justify-end mb-4">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
                        </button>
                    </div>


                    <div className={`bg-[#1e1e1e] text-white shadow-lg p-6 ${menuOpen ? "block" : "hidden"} md:block`}>
                        <div className="flex flex-col md:flex-row justify-start gap-6 md:gap-8 font-bold text-lg md:text-xl pl-4">
                            {[ 
                                { to: "/", label: "About" },
                                { to: "/skills", label: "Skills" },
                                { to: "/education", label: "Education" },
                                { to: "/achievements", label: "Achievements" },
                                { to: "/projects", label: "Projects" }
                            ].map(({ to, label }) => (
                                <Link
                                    key={to}
                                    to={to}
                                    className="hover:text-yellow-400 transition-colors"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
