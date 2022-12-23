import "./ProjectsPage.css";
import { projectsList } from "../data/projects";
import ProjectItem from "./ProjectItem";

function ProjectsPage(){
    return <div className="projectPage">
        <div className="projectsLabel">My Recent Projects</div>
        <div className="projectsList">
            {
                projectsList.map((project) => {
                    return <div className="projectItemContainer">
                        <ProjectItem projectObject={project} />
                    </div>
                })
            }
        </div>
    </div>
}

export default ProjectsPage;