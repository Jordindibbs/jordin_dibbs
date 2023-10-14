import design_focus from "../Assets/Design-Focus.png";
import cross_industry from "../Assets/Cross-Industry.png";
import full_stack from "../Assets/Full-Stack.png";
import technical_support from "../Assets/technical-support.png";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">About Me</h2>
      </div>
      <div className="skills--section--container">
        <div className="skills--section--card">
          <div className="skills--section--img">
            <img className="resize" src={full_stack} alt="mia" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Full-Stack Development</h3>
            <p className="skills--section--description">
              For me, it's important to know all sides of the web development
              process. I'll learn whatever technology will help me to understand
              all aspects of web development.
            </p>
          </div>
        </div>
        <div className="skills--section--card">
          <div className="skills--section--img">
            <img className="resize" src={design_focus} alt="mia" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">
              Design <br />
              Focused
            </h3>
            <p className="skills--section--description">
              I like making websites look pretty. I know that good design is
              just as important as good development. I strive to improve the
              aesthetics of my personal projects.
            </p>
          </div>
        </div>
        <div className="skills--section--card">
          <div className="skills--section--img">
            <img className="resize" src={technical_support} alt="mia" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">
              My <br />
              Toolkit
            </h3>
            <p className="skills--section--description">
              I am fluent with Javascript, CSS, HTML, React and JQuery. I also
              have moderate experience with Bootstrap, MongoDB, Express and
              nodejs.
            </p>
          </div>
        </div>
        <div className="skills--section--card">
          <div className="skills--section--img">
            <img className="resize" src={cross_industry} alt="mia" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">
              Cross-Industry Experience
            </h3>
            <p className="skills--section--description">
              Before web development, I was a restaurant manager. My background
              gives me versatility, flexibility and the ability to adapt and
              continue my self growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
