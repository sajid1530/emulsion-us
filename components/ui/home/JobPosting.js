
"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function JobPosting() {
  return (
    <section className="cta w-full opacity-70">
      <div className="relative overflow-hidden w-full">
        <div className="border-[3px] border-[rgb(55_114_255) border-opacity-[0.1] rounded-3xl cursor-pointer px-20 py-52 max-md:px-10 max-md:py-16 transition-all relative z-10">
          <div className="max-w-[400px] max-md:max-w-[auto]">
            <motion.h2 
              className="mb-6 text-4xl lg:text-5xl xl:text-[32px] font-bold cursor-pointer leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Send us a job posting and we will build a custom agent for it.
            </motion.h2>
            
            <motion.p 
              className="text-[rgb(119 126 144)] mb-6  leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Instead of an employee working 40 hours per week, Agency will build your team a custom AI Agent that works 24/7/365.
            </motion.p>
            
            <motion.button 
              className="text-teal-400 cursor-pointer hover:text-teal-300  font-medium transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Upload Job Posting Here.
            </motion.button>
          </div>
        </div>
        
        <motion.div 
          className="absolute top-[-15%] right-[2.5%] h-[250%] w-[1200px] max-lg:w-[800px] max-lg:right-[-35%] max-md:top-[-10%] max-sm:right-[-50%]" 
          style={{perspective: '1000px', width: '1000px', height: '733px'}}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <svg viewBox="0 0 1000 733" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity: 1}}>
            <g style={{mixBlendMode: 'plus-lighter'}} opacity="0.3">
              <path fillRule="evenodd" clipRule="evenodd" d="M539.244 243.15C582.042 171.047 556.644 78.8501 482.516 37.2218C408.389 -4.40656 313.603 20.2975 270.806 92.4L37.7897 484.971C-5.00774 557.074 20.3902 649.271 94.5174 690.899C168.645 732.527 263.431 707.823 306.228 635.721L539.244 243.15ZM467.343 62.785C526.956 96.2623 547.38 170.406 512.963 228.391L279.947 620.962C245.53 678.946 169.303 698.813 109.691 665.336C50.0783 631.859 29.6534 557.715 64.0708 499.73L297.087 107.159C331.504 49.1747 407.731 29.3078 467.343 62.785Z" fill="white" fillOpacity="0.06"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M492.402 135.037C458.443 65.971 359.304 60.9821 318.199 126.271L277.657 190.665L201.925 315.431L84.0383 514.041C56.5416 560.366 73.0451 619.607 120.825 646.091C167.576 672.006 227.044 656.931 254.846 612.118L318.872 508.916L453.651 272.427C468.836 245.781 459.35 212.217 432.296 196.866C404.643 181.176 369.143 190.428 353.259 217.464L156.001 553.236C151.844 560.314 154.372 569.329 161.648 573.373C168.923 577.417 178.192 574.959 182.35 567.881L379.608 232.109C387.123 219.317 403.921 214.939 417.005 222.363C429.806 229.626 434.294 245.508 427.109 258.115L292.601 494.13L228.863 596.868C209.568 627.969 168.296 638.431 135.85 620.445C102.69 602.065 91.2362 560.95 110.319 528.8L228.17 330.252L303.664 205.877L344.078 141.686C372.617 96.3574 441.447 99.8212 465.025 147.773L492.402 135.037Z" fill="white" fillOpacity="0.06"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M511.289 79.8669C518.402 75.5565 527.76 77.6706 532.191 84.5888L665.737 293.078L782.151 489.205C825.071 561.514 799.6 653.974 725.261 695.721C651.255 737.282 556.636 712.933 513.441 641.213L423.135 491.273C418.899 484.239 421.327 475.198 428.558 471.078C435.788 466.958 445.084 469.319 449.32 476.352L539.625 626.293C574.387 684.009 650.531 703.604 710.088 670.158C769.912 636.562 790.409 562.155 755.87 503.964L639.71 308.266L506.435 100.198C502.003 93.2798 504.177 84.1772 511.289 79.8669Z" fill="white" fillOpacity="0.06"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M561.947 270.435C569.133 266.241 578.453 268.508 582.765 275.497L727.805 510.628C752.87 551.262 742.516 603.73 703.764 632.449C658.988 665.632 594.577 654.195 564.743 607.764L459.777 444.406C455.335 437.494 457.496 428.388 464.602 424.068C471.708 419.748 481.069 421.849 485.511 428.761L590.477 592.12C610.842 623.813 654.809 631.62 685.372 608.97C711.824 589.366 718.892 553.552 701.783 525.815L556.743 290.684C552.431 283.695 554.761 274.629 561.947 270.435Z" fill="white" fillOpacity="0.06"></path>
            </g>
            
            <g style={{mixBlendMode: 'plus-lighter'}} opacity="0.3">
              <path fillRule="evenodd" clipRule="evenodd" d="M539.244 243.15C582.042 171.047 556.644 78.8501 482.516 37.2218C408.389 -4.40656 313.603 20.2975 270.806 92.4L37.7897 484.971C-5.00774 557.074 20.3902 649.271 94.5174 690.899C168.645 732.527 263.431 707.823 306.228 635.721L539.244 243.15ZM467.343 62.785C526.956 96.2623 547.38 170.406 512.963 228.391L279.947 620.962C245.53 678.946 169.303 698.813 109.691 665.336C50.0783 631.859 29.6534 557.715 64.0708 499.73L297.087 107.159C331.504 49.1747 407.731 29.3078 467.343 62.785Z" stroke="url(#paint0_radial_67_3)"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M492.402 135.037C458.443 65.971 359.304 60.9821 318.199 126.271L277.657 190.665L201.925 315.431L84.0383 514.041C56.5416 560.366 73.0451 619.607 120.825 646.091C167.576 672.006 227.044 656.931 254.846 612.118L318.872 508.916L453.651 272.427C468.836 245.781 459.35 212.217 432.296 196.866C404.643 181.176 369.143 190.428 353.259 217.464L156.001 553.236C151.844 560.314 154.372 569.329 161.648 573.373C168.923 577.417 178.192 574.959 182.35 567.881L379.608 232.109C387.123 219.317 403.921 214.939 417.005 222.363C429.806 229.626 434.294 245.508 427.109 258.115L292.601 494.13L228.863 596.868C209.568 627.969 168.296 638.431 135.85 620.445C102.69 602.065 91.2362 560.95 110.319 528.8L228.17 330.252L303.664 205.877L344.078 141.686C372.617 96.3574 441.447 99.8212 465.025 147.773L492.402 135.037Z" stroke="url(#paint1_radial_67_3)"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M511.289 79.8669C518.402 75.5565 527.76 77.6706 532.191 84.5888L665.737 293.078L782.151 489.205C825.071 561.514 799.6 653.974 725.261 695.721C651.255 737.282 556.636 712.933 513.441 641.213L423.135 491.273C418.899 484.239 421.327 475.198 428.558 471.078C435.788 466.958 445.084 469.319 449.32 476.352L539.625 626.293C574.387 684.009 650.531 703.604 710.088 670.158C769.912 636.562 790.409 562.155 755.87 503.964L639.71 308.266L506.435 100.198C502.003 93.2798 504.177 84.1772 511.289 79.8669Z" stroke="url(#paint2_radial_67_3)"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M561.947 270.435C569.133 266.241 578.453 268.508 582.765 275.497L727.805 510.628C752.87 551.262 742.516 603.73 703.764 632.449C658.988 665.632 594.577 654.195 564.743 607.764L459.777 444.406C455.335 437.494 457.496 428.388 464.602 424.068C471.708 419.748 481.069 421.849 485.511 428.761L590.477 592.12C610.842 623.813 654.809 631.62 685.372 608.97C711.824 589.366 718.892 553.552 701.783 525.815L556.743 290.684C552.431 283.695 554.761 274.629 561.947 270.435Z" stroke="url(#paint3_radial_67_3)"></path>
            </g>
            
            <g style={{mixBlendMode: 'plus-lighter'}} opacity="0.7" filter="url(#filter0_f_67_3)">
              <path fillRule="evenodd" clipRule="evenodd" d="M539.244 243.15C582.042 171.047 556.644 78.8501 482.516 37.2218C408.389 -4.40656 313.603 20.2975 270.806 92.4L37.7897 484.971C-5.00774 557.074 20.3902 649.271 94.5174 690.899C168.645 732.527 263.431 707.823 306.228 635.721L539.244 243.15ZM467.343 62.785C526.956 96.2623 547.38 170.406 512.963 228.391L279.947 620.962C245.53 678.946 169.303 698.813 109.691 665.336C50.0783 631.859 29.6534 557.715 64.0708 499.73L297.087 107.159C331.504 49.1747 407.731 29.3078 467.343 62.785Z" stroke="url(#paint4_radial_67_3)"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M492.402 135.037C458.443 65.971 359.304 60.9821 318.199 126.271L277.657 190.665L201.925 315.431L84.0383 514.041C56.5416 560.366 73.0451 619.607 120.825 646.091C167.576 672.006 227.044 656.931 254.846 612.118L318.872 508.916L453.651 272.427C468.836 245.781 459.35 212.217 432.296 196.866C404.643 181.176 369.143 190.428 353.259 217.464L156.001 553.236C151.844 560.314 154.372 569.329 161.648 573.373C168.923 577.417 178.192 574.959 182.35 567.881L379.608 232.109C387.123 219.317 403.921 214.939 417.005 222.363C429.806 229.626 434.294 245.508 427.109 258.115L292.601 494.13L228.863 596.868C209.568 627.969 168.296 638.431 135.85 620.445C102.69 602.065 91.2362 560.95 110.319 528.8L228.17 330.252L303.664 205.877L344.078 141.686C372.617 96.3574 441.447 99.8212 465.025 147.773L492.402 135.037Z" stroke="url(#paint5_radial_67_3)"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M511.289 79.8669C518.402 75.5565 527.76 77.6706 532.191 84.5888L665.737 293.078L782.151 489.205C825.071 561.514 799.6 653.974 725.261 695.721C651.255 737.282 556.636 712.933 513.441 641.213L423.135 491.273C418.899 484.239 421.327 475.198 428.558 471.078C435.788 466.958 445.084 469.319 449.32 476.352L539.625 626.293C574.387 684.009 650.531 703.604 710.088 670.158C769.912 636.562 790.409 562.155 755.87 503.964L639.71 308.266L506.435 100.198C502.003 93.2798 504.177 84.1772 511.289 79.8669Z" stroke="url(#paint6_radial_67_3)"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M561.947 270.435C569.133 266.241 578.453 268.508 582.765 275.497L727.805 510.628C752.87 551.262 742.516 603.73 703.764 632.449C658.988 665.632 594.577 654.195 564.743 607.764L459.777 444.406C455.335 437.494 457.496 428.388 464.602 424.068C471.708 419.748 481.069 421.849 485.511 428.761L590.477 592.12C610.842 623.813 654.809 631.62 685.372 608.97C711.824 589.366 718.892 553.552 701.783 525.815L556.743 290.684C552.431 283.695 554.761 274.629 561.947 270.435Z" stroke="url(#paint7_radial_67_3)"></path>
            </g>
            
            {/* Fast forward, slow return white lines along paths */}
            <g style={{mixBlendMode: 'plus-lighter'}}>
              <path 
                d="M159.5 278L102 377.593" 
                stroke="url(#paint8_linear_67_3)" 
                strokeWidth="2" 
                strokeLinecap="round"
                strokeDasharray="80 100"
                strokeDashoffset="100"
                style={{
                  animation: 'slowTravelLine 3s linear infinite'
                }}
              ></path>
            </g>
            
            <g style={{mixBlendMode: 'plus-lighter'}}>
              <path 
                d="M247.5 398L190 497.593" 
                stroke="url(#paint9_linear_67_3)" 
                strokeWidth="2" 
                strokeLinecap="round"
                strokeDasharray="60 100"
                strokeDashoffset="100"
                style={{
                  animation: 'slowTravelLine 3s linear infinite'
                }}
              ></path>
            </g>
            
            <g style={{mixBlendMode: 'plus-lighter'}}>
              <path 
                d="M355 382L338 412.593" 
                stroke="url(#paint10_linear_67_3)" 
                strokeWidth="2" 
                strokeLinecap="round"
                strokeDasharray="80 100"
                strokeDashoffset="100"
                style={{
                  animation: 'slowTravelLine 3s linear infinite'
                }}
              ></path>
            </g>
            
            <g style={{mixBlendMode: 'plus-lighter'}}>
              <path 
                d="M302 208L285 238.593" 
                stroke="url(#paint11_linear_67_3)" 
                strokeWidth="2" 
                strokeLinecap="round"
                strokeDasharray="60 100"
                strokeDashoffset="100"
                style={{
                  animation: 'slowTravelLine 3s linear infinite'
                }}
              ></path>
            </g>
            
            <defs>
              <filter id="filter0_f_67_3" x="0.0996799" y="0.100245" width="819.801" height="732.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feGaussianBlur stdDeviation="8.2" result="effect1_foregroundBlur_67_3"></feGaussianBlur>
              </filter>
              
              <radialGradient id="paint0_radial_67_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(225 442) rotate(31.4641) scale(314.197 353.303)">
                <stop stopColor="white"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
              </radialGradient>
              
              <radialGradient id="paint1_radial_67_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(225 442) rotate(31.4641) scale(314.197 353.303)">
                <stop stopColor="white"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
              </radialGradient>
              
              <radialGradient id="paint2_radial_67_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(225 442) rotate(31.4641) scale(314.197 353.303)">
                <stop stopColor="white"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
              </radialGradient>
              
              <radialGradient id="paint3_radial_67_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(225 442) rotate(31.4641) scale(314.197 353.303)">
                <stop stopColor="white"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
              </radialGradient>
              
              <radialGradient id="paint4_radial_67_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(225 442) rotate(31.4641) scale(314.197 353.303)">
                <stop stopColor="white"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
              </radialGradient>
              
              <radialGradient id="paint5_radial_67_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(225 442) rotate(31.4641) scale(314.197 353.303)">
                <stop stopColor="white"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
              </radialGradient>
              
              <radialGradient id="paint6_radial_67_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(225 442) rotate(31.4641) scale(314.197 353.303)">
                <stop stopColor="white"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
              </radialGradient>
              
              <radialGradient id="paint7_radial_67_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(225 442) rotate(31.4641) scale(314.197 353.303)">
                <stop stopColor="white"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
              </radialGradient>
              
              <linearGradient id="paint8_linear_67_3" x1="86.1626" y1="409.024" x2="156.44" y2="287.299" gradientUnits="userSpaceOnUse">
                <stop offset="0.5" stopColor="#D0CDFF"></stop>
                <stop offset="1" stopColor="#D0CDFF" stopOpacity="0"></stop>
              </linearGradient>
              
              <linearGradient id="paint9_linear_67_3" x1="174.163" y1="529.024" x2="244.44" y2="407.299" gradientUnits="userSpaceOnUse">
                <stop offset="0.5" stopColor="#D0CDFF"></stop>
                <stop offset="1" stopColor="#D0CDFF" stopOpacity="0"></stop>
              </linearGradient>
              
              <linearGradient id="paint10_linear_67_3" x1="334.554" y1="422.912" x2="355.332" y2="385.521" gradientUnits="userSpaceOnUse">
                <stop offset="0.5" stopColor="#D0CDFF"></stop>
                <stop offset="1" stopColor="#D0CDFF" stopOpacity="0"></stop>
              </linearGradient>
              
              <linearGradient id="paint11_linear_67_3" x1="281.554" y1="248.912" x2="302.332" y2="211.521" gradientUnits="userSpaceOnUse">
                <stop offset="0.5" stopColor="#D0CDFF"></stop>
                <stop offset="1" stopColor="#D0CDFF" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
      
      <style jsx>{`
        @keyframes slowTravelLine {
          0% {
            stroke-dashoffset: 100;
          }
          25% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 100;
          }
        }
      `}</style>
    </section>
  )
}