import React, {useState} from 'react';
import Header from "./Header";
import ModalTwitch from "./ModalTwitch";

const Home = () => {

    const [logInOn, setLogInOn] = useState(false);
    const [signUpOn, setSignUpOn] = useState(false);

    return (
        <>
            <Header logInOn={logInOn} />
            <div className="m-2">
                <h6>You are not connected !</h6>
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