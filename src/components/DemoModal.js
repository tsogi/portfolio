import "./DemoModal.css";

function DemoModal(props){
    function handleCloseClick(){
        props.onClose();
    }

    return <div className="demoModal">
        <div className="demoWindow">
            <div onClick={handleCloseClick} className="closeBtn">x</div>
            <div className="iframeWrapper">
                <iframe width="100%" height="100%" src={props.iframe} title=""></iframe>
            </div>
        </div>
    </div>
}

export default DemoModal;