import React from "react";
import { Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { uniqueId } from "lodash";
import InnerContainer from "../components";

const packagesPreInstalled = {
  react: "https://reactjs.org/",
  "react-router": "https://github.com/ReactTraining/react-router",
  redux: "https://redux.js.org/",
  "redux-saga": "https://redux-saga.js.org/",
  "redux-actions": "https://redux-actions.js.org/",
  immutable: "https://facebook.github.io/immutable-js/",
  axios: "https://github.com/axios/axios",
  reactstrap: "https://reactstrap.github.io/",
  emotion: "https://emotion.sh/",
  "react-spring": "http://react-spring.surge.sh/",
  "react-loadable": "https://github.com/jamiebuilds/react-loadable",
  lodash: "https://lodash.com/",
  "redux-devtools": "https://github.com/zalmoxisus/redux-devtools-extension"
};

const generate = element =>
  Object.keys(packagesPreInstalled).map(text =>
    React.cloneElement(
      element,
      {
        href: packagesPreInstalled[text],
        key: uniqueId()
      },
      [text]
    )
  );

const Packages = () => (
  <InnerContainer fluid>
    <Row className="justify-content-center align-items-center h-100">
      <Col xs="6">
        <ListGroup>{generate(<ListGroupItem tag="a" />)}</ListGroup>
      </Col>
    </Row>
  </InnerContainer>
);

export default Packages;
