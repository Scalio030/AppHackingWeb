import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import AuthService from "../services/AuthService";

const LogInForm = ({ logInOn, setLogInOn, setSignUpOn}) => {

    const [data, setData] = useState({
        username: '',
        password: '',
        confirmedPassword: ''
    })

    const onsSubmit = () => {
        AuthService.register({email: '', name: data.username, password: data.password}).then(
            response => {
                console.log(data);
                setData({
                    username: '',
                    password: '',
                    confirmedPassword: ''
                });
                if(logInOn) setLogInOn(false);
                else setSignUpOn(false);
            }
        ).catch(error => console.log(error));

    }

    return (
        <Form className="mt-3">
            <div>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder=""
                        onChange={(event) => setData({...data, username: event.nativeEvent.data})}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="font-weight-bolder">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder=""
                        onChange={(event) => setData({...data, password: event.nativeEvent.data})}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="font-weight-bolder">Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder=""
                        onChange={(event) => setData({...data, confirmedPassword: event.nativeEvent.data})}
                    />
                </Form.Group>

            </div>
            <Button
                onClick={() => onsSubmit()}
                disabled={!(data.username !== '' && data.password !== '' && data.confirmedPassword !== '' && data.password === data.confirmedPassword)}
                variant={(data.username !== '' && data.password !== '' && data.confirmedPassword !== '' && data.password === data.confirmedPassword) ? 'primary' : 'secondary'}
            >
                Log In
            </Button>
        </Form>
    ) ;
}
export default LogInForm;