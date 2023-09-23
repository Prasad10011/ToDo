import React, { useState } from 'react';
import EditTask from '../modals/EditTask';

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);

    const handleDelete = () => {
        deleteTask(index);
    }

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index);
        setModal(false);
    }

    const colors = [
        {
            primaryColor: "#5093E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        },
        {
            primaryColor: "#7B46FF",
            secondaryColor: "#b7a1f0"
        },
    ]

    return (
        <>
            <div className="card m-4 rounded-0 card-custom" style={{ "width": "18rem", "height": "13rem", "borderTop": "3px solid " + colors[index % 5].primaryColor }}>
                <div className="card-body">
                    <div className='h-25 mt-2'>
                        <span className="card-title title-custom rounded-5" style={{ "backgroundColor": colors[index % 5].secondaryColor }}>{taskObj.Name}</span>
                    </div>
                    {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
                    <p className="card-text h-50 py-2">{taskObj.Description}</p>
                    <div className='h-25'>
                        <i className='fas fa-trash-alt float-end' style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer" }}
                            onClick={handleDelete}></i>
                        <i className='far fa-edit mx-3 float-end' style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer" }}
                            onClick={() => setModal(true)}></i>
                    </div>
                </div>
            </div>
            <EditTask toggle={toggle} modal={modal} updateTask={updateTask} taskObj={taskObj} />
        </>
    );
};

export default Card;