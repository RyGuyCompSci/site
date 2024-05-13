import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./App.css";
import Box from "./components/Box";
import ResumeEntry from "./components/ResumeEntry";

const App = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const element = document.getElementById("scrollToTop");
      element.style.opacity = window.scrollY > 0 ? "100%" : "0%";
    });

    window.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const pictures = document.getElementsByClassName("hidden-child");
      Array.from(pictures).forEach((element) => {
        if (!element.width || element.width === 0) return;
        element.style.top = clientY + "px";
        element.style.left = clientX + "px";
        const cursorTooHigh = clientY <= window.innerHeight * 0.35;
        element.style.transform = cursorTooHigh ? "translate(-50%, 10%)" : "translate(-50%, -110%)";
      });
    });
  });

  const scrollToTop = () => window.scrollTo(0, 0);
  return (<div className="app">
    <button
      id="scrollToTop"
      className="linkToTop d-none d-lg-inline-block"
      onClick={scrollToTop}
    >
      <p className="p-0 m-0">&uarr;</p>
      <p className="p-0 m-0">back</p>
      <p className="p-0 m-0">to</p>
      <p className="p-0 m-0">top</p>
    </button>
    <Row>
      <Col lg="5" className="my-4 mx-auto">
        <h1 className="text-center big-font">Hi, I'm Ryan</h1>
        <div className="square hide-parent w-80 p-0 mx-auto">
          <img
            src="./ryan-couch.jpeg"
            alt="Ryan on a couch"
            className="bw square rounded-lg d-block mx-auto"
          />
          {/* <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTNmMzVhNWI5ZjVlYjZlNzJmYzBhMDliNDJhYjRlMzgzMDdmNDlmMiZjdD1n/ZAaaCK5RhUWxG/giphy.gif"
            alt="Stitch gif"
            title="Stitch is my favorite animated character"
            className="child-to-show square rounded-lg d-block mx-auto"
          /> */}
        </div>
      </Col>
    </Row>
    <Row className="justify-content-around" id="about">
      <Col lg="6" className="my-4 mx-auto">
        <Box>
          <h2 className="mb-4">career</h2>
          <p>
            I'm a full-stack developer in Grand Rapids, MI with over five
            years of professional work experience. Web development has been my primary
            passion but I've had the opportunity to work with a variety of
            technologies.
          </p>
          <p>
            I've done work for
            <a
              target="_blank"
              rel="noreferrer"
              href="https://bizstream.com"
              className="ms-1 hidden-parent"
            >
              small businesses
              <img
                src="https://www.bizstream.com/wp-content/uploads/2022/08/bizstream-icon.jpg"
                className="hidden-child dark-border rounded"
                alt="BizStream logo"
              />
            </a>
            ,
            <a
              target="_blank"
              rel="noreferrer"
              href="https://spartannash.com"
              className="ms-1 hidden-parent"
            >
              big businesses
              <img
                src="https://www.spartannash.com/wp-content/uploads/2015/12/LogoSpartanNash.jpg"
                className="hidden-child dark-border rounded bg-black"
                alt="SpartanNash logo"
              />
            </a>
            ,
            <a
              target="_blank"
              rel="noreferrer"
              href="https://bitwerx.com"
              className="ms-1 hidden-parent"
            >
              startups
              <img
                src="https://static.wixstatic.com/media/c11230_920614ef525f4e29ab9f02e8810ce5f3~mv2.png/v1/fill/w_452,h_122,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bitwerx%20new%20white.png"
                className="hidden-child dark-border rounded p-2 bg-blue"
                alt="Bitwerx logo"
              />
            </a>
            , and

            <a
              target="_blank"
              rel="noreferrer"
              href="https://dornerworks.com"
              className="ms-1 hidden-parent"
            >
              more
              <img
                src="https://media.licdn.com/dms/image/D560BAQHsQRXJgLORXA/company-logo_200_200/0/1697478368780/dornerworks_logo?e=2147483647&v=beta&t=gqUq1yNrMdQQN-Nk2d-ESx1U0Evb4SQfIJd_S4J7u14"
                className="hidden-child dark-border rounded p-2 bg-blue"
                alt="Dornerworks logo"
              />
            </a>
            . Never afraid of a challenge, I enjoy finding new
            problems and ways to solve them.
          </p>
          <p>
            My experience goes beyond development. When the situation has demanded I've taken the role
            of a product owner, project manager My motto is
            <i className="ms-1">See a need? Meet it.</i>
          </p>
        </Box>
      </Col>
      <Col lg="4" className="my-4 mx-auto">
        <Box>
          <h2 className="mb-4 text-center">languages</h2>
          <ul>
            <li>C#</li>
            <li>TypeScript | JavaScript</li>
            <li>SQL</li>
            <li>Bash</li>
            <li>Ruby</li>
            <li>C | C++</li>
            <li>Go | Rust (learning these)</li>
          </ul>
        </Box>
      </Col>
    </Row>
    <Row className="justify-content-around" id="about">
      <Col lg="4" className="my-4 mx-auto">
        <Box>
          <h2 className="mb-4 text-center">tools & frameworks</h2>
          <ul>
            <li>Git</li>
            <li>.NET 5+</li>
            <li>React | Angular</li>
            <li>JetBrains IDE's | VS Code | Vim</li>
            <li>Ruby on Rails</li>
            <li>PostgreSQL | SQL Server | SQLite</li>
            <li>Qt 5</li>
            <li>Redis</li>
            <li>ChatGPT (supplementary dev tool)</li>
          </ul>
        </Box>
      </Col>
      <Col lg="6" className="my-4 mx-auto">
        <Box>
          <h2 className="mb-4 text-end">programming</h2>
          <p>
            I've been coding since my science teacher offered a python class my sophomore year of high school.
            My brain clicked with the problem-solving that goes into software development and I've been hooked ever since.
          </p>
          <p>
            I've written code at many levels, from JavaScript and Python down to assembly and byte code running on RISC processors. I've even
            written code that got{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="http://student.cse.taylor.edu/articles/thinsat-a/"
              className="hidden-parent"
            >
              launched on a satellite
              <img
                className="hidden-child dark-border rounded square"
                src="ryan-launch.jpeg"
                alt="Ryan at the NG-11 launch"
              />
            </a>{" "} and {" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.theechonews.com/article/2019/04/big-dreams-compete-with-little-time-at-game-jam-2019"
              className="hidden-parent"
            >
              worked on a few winning Game Jam games
              <img
                className="hidden-child dark-border rounded square"
                src="game-jam.jpg"
                alt="Spring 2019 Game Jam winners"
              />
            </a>.
            Since graduating I've had a strong focus on web development. The
            creativity and flexibility is something I enjoy diving into each
            day.
          </p>
        </Box>
      </Col>
    </Row>
    <Row>
      <Col lg="6" className="my-4 mx-auto">
        <Box>
          <h2 className="mb-4">life</h2>
          <p>
            Midwest born and raised, I graduated Magna Cum Laude from{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://cse.taylor.edu"
              className="hidden-parent"
            >
              Taylor University
              <img
                src="ryan-grad.jpg"
                alt="Ryan at graduation"
                className="hidden-child dark-border rounded square"
              />
            </a>
            . Life has taken me many places and for now I've settled in West Michigan just a
            short drive away from the Lake and the heart of downtown Grand Rapids.
          </p>
          <p>
            Instead of a rubber ducky I talk to
            <u className="hidden-parent mx-1">
              my cat Charley
              <img
                id="charleyPic"
                src="charley.jpg"
                alt="charley the cat"
                className="hidden-child dark-border rounded square"
              />
            </u>
            whenever I'm stumped by something. She doesn't offer much advice
            but she's a great listener.
          </p>
        </Box>
      </Col>
      <Col lg="4" className="my-4 mx-auto">
        <Box>
          <h2 className="mb-4 text-center">platforms</h2>
          <ul>
            <li>Azure | AWS (Cloud Practitioner Certified)</li>
            <li>Linux | MacOS | Windows</li>
            <li>Gitlab | Azure DevOps | Github | BitBucket</li>
            <li>Gitlab Pipelines | Azure DevOps Pipelines | Jenkins</li>
          </ul>
        </Box>
      </Col>
    </Row>
    <Row>
      <Col lg="10" className="mx-auto" id="resume">
        <Box>
          <h1 className="text-center m-0 p-0">resume</h1>
        </Box>
        <br className="d-lg-none" />
        <Box>
          <ResumeEntry
            name="Cloud Solutions Engineer III"
            position="DornerWorks | Grand Rapids, MI"
            duration="NOV 2021 -- PRESENT"
          >
            <ul>
              <li>Operating as a full-stack engineer specializing in <a href="https://dornerworks.com/solutions/product-development/iot-solutions/" target="_blank" rel="noreferrer">web-facing and IoT projects</a></li>
              <li>Handling multiple simultaneous projects while maintaining a high degree of code quality and customer engagement</li>
              <li>Working closely with sales and business development to close deals with prospective customers</li>
              <li>Promoting employee-driven initiatives for growth and accountability within the company</li>
              <li>Hired on as level II engineer, received promotion to level III engineer within 18 months</li>
              <li>
                Technologies included:
                <ul>
                  <li>AWS | Azure</li>
                  <li>Gitlab | Azure DevOps | Jira</li>
                  <li>Terraform | Serverless</li>
                  <li>C# | .NET</li>
                  <li>React | Angular</li>
                  <li>Ruby on Rails</li>
                  <li>C++ | Qt</li>
                </ul>
              </li>
            </ul>
          </ResumeEntry>
        </Box>
        <br className="d-lg-none" />
        <Box>
          <ResumeEntry
            name="Full Stack Web Developer"
            position="Bitwerx | Lexington, KY"
            duration="JAN 2020 -- NOV 2021"
          >
            <ul>
              <li>
                Developed <a href="https://www.bitwerx.com/bitwerx-dataco" target="_blank" rel="noreferrer">cloud-based solutions</a> for high volume data ingestion
                using a custom ETL process
              </li>
              <li>
                Created various custom tools for veterinary practice data
                management and consumer engagement
              </li>
              <li>
                Managed data conversions for customers switching patient management software
              </li>
              <li>
                Assisted in developing <a href="https://www.bitwerx.com/daylight" target="_blank" rel="noreferrer">machine-learning taxonomy tools</a> to
                map transaction line items for automatic data conversions
              </li>
              <li>
                Technologies included:
                <ul>
                  <li>.NET Core 3.1</li>
                  <li>Microsoft Azure</li>
                  <li>Angular | React</li>
                  <li>PostgreSQL | Redis</li>
                </ul>
              </li>
            </ul>
          </ResumeEntry>
        </Box>
        <br className="d-lg-none" />
        <Box>
          <ResumeEntry
            name="Web Developer"
            position="Bizstream | Allendale, MI"
            duration="MAY 2019 -- JAN 2020"
          >
            <ul>
              <li>Internship turned employment opportunity developing cloud-based web portal for <a target="_blank" href="https://www.youthcenter.net/" rel="noreferrer">juvenile detention case management</a></li>
              <li>Developed site-wide notification system</li>
              <li>Assisted transition to migration-based database management</li>
              <li>
                Technologies used:
                <ul>
                  <li>AngularJS</li>
                  <li>.NET Framework 6</li>
                  <li>Azure DevOps</li>
                  <li>ASP.NET</li>
                  <li>Octopus Deploy</li>
                </ul>
              </li>
            </ul>
          </ResumeEntry>
        </Box>
        <br className="d-lg-none" />
        <Box>
          <ResumeEntry
            name="Information Technology Development Intern"
            position="SpartanNash | Byron Center, MI"
            duration="MAY 2017 -- AUG 2017"
          >
            <ul>
              <li>
                Summer internship working for a West Michigan-based grocery
                distributor
              </li>
              <li>
                Developed base system for handling in-store accounts
                receivable tracking
              </li>
              <li>
                Collaborated with other interns to update the corporate web
                site, including planning meetings, acquisition of digital assets, development and rollout of the refresh</li>
              <li>
                Technologies used:
                <ul>
                  <li>Visual Studio</li>
                  <li>Windows Forms</li>
                  <li>C#</li>
                  <li>WordPress</li>
                </ul>
              </li>
            </ul>
          </ResumeEntry>
        </Box>
      </Col>
    </Row>
    <Row>
      <Col lg="3" className="my-4 mx-auto" id="connect">
        <Box>
          <h2 className="mb-4 text-center">connect</h2>
          <ul>
            <li>
              <a href="mailto:ryanjones.code@gmail.com">
                ryanjones.code@gmail.com
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/ryguycompsci"
              >
                Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/ryguycompsci/"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </Box>
      </Col>
    </Row>
  </div>);
};

export default App;
