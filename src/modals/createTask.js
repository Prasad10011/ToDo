import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({ modal, toggle, save }) => {
    const [taskName, setTaskName] = useState("");
    const [taskDesc, setTaskDesc] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'taskName') {
            setTaskName(value);
        }
        else {
            setTaskDesc(value);
        }
    }

    const handleSave = () => {
        let taskObj = {};
        taskObj["Name"] = taskName;
        taskObj["Description"] = taskDesc;
        save(taskObj);
        setTaskName("");
        setTaskDesc("");
    }


    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create Task</ModalHeader>
                <ModalBody>
                    <form>
                        <div className='mb-3'>
                            <label htmlFor="name" className="form-label">Task Name</label>
                            <input type="text" name="taskName" className="form-control" id="name" value={taskName} onChange={handleChange} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="description" name="desc" className="form-label">Description</label>
                            <textarea rows="3" cols="3" className="form-control" id="description" value={taskDesc} onChange={handleChange}></textarea>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSave}>
                        Create
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default CreateTask;