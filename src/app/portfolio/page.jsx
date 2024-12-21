"use client";

import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

import { myProjects } from "./components/projectDetails";
import CanvasLoader from "./components/loading";
import DemoComputer from "./components/demoComputer";

const Portfolio = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const projectCount = myProjects.length;
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
    );
  }, [selectedProjectIndex]);

  return (
    <section className="c-space mt-10 bg-black text-white p-5">
      <p className="head-text text-center text-white text-4xl font-bold">
        My Selected Work
      </p>
      <div className="flex md:flex-row flex-col">
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
          {/* Project Information */}
          <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-xl shadow-black bg-gray-900 rounded-lg">
            {/* Spotlight Image */}
            <div className="absolute top-0 right-0 w-full h-96 rounded-lg overflow-hidden">
              <Image
                src={currentProject.spotlight}
                alt="spotlight"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                priority
              />
            </div>

            {/* Project Logo */}
            <div
              className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg bg-gray-800"
              style={currentProject.logoStyle}
            >
              <Image
                className="shadow-sm"
                src={currentProject.logo}
                alt="logo"
                width={40}
                height={40}
              />
            </div>

            {/* Project Details */}
            <div className="flex flex-col gap-5 text-gray-300 my-5">
              <p className="text-white text-2xl font-semibold animatedText">
                {currentProject.title}
              </p>
              <p className="animatedText">{currentProject.desc}</p>
              <p className="animatedText">{currentProject.subdesc}</p>
            </div>

            {/* Project Tags and Link */}
            <div className="flex items-center justify-between flex-wrap gap-5">
              <div className="flex items-center gap-3">
                {currentProject.tags.map((tag, index) => (
                  <div key={index} className="tech-logo">
                    <Image
                      src={tag.path}
                      alt={tag.name}
                      width={40}
                      height={40}
                      className="hover:opacity-80"
                    />
                  </div>
                ))}
              </div>

              <a
                className="flex items-center gap-2 cursor-pointer text-blue-400 hover:text-blue-500"
                href={currentProject.href}
                target="_blank"
                rel="noreferrer"
              >
                <p>Check Live Site</p>
                <Image
                  src="/assets/arrow-up.png"
                  alt="arrow"
                  width={12}
                  height={12}
                />
              </a>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-7">
              <button
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg"
                onClick={() => handleNavigation("previous")}
              >
                <Image
                  src="/assets/left-arrow.png"
                  alt="left arrow"
                  width={24}
                  height={24}
                />
              </button>
              <button
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg"
                onClick={() => handleNavigation("next")}
              >
                <Image
                  src="/assets/right-arrow.png"
                  alt="right arrow"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>

          {/* 3D Model Viewer */}
          <div className="bg-black rounded-lg h-[60%] md:h-full pb-5">
            <Canvas>
              <ambientLight intensity={Math.PI} />
              <directionalLight position={[10, 10, 5]} />
              <Center>
                <Suspense fallback={<CanvasLoader />}>
                  <group
                    scale={2}
                    position={[0, -3, 0]}
                    rotation={[0, -0.1, 0]}
                  >
                    <DemoComputer texture={currentProject.texture} />
                  </group>
                </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
