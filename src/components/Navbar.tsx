import logo from "../images/logo.png";
import { useRouter } from "next/router";
import Link from "next/link";
type NavLink = {
  name: string;
  path: string;
  redirect: boolean;
};
const NavLinks: NavLink[] = [
  { name: "Home", path: "/", redirect: false },
  {
    name: "Resume",
    path: "https://docs.google.com/document/d/1OOHycUcBDg2OrI9cFXekymovHYsKSR6PtFPt2sGXX9Q/edit",
    redirect: true,
  },
  { name: "Contact", path: "/contact", redirect: false },
  { name: "Portfolio", path: "/portfolio", redirect: false },
  { name: "About", path: "/about", redirect: false },
  { name: "Github", path: "https://github.com/VladADragos/", redirect: true },
];
const Navbar: React.FC = () => {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <nav className="flex w-full justify-between pt-4 items-center">
      <header className="hover:scale-105 transition-all ease-in-out duration-400">
        <Link href="/">
          <a>
            <img src={logo.src} alt="logo"></img>
          </a>
        </Link>
      </header>

      <ul className="flex gap-6 font-medium">
        {NavLinks.map(({ name, path, redirect }, index) => (
          <li key={index} className={` ${0}`}>
            {redirect ? (
              <a
                href={`${path}`}
                target={redirect ? "_blank" : "_parent"}
                className="link-effect-hover"
              >
                {name}
              </a>
            ) : (
              <Link href={`/${path}`}>
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
