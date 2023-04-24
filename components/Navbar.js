import Link from "next/link";
import Logo from '@/icons/Logo';

const Navbar = () => {
  return (
    <nav className="sticky z-10 mx-auto flex w-full max-w-6xl items-center justify-between bg-white">
      <div className="flex gap-10">
        <Link href="/">
          <Logo className="fill-primary-850" />
        </Link>
        <ul className="flex list-none items-center gap-8 uppercase tracking-wider">
          <li className="text-base text-neutral-350 transition duration-200 ease-in hover:text-primary-850">
            <Link href="#">
              <span>Features</span>
            </Link>
          </li>
          <li className="text-base text-neutral-350 transition duration-200 ease-in hover:text-primary-850">
            <Link href="#">
              <span>Pricing</span>
            </Link>
          </li>
          <li className="text-base text-neutral-350 transition duration-200 ease-in hover:text-primary-850">
            <Link href="#">
              <span>Resources</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-10">
        <button className="font-bold uppercase tracking-wide text-neutral-350 transition duration-200 ease-in hover:text-neutral-350/80">
          Log In
        </button>
        <button className="rounded-full bg-neutral-250 px-4 py-2 font-bold uppercase tracking-wide text-white transition duration-200 ease-in hover:bg-neutral-275">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
