import IndividualWriting from "@/components/IndividualWriting";
import { writingData } from "@/dataFiles/articles";
import Link from "next/link";
import { EmptyCellsWrapper } from "./EmptyCellsWrapper";

const WritingGrid = () => {
  return (
    <div className="w-full h-fit px-[30px] sm:px-[48px] max-xl:mt-[55vh] mt-[65vh] relative pb-[104px] fade-in">
      <EmptyCellsWrapper itemCount={writingData.length}>
        {writingData.map((item, index) => (
          <Link
            href={`/writing/${item.slug}`}
            key={index}
            className="backdrop-blur-sm p-[44px] xl:p-[32px] bg-black grid-rows-1 relative group"
          >
            <div className="absolute inset-0 opacity-100 transition-all duration-700">
              <div className="overflow-hidden absolute inset-0">
                <div className="absolute top-[-50%] inset-[1px] bg-[#53C599]/25 w-[110%] h-full rounded-b-full left-1/2 -translate-x-1/2 blur-[80px] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out" />
              </div>
              <div className="absolute left-[-1px] top-[-1px] w-[10px] h-[10px] border-l-[1px] border-t-[1px] border-transparent group-hover:border-[#205F47] transition-all duration-500 ease-in-out" />
              <div className="absolute right-[-1px] top-[-1px] w-[10px] h-[10px] border-r-[1px] border-t-[1px] border-transparent group-hover:border-[#205F47] transition-all duration-500 ease-in-out" />
              <div className="absolute left-[-1px] bottom-[-1px] w-[10px] h-[10px] border-l-[1px] border-b-[1px] border-transparent group-hover:border-[#205F47] transition-all duration-500 ease-in-out" />
              <div className="absolute right-[-1px] bottom-[-1px] w-[10px] h-[10px] border-r-[1px] border-b-[1px] border-transparent group-hover:border-[#205F47] transition-all duration-500 ease-in-out" />
            </div>
            <IndividualWriting
              tag={item.tag}
              title={item.title}
              authors={item.authors}
              description={item.description}
              date={item.date}
            />
          </Link>
        ))}
      </EmptyCellsWrapper>
    </div>
  );
};

export default WritingGrid;
