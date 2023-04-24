const AdvancedStats = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
      <div className="flex flex-col gap-5">
        <h2 className="text-center text-[40px] font-bold leading-[48px]">
          Advanced Statistics
        </h2>
        <h3 className="text-center text-[18px] font-[500] leading-[32px] text-neutral-350">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </h3>
      </div>
      <div className="relative isolate mb-32 flex h-96 justify-between">
        <div className="absolute top-[45%] -z-10 h-2 w-full bg-neutral-250" />
        <div className="relative flex h-[267px] w-[350px] flex-col self-start rounded bg-white px-8 shadow-md">
          <div className="flex aspect-1 w-[88px] -translate-y-10 justify-center rounded-full bg-primary-750 p-6">
            <img
              src="./assets/icon-brand-recognition.svg"
              className="aspect-1 w-10"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[22px] font-bold leading-[33px]">
              Brand Recognition
            </h3>
            <p className="text-[15px] leading-[26px] text-neutral-350">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>
        <div className="relative flex h-[267px] w-[350px] flex-col self-center rounded bg-white px-8 shadow-md">
          <div className="flex aspect-1 w-[88px] -translate-y-10 justify-center rounded-full bg-primary-750 p-6">
            <img
              src="./assets/icon-detailed-records.svg"
              className="aspect-1 w-10"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[22px] font-bold leading-[33px]">
              Detailed Records
            </h3>
            <p className="text-[15px] leading-[26px] text-neutral-350">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>
        <div className="relative flex h-[267px] w-[350px] flex-col self-end rounded bg-white px-8 shadow-md">
          <div className="flex aspect-1 w-[88px] -translate-y-10 justify-center rounded-full bg-primary-750 p-6">
            <img
              src="./assets/icon-fully-customizable.svg"
              className="aspect-1 w-10"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[22px] font-bold leading-[33px]">
              Fully Customizable
            </h3>
            <p className="text-[15px] leading-[26px] text-neutral-350">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedStats;
