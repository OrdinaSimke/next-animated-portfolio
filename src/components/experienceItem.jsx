const ExperienceItem = ({ left, title, desc, date, company }) => {
  return (
    <div className="flex justify-between h-48">
      {/* LEFT */}
      <div className="w-1/3">
        {left && (
          <>
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              {title}
            </div>
            <div className="p-3 text-sm italic">{desc}</div>
            <div className="p-3 text-red-400 text-sm font-semibold">{date}</div>
            <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
              {company}
            </div>
          </>
        )}
      </div>
      {/* CENTER */}
      <div className="w-1/6 flex justify-center">
        {/* LINE */}
        <div className="w-1 h-full bg-gray-600 rounded relative">
          {/* CIRCLE */}
          <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-1/3">
        {!left && (
          <>
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-e-lg">
              {title}
            </div>
            <div className="p-3 text-sm italic">{desc}</div>
            <div className="p-3 text-red-400 text-sm font-semibold">{date}</div>
            <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
              {company}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;
