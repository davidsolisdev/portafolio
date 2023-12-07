import React from "react";
import { useSelector } from "react-redux";
import aos from "aos";

import Header from "../components/header";
import CustomHead from "../components/customHead";

import MainContent from "../views/mainContent";
import AboutMeContent from "../views/aboutMeContent";
import SkillsContent from "../views/skillsContent";
import ExperienceContent from "../views/experienceContent";
import ProjectsContent from "../views/projectsContent";
import ContactContent from "../views/contactContent";
import Footer from "../components/footer";

import type { NextPage } from "next";
import type { RootState } from "../redux/store";

import styles from "../styles/Home.module.css";
import "aos/dist/aos.css";
import Drawer from "../components/drawer";

const Home: NextPage = () => {
  const state = useSelector((state: RootState) => state.globalInfo);

  React.useEffect(() => {
    aos.init({
      disable: false,
      once: true,
      duration: 700,
      delay: 100,
    });
  }, []);

  return (
    <>
      <CustomHead />
      <Header />
      <section className={styles.body_content}>
        <MainContent />
        <AboutMeContent />
        <SkillsContent />
        <ExperienceContent />
        <ProjectsContent />
        <ContactContent />
      </section>
      <Footer />
    </>
  );
};

export default Home;
