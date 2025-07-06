
import React from 'react';

const Index = () => {
  return (
    <div className="font-ubuntu">
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
            <span className="text-3xl font-bold font-ubuntu text-glow">SofaScore</span>
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

          {/* Download Buttons - Made bigger */}
          <div className="w-full flex justify-center">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a 
                href="https://app.sofascore.com/nixz/chelsea" 
                className="inline-block transition-transform hover:scale-105"
              >
                <img 
                  src="/lovable-uploads/a01144d8-f22c-49c0-b095-07b9ed8deeb7.png"
                  alt="Download on the App Store"
                  className="h-16 w-auto"
                />
              </a>
              <a 
                href="https://app.sofascore.com/nixz/chelsea" 
                className="inline-block transition-transform hover:scale-105"
              >
                <img 
                  src="/lovable-uploads/adfa2dd5-6e97-46f8-adb2-0742dfea3aca.png"
                  alt="Get it on Google Play"
                  className="h-16 w-auto"
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
              <h1 className="text-4xl lg:text-7xl font-bold mb-6 leading-tight font-ubuntu text-glow-orange">
                Your Football Fix, Again
              </h1>

              {/* Subheading */}
              <p className="text-xl lg:text-3xl text-white mb-8 leading-relaxed font-ubuntu font-medium text-glow">
                Get Live scores, stats, and free match streams.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden text-white min-h-screen flex flex-col" style={{ backgroundColor: '#384df5' }}>
        {/* Top Section - Logo with white background */}
        <div className="pt-8 pb-4">
          <div className="flex items-center justify-center">
            <div className="bg-white rounded-full px-4 py-2 border border-gray-200">
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/c671c2d1-6720-4c4d-9ed0-1068f8bb33d1.png" 
                  alt="Sofa Logo" 
                  className="w-6 h-6 mr-2"
                />
                <span className="text-xl font-bold font-ubuntu text-black">Sofa</span>
              </div>
            </div>
          </div>
        </div>

        {/* App Section - Image and Buttons Side by Side */}
        <div className="px-4" style={{ height: '25vh' }}>
          <div className="flex h-full items-center">
            {/* Left Side - App Image - Updated to new mobile interface */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-full max-w-[200px]">
                <img 
                  src="/lovable-uploads/fc5f233c-ef86-4d35-be27-32157cc82155.png"
                  alt="PSG vs Real Madrid Match Interface"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>

            {/* Right Side - Download Buttons - Made bigger */}
            <div className="flex-1 flex items-center justify-center">
              <div className="flex flex-col gap-3 items-center w-full max-w-[180px]">
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
          </div>
        </div>

        {/* Bottom Section - Background Image with new uploaded image */}
        <div className="relative flex-1 overflow-hidden" style={{ minHeight: '65vh' }}>
          {/* Background Image - Updated to second new image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/lovable-uploads/0e666f6f-767b-4091-a811-a3255e632c79.png)'
            }}
          >
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-end justify-center p-6 pb-16">
            {/* Text content removed as requested */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
