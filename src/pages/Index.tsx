
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Left Side - App Features */}
      <div className="w-full lg:w-2/5 bg-black text-white p-6 sm:p-8 lg:p-16 flex flex-col justify-between relative overflow-hidden order-2 lg:order-1">
        {/* Logo */}
        <div className="flex items-center mb-6 lg:mb-8 justify-center lg:justify-start">
          <img 
            src="/lovable-uploads/c671c2d1-6720-4c4d-9ed0-1068f8bb33d1.png" 
            alt="SofaScore Logo" 
            className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3"
          />
          <span className="text-xl sm:text-2xl font-bold">SofaScore</span>
        </div>

        {/* App Feature Image */}
        <div className="flex-1 flex items-center justify-center mb-6 lg:mb-8">
          <div className="relative max-w-xs sm:max-w-sm lg:max-w-md">
            <img 
              src="/lovable-uploads/05d94f8d-d250-4c10-99f8-f6d86e2f39d3.png"
              alt="Football Gaming Experience"
              className="w-full h-auto rounded-xl lg:rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Download Buttons */}
        <div className="w-full flex justify-center">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
            <a 
              href="#" 
              className="inline-block transition-transform hover:scale-105"
            >
              <img 
                src="/lovable-uploads/a01144d8-f22c-49c0-b095-07b9ed8deeb7.png"
                alt="Download on the App Store"
                className="h-12 sm:h-14 w-auto"
              />
            </a>
            <a 
              href="#" 
              className="inline-block transition-transform hover:scale-105"
            >
              <img 
                src="/lovable-uploads/adfa2dd5-6e97-46f8-adb2-0742dfea3aca.png"
                alt="Get it on Google Play"
                className="h-12 sm:h-14 w-auto"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Hero Section */}
      <div className="w-full lg:w-3/5 relative overflow-hidden min-h-[50vh] lg:min-h-screen order-1 lg:order-2">
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
        <div className="relative z-10 h-full flex items-center justify-center p-6 sm:p-8 lg:p-16">
          <div className="text-center text-white max-w-xl lg:max-w-2xl">
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
              <span className="block text-lg sm:text-xl lg:text-2xl xl:text-3xl font-normal mt-2 text-gray-200">
                Your Football Fix, Again
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-6 lg:mb-8 leading-relaxed px-4 sm:px-0">
              Get Live scores, stats, and free match streams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
