import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Netflix from "../../img/sidebar.png";
import ToDo from "../../img/ecommerce.png";
import Top from "../../img/hoc.png";
import Calender from "../../img/musicapp.png";
import Shoppy from "../../img/shoppy.png";
import Shopyy from "../../img/shopyy.png";
import Vita from "../../img/vita.png";
import Trip from "../../img/Trip.png";
import Gerich_Restaurant from "../../img/Gericht_Restaurant.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [projects, setProjects] = React.useState([
    { id: 1, src: Netflix, link: "https://netfix-clone-fawn.vercel.app/" },
    { id: 2, src: ToDo, link: "https://todo-list-app-nu-six.vercel.app/" },
    { id: 3, src: Top, link: "https://top-courses-three-delta.vercel.app/" },
    { id: 4, src: Calender, link: "https://calendar-himanshu.vercel.app/" },
    { id: 5, src: Shoppy, link: "https://github.com/Himanshu9125/Shoppy" },
    { id: 6, src: Shopyy, link: "https://shopyy-alpha.vercel.app/" },
    {
      id: 7,
      src: Vita,
      link: "https://github.com/Himanshu9125/Vita_prediction",
    },
    { id: 8, src: Trip, link: "https://github.com/Himanshu9125/Trip" },
    {
      id: 9,
      src: Gerich_Restaurant,
      link: "https://garicht-restaurant.vercel.app/",
    },
  ]);
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {projects.map((project) => {
            return (
            <SwiperSlide key={project.id}>
              <img
              src={project.src}
              alt=""
              onClick={() => {
                window.open(project.link, "_blank");
              }}
              />
              <p
              style={{
                color: darkMode ? "white" : "",
                textAlign: "center",
              }}
              >
              {project.id === 1
                ? "Netflix Clone"
                : project.id === 2
                ? "ToDo List"
                : project.id === 3
                ? "Top Courses"
                : project.id === 4
                ? "Calender"
                : project.id === 5
                ? "Shoppy"
                : project.id === 6
                ? "Shopyy"
                : project.id === 7
                ? "Vita Prediction"
                : project.id === 8
                ? "Trip"
                : "Gericht Restaurant"}
              </p>
            </SwiperSlide>
            );
        })}
      </Swiper>
    </div>
  );
};

export default Portfolio;
