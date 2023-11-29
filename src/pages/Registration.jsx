import {observer} from "mobx-react-lite";
import React, {useContext, useState} from "react";
import {Button, Card, Container, Form} from "react-bootstrap";
import {Context} from "..";
import {registration} from "../http/UserAPI";
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE} from "../utils/consts";

const Registration = observer(() => {
    const navigate = useNavigate();
    const {user} = useContext(Context);
    const [phone, setPhone] = useState('');
    const [IIN, setIIN] = useState('');
    const [gender, setGender] = useState('Male');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const click = async () => {
        try {
            let data;
            data = await registration(name, surname, gender, IIN, phone)
            console.log(data)
            user.setUser(data)
            user.setIsAuth(true)
            navigate(HOME_ROUTE)
            console.log(user.isAuth)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5 auth">
                <h2 className="m-auto">Registration</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Surname"
                        value={surname}
                        onChange={e => setSurname(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="IIN"
                        value={IIN}
                        onChange={e => setIIN(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Phone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                    <Container className={'d-flex mt-3'}>
                        <Form.Check
                            className={'me-3'}
                            type="radio"
                            id="male"
                            label="Male"
                            name="gender"
                            value="Male"
                            checked={gender === 'Male'}
                            onChange={e => setGender(e.target.value)}
                        />
                        <Form.Check
                            type="radio"
                            id="female"
                            label="Female"
                            name="gender"
                            value="Female"
                            checked={gender === 'Female'}
                            onChange={e => setGender(e.target.value)}
                        />
                    </Container>

                    <Button
                        className="mt-3 align-self-end"
                        variant={"outline-success"}
                        onClick={click}
                    >
                        Sign Up
                    </Button>
                </Form>
            </Card>
        </Container>
    );
})

export default Registration;
