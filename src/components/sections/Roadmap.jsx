import { roadMapAllPhases } from "../data-display/data";
import NFTText from "../general/NFTText";
import RoadMapHeader from "../general/RoadMapHeader";
import TimelinePhase from "../general/TimelinePhase";

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-black py-8 sm:py-12 md:py-16 px-3 sm:px-6 md:px-8 text-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <RoadMapHeader />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="absolute left-4 sm:left-6 md:left-[29px] top-0 w-0 border-l-2 border-dashed border-red-600
  h-[500px] sm:h-[600px] md:h-[1010px] lg:h-[1110px]"
          />

          {/* Phases */}
          <TimelinePhase />
          <NFTText/>
          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-2 sm:gap-4 mt-8 sm:mt-12">
            <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                className="sm:w-6 sm:h-6"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-1 sm:gap-2">
              {roadMapAllPhases.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === 0 ? "bg-red-600" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
            <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                className="sm:w-6 sm:h-6"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Roadmap;
