import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Row,
  Button,
  Input,
  Card,
  CardBody,
  Col,
  CardHeader,
  InputGroup,
  InputGroupAddon,
  Form
} from "reactstrap";
import { Transition } from "react-spring";

import { changeName, getNameAsync } from "../redux/actions";
import InnerContainer from "../components";

const Home = props => {
  const [name, setName] = useState("");

  const submitForm = event => {
    event.preventDefault();
    props.changeName(name);
  };

  return (
    <InnerContainer fluid>
      <Row className="justify-content-center align-items-center h-100">
        <Col xs="6" md="4" lg="3">
          <Card>
            <CardHeader>
              <h2>
                {"Welcome "}
                <Transition
                  items={props.name}
                  from={{
                    position: "absolute",
                    paddingLeft: "0.5rem",
                    opacity: 0
                  }}
                  enter={{ opacity: 1 }}
                  leave={{ opacity: 0 }}
                >
                  {name => props => <span style={props}>{name}</span>}
                </Transition>
              </h2>
            </CardHeader>
            <CardBody>
              <Form onSubmit={submitForm}>
                <InputGroup>
                  <Input
                    placeholder="Your name"
                    value={name}
                    onChange={event => {
                      setName(event.target.value);
                    }}
                  />
                  <InputGroupAddon addonType="append">
                    <Button color="success" onClick={submitForm}>
                      Update name!
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </Form>
              <br />
              <Button
                color="primary"
                onClick={event => {
                  event.preventDefault();
                  props.getNameAsync();
                }}
              >
                Random name!
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </InnerContainer>
  );
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  changeName: PropTypes.func.isRequired,
  getNameAsync: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    name: state.name.name
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeName,
      getNameAsync
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
