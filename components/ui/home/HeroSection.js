"use client";
import React, { useEffect, useState } from "react";
import { LuNewspaper } from "react-icons/lu";
import Image from "next/image"; // Import Next.js Image component
import wrapperComponent from "../common/WrapperComponent";

export default function HeroSection() {
  const fullText = "Agency Builds Custom AI Agents That Work 24/7/365.";
  const words = fullText?.trim()?.split(/\s+/) || []; // Always returns array
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (words.length === 0) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < words.length) {
        const word = words[currentIndex];
        if (word) {
          setDisplayedText((prev) =>
            prev.length > 0 ? `${prev} ${word}` : word
          );
        }
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval); // ✅ Corrected: return statement is inside the same useEffect
  }, [fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="relative w-full">
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-start gap-4">
        {/* Button */}
        <div className="relative inline-block mx-auto">
          <button
            onClick={() =>
              (window.location.href =
                "https://calendly.com/hassanms/discovery-call")
            }
            className="flex gap-3 items-center text-sm leading-[1.25rem] py-1 px-3 border border-white rounded-[1.68rem] w-max relative overflow-hidden group"
          >
            <h4 className="flex items-center">Book a Call |</h4>
            <LuNewspaper />
            <div className="absolute inset-0 border-tracer"></div>
          </button>
        </div>

        {/* Animated Heading */}
        <div className="flex flex-col gap-4">
          <h1 className="text-[58px] font-bold text-white w-[34%] leading-[1.2]">
            {displayedText || ""}
            {showCursor && (
              <span className="ml-4 animate-pulse w-[0.25rem] h-[3.65rem] text-[#004C4C]">
                |
              </span>
            )}
          </h1>
          <p className="opacity-70 my-6">
            Agency has helped hundreds of companies build AI Agents that cut
            costs, boost revenue, and streamline processes.
          </p>
        </div>

        {/* 3rd tabs div */}
        <div className="flex gap-8 w-[55%] my-10">
          <div className="flex flex-col gap-3 w-[34%] hover:bg-[#004C4C] rounded-xl p-6 cursor-pointer transition duration-300 ease-in-out hover:shadow-xl">
            <h3 className=" text-lg font-semibold">Agent Consulting</h3>
            <p className=" text-sm leading-relaxed">
              We help startups and enterprises build safe and reliable AI
              agents.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-[34%] hover:bg-[#004C4C] rounded-xl p-6 cursor-pointer">
            <h3 className=" text-lg font-semibold">Agent Dev Tools</h3>
            <p className=" text-sm leading-relaxed">
              AgentOps is the industry leading agent observability platform.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-[34%] hover:bg-[#004C4C] rounded-xl p-6 cursor-pointer">
            <h3 className=" text-lg font-semibold">Vetted AI Agents</h3>
            <p className=" text-sm leading-relaxed">
              Browse 400+ AI agents working in production.
            </p>
          </div>
        </div>

        {/* 4th div - Automate Workflows Section */}
        <div
          className=""
          style={{
            backgroundImage: "url('images/bracket-pattern-background.png')",
            width: "660px",
          }}
        >
          <h1 className="text-[32px] font-medium font-bold mb-6">
            Automate Workflows in Weeks Not Quarters
          </h1>

          <p className="w-[430px] mb-4">
            Since 2023, Agency has built and reviewed hundreds of custom AI
            Agents for startups and Fortune 500s.
          </p>

          <p className="w-[430px] mb-6">
            Agency helps clients quickly prototype and productionize AI Agents
            that are safe and provide a positive ROI. Agency is the world's
            leading AI Agent consulting firm.
          </p>

          <a href="#" className="text-teal-400 underline text-lg">
            Free Agent Consultation.
          </a>
        </div>
        <div>
          <div className="">
            <svg
              viewBox="0 -538.914 1134.518 1622.914"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-0 w-1/2 h-full animate-draw max-md:static max-md:w-full max-md:min-w-0 max-md:min-h-0 max-md:mx-auto max-md:my-0"
              style={{ opacity: 1 }}
            >
              <defs>
                <filter
                  id="glow-linear"
                  x="0.327"
                  y="-311.897"
                  width="712.806"
                  height="1341.97"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feGaussianBlur stdDeviation="26.85"></feGaussianBlur>
                </filter>
                <filter
                  id="glow-radial"
                  x="50.627"
                  y="-261.597"
                  width="612.206"
                  height="1241.37"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feGaussianBlur stdDeviation="1.7"></feGaussianBlur>
                </filter>
                <linearGradient
                  id="gradient-blue"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#5C64A3"></stop>
                  <stop offset="100%" stopColor="#080B14"></stop>
                </linearGradient>
                <radialGradient
                  id="glow-cyan-1"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(82 157) rotate(-38.0728) scale(76.2168 39.4211)"
                >
                  <stop offset="0%" stopColor="#5CD4D4"></stop>
                  <stop
                    offset="100%"
                    stopColor="#5CD4D4"
                    stopOpacity="0"
                  ></stop>
                </radialGradient>
                <radialGradient
                  id="glow-cyan-2"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(174 726) rotate(-31.293) scale(59.6825 9.50169)"
                >
                  <stop offset="0%" stopColor="#5CD4D4"></stop>
                  <stop
                    offset="100%"
                    stopColor="#5CD4D4"
                    stopOpacity="0"
                  ></stop>
                </radialGradient>
                <radialGradient
                  id="glow-cyan-3"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(357 260) rotate(-50.9061) scale(61.8466 24.4666)"
                >
                  <stop offset="0%" stopColor="#5CD4D4"></stop>
                  <stop
                    offset="100%"
                    stopColor="#5CD4D4"
                    stopOpacity="0"
                  ></stop>
                </radialGradient>
                <radialGradient
                  id="glow-cyan-4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(405 894) rotate(63.4349) scale(46.9574 55.9017)"
                >
                  <stop offset="0%" stopColor="#5CD4D4"></stop>
                  <stop
                    offset="100%"
                    stopColor="#5CD4D4"
                    stopOpacity="0"
                  ></stop>
                </radialGradient>
                <radialGradient
                  id="glow-cyan-5"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(562.099 577.741) rotate(58.0894) scale(69.809 18.1771)"
                >
                  <stop offset="0%" stopColor="#5CD4D4"></stop>
                  <stop
                    offset="100%"
                    stopColor="#5CD4D4"
                    stopOpacity="0"
                  ></stop>
                </radialGradient>
              </defs>
              
              {/* Main curved paths */}
              <path
                className="print"
                d="M78.0061 231.409L78.0059 231.411C65.6316 386.459 97.3684 512.557 133.462 625.646C135.999 633.634 131.625 642.195 123.658 644.763C122.122 645.255 120.566 645.49 119.034 645.49C112.643 645.49 106.697 641.383 104.628 634.916C67.5668 518.755 35.0542 389.25 47.8297 228.97C48.5118 220.607 55.8628 214.438 64.1369 215.035C72.4633 215.7 78.6883 223.038 78.0061 231.409Z"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.3"
                strokeWidth="2"
                style={{
                  "--path-length": "908.9210815429688",
                  strokeDasharray: "908.921",
                  strokeDashoffset: "908.921",
                }}
              ></path>
              <path
                className="print"
                d="M163.327 -12.5864L163.328 -12.5881C166.036 -20.5314 174.646 -24.7636 182.547 -22.0264C190.451 -19.2877 194.655 -10.6409 191.947 -2.69508C165.543 74.3571 148.85 154.857 142.346 236.589C131.017 378.54 159.663 493.959 192.257 597.444C194.773 605.454 190.357 613.994 182.388 616.541C180.871 617.013 179.315 617.247 177.83 617.247C171.393 617.247 165.428 613.115 163.404 606.633L163.403 606.631C131.452 505.204 100.394 381.699 112.17 234.147L112.17 234.147C118.865 149.889 136.092 66.8617 163.327 -12.5864Z"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.3"
                strokeWidth="2"
                style={{
                  "--path-length": "1338.2540283203125",
                  strokeDasharray: "1338.25",
                  strokeDashoffset: "1338.25",
                }}
              ></path>
              
              {/* Glow paths */}
              <g>
                <path
                  d="M68.104 179.315C60.092 178.178 54.524 170.73 55.679 162.695L55.679 162.692C71.152 53.909 102.982 -51.09 150.306 -149.436L150.307 -149.438C153.809 -156.739 162.563 -159.782 169.838 -156.265C177.111 -152.726 180.166 -143.926 176.66 -136.614C130.655 -41.023 99.69 61.078 84.652 166.855C83.62 174.186 77.354 179.483 70.188 179.483C69.527 179.483 68.83 179.422 68.112 179.316Z"
                  stroke="#5CD4D4"
                  strokeWidth="4"
                  strokeOpacity="1"
                  style={{
                    strokeDasharray: "737.983",
                    strokeDashoffset: "737.983",
                  }}
                />
                <g style={{mixBlendMode: 'plus-lighter', filter: 'blur(8px)', opacity: 0.7}}>
                  <path
                    d="M68.104 179.315C60.092 178.178 54.524 170.73 55.679 162.695L55.679 162.692C71.152 53.909 102.982 -51.09 150.306 -149.436L150.307 -149.438C153.809 -156.739 162.563 -159.782 169.838 -156.265C177.111 -152.726 180.166 -143.926 176.66 -136.614C130.655 -41.023 99.69 61.078 84.652 166.855C83.62 174.186 77.354 179.483 70.188 179.483C69.527 179.483 68.83 179.422 68.112 179.316Z"
                    stroke="#5CD4D4"
                    strokeWidth="4"
                    strokeOpacity="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      strokeDasharray: "737.983",
                      strokeDashoffset: "737.983",
                    }}
                  />
                </g>
              </g>
              
              {/* More glow paths */}
              <g>
                <path
                  d="M135.163 772.524L135.161 772.521C130.646 765.773 132.461 756.642 139.18 752.13C148.529 745.856 158.308 739.856 168.245 734.309C186.095 724.377 202.563 714.761 217.215 705.737C224.117 701.496 233.12 703.666 237.346 710.579C241.574 717.519 239.405 726.567 232.523 730.809C217.503 740.036 200.665 749.88 182.44 760.022L182.439 760.022C173.223 765.154 164.145 770.742 155.456 776.582L155.456 776.582C152.962 778.259 150.119 779.065 147.341 779.065C142.601 779.065 137.988 776.769 135.163 772.524Z"
                  stroke="#5CD4D4"
                  strokeWidth="4"
                  strokeOpacity="1"
                  style={{
                    strokeDasharray: "272.65",
                    strokeDashoffset: "272.65",
                  }}
                />
                <g style={{mixBlendMode: 'plus-lighter', filter: 'blur(8px)', opacity: 0.7}}>
                  <path
                    d="M135.163 772.524L135.161 772.521C130.646 765.773 132.461 756.642 139.18 752.13C148.529 745.856 158.308 739.856 168.245 734.309C186.095 724.377 202.563 714.761 217.215 705.737C224.117 701.496 233.12 703.666 237.346 710.579C241.574 717.519 239.405 726.567 232.523 730.809C217.503 740.036 200.665 749.88 182.44 760.022L182.439 760.022C173.223 765.154 164.145 770.742 155.456 776.582L155.456 776.582C152.962 778.259 150.119 779.065 147.341 779.065C142.601 779.065 137.988 776.769 135.163 772.524Z"
                    stroke="#5CD4D4"
                    strokeWidth="4"
                    strokeOpacity="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      strokeDasharray: "272.65",
                      strokeDashoffset: "272.65",
                    }}
                  />
                </g>
              </g>
              
              {/* Third blue glow path */}
              <g>
                <path
                  d="M200.104 300.315C192.092 299.178 186.524 291.73 187.679 283.695L187.679 283.692C203.152 174.909 234.982 69.91 282.306 -28.436L282.307 -28.438C285.809 -35.739 294.563 -38.782 301.838 -35.265C309.111 -31.726 312.166 -22.926 308.66 -15.614C262.655 79.977 231.69 182.078 216.652 287.855C215.62 295.186 209.354 300.483 202.188 300.483C201.527 300.483 200.83 300.422 200.112 300.316Z"
                  stroke="#5CD4D4"
                  strokeWidth="3"
                  strokeOpacity="1"
                  style={{
                    strokeDasharray: "650.983",
                    strokeDashoffset: "650.983",
                  }}
                />
                <g style={{mixBlendMode: 'plus-lighter', filter: 'blur(8px)', opacity: 0.7}}>
                  <path
                    d="M200.104 300.315C192.092 299.178 186.524 291.73 187.679 283.695L187.679 283.692C203.152 174.909 234.982 69.91 282.306 -28.436L282.307 -28.438C285.809 -35.739 294.563 -38.782 301.838 -35.265C309.111 -31.726 312.166 -22.926 308.66 -15.614C262.655 79.977 231.69 182.078 216.652 287.855C215.62 295.186 209.354 300.483 202.188 300.483C201.527 300.483 200.83 300.422 200.112 300.316Z"
                    stroke="#5CD4D4"
                    strokeWidth="3"
                    strokeOpacity="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      strokeDasharray: "650.983",
                      strokeDashoffset: "650.983",
                    }}
                  />
                </g>
              </g>
              
              {/* Fourth blue glow path */}
              {/* <g>
                <path
                  d="M267.163 893.524L267.161 893.521C262.646 886.773 264.461 877.642 271.18 873.13C280.529 866.856 290.308 860.856 300.245 855.309C318.095 845.377 334.563 835.761 349.215 826.737C356.117 822.496 365.12 824.666 369.346 831.579C373.574 838.519 371.405 847.567 364.523 851.809C349.503 861.036 332.665 870.88 314.44 881.022L314.439 881.022C305.223 886.154 296.145 891.742 287.456 897.582L287.456 897.582C284.962 899.259 282.119 900.065 279.341 900.065C274.601 900.065 269.988 897.769 267.163 893.524Z"
                  stroke="#5CD4D4"
                  strokeWidth="3"
                  strokeOpacity="1"
                  style={{
                    strokeDasharray: "320.65",
                    strokeDashoffset: "320.65",
                  }}
                />
                <g style={{mixBlendMode: 'plus-lighter', filter: 'blur(8px)', opacity: 0.7}}>
                  <path
                    d="M267.163 893.524L267.161 893.521C262.646 886.773 264.461 877.642 271.18 873.13C280.529 866.856 290.308 860.856 300.245 855.309C318.095 845.377 334.563 835.761 349.215 826.737C356.117 822.496 365.12 824.666 369.346 831.579C373.574 838.519 371.405 847.567 364.523 851.809C349.503 861.036 332.665 870.88 314.44 881.022L314.439 881.022C305.223 886.154 296.145 891.742 287.456 897.582L287.456 897.582C284.962 899.259 282.119 900.065 279.341 900.065C274.601 900.065 269.988 897.769 267.163 893.524Z"
                    stroke="#5CD4D4"
                    strokeWidth="3"
                    strokeOpacity="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      strokeDasharray: "320.65",
                      strokeDashoffset: "320.65",
                    }}
                  />
                </g>
              </g> */}
              
              {/* Additional curved paths */}
              <path
                d="M208.305 60.1572L208.305 60.1565C272.668 -170.335 419.272 -362.3 621.082 -480.385C682.497 -516.318 752.524 -535.32 823.593 -535.32C831.943 -535.32 838.724 -528.517 838.724 -520.122C838.724 -511.728 831.943 -504.925 823.593 -504.925C757.871 -504.925 693.13 -487.356 636.316 -454.119L636.821 -453.256L636.316 -454.119C441.316 -340.031 299.663 -154.478 237.436 68.356L237.435 68.359C235.581 75.0773 229.487 79.4653 222.882 79.4653C221.523 79.4653 220.16 79.2736 218.791 78.887L218.791 78.8867C210.737 76.6188 206.045 68.2292 208.305 60.1572Z"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.3"
                strokeWidth="2"
                style={{
                  strokeDasharray: "1877.2",
                  strokeDashoffset: "1877.2",
                }}
              />
              
              <path
                d="M254.779 630.226L255.404 632.126L254.163 628.323L254.779 630.226ZM249.781 631.845L249.165 629.943L249.153 629.947L249.781 631.845ZM239.444 635.267L238.815 633.369L240.069 637.167L239.444 635.267ZM254.163 628.323L249.165 629.943L250.398 633.748L255.396 632.128L254.163 628.323ZM249.153 629.947L238.815 633.369L240.072 637.166L250.41 633.744L249.153 629.947ZM240.069 637.167L255.404 632.126L254.155 628.326L238.819 633.367L240.069 637.167Z"
                fill="url(#gradient-blue)"
                fillOpacity="0.3"
                style={{
                  strokeDasharray: "108.583",
                  strokeDashoffset: "108.583",
                }}
              />
              
              {/* More complex paths */}
              <path
                d="M206.686 241.745C195.12 386.646 230.627 506.913 262.507 605.118C265.988 615.84 260.17 627.359 249.469 630.894C244.287 632.598 238.706 629.777 237.013 624.593C203.458 521.846 164.088 395.151 176.51 239.327L176.51 239.326C179.097 206.783 183.409 174.08 189.31 142.106C190.845 133.843 198.775 128.409 206.977 129.927C215.18 131.468 220.617 139.386 219.082 147.651L219.082 147.652C213.35 178.598 209.188 210.252 206.686 241.745ZM206.686 241.745L207.683 241.825L206.686 241.745Z"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.3"
                strokeWidth="2"
                style={{
                  strokeDasharray: "1053.45",
                  strokeDashoffset: "1053.45",
                }}
              />
              
              {/* Continue with more paths... */}
              <path
                d="M326.861 745.329L326.86 745.331C323.578 747.922 319.953 750.652 315.983 753.568C290.72 772.104 256.431 793.503 214.012 817.127C206.034 821.567 198.172 826.419 190.628 831.522L190.626 831.523C188.048 833.278 185.087 834.133 182.169 834.133C177.314 834.133 172.563 831.782 169.618 827.436C164.948 820.476 166.762 811.034 173.69 806.326C181.958 800.73 190.589 795.407 199.331 790.54L198.845 789.666L199.332 790.54C240.608 767.534 273.863 746.842 298.106 729.035L298.106 729.035C301.767 726.341 305.139 723.801 308.196 721.373C320.974 711.328 326.255 694.57 321.694 678.654C315.145 655.797 306.778 630.184 301.781 614.901L300.83 615.212L301.781 614.901C269.291 515.634 229.031 392.593 240.85 244.504L240.85 244.504C255.169 64.4787 322.613 -102.822 435.891 -239.29L435.892 -239.291C441.242 -245.754 450.786 -246.629 457.197 -241.239L457.199 -241.238C463.615 -235.865 464.49 -226.273 459.139 -219.83L459.139 -219.829C349.886 -88.1937 284.833 73.2025 271.003 246.923C259.697 388.914 298.929 508.833 330.411 605.062L330.437 605.142L330.442 605.158C335.601 620.949 344.066 646.862 350.783 670.24L351.744 669.964L350.783 670.24C358.805 698.144 349.393 727.607 326.861 745.329Z"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.3"
                strokeWidth="2"
                style={{
                  strokeDasharray: "2473.31",
                  strokeDashoffset: "2473.31",
                }}
              />
              
              {/* Additional curved paths */}
              <path
                d="M1041.24 35.055L1041.24 35.0562C1038.28 38.9715 1033.76 41.0473 1029.2 41.0473C1026 41.0473 1022.79 40.0424 1020.04 37.9441C1013.39 32.8486 1012.09 23.3221 1017.16 16.6208C1036.46 -8.80878 1050.4 -37.6272 1058.66 -69.0052C1075.22 -132.044 1066.32 -197.79 1033.63 -254.14L1032.77 -253.638L1033.63 -254.14C990.242 -328.865 909.76 -375.298 823.593 -375.298C780.704 -375.298 738.409 -363.821 701.315 -342.105C589.54 -276.721 496.335 -181.322 431.728 -66.2358L431.728 -66.2343C427.635 -58.915 418.411 -56.3279 411.124 -60.4568L411.122 -60.4579C403.835 -64.5659 401.254 -73.8565 405.368 -81.1565L405.369 -81.1581C472.6 -200.959 569.666 -300.273 686.058 -368.371L685.553 -369.234L686.058 -368.371C727.799 -392.806 775.357 -405.717 823.593 -405.717C920.473 -405.717 1011 -353.505 1059.78 -269.448C1096.54 -206.072 1106.55 -132.155 1087.92 -61.2554L1088.88 -61.0012L1087.91 -61.2552C1078.66 -25.996 1062.97 6.41644 1041.24 35.055Z"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.3"
                strokeWidth="2"
                style={{
                  strokeDasharray: "2320.34",
                  strokeDashoffset: "2320.34",
                }}
              />
              
              <path
                d="M422.661 732.379L422.661 732.378C426.782 722.733 426.207 707.569 420.951 683.804C415.71 660.102 405.877 628.088 391.755 584.909L391.668 584.642C362.016 493.972 325.066 380.984 335.343 252.104C342.349 164.252 363.733 79.254 398.924 -0.56L399.839 -0.157L398.925 -0.56C402.316 -8.25 398.858 -17.239 391.211 -20.618L391.209 -20.619C383.561 -24.02 374.632 -20.557 371.242 -12.894C334.665 70.066 312.428 158.404 305.167 249.662C294.416 384.722 332.403 500.916 363.008 594.416L363.127 594.78C368.99 612.728 377.959 640.182 384.955 665.032C388.477 677.54 391.504 689.407 393.384 699.08C394.324 703.916 394.981 708.222 395.267 711.796C395.55 715.34 395.48 718.271 394.893 720.297L394.876 720.355L394.852 720.411C389.86 732.113 379.271 744.636 365.751 757.112C352.213 769.606 335.653 782.127 318.614 793.815C284.535 817.191 248.46 837.287 230.638 847.211"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.3"
                strokeWidth="2"
                style={{
                  strokeDasharray: "2083.12",
                  strokeDashoffset: "2083.12",
                }}
              />
              
              <path
                d="M785.678 288.263L785.678 288.262C788.777 249.48 798.393 212.384 814.279 178.008C817.798 170.382 814.512 161.35 806.927 157.82L806.925 157.819C799.343 154.269 790.351 157.581 786.833 165.203L786.833 165.204C769.413 202.872 758.9 243.456 755.502 285.843C753.765 307.799 757.744 333.671 764.77 362.011C771.794 390.343 781.84 421.059 792.191 452.699L791.241 453.01L792.192 452.699L792.226 452.805C830.313 569.275 882.589 729.133 810.2 898.949C785.501 956.849 751.334 1008.66 705.707 1057.34"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.3"
                strokeWidth="2"
                style={{
                  strokeDasharray: "2000.53",
                  strokeDashoffset: "2000.53",
                }}
              />
              
              {/* Additional simple curved lines to fill right side */}
              <path
                d="M900 150 Q950 100 1000 150 Q1050 200 1100 150"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
               <path
                d="M900 150 Q950 100 1000 150 Q1050 200 1100 150"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
               <path
                d="M900 150 Q950 100 1000 150 Q1050 200 1100 150"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
               <path
                d="M900 150 Q950 100 1000 150 Q1050 200 1100 150"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
               <path
                d="M900 150 Q950 100 1000 150 Q1050 200 1100 150"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
               <path
                d="M900 150 Q950 100 1000 150 Q1050 200 1100 150"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              
              <path
                d="M850 250 Q900 200 950 250 Q1000 300 1050 250"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              
              <path
                d="M920 350 Q970 300 1020 350 Q1070 400 1120 350"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              
              <path
                d="M880 450 Q930 400 980 450 Q1030 500 1080 450"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              
              <path
                d="M950 550 Q1000 500 1050 550 Q1100 600 1150 550"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              
              <path
                d="M820 650 Q870 600 920 650 Q970 700 1020 650"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              
              <path
                d="M890 750 Q940 700 990 750 Q1040 800 1090 750"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              
              <path
                d="M860 850 Q910 800 960 850 Q1010 900 1060 850"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              
              <path
                d="M930 950 Q980 900 1030 950 Q1080 1000 1130 950"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              
              <path
                d="M800 1050 Q850 1000 900 1050 Q950 1100 1000 1050"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              
              <path
                d="M870 1150 Q920 1100 970 1150 Q1020 1200 1070 1150"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              
              <path
                d="M940 1250 Q990 1200 1040 1250 Q1090 1300 1140 1250"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              
              <path
                d="M810 1350 Q860 1300 910 1350 Q960 1400 1010 1350"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              
              <path
                d="M880 1450 Q930 1400 980 1450 Q1030 1500 1080 1450"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              
              
              <path
                d="M950 1550 Q1000 1500 1050 1550 Q1100 1600 1150 1550"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              <path
                d="M950 1550 Q1000 1500 1050 1550 Q1100 1600 1150 1550"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              <path
                d="M950 1550 Q1000 1500 1050 1550 Q1100 1600 1150 1550"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              <path
                d="M950 1550 Q1000 1500 1050 1550 Q1100 1600 1150 1550"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              <path
                d="M950 1550 Q1000 1500 1050 1550 Q1100 1600 1150 1550"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              <path
                d="M950 1550 Q1000 1500 1050 1550 Q1100 1600 1150 1550"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              <path
                d="M950 1550 Q1000 1500 1050 1550 Q1100 1600 1150 1550"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              <path
                d="M950 1550 Q1000 1500 1050 1550 Q1100 1600 1150 1550"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              <path
                d="M950 1550 Q1000 1500 1050 1550 Q1100 1600 1150 1550"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              <path
                d="M950 1550 Q1000 1500 1050 1550 Q1100 1600 1150 1550"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              <path
                d="M950 1550 Q1000 1500 1050 1550 Q1100 1600 1150 1550"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              <path
                d="M950 1550 Q1000 1500 1050 1550 Q1100 1600 1150 1550"
                stroke="url(#gradient-blue)"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: "300",
                  strokeDashoffset: "300",
                }}
              />
              <path
    d="M970 1570 Q1000 1520 1050 1570 Q1100 1620 1150 1570"
    stroke="#999999" // simple gray line
    strokeOpacity="0.5"
    strokeWidth="1.5"
    style={{
      strokeDasharray: "300",
      strokeDashoffset: "300",
    }}
  />
  <path
    d="M1000 1590 Q1020 1540 1070 1590 Q1120 1640 1170 1590"
    stroke="#999999" // simple gray line
    strokeOpacity="0.5"
    strokeWidth="1.5"
    style={{
      strokeDasharray: "300",
      strokeDashoffset: "300",
    }}
  />
  
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}