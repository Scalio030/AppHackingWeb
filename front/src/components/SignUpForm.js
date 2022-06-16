import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import AuthService from "../services/AuthService";

const LogInForm = ({ logInOn, setLogInOn, setSignUpOn}) => {

    const [data, setData] = useState({
        username: '',
        password: '',
        confirmedPassword: '',
        email: ''
    })

    const onsSubmit = () => {
        AuthService.register({email: data.email, name: data.username, password: data.password}).then(
            response => {
                console.log(data);
                setData({
                    username: '',
                    password: '',
                    confirmedPassword: '',
                    email: ''
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
                        className={data.password !== data.confirmedPassword ? 'border-3 border-danger' : ''}
                        type="confirmedPassword"
                        placeholder=""
                        onChange={(event) => setData({...data, confirmedPassword: event.nativeEvent.data})}
                    />
                    {data.password !== data.confirmedPassword ? <h6 className="text-danger">*Passwords do not match. Please try again.</h6> :<></>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="font-weight-bolder">Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder=""
                        onChange={(event) => setData({...data, email: event.nativeEvent.data})}
                    />
                </Form.Group>

            </div>
            <Button
                onClick={() => onsSubmit()}
                disabled={!(data.username !== '' && data.password !== '' && data.confirmedPassword !== '' && data.email !== '' && data.password === data.confirmedPassword)}
                variant={(data.username !== '' && data.password !== '' && data.confirmedPassword !== '' && data.email !== '' && data.password === data.confirmedPassword) ? 'primary' : 'secondary'}
            >
                Log In
            </Button>
        </Form>
    ) ;
}
export default LogInForm;