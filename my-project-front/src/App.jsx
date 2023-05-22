import React from "react";
import "./App.css";
import { BsFill0SquareFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BsFillAirplaneFill } from "react-icons/bs";
import { BsFillBasket2Fill } from "react-icons/bs";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/users");
    setData(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <nav className="nav1">
        <div className="icons">
          <BsFill0SquareFill />
          <BsFillArrowDownCircleFill />
          <BsFillAirplaneFill />
          <BsFillBasket2Fill />
        </div>
        <div className="parag">
          <p>Sponsor</p>
          <p className="login">Login</p>
        </div>
      </nav>
      <nav className="nav2">
        <div className="first">
          <h3>ADOPTED</h3>
        </div>
        <div className="second">
          <ul>
            <li>Home</li>
            <li>Adoption</li>
            <li>Success Stories</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      <div className="first-page">
        <div className="words">
          <h3>Mark Rodriguez, 12 yrs. old</h3>
          <h1>NEEDS A CARING PARENTS</h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
          soluta quasi provident distinctio eligendi assumenda officiis, tempora
          aperiam ducimus ipsam veniam, reiciendis iure consequatur delectus
          incidunt quis quam exercitationem quidem.
          <button className="btn-1">Adopt Him Now!</button>
        </div>
      </div>
      <div className="second-page">
        <div className="photo-1">
          <img src="https://www.vhv.rs/dpng/d/511-5111386_family-animation-clip-art-family-animated-transparent-background.png" />
          <div className="words-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            tenetur dicta hic est, laudantium totam at dolorum blanditiis
            cupiditate nisi odio unde deserunt assumenda accusamus eaque sunt,
            quidem eligendi? Molestiae.
          </div>
          <button className="btn-2">Adopt a child now</button>
        </div>
        <div className="seconde-page2">
          <h1>Steps to adopt & foster a child</h1>
          <div className="acc">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Getting Started</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Envisioning your family</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Getting Approved</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Being matched with a child</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Receiving a placement</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Finalizing an adoption</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>State information</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="third-page">
        <h1>WAITING CHILDREN</h1>
        <div className="words-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          nobis facilis suscipit, quia minus praesentium, autem dolorum repellat
          nemo quibusdam at porro. Perspiciatis, repudiandae. Facilis eum rerum
          aperiam quod? Aut.
        </div>
        <button className="btn-3">Find More Waiting Children</button>
      </div>
      <div className="cards">
        {data.map((d) => (
          <div className="card" key={d._id}>
            <div className="card-img">
              <img src={d.image} />
            </div>
            <div className="card-body">
              <p>{d.childname}</p>
              <span>{d.age}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
