import { roadMapAllPhases } from "../data-display/data";

const TimelinePhase = ({ phase, isActive }) => {
  return (
    <div className="space-y-12 sm:space-y-16 md:space-y-24">
      {roadMapAllPhases.map((phase, index) => (
        <div key={index} className="relative">
          {/* Timeline Dot */}
          <div className="absolute left-4 sm:left-6 md:left-[29px] -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 md:w-[38px] md:h-[38px] rounded-full bg-red-600">
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-[27px] md:h-[27px] rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="ml-12 sm:ml-14 md:ml-16 flex-1">
            {/* Phase Header */}
            <div
              className={`bg-[#FD16404D] w-full md:w-[562px] h-auto px-3 sm:px-4 md:pl-7 py-2 md:py-0 md:h-[57px] flex items-center mb-4 ${
                index % 2 !== 0 ? "md:ml-[238px]" : ""
              }`}
            >
              <h3 className="font-zen-dots text-[#FD1640] text-sm sm:text-base md:text-lg lg:text-xl leading-5 sm:leading-6">
                {phase.title}
              </h3>
            </div>

            {/* Content Box */}
            <div
              className={`mt-2 flex flex-col md:flex-wrap ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } bg-[#FD1640] rounded-r-lg h-auto md:h-40 z-10`}
            >
              {/* Text Content */}
              <div className="flex-1 p-3 sm:p-4 md:p-6 relative z-20">
                <ul className="list-disc pl-5 sm:pl-6 md:pl-7 space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base font-inter">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Image/Video Section */}
              <div className="relative w-full md:w-[288px] h-40 sm:h-48 md:h-[238px]">
                <img
                  src={phase.image}
                  alt={`Phase ${phase.number}`}
                  className="mx-auto h-32 sm:h-40 md:h-auto md:absolute md:left-1/2 md:top-[31px] md:w-[206px] md:h-[258px] transform md:-translate-x-1/2 md:-translate-y-1/2 z-20"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelinePhase;
