import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
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

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {};
        tempObj["Name"] = taskName;
        tempObj["Description"] = taskDesc;
        updateTask(tempObj);
    }

    useEffect(() => {
        setTaskName(taskObj.Name);
        setTaskDesc(taskObj.Description);
    }, [])

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update Task</ModalHeader>
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
                    <Button color="primary" onClick={handleUpdate}>
                        Update
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default EditTask;