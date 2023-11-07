import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
// import { PlusCircleFill } from 'react-bootstrap-icons';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const NewMenuItem = (props) => {
    const {courses} = props;

    const [ showModal, setShowModal ] = useState(false);
    const [ newMenuItem, setNewMenuItem] = useState("");
    const [ newItemCourseId, setnewItemCourseId] = useState();

    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => {
        setShowModal(true);
        setNewMenuItem("");
    }
    // const handleModalKeyPress = (e) => (e.keyCode ? e.keyCode : e.which) === 13 && handleAdd();
    const handleModalKeyPress = (e) => (e.keyCode ? e.keyCode : e.which) === 13;

    return(
        <React.Fragment>
            <Button variant="outline-success" onClick={ handleModalShow }>
                {/* <PlusCircleFill /> */}
            </Button>
            <Modal onKeyPress={ handleModalKeyPress } show={ showModal } onHide={ handleModalClose }>
                <Modal.Header closeButton>
                    <Modal.Title>New Meal Entry</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className='mb-3' controlId='modalForm1'>
                        <Form.Label>New Menu </Form.Label>
                        <Form.Control
                            type='text'
                            name='newMenuItem'
                            onChange={ (e) => setNewMenuItem(e.target.value) }
                            value={ newMenuItem }
                            placeholder='enter name'
                            autoFocus
                            autoComplete='off'
                        />
                        <Form.Select
                            type='select'
                            name='newItemCategory'
                             onChange={ (e) => setnewItemCourseId(e.target.value) }
                             value={ newItemCourseId }>
                            {courses.map(c =>
                                <option key={c.id} value={c.id}>{c.name}</option>)} 
                        </Form.Select>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ handleModalClose }>
                        Close
                    </Button>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default NewMenuItem;