const BoostContainer = () => {
  return (
    <div className="relative isolate flex w-full flex-col content-center justify-center gap-8 overflow-hidden bg-primary-750 py-[57px]">
      <img
        className="absolute inset-0 isolate -z-10 w-full object-cover"
        src="./assets/bg-boost-desktop.svg"
      />
      <h1 className="mx-auto text-[40px] font-bold leading-[48px] text-white">
        Boost your links today
      </h1>
      <button className="mx-auto max-w-max rounded-full bg-neutral-250 px-10 py-3 font-bold uppercase tracking-wide text-white transition duration-200 ease-in hover:bg-neutral-275">
        Get Started
      </button>
    </div>
  );
};

export default BoostContainer;
