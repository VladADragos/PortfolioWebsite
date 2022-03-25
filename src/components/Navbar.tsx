import logo from "../images/logo.png";
import { useRouter } from "next/router";
import Link from "next/link";

import Routes from "../Routes";
type NavLink = {
  name: string;
  path: string;
  redirect: boolean;
};
const NavLinks: NavLink[] = [
  { name: "Home", path: Routes.home, redirect: false },
  {
    name: "Resume",
    path: Routes.resume,
    redirect: true,
  },
  { name: "Contact", path: Routes.contact, redirect: false },
  { name: "Portfolio", path: Routes.portfolio.index, redirect: false },
  { name: "About", path: Routes.about, redirect: false },
  { name: "Github", path: Routes.github, redirect: true },
];
const Navbar: React.FC = () => {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <nav className="flex w-full justify-between pt-4 items-center">
      <header className="hover:scale-105 transition-all ease-in-out duration-400">
        <Link href={Routes.home}>
          <a>
            <img src={logo.src} alt="logo"></img>
          </a>
        </Link>
      </header>

      <ul className="flex gap-6 font-medium">
        {NavLinks.map(({ name, path, redirect }, index) => (
          <li key={index} className={` ${0}`}>
            {redirect ? (
              <a href={path} target={"_blank"} className="link-effect-hover">
                {name}
              </a>
            ) : (
              <Link href={path}>
                <a
                  className={
                    pathname === path
                      ? "link-effect-selected"
                      : "link-effect-hover"
                  }
                >
                  {name}
                </a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
