
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - App Features */}
      <div className="flex-1 bg-black text-white p-8 lg:p-16 flex flex-col justify-between relative overflow-hidden">
        {/* Logo */}
        <div className="flex items-center mb-8">
          <img 
            src="/lovable-uploads/c671c2d1-6720-4c4d-9ed0-1068f8bb33d1.png" 
            alt="SofaScore Logo" 
            className="w-8 h-8 mr-3"
          />
          <span className="text-2xl font-bold">SofaScore</span>
        </div>

        {/* App Feature Image - Now using the background image */}
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
        <div className="max-w-lg">
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#" 
              className="inline-block transition-transform hover:scale-105"
            >
              <img 
                src="/lovable-uploads/be02269c-dc6f-4ca4-a847-fa443ec8b9f1.png"
                alt="Download on the App Store"
                className="h-14 w-auto"
              />
            </a>
            <a 
              href="#" 
              className="inline-block transition-transform hover:scale-105"
            >
              <img 
                src="/lovable-uploads/3f864a0f-9766-474a-ab12-7d7d23a61d57.png"
                alt="Get it on Google Play"
                className="h-14 w-auto"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Hero Section */}
      <div className="flex-1 relative overflow-hidden">
        {/* Background Image - Now using the app feature image */}
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
        <div className="relative z-10 h-full flex items-center justify-center p-8 lg:p-16">
          <div className="text-center text-white max-w-2xl">
            {/* Main Heading - Removed "SofaScore" */}
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-2xl lg:text-3xl font-normal mt-2 text-gray-200">
                Your Football Fix, Again
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Get Live scores, stats, and free match streams.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-8 mt-12 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#384df5]">Live</div>
                <div className="text-sm text-gray-300">Real-time Scores</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#384df5]">Stats</div>
                <div className="text-sm text-gray-300">Detailed Analytics</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#384df5]">Free</div>
                <div className="text-sm text-gray-300">Match Streams</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements for Visual Interest */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-[#384df5] rounded-full opacity-60 animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-32 left-16 w-6 h-6 bg-white rounded-full opacity-40 animate-bounce hidden lg:block"></div>
        <div className="absolute top-1/2 right-8 w-3 h-3 bg-[#384df5] rounded-full opacity-80 animate-pulse hidden lg:block"></div>
      </div>
    </div>
  );
};

export default Index;
