import React, { Component } from 'react';
import { Table, Button, Row, Col, Container, Modal, Form } from 'react-bootstrap';
import { Formik } from 'formik';

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            isUpdate: false
        }
        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.updateModal = this.updateModal.bind(this)
    }
    handleClose = () => {
        this.setState({
            show: false,
            isUpdate: false
        })
    }

    handleShow = () => {
        this.setState({
            show: true
        })
    }
    updateModal = () => {
        this.setState({
            isUpdate: true,
            show: true
        })
    }
    render() {
        return (
            <Container>
                <h1>Employee List</h1>
                <Row>
                    <Col md={{ span: 2, offset: 10 }}>
                        <Button className="" variant="primary" onClick={this.handleShow}>Add Employee</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>
                                        <button type="button" className="btn btn-sm btn-info" onClick={this.updateModal}>Update</button>&nbsp;
                                        <button type="button" className="btn btn-sm btn-danger">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <ModalF {...this} />
            </Container>

        );
    }
}



class ModalF extends Component {

    constructor(props) {
        super(props)

    }
    render() {
        const { state, handleClose } = this.props
        const { isUpdate, show } = state;
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isUpdate ? 'Update' : 'Add'} Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{
                            firstname: '',
                            lastname: '',
                            city: '',
                            mobile: '',
                            address: '',
                            dob: '',
                            empid: ''
                        }}
                        // validate={values => {
                        //     const errors = {};
                        //     // if (!values.city) {
                        //     //     errors.city = 'Required';
                        //     // } else if (
                        //     //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.city)
                        //     // ) {
                        //     //     errors.city = 'Invalid city address';
                        //     // }
                        //     return errors;
                        // }}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log("values", values)
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
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
                                            <Form.Group controlId="firstname">
                                                <Form.Control
                                                    type="firstname"
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
                                                    type="lastname"
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
                                            <Form.Group controlId="address">
                                                <Form.Control
                                                    type="address"
                                                    name="address"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.address}
                                                    placeholder="address" />
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
                                                    placeholder="dob" />
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
                                    <Button variant="primary" type="submit">{isUpdate ? 'Update' : 'Add'} Employee Details</Button>
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

export default HomeComponent;