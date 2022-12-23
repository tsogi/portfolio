import "./ProjectItem.css";
import DemoModal from "./DemoModal";
import { useState } from "react";


function ProjectItem(props){
    const [showDemoModal, setShowDemoModal] = useState(false);
    const [demoIframe, setDemoIframe] = useState("<iframe></iframe>");

    function handleMouseEnter(e){
        let element = e.target.querySelector(".projectDetails");
        element.style.visibility = "visible";
        element.style.opacity = 1;
    }

    function handleMouseLeave(e){
        hideProjectHovers();
    }

    function hideProjectHovers(){
        document.querySelectorAll(".projectDetails").forEach((element) => {
            element.style.visibility = "hidden";
            element.style.opacity = 0;
        })
    }

    function handleVideoClick(url){
        setShowDemoModal(true);
        setDemoIframe(url);
    }

    function handleLiveClick(url){
        setShowDemoModal(true);
        setDemoIframe(url);
    }

    function handleNewTabClick(url){
        window.open(url, '_blank').focus();
    }

    function handleModalClose(){
        setShowDemoModal(false)
        hideProjectHovers();
    }

    return <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="projectItem">
        <img alt="Project thumbnail" className="thumbnail" src={props.projectObject.cover}></img>
            <div className="projectDetails">
                <div className="description">{props.projectObject.description}</div>
                <div className="demo">
                    {
                        props.projectObject.demos.find((item) => item.name == "video") ?
                            <div className="video" onClick={() => { handleVideoClick(props.projectObject.demos.find((item) => item.name == "video").link) }}>Video</div>
                            :
                            null
                    }
                    {
                        props.projectObject.demos.find((item) => item.name == "live") ?
                            <>
                                <div className="live" onClick={() => { handleLiveClick(props.projectObject.demos.find((item) => item.name == "live").link) }}>Live</div>
                                <div className="newTab" onClick={() => { handleNewTabClick(props.projectObject.demos.find((item) => item.name == "live").link) }}>New Tab</div>
                            </>
                            :
                            null
                    }
            </div>
        </div>
        {
            showDemoModal ? 
            <DemoModal onClose={() => { handleModalClose() }} iframe={demoIframe} />
            :
            null
        }
    </div>
}

export default ProjectItem;