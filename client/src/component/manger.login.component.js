import React, { Component } from 'react';
import { Formik } from 'formik';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { login } from '../utils/services';

class ManagerLoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { error: "" }
        this.signupform = this.signupform.bind(this)
    }

    signupform = () => {
        console.log("clicked on signup", this.props.history)
        this.props.history.push('/sign')
    }
    render() {
        const { error } = this.state
        const isloggedin = localStorage.getItem('user');
        return (
            <>
                {
                    isloggedin ? this.props.history.push('/') : null}
                < div >
                    <h1 className="text-info text-center">Manager Login</h1>
                    {
                        error ? <h1 className="alert alert-danger">error {error}</h1> : null
                    }
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={(values, { setSubmitting }) => {
                            login(values)
                                .then(response => {
                                    if (response.status === 200) {
                                        localStorage.setItem("user", response.data.token)
                                        this.props.history.push('/')
                                    } else {
                                        this.setState({
                                            error: "something wrong"
                                        })
                                    }
                                }, error => {
                                    this.setState({
                                        error: "something wrong"
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
                        }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control
                                                    type="email"
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
                                            <Button variant="primary" className="btn btn-sm btn-block" type="submit">Login</Button>
                                        </Col>
                                        <Col>
                                            <Button type="button" className="btn btn-sm btn-block" variant="info" onClick={this.signupform}>Please signup </Button>
                                        </Col>
                                    </Row>

                                </Form>
                            )}
                    </Formik>
                </div >
            </>
        );
    }
}

export default ManagerLoginComponent;