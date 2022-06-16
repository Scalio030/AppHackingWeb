import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import AuthService from "../services/AuthService";

const LogInForm = ({ logInOn, setLogInOn, setSignUpOn}) => {

    const [error, setError] = useState(false);
    const [data, setData] = useState({
        username: '',
        password: '',
    })

    const onsSubmit = () => {
        AuthService.register({name: data.username, password: data.password}).then(
            response => {
                console.log(response);
                console.log(data);
                setData({
                    username: '',
                    password: '',
                });
                if(logInOn) setLogInOn(false);
                else setSignUpOn(false);
                return
            }
        ).catch(error => setError(true));
        setError(true)
    }

    return (
        <Form className="mt-3">
            <div>
                {error ? <h5 className="text-danger">That password was incorrect. Please try again.</h5> :<></>}
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        className={error ? 'border-3 border-danger' : ''}
                        type="text"
                        placeholder=""
                        onChange={(event) => setData({...data, username: event.nativeEvent.data})}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="font-weight-bolder">Password</Form.Label>
                    <Form.Control
                        className={error ? 'border-3 border-danger' : ''}
                        type="password"
                        placeholder=""
                        onChange={(event) => setData({...data, password: event.nativeEvent.data})}
                    />
                </Form.Group>
            </div>
            <Button
                onClick={() => onsSubmit()}
                disabled={!(data.username !== '' && data.password !== '')}
                variant={(data.username !== '' && data.password !== '') ? 'primary' : 'secondary'}
            >
                Log In
            </Button>
        </Form>
    ) ;
}
export default LogInForm;