import Experience from "./experience";
import CV from "./cv";
import AboutMe from "./aboutMe";

export default function Tabs() {
    return (
        <div id="tabs">
            <Experience/>
            <CV/>
            <AboutMe/>
        </div>
    )
}