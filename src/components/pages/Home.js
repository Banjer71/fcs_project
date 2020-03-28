import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import Mailicon from "../../socialicons/contact_icon-1.png";
import {
  Container,
  MainArticle,
  CardSection,
  Card,
  PreFooter
} from "./PagesStyles";
import One from "../images/02/fcs6-700x300.jpg";
import Two from "../images/02/fcs5-700x300.jpg";
import Three from "../images/02/bbb-700x300.jpg";
import Slideshow from "../SlideShow";

const slideImages = [One, Two, Three];

const Home = () => {
  return (
    <React.Fragment>
      <Slideshow image={slideImages} className="emb-home" />
      <Container>
        <MainArticle>
          <h1>FSC_Fabric Consulting Services</h1>
          <hr />
          <p>
            <FormattedMessage
              id="home_h1_text"
              defaultMessage="text"
              values={{ FCS: "FCS", html: word => <strong>{word}</strong> }}
            />
          </p>
        </MainArticle>
        <MainArticle>
          <CardSection>
            <Card>
              <div className="icon">
                <i class="fa fa-repeat fa-2x" aria-hidden="true" />
              </div>
              <p>
                <FormattedMessage
                  id="card_section_text-1"
                  defaultMessage="text"
                />
              </p>
            </Card>
            <Card>
              <div className="icon">
                <i class="fa fa-scissors fa-2x" aria-hidden="true" />
              </div>
              <p>
                <FormattedMessage
                  id="card_section_text-2"
                  defaultMessage="text"
                />
              </p>
            </Card>
            <Card>
              <div className="icon">
                <i class="fa fa-paint-brush fa-2x" aria-hidden="true" />
              </div>
              <p>
                <FormattedMessage
                  id="card_section_text-3"
                  defaultMessage="text"
                />
              </p>
            </Card>
          </CardSection>
        </MainArticle>
      </Container>
      <PreFooter>
        <Container>
          <div className="prefooter-text">
            <h1>Fabric Consulting Services</h1>
            <h3>
              di{" "}
              <a
                href="https://www.imdb.com/name/nm1681916/?ref_=fn_al_nm_1"
                target="_blank"
              >
                Emanuela Naccarati
              </a>
            </h3>
            <hr />
            <p>
              <FormattedMessage id="prefooter_text-1" defaultMessage="text" />
            </p>
            <p>
              <FormattedMessage id="prefooter_text-2" defaultMessage="text" />
            </p>
            <p>
              <FormattedMessage id="prefooter_text-3" defaultMessage="text" />
            </p>
            <Link to="contacts">
              <img src={Mailicon} alt="mail icon" />
            </Link>
            <p>
              <FormattedMessage id="prefooter_text-4" defaultMessage="text" />
            </p>
          </div>
        </Container>
      </PreFooter>
    </React.Fragment>
  );
};

export default Home;
