import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";
import logo from "../images/logo.png";
import catbook from "../images/catbook.png";
import routiner from "../images/routiner.png";
import { DiGithubBadge } from "react-icons/di";
import { HiOutlineLink } from "react-icons/hi";
const NavLinks = ["Home", "Resume", "Contact", "Portfolio", "About", "Github"];

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between pt-4 items-center">
      <header>
        {" "}
        <Image src={logo} alt="logo" ></Image>{" "}
      </header>

      <ul className="flex gap-6 font-medium">
        {NavLinks.map((link, index) => (
          <li key={index} className="hover:underline">
            {" "}
            <a href="#"> {link} </a>{" "}
          </li>
        ))}
      </ul>
    </nav>
  );
};

const PortfolioItem = ({image}) => {
  return (
    <div className=" ">
      <div className="">
        <div className="border-4 border-black">

        <Image src={image} alt="catbook" layout="responsive"></Image>
        </div>
        <div className="w-12 h-4 bg-black mx-auto"></div>
      </div>
      <div className="flex gap-4">
        <a className="flex items-center hover:underline gap-1" href="#">
          <h4 className="font-medium">demo</h4>
          <HiOutlineLink className="text-lg" />
        </a>
        <a className="flex items-center hover:underline gap-1" href="#">
          <h4 className="font-medium">source</h4>
          <DiGithubBadge className="text-xl" />
        </a>
        <a className="hover:underline" href="#">
          <h4 className="font-medium">learn more</h4>
        </a>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <div className=" px-20 bg-slate-50  min-h-screen font-poppins font-bold text-lg  ">
      <Navbar />

      <section className="mt-36 flex flex-col gap-12">
        <div>
          <div className=" ">
            <h2 className="font-poppins font-medium">
              Hello! My name is Vlad. I'm a
            </h2>
            <h1 className="font-pacifico text-4xl text-brand-blue-medium ">
              Front-end oriented full-stack developer
            </h1>
          </div>
          <div className="pt-5 flex gap-4">
            <Button className="bg-brand-orange-medium">Portfolio</Button>
            <Button className="bg-brand-blue-medium">Contact</Button>
          </div>
        </div>

        <div>
          <h3 className="mb-2">Some projects</h3>
          <div className="grid grid-cols-3 gap-12 xl:w-4/5">
            <PortfolioItem image={routiner} />
            <PortfolioItem image={catbook} />
            <PortfolioItem image={catbook} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
