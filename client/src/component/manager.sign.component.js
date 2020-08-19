import React, { Component } from 'react';
import { Formik } from 'formik';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { signup } from '../utils/services';

class ManagerSignComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ""
        }
        this.loginform = this.loginform.bind(this)
    }

    loginform = () => {
        this.props.history.push('/login')
    }

    render() {
        const { error } = this.state
        return (
            <div className="container">
                <h1 className="text-info text-center">Manager Signup</h1>
                {
                    error
                        ? <h1 classname="alert alert-danger">error{error}</h1>
                        : <Formik
                            initialValues={{
                                firstname: '',
                                lastname: '',
                                email: '',
                                password: '',
                                address: '',
                                dob: '',
                                company: ''
                            }}
                            validate={values => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                signup(values)
                                    .then(response => {
                                        if (response.status === 200) {
                                            this.props.history.push('/login')
                                        }
                                    }, error => {
                                        this.setState({
                                            error: error
                                        })
                                    })
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                    <Form onSubmit={handleSubmit} >
                                        <Row>
                                            <Col>
                                                <Form.Control
                                                    type="firstname"
                                                    name="firstname"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.firstname}
                                                    placeholder="Enter firstname" />
                                            </Col>
                                            <Col>
                                                <Form.Control
                                                    type="lastname"
                                                    name="lastname"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.lastname}
                                                    placeholder="Enter lastname" />
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row>
                                            <Col>
                                                <Form.Control
                                                    type="address"
                                                    name="address"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.address}
                                                    placeholder="Enter address" />
                                            </Col>
                                            <Col>
                                                <Form.Control
                                                    type="dob"
                                                    name="dob"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.dob}
                                                    placeholder="Enter dob" />
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="company">
                                                    <Form.Control
                                                        type="company"
                                                        name="company"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.company}
                                                        placeholder="Enter company" />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <hr />

                                        <Row>
                                            <Col>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Control
                                                        type="text"
                                                        name="email"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.email}
                                                        placeholder="Enter email" />
                                                    {errors.email && touched.email && errors.email}
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Control
                                                        type="password"
                                                        name="password"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.password} placeholder="Password" />
                                                    {errors.password && touched.password && errors.password}
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Button variant="primary" className="btn btn-sm btn-block" type="submit">SIGNUP</Button>
                                            </Col>
                                            <Col>
                                                <Button type="button" className="btn btn-sm btn-block" variant="danger" onClick={this.loginform}>SIGNIN</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                )}
                        </Formik>
                }
                <br />

            </div>
        );
    }
}

export default ManagerSignComponent;