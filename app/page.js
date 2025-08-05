import React from "react";
import HeroSection from "@/components/ui/home/HeroSection";
import Carousel from "@/components/ui/home/Carousel";
import JobPosting from "@/components/ui/home/JobPosting";
import WrapperComponent from "@/components/ui/common/WrapperComponent";
import Head from "next/head";

export default function HomePage() {
  return (
    <div>
       <Head>
        <title>Tech Emulsion - AI-Powered Talent Platform</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.techemulsion.com/" />
        <meta name="robots" content="index, follow" />
      </Head>
      <WrapperComponent>
        <HeroSection />
        <Carousel />
        <JobPosting />
      </WrapperComponent>
    </div>
  );
}
