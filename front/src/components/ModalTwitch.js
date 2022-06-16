import React from 'react';
import {
    Modal,
    ModalBody,
    ModalHeader,
    ModalTitle,
    Tab,
    Tabs
} from "react-bootstrap";
import twitch from "../assets/twitch.png";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";

const ModalTwitch = ({logInOn, setLogInOn, signUpOn, setSignUpOn}) => {

    return (
            <Modal
                size={"lg"}
                show={logInOn || signUpOn}
                onHide={() => logInOn ? setLogInOn(false) : setSignUpOn(false)}
            >
                <ModalHeader closeButton className="align-items-start d-inline-flex border-bottom-0">
                    <div className="align-items-center d-inline-flex mx-auto">
                        <img
                            alt=""
                            src={twitch}
                            width="40"
                            height="45"
                            className="m-3 d-inline-block align-top"
                        />
                        <ModalTitle>
                            {logInOn ? 'Log in to Twitch' : signUpOn ? 'Join Twitch today' : ''}
                        </ModalTitle>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <Tabs defaultActiveKey={logInOn ? 'Log In' : signUpOn ? 'Sign Up' : ''} id="uncontrolled-tab-example">
                        <Tab eventKey="Log In" title="Log In">
                            <LogInForm logInOn={logInOn} setLogInOn={setLogInOn} setSignUpOn={setSignUpOn}/>
                        </Tab>
                        <Tab eventKey="Sign Up" title="Sign Up">
                            <SignUpForm logInOn={logInOn} setLogInOn={setLogInOn} setSignUpOn={setSignUpOn}/>
                        </Tab>
                    </Tabs>

                </ModalBody>

            </Modal>
    ) ;
}
export default ModalTwitch;