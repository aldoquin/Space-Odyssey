import React, { useEffect, useState } from "react";
import { Tabs, Tab, Container, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
//
import { useMutation } from "@apollo/client";
import { REGISTER_USER, LOGIN_USER } from "../utils/mutations";

export default function LandingPage() {
  //
  const [registerUser, { error }] = useMutation(REGISTER_USER);
  const [loginUser, { error2 }] = useMutation(LOGIN_USER);

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email2, setEmail2] = useState("");
  const [auth, setAuth] = useState(false);

  const register = async () => {
    if (name === "" || email === "" || password === "") {
      alert("Must fill all inputs");
    } else {
      try {
        const { data } = await registerUser({
          variables: {
            name: name,
            email: email,
            password: password,
          },
        });

        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
    setEmail("");
    setName("");
    setPassword("");
  };
  const login = async () => {
    if (email2 === "" || password2 === "") {
      alert("Must fill all inputs");
    } else {
      try {
        const { data } = await loginUser({
          variables: {
            email: email2,
            password: password2,
          },
        });
        if (data.LoginUser.token) {
          localStorage.setItem("token", data.LoginUser.token);
          setAuth(true);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <>
      {auth ? (
        history.push("/HomePage")
      ) : (
        <Container
          style={{
            marginTop: "5%",
            width: "500px",
            padding: "15px",
            background: "gray",
          }}
        >
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
            style={{ justifyContent: "center" }}
          >
            <Tab eventKey="home" title="sign up">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter email"
                    value={email}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    value={name}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    value={password}
                  />
                </Form.Group>
                <Button variant="primary" onClick={() => register()}>
                  Submit
                </Button>
              </Form>
            </Tab>
            <Tab eventKey="profile" title="login">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={(e) => setEmail2(e.target.value)}
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={(e) => setPassword2(e.target.value)}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Button variant="primary" onClick={(e) => login(e)}>
                  Submit
                </Button>
              </Form>
            </Tab>
          </Tabs>
        </Container>
      )}
    </>
  );
}
