import React, { useEffect, useState } from 'react';
import CreateTask from '../modals/createTask';
import Card from './Card';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem('taskList');
        if (arr) {
            let obj = JSON.parse(arr);
            setTaskList(obj);
        }
    }, [])

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList;
        tempList.push(taskObj);
        localStorage.setItem('taskList', JSON.stringify(tempList));
        setTaskList(tempList);
        setModal(false);
    }

    const deleteTask = (index) => {
        const updatedList = [...taskList];
        updatedList.splice(index, 1);
        localStorage.setItem('taskList', JSON.stringify(updatedList));
        setTaskList(updatedList);
    }

    const updateListArray = (obj, index) => {
        const updatedList = [...taskList];
        updatedList[index] = obj;
        localStorage.setItem("taskList", JSON.stringify(updatedList));
        setTaskList(updatedList);
    }

    return (
        <>
            <div className='header text-center d-flex align-items-center justify-content-center'>
                <div>
                    <h3>Todo App</h3>
                    <button className='btn btn-primary' onClick={() => setModal(true)}>Create Task</button>
                </div>
            </div>
            <div className='task-container'>
                {taskList.map((obj, index) => <Card taskObj={obj} key={index} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />)}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
        </>

    );
};

export default TodoList;