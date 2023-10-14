import Pic from "../Assets/Pic.png";
export default function HomeSection() {
  return (
    <section id="HomeSection" className="home--section">
      <div className="home--section--content--box">
        <div className="home--section--content">
          <p className="section--title">Hey, I'm Jordin</p>
          <h1 className="home--section--title">
            <span className="home--section-title--color">Full Stack</span>
            {""}
            <br />
            Developer
          </h1>
          <p className="home--section-description">
            I'm a Web Developer passionate about technology and the development
            of myself as well as those around me.
            <br />
          </p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            window.open(
              "https://github.com/Jordindibbs/jordin_dibbs",
              "_blank"
            );
          }}
        >
          My Portfolio's Repo
        </button>
      </div>
      <div className="home--section--img">
        <img className="home-img-resize" src={Pic} alt="Home Section" />
      </div>
    </section>
  );
}
