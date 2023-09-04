import React, { useEffect, useState } from "react";
import "../../css/Projects.css";
import ParticlesBackground from "./particles/Particles";
import ph from "../../../public/image/nina.jpg";
import r from "../../../public/image/react.png";
import axios from "axios";
import Loading from "./Loading";

function Projects() {
    const [project, setProject] = useState();
    const [tools, setTools] = useState();
    useEffect(() => {
        fetchProject();
        fetchTools();
    }, []);
    const fetchProject = async () => {
        try {
            const response = await axios.get("/api/projects");

            setProject(response.data.pro);
        } catch (error) {
            console.log(error);
        }
    };
    /***************************************** */
    const fetchTools = async () => {
        try {
            const response = await axios.get("/api/projects");
            setTools(response.data.tol);
        } catch (error) {
            console.log(error);
        }
    };
    /*********************************************** */

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % project.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? project.length - 1 : prevIndex - 1
        );
    };

    return (
        <div>
            <ParticlesBackground />
            <Loading dta={project}/>

            <div className="parentdev">
                <div className="prtit">
                    <div className="titdiv">liste of my projects</div>
                    <div className="paragdiv">
                    This is a list of the projects we have completed, along with the technologies we used in them
                    </div>
                </div>
                <div className="projects1">
                    <button onClick={goToPrevSlide} className="prev">
                        &#10094;
                    </button>
                    {project?.map((proj, index) => (
                        <div
                            key={proj.id}
                            className={`product-slide ${
                                index === currentIndex ? "active" : ""
                            }`}
                        >
                            <div className="pro">
                                <div className="divbac">
                                    <img
                                        src={
                                            "http://localhost:8000/ImgUploads/" +
                                            proj.image
                                        }
                                        alt=""
                                        width="100%"
                                        height="100%"
                                    />
                                </div>

                                <div className="tool1">
                                    {tools?.map((tool) => (

                                         (()=>{if(proj.id==tool.Pro_Id){
                                            return  <div key={tool.id} className="toolinf">
                                            <img
                                                src={"http://localhost:8000/ImgUploads/" +tool.image}
                                                width="70%"
                                                alt=""
                                            />
                                            <div className="toolname1">
                                                {tool.Name}
                                            </div>
                                        </div>
                                        }})()



                                    ))}
                                </div>

                                <div className="proinf">
                                    <div></div>
                                    <div className="divmr">
                                        <div className="namepro">
                                            {proj.Name}
                                        </div>{" "}
                                        <div className="prodesc">
                                            {" "}
                                            {proj.Description}{" "}
                                        </div>
                                        <div className="btnmr">
                                            <a href={proj.link}>PERVIEW</a>{" "}
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button onClick={goToNextSlide} className="next">
                                &#10095;
                            </button>
                        </div>
                    ))}
                </div>
                <div className="projects2">
                    {project?.map((proj) => (
                        <div className="pro" key={proj.id}>
                            <div className="divbac">
                                <img
                                    src={
                                        "http://localhost:8000/ImgUploads/" +
                                        proj.image
                                    }
                                    width="100%"
                                    height="100%"
                                    alt=""
                                />
                            </div>

                            <div className="tool1">
                            {tools?.map((tool) => (

(()=>{if(proj.id==tool.Pro_Id){
   return  <div key={tool.id} className="toolinf">
   <img
       src={"http://localhost:8000/ImgUploads/" +tool.image}
       width="80%"
       alt=""
   />
   <div className="toolname1">
       {tool.Name}
   </div>
</div>
}})()



))}
                            </div>

                            <div className="proinf">
                                <div></div>
                                <div className="divmr">
                                    <div className="namepro">{proj.Name}</div>{" "}
                                    <div className="prodesc">
                                        {proj.Description}
                                    </div>
                                    <div className="btnmr">
                                        <a href={proj.link}>Perview</a>{" "}
                                        <span></span>
                                    </div>
                                </div>
                            </div>

                            <div className="betwenpro"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Projects;
