import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer>
      {/* main div */}
      <div className="flex gap-28 justify-center items-center mt-20 mb-24">
        {/* ist div */}
        <Image
          src="/images/logotechemulstion.webp"
          alt="facebook"
          width={200}
          height={200}
          className="w-[100px] h-[40px]"
        />
        {/* second div */}
        <div className="flex flex-col text-white w-[300px]">
          <h3 className="text-2xl font-light">Stay updated</h3>
          <div className="flex mt-8 gap-2">
            <input className="p-2" placeholder="email" />
            <button className="bg-[#004C4C] text-white px-4 py-2 rounded-md">Subscribe</button>
          </div>
          <p className="mt-4">
            By subscribing, you're accepting our <span className="text-[#004C4C] hover:text-white">terms</span> and <span className="text-[#004C4C] hover:text-white">privacy statement</span>  .
          </p>
        </div>
        {/* third div */}
        <div className="flex gap-28">
        <div className="flex flex-col text-white leading-8">
          <h3 className="mb-2 opacity-40">General</h3>
          <ul>
            <li className="cursor-pointer hover:text-[#004C4C]">Blog</li>
            <li className="cursor-pointer hover:text-[#004C4C]">Documentation</li>
            <li className="cursor-pointer hover:text-[#004C4C]">Enterprise</li>
            <li className="cursor-pointer hover:text-[#004C4C]">View All Agents</li>
          </ul>
        </div>
        {/* fourth div */}
        <div className="flex flex-col text-white leading-8">
          <h3 className="mb-2 opacity-40">Company</h3>
          <ul>
            <li className="cursor-pointer hover:text-[#004C4C]">Contact Us</li>
            <li className="cursor-pointer hover:text-[#004C4C]">Partners</li>
          
            <li className="cursor-pointer hover:text-[#004C4C]">Dashboard</li>
          </ul>
        </div>
        {/* fifth div */}
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            className="transition-transform duration-300 hover:scale-150"
          >
            <path
              d="M5.83334 6.45931C9.07409 5.3482 10.9259 5.3482 14.1667 6.45931"
              stroke="#141B34"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.83334 14.7927C8.75001 15.9038 11.25 15.9038 14.1667 14.7927"
              stroke="#141B34"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.38085 15.3135C7.38085 16.251 5.61336 18.126 5.16004 18.126C3.7991 18.126 2.59055 16.5631 1.9858 15.3135C1.38105 13.7506 1.53248 9.84506 3.34578 4.53223C4.66766 3.58066 5.99526 3.27598 7.38095 3.12598L8.33332 5.62598"
              stroke="#141B34"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6192 15.3135C12.6192 16.251 14.3866 18.126 14.8399 18.126C16.2009 18.126 17.4094 16.5631 18.0142 15.3135C18.6189 13.7506 18.4675 9.84506 16.6542 4.53223C15.3323 3.58066 14.0047 3.27598 12.619 3.12598L11.6667 5.62598"
              stroke="#141B34"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M6.25841 10.626H6.25M13.75 10.626H13.7416"
              stroke="#141B34"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
             className="transition-transform duration-300 hover:scale-150"
          >
            <path
              opacity="0.4"
              d="M8.33332 17.7656C5.47618 18.7301 3.09523 17.7656 1.66666 14.7927"
              stroke="#141B34"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.33332 18.9594V16.2576C8.33332 15.7591 8.48657 15.3257 8.73366 14.9343C8.90316 14.6657 8.78707 14.2847 8.48091 14.2006C5.94494 13.5034 4.16666 12.3825 4.16666 8.66444C4.16666 7.69781 4.48336 6.78902 5.04008 5.99806C5.17863 5.80121 5.2479 5.70279 5.26456 5.61364C5.28121 5.5245 5.25226 5.40816 5.19434 5.17549C4.95864 4.22849 4.97391 3.22288 5.32767 2.31625C5.32767 2.31625 6.05867 2.07807 7.72247 3.11746C8.10234 3.35478 8.29228 3.47344 8.45957 3.49998C8.62682 3.52652 8.85049 3.47092 9.29774 3.35973C9.90941 3.20768 10.5397 3.12606 11.25 3.12606C11.9603 3.12606 12.5906 3.20768 13.2022 3.35973C13.6495 3.47092 13.8732 3.52652 14.0404 3.49998C14.2077 3.47344 14.3977 3.35478 14.7775 3.11746C16.4413 2.07807 17.1723 2.31625 17.1723 2.31625C17.5261 3.22288 17.5413 4.22849 17.3057 5.17549C17.2477 5.40816 17.2187 5.5245 17.2354 5.61364C17.2521 5.70278 17.3213 5.80121 17.4599 5.99806C18.0166 6.78902 18.3333 7.69781 18.3333 8.66444C18.3333 12.3825 16.5551 13.5034 14.0191 14.2006C13.7129 14.2847 13.5968 14.6657 13.7663 14.9343C14.0134 15.3257 14.1667 15.7591 14.1667 16.2576V18.9594"
              stroke="#141B34"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
             className="transition-transform duration-300 hover:scale-150"
          >
            <path
              d="M6.66667 3.12598H2.5L8.79033 11.8356L13.3333 18.126H17.5L11.2097 9.41631L6.66667 3.12598Z"
              stroke="#141B34"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M2.5 18.126L8.79033 11.8356M17.5 3.12598L11.2097 9.41631"
              stroke="#141B34"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
             className="transition-transform duration-300 hover:scale-150"
          >
            <path
              opacity="0.4"
              d="M5.83334 8.95923V14.7926"
              stroke="#141B34"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M9.16666 11.4592V14.7926M9.16666 11.4592C9.16666 10.0785 10.2859 8.95923 11.6667 8.95923C13.0474 8.95923 14.1667 10.0785 14.1667 11.4592V14.7926M9.16666 11.4592V8.95923"
              stroke="#141B34"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M5.84001 6.45923H5.83252"
              stroke="#141B34"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.08334 10.6259C2.08334 6.89394 2.08334 5.02797 3.24271 3.8686C4.40209 2.70923 6.26806 2.70923 10 2.70923C13.7319 2.70923 15.5979 2.70923 16.7573 3.8686C17.9167 5.02797 17.9167 6.89394 17.9167 10.6259C17.9167 14.3578 17.9167 16.2238 16.7573 17.3832C15.5979 18.5426 13.7319 18.5426 10 18.5426C6.26806 18.5426 4.40209 18.5426 3.24271 17.3832C2.08334 16.2238 2.08334 14.3578 2.08334 10.6259Z"
              stroke="#141B34"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        </div>
      </div>
    </footer>
  );
}
