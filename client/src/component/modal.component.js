import React, { Component } from 'react';
import { Modal, Form, Row, Col, Button } from 'react-bootstrap';
import { Formik } from 'formik';

const initialValues = {
    firstname: "",
    lastname: "",
    empid: "",
    addres: "",
    city: "",
    mobile: "",
    dob: new Date()
}

class ModalF extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { state, handleClose, updateUserData, addUserData } = this.props
        const { isUpdate, show, singleUser } = state;
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isUpdate ? 'Update' : 'Add'} Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={singleUser || initialValues}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit
                        }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="firstname">
                                                <Form.Control
                                                    type="text"
                                                    name="firstname"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.firstname}
                                                    placeholder="firstname" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="lastname">
                                                <Form.Control
                                                    type="text"
                                                    name="lastname"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.lastname}
                                                    placeholder="lastname" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Form.Group controlId="addres">
                                                <Form.Control
                                                    type="addres"
                                                    name="addres"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.address}
                                                    placeholder="addres" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="dob">
                                                <Form.Control
                                                    type="dob"
                                                    name="dob"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.dob}
                                                    placeholder="dd/mm/yyyy" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="empid">
                                                <Form.Control
                                                    type="empid"
                                                    name="empid"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.empid}
                                                    placeholder="empid" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Form.Group controlId="city">
                                                <Form.Control
                                                    type="text"
                                                    name="city"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.city}
                                                    placeholder="city" />
                                                {errors.city && touched.city && errors.city}
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="mobile">
                                                <Form.Control
                                                    type="mobile"
                                                    name="mobile"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.mobile} placeholder="mobile" />
                                                {errors.mobile && touched.mobile && errors.mobile}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        onClick={e => {
                                            if (IsCheck(isUpdate)) { isUpdate ? updateUserData(values) : addUserData(values) }
                                        }}
                                    >{isUpdate ? 'Update' : 'Add'} Employee Details</Button>
                                </Form>
                            )}
                    </Formik>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal >
        )
    }
}

function IsCheck(isUpdate) {
    const msg = isUpdate ? 'Update the employee details' : 'Add the employee details'
    return window.confirm(msg)
}

export default ModalF;