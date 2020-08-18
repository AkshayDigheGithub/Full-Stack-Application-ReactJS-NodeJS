import React, { Component } from 'react';
import { Table, Button, Row, Col, Container, Modal, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { addEmployee, updateEmployee } from '../utils/services';
import ModalF from './modal.component';

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null,
            show: false,
            isUpdate: false,
            singleUser: {}
        }
        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.logout = this.logout.bind(this)
        this.updateUserData = this.updateUserData.bind(this)
    }
    handleClose = () => {
        this.setState({
            show: false,
            isUpdate: false,
            singleUser: {}
        })
    }

    handleShow = () => {
        this.setState({
            show: true
        })
    }

    openUpdateModal = (e, data) => {
        e.preventDefault()
        this.setState({
            isUpdate: true,
            show: true,
            singleUser: data
        })
    }

    updateUserData = async (data) => {
        await updateEmployee(data)
        const response = await addEmployee()
        this.setState({
            show: false,
            isUpdate: false,
            users: response.data
        })
    }

    // logout 
    logout = () => {
        localStorage.clear();
        this.props.history.push('/login')
    }

    async componentWillMount() {
        const response = await addEmployee()
        this.setState({
            users: response.data
        })
    }

    render() {
        const { users, show } = this.state;
        return (
            <Container>
                <h1 className="text-info text-center">Employee List</h1>
                <Row className="row justify-content-between">
                    <Col className="col-auto">
                        <Button className="btn btn-danger" onClick={this.logout}>Logout</Button>
                    </Col>

                    <Col className="col-auto">
                        <Button className="" variant="primary" onClick={this.handleShow}>Add Employee</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Full Name</th>
                                    <th>EMPID</th>
                                    <th>City</th>
                                    <th>DOB</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users ? <EmpList usersdata={this} /> : null
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                {
                    show ? <ModalF {...this} /> : null
                }
            </Container>

        );
    }
}


function EmpList(props) {
    const { openUpdateModal, state } = props.usersdata
    const user = state.users
    return user.map((i, index) => {
        const { _id, firstname, lastname, empid, city, dob } = i;
        return <tr key={index}>
            <td>{index + 1}</td>
            <td>{firstname} {lastname}</td>
            <td>{empid}</td>
            <td>{city}</td>
            <td>{dob}</td>
            <td>
                <button type="button" className="btn btn-sm btn-info" onClick={e => openUpdateModal(e, i)}>Update</button>&nbsp;
                <button type="button" className="btn btn-sm btn-danger">Delete</button>
            </td>
        </tr >
    })
}





export default HomeComponent;