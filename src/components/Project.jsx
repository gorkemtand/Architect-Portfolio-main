import React, {useRef, useLayoutEffect} from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCover from "./ProjectCover";
import ProjectInfo from "./ProjectInfo";

gsap.registerPlugin(ScrollTrigger);

function Project({ project }) {

  const component = useRef();
  const slider = useRef();

  useLayoutEffect( () => {
    let ctx = gsap.context(() =>{
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length-1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth
        }
      });
    }, component);
    return () => ctx.revert();
  });


  return (
    <div className="projectsContainer" ref={component}>
      <div ref={slider} className="Container">
      <div className="panel">
          <ProjectCover 
          id={project.id}
          title={project.name}
          link={project.link}
          coverUrl={project.imageCoverUrl} />
       </div>
       <div className="panel">
        <ProjectInfo image1={project.image1Url} 
                   description1={project.image1Desc} 
                   image2={project.image2Url} 
                   description2={project.image2Desc} 
                   image3={project.image3Url}
                   description3={project.image3Desc} 
        />
        </div>
       
      </div>
    </div>
  );
}

export default Project;

/*

*/