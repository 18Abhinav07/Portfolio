export const ExperienceItem = ({
  isLeft,
  title,
  description,
  date,
  company,
}) => {
  return (
    <div className="flex justify-between">
      {isLeft ? (
        <div className="w-1/2">
          <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
            {title}
          </div>
          <div className="p-3 text-sm italic">{description}</div>
          <div className="p-3 text-red-400 text-sm font-semibold">{date}</div>
          <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
            {company}
          </div>
        </div>
      ) : (
        <div className="w-1/2"></div>
      )}
      <div className="w-1/6 flex justify-center">
        <div className="w-1 h-full bg-gray-600 rounded relative">
          <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
        </div>
      </div>
      {!isLeft ? (
        <div className="w-1/2">
          <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
            {title}
          </div>
          <div className="p-3 text-sm italic">{description}</div>
          <div className="p-3 text-red-400 text-sm font-semibold">{date}</div>
          <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
            {company}
          </div>
        </div>
      ) : (
        <div className="w-1/2"></div>
      )}
    </div>
  );
};
