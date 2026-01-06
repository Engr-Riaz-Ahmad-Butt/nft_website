import { roadMapAllPhases } from "../data-display/data";
import NFTText from "../general/NFTText";
import RoadMapHeader from "../general/RoadMapHeader";
import TimelinePhase from "../general/TimelinePhase";

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-black p-8 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <RoadMapHeader />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="absolute left-[29px] top-0 w-0 border-l-2 border-dashed border-red-600
  h-[1110px] md:h-[1010px] sm:h-[600px]"
          />

          {/* Phases */}
          <TimelinePhase />
          <NFTText/>
          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {roadMapAllPhases.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === 0 ? "bg-red-600" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
            <button className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
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
