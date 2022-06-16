import React, {useState} from 'react';
import Header from "./Header";
import ModalTwitch from "./ModalTwitch";
import {AuthVerify} from "../utils/AuthVerify";

const Home = () => {

    const [logInOn, setLogInOn] = useState(false);
    const [signUpOn, setSignUpOn] = useState(false);

    const auth = AuthVerify();

    return (
        <>
            <Header setLogInOn={setLogInOn} auth={auth} />
            <div className="m-2">
                <h6>{auth ? 'You are connected !' : 'You are not connected !'}</h6>
            </div>

            <ModalTwitch
                logInOn={logInOn}
                setLogInOn={setLogInOn}
                signUpOn={signUpOn}
                setSignUpOn={setSignUpOn}
            />
        </>
    ) ;
}
export default Home;