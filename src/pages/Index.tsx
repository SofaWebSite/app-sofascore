
import React from 'react';

const Index = () => {
  return (
    <>
      {/* Desktop Layout */}
      <div className="min-h-screen bg-white hidden lg:flex">
        {/* Left Side - App Features */}
        <div className="w-2/5 bg-black text-white p-16 flex flex-col justify-between relative overflow-hidden">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <img 
              src="/lovable-uploads/c671c2d1-6720-4c4d-9ed0-1068f8bb33d1.png" 
              alt="SofaScore Logo" 
              className="w-8 h-8 mr-3"
            />
            <span className="text-2xl font-bold font-poppins">SofaScore</span>
          </div>

          {/* App Feature Image */}
          <div className="flex-1 flex items-center justify-center mb-8">
            <div className="relative max-w-md">
              <img 
                src="/lovable-uploads/05d94f8d-d250-4c10-99f8-f6d86e2f39d3.png"
                alt="Football Gaming Experience"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Download Buttons */}
          <div className="w-full flex justify-center">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a 
                href="https://app.sofascore.com/nixz/chelsea" 
                className="inline-block transition-transform hover:scale-105"
              >
                <img 
                  src="/lovable-uploads/a01144d8-f22c-49c0-b095-07b9ed8deeb7.png"
                  alt="Download on the App Store"
                  className="h-14 w-auto"
                />
              </a>
              <a 
                href="https://app.sofascore.com/nixz/chelsea" 
                className="inline-block transition-transform hover:scale-105"
              >
                <img 
                  src="/lovable-uploads/adfa2dd5-6e97-46f8-adb2-0742dfea3aca.png"
                  alt="Get it on Google Play"
                  className="h-14 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Hero Section */}
        <div className="w-3/5 relative overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/lovable-uploads/16148200-7bc2-414c-b328-a94beb787b73.png)'
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center p-16">
            <div className="text-center text-white max-w-2xl">
              {/* Main Heading */}
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight font-poppins">
                <span className="block text-2xl lg:text-3xl font-normal mt-2 text-gray-200 font-poppins">
                  Your Football Fix, Again
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed font-poppins">
                Get Live scores, stats, and free match streams.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden bg-black text-white min-h-screen flex flex-col">
        {/* Top Section - Logo */}
        <div className="p-6 pt-12">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/c671c2d1-6720-4c4d-9ed0-1068f8bb33d1.png" 
              alt="SofaScore Logo" 
              className="w-6 h-6 mr-2"
            />
            <span className="text-xl font-bold font-poppins">SofaScore</span>
          </div>
        </div>

        {/* App Feature Image */}
        <div className="px-6 pb-6">
          <div className="relative max-w-xs mx-auto">
            <img 
              src="/lovable-uploads/05d94f8d-d250-4c10-99f8-f6d86e2f39d3.png"
              alt="Football Gaming Experience"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>

        {/* Download Buttons */}
        <div className="px-6 pb-8">
          <div className="flex flex-col gap-3 items-center w-full max-w-xs mx-auto">
            <a 
              href="https://app.sofascore.com/nixz/chelsea" 
              className="inline-block transition-transform hover:scale-105 w-full"
            >
              <img 
                src="/lovable-uploads/a01144d8-f22c-49c0-b095-07b9ed8deeb7.png"
                alt="Download on the App Store"
                className="h-12 w-auto mx-auto"
              />
            </a>
            <a 
              href="https://app.sofascore.com/nixz/chelsea" 
              className="inline-block transition-transform hover:scale-105 w-full"
            >
              <img 
                src="/lovable-uploads/adfa2dd5-6e97-46f8-adb2-0742dfea3aca.png"
                alt="Get it on Google Play"
                className="h-12 w-auto mx-auto"
              />
            </a>
          </div>
        </div>

        {/* Bottom Section - Stadium Background with Text */}
        <div className="relative flex-1 min-h-80 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/lovable-uploads/16148200-7bc2-414c-b328-a94beb787b73.png)'
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-end justify-center p-6 pb-12">
            <div className="text-center text-white">
              {/* Main Heading */}
              <h1 className="text-2xl font-bold mb-2 leading-tight font-poppins">
                Your Football Fix, Again
              </h1>

              {/* Subheading */}
              <p className="text-base text-gray-200 leading-relaxed font-poppins">
                Get Live scores, stats, and free match streams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
