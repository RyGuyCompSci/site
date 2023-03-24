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
        element.style.transform = cursorTooHigh
          ? "translate(-50%, 10%)"
          : "translate(-50%, -110%)";
      });
    });
  });

  const scrollToTop = () => window.scrollTo(0, 0);
  return (
    <div className="app">
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
              className="bw child-to-hide square rounded-lg d-block mx-auto"
            />
            <img
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTNmMzVhNWI5ZjVlYjZlNzJmYzBhMDliNDJhYjRlMzgzMDdmNDlmMiZjdD1n/ZAaaCK5RhUWxG/giphy.gif"
              alt="Stitch gif"
              className="child-to-show square rounded-lg d-block mx-auto"
            />
          </div>
        </Col>
      </Row>
      <Row className="justify-content-around" id="about">
        <Col lg="6" className="my-4 mx-auto">
          <Box>
            <h2 className="mb-4">my work</h2>
            <p>
              I'm a full-stack developer in Grand Rapids, MI with more than five
              years of work experience. Web development has been my primary
              passion but I've had the opportunity to work on more than web
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
              , and more. Never afraid of a challenge, I enjoy finding new
              problems and ways to solve them.
            </p>
            <p>
              My experience goes beyond development. I've acted as a project
              manager and team lead when the situation has demanded. My motto is
              "see a need; meet it."
            </p>
          </Box>
        </Col>
        <Col lg="4" className="my-4 mx-auto">
          <Box>
            <h2 className="mb-4 text-center">languages</h2>
            <ul>
              <li>C#</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>Ruby</li>
              <li>SQL</li>
              <li>C/C++</li>
            </ul>
          </Box>
        </Col>
      </Row>
      <Row className="justify-content-around" id="about">
        <Col lg="4" className="my-4 mx-auto">
          <Box>
            <h2 className="mb-4 text-center">technologies</h2>
            <ul>
              <li>Git</li>
              <li>.NET</li>
              <li>React/Angular</li>
              <li>Ruby on Rails</li>
              <li>PostgreSQL</li>
              <li>SQL Server</li>
              <li>SQLite</li>
              <li>Redis</li>
            </ul>
          </Box>
        </Col>
        <Col lg="6" className="my-4 mx-auto">
          <Box>
            <h2 className="mb-4 text-end">my story</h2>
            <p>
              I've been programming since my sophomore year of high school when
              my science teacher offered a Python programming class. My brain
              clicked with the problem-solving that goes into software
              development and I've been hooked ever since.
            </p>
            <p>
              I've written code at many levels from JavaScript and Python to
              assembly and byte code running on RISC processors. I've even
              written code that got{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://cse.taylor.edu/html/events/satellitelaunches.html"
                className="hidden-parent"
              >
                launched on a satellite.
                <img
                  className="hidden-child dark-border rounded square"
                  src="ryan-launch.jpeg"
                  alt="Ryan at the NG-11 launch"
                />
              </a>{" "}
              Web development has been my primary focus since graduating. The
              creativity and flexibility is something I enjoy diving into each
              day.
            </p>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col lg="6" className="my-4 mx-auto">
          <Box>
            <h2 className="mb-4">my life</h2>
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
              . Life has taken me many places and I've had the opportunity to
              live in many cool cities. For now I've settled in West Michigan, a
              short drive from the Lake and the heart of downtown Grand Rapids.
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
              <li>AWS (Cloud Practitioner Certified)</li>
              <li>Microsoft Azure</li>
              <li>Windows / MacOS / Linux</li>
              <li>Azure DevOps</li>
              <li>Gitlab</li>
              <li>Jenkins</li>
            </ul>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col lg="10" className="mx-auto" id="resume">
          <Box>
            <h1 className="text-center m-0 p-0">my resume</h1>
          </Box>
          <br className="d-lg-none" />
          <Box>
            <ResumeEntry
              name="DornerWorks, Ltd. | Grand Rapids, MI"
              position="Cloud Solutions Engineer II, IoT Division"
              duration="November 2021 ~ Present"
            >
              <ul>
                <li>
                  Developed cloud-based and cloud-connected solutions for
                  customers in a consulting capacity
                </li>
                <li>
                  Promoted employee-driven initiatives for growth and
                  accountability within the company
                </li>
                <li>
                  Handled multiple simultaneous projects while maintaining a
                  high degree of code quality and customer engagement
                </li>
                <li>
                  Technologies used:
                  <ul>
                    <li>
                      AWS (Elastic Beanstalk, RDS, S3, ECS / ECR, Lambda, SES, &
                      more)
                    </li>
                    <li>Gitlab</li>
                    <li>Terraform</li>
                    <li>React</li>
                    <li>Angular</li>
                    <li>.NET / MAUI</li>
                    <li>Ruby on Rails</li>
                    <li>MkDocs</li>
                    <li>JetBrains Rider</li>
                  </ul>
                </li>
              </ul>
            </ResumeEntry>
          </Box>
          <br className="d-lg-none" />
          <Box>
            <ResumeEntry
              name="Bitwerx, Inc. | Lexington, KY"
              position="Web Developer / Data Mercenary"
              duration="January 2020 ~ November 2021"
            >
              <ul>
                <li>
                  Developed cloud-based solutions for high-volume data ingestion
                  using custom-built ETL (extract-transform-load) process
                </li>
                <li>
                  Wrote many custom tools for veterinary practice data
                  management and customer engagement
                </li>
                <li>
                  Managed customer data transfers for patient management system
                  conversions
                </li>
                <li>
                  Assisted in development of machine-learning-based tools for
                  mapping transactional line items for data conversions
                </li>
                <li>
                  Technologies used:
                  <ul>
                    <li>
                      .NET Core 3.1 (Web applications, Entity Framework Core,
                      data conversion, & more)
                    </li>
                    <li>Angular</li>
                    <li>React / Preact</li>
                    <li>
                      Microsoft Azure (Functions, Batch, Active Directory, &
                      more)
                    </li>
                    <li>PostgreSQL</li>
                    <li>Redis</li>
                    <li>Ruby</li>
                  </ul>
                </li>
              </ul>
            </ResumeEntry>
          </Box>
          <br className="d-lg-none" />
          <Box>
            <ResumeEntry
              name="Bizstream | Allendale, MI"
              position="Web Developer"
              duration="May 2019 ~ January 2020"
            >
              <ul>
                <li>
                  Internship-turned-employment opportunity developing
                  cloud-based web portal for juvenile detention case management
                </li>
                <li>Developed site-wide notification system</li>
                <li>Managed database updates and configurations</li>
                <li>
                  Technologies used:
                  <ul>
                    <li>Git</li>
                    <li>Azure DevOps</li>
                    <li>Octopus Deploy</li>
                    <li>AngularJS</li>
                    <li>Classic ASP.NET</li>
                  </ul>
                </li>
              </ul>
            </ResumeEntry>
          </Box>
          <br className="d-lg-none" />
          <Box>
            <ResumeEntry
              name="SpartanNash, Inc. | Byron Center, MI"
              position="Information Technology Development Intern"
              duration="May 2017 ~ August 2017"
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
                  site, including:
                  <ul>
                    <li>Planning meetings</li>
                    <li>Resource / asset acquisition</li>
                    <li>Development</li>
                    <li>Rollout</li>
                  </ul>
                </li>
                <li>
                  Technologies used:
                  <ul>
                    <li>Visual Studio</li>
                    <li>C#</li>
                    <li>Windows Forms</li>
                    <li>WordPress</li>
                  </ul>
                </li>
              </ul>
            </ResumeEntry>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col lg="3" className="my-4 mx-auto" id="contact">
          <Box>
            <h2 className="mb-4 text-center">contact info</h2>
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
    </div>
  );
};

export default App;
