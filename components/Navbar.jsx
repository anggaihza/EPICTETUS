import Image from "next/image";
import {Inter} from "next/font/google";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faSearch} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import Link from "next/link";
import Container from "./Container";

export const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [offcanvas, setOffcanvas] = useState(false);
  const [search, setSearch] = useState(false);

  const dropdownList = [
    {text: "Internet", href: "#"},
    {text: "Books", href: "#"},
    {text: "Open Source", href: "#"},
  ];
  return (
    <nav className="py-10">
      <Container>
        <div className="container mx-auto">
          <div className="flex justify-center items-center ">
            <div className="w-3/12 lg:hidden">
              <button onClick={() => setOffcanvas(!offcanvas)}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.4">
                    <path
                      d="M3 12H21"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 6H21"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 18H21"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </button>
            </div>
            <div className="lg:w-2/12 w-6/12 flex items-center font-bold tracking-wider justify-center lg:justify-start">
              <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-6 shadow-2xl">
                E
              </div>
              Epictetus
            </div>
            <div className="w-3/12 lg:hidden text-right">
              <button onClick={() => setSearch(!search)}>
                <svg
                  className="inline-block"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.4">
                    <path
                      d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 21L16.65 16.65"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </button>
            </div>
            <div
              className={`lg:w-6/12 w-full lg:bg-none lg:static lg:h-auto lg:p-0 bg-gradient-to-b from-gray-600 transition-all duration-300 to-gray-900 fixed top-0 h-full p-10 ${
                offcanvas ? `left-0` : `-left-full`
              }`}>
              <button
                className="absolute top-10 right-10 lg:hidden"
                onClick={() => setOffcanvas(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-x">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <ul className="flex lg:space-x-6 lg:items-center flex-col lg:flex-row lg:space-y-0 space-y-4">
                <li>
                  <a href="#" className="hover:border-b-2">
                    UI Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:border-b-2">
                    Front-End
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:border-b-2">
                    Back-end
                  </a>
                </li>
                <li className="relative">
                  <a
                    className="hover:border-b-2 flex cursor-pointer"
                    onClick={() => setDropdown(!dropdown)}>
                    Lainnya
                    <svg
                      className="ml-2 my-auto"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {dropdown && (
                      <ul className="absolute w-[200px] bg-gray-800 rounded shadow-2xl mt-10">
                        {dropdownList.map(({text, href}) => (
                          <li key={text}>
                            <a
                              href={href}
                              className="flex py-3 px-6 border-b border-white/5 hover:bg-gray-700/60">
                              {text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </a>
                </li>
              </ul>
            </div>
            <div
              className={`lg:w-3/12 absolute lg:static w-full lg:px-0 transition-all duration-300 w-full left-0 px-10 ${
                search ? `top-10` : `-top-48`
              }`}>
              <button
                className="absolute top-2 right-12 z-20 lg:hidden"
                onClick={() => setSearch(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-x">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="relative">
                <input
                  type="text"
                  className="bg-gray-700 px-6 py-2 w-full rounded-lg pl-10"
                  placeholder="Search ..."
                />
                <div className="absolute opacity-50 flex items-center justify-center left-3 top-3">
                  <FontAwesomeIcon icon={faSearch} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};
