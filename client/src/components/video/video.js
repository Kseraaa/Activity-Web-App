import ProjectClip from "../video/Project-Clip.mp4";
function Video() {
    return(

            <video
                autoPlay
                loop
                muted
                style={{
                position: "absolute",
                width: "auto",
                left: "50%",
                top: "55%",
                height: "auto",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1"
                }}
            >
                <source src={ProjectClip} type="video/mp4" />
            </video>
    );
}
export default Video ;






