export default function Hero() {
  return (
    <div className="relative mx-auto flex max-w-6xl items-center justify-start overflow-hidden pb-40">
      <div className="flex flex-col justify-start gap-4">
        <h1 className="text-[80px] font-bold leading-[90px]">
          More than just shorter links
        </h1>
        <h3 className="text-[22px] leading-[36px] text-neutral-350">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </h3>
        <button className="max-w-max rounded-full bg-neutral-250 px-10 py-3 font-bold uppercase tracking-wide text-white transition duration-200 ease-in hover:bg-neutral-275">
          Get Started
        </button>
      </div>
      <div className="translate-x-10">
        <img src="./assets/illustration-working.svg" />
      </div>
    </div>
  );
}
