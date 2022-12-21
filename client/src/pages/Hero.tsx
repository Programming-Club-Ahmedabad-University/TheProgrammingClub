import * as React from "react";
import Members from "../components/HeroPage/Members";
import { Navbar } from "../components/Navbar";
import About from "../components/HeroPage/About";
import Chapters from "../components/HeroPage/Chapters";
import LatestEvent from "../components/HeroPage/LatestEvent";
import { Footer } from "../components/Footer";
import HeroSection from "../components/HeroPage/HeroSection";

export interface IHeroProps { }

export default class Hero extends React.PureComponent<IHeroProps> {
  public render() {
    return (
      <div className="App w-screen h-screen text-gray-500 text-3xl">
        <Navbar />
        <HeroSection/>
        <Members />
        <About />
        <Chapters />
        <LatestEvent />
        <Footer />
      </div>)
  }
}
