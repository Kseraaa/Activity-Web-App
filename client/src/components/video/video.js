import ProjectClip from "../video/Project-Clip.mp4";

function Video() {
    return(
        <video
            autoPlay
            loop
            muted
            style={{
            position: "relative",
            width: "auto",
            height: "auto",
            left: 88,
            top: 80,
            zIndex: "tooltip",
            }}
        >
            <source src={ProjectClip} type="video/mp4" />
        </video>
    );
}

export default Video ;