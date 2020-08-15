import React, { Component } from 'react';
import { Formik } from 'formik';
import { Button, Form, Row, Col } from 'react-bootstrap';

class ManagerLoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.signupform = this.signupform.bind(this)
    }

    signupform = () => {
        console.log("clicked on signup", this.props.history)
        this.props.history.push('/sign')
    }
    render() {
        return (
            <div>
                <h1>Manager Signup</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        // if (!values.email) {
                        //     errors.email = 'Required';
                        // } else if (
                        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        // ) {
                        //     errors.email = 'Invalid email address';
                        // }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        localStorage.setItem('user', true)
                        this.props.history.push('/')
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

                                <Button variant="primary" type="submit">Login</Button>
                            </Form>
                        )}
                </Formik>
                <Button type="button" variant="danger" onClick={this.signupform}>Please signup </Button>
            </div>
        );
    }
}

export default ManagerLoginComponent;