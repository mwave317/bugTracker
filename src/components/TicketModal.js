import React, { useState, useEffect } from 'react';
import '../css/ticketModal.css';

import axios from 'axios';

const TicketModal = () => {
    const [summary, setSummary] = useState('');
    const [type, setType] = useState('');
    const [reporter, setReporter] = useState('');
    const [description, setDescription] = useState('');
    const [labels, setLabels] = useState('');
    const [attachement, setAttachment] = useState('');
    const [linkedIssues, setLinkedIssues] = useState('');
    const [assignee, setAssignee] = useState('');
    const [epic, setEpic] = useState('');
    const [sprint, setSprint] = useState('');
    const [comment, setComment] = useState('');
    const [user, setUser] = useState(null);
    const [close, setClose] = useState(false);
    const [developers, setDevelopers] = useState([]);
    const [types, setTypes] = useState([]); 
    const [addType, setAddType ] = useState('');


    useEffect(() => {
        getDevelopers();
        getTypes();
    }, []);

    const getTypes = async () => {
        const response = await axios.get('http://localhost:5000/type');
        setTypes(response.data);
        return () => {

        }
    }

    let retreiveTypes = types.map((type, index) => <option key={index} value ={type._id}>{type.type}</option>);

    const getDevelopers = async () => {
        const response = await axios.get('http://localhost:5000/ticket/developers');
        setDevelopers(response.data);
        return () => {

        }
    }
    let develop = developers.map((develop, index) => <option key={index} value ={develop._id}>{develop.firstName} { develop.lastName}</option>);

    const clearValues = () => {
        setSummary('');
        setType('');
        setReporter('');
        setDescription('');
        setLabels('');
        setAttachment('');
        setLinkedIssues('');
        setAssignee('');
        setEpic('');
        setSprint('');
        setComment('');
        setClose(true);
    }

    const ticketModalSubmit = event => {
        event.preventDefault();

        const token = JSON.parse(localStorage.getItem('token'));
        console.log(token);

        axios.post('http://localhost:5000/ticket/add', {
            headers: { 
                'authorization': `Bearer ${token}`, 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            summary,
            addType,
            reporter,
            description,
            labels,
            attachement,
            linkedIssues,
            assignee,
            epic,
            sprint,
            comment,
        }).then((res) => console.log(res))
            .catch(err => console.log(err));

        clearValues();
        setClose(true);
    };

    return (
        <div className={!close ? "modal" : "hidden"}>
            <h2 className="ticket-h2">New Ticket</h2>
            <div className="actions">
                <form onSubmit={ticketModalSubmit}>
                    <label>Summary:</label>
                    <input className="modalInput ouline" type="text" onChange={ev => setSummary(ev.target.value)} name="summary" value={summary}></input>
               

                    <label>Type:
                    <select className="modalInput ouline" onChange={ev=> { setAddType(ev.target.value) }} value={addType}>
                    {retreiveTypes}
                    </select>
                    </label>
                    <label>Reporter:
                    <select className="modalInput ouline" onChange={ev=> { setReporter(ev.target.value) }} value={reporter}>
                        {develop}
                        </select>
                    </label>
                    <label>Description:
                <input className="modalTextArea outline" type="textarea" onChange={ev => setDescription(ev.target.value)} name="description" value={description}></input>
                    </label>
                    <label>Labels:<input className="modalInput ouline" type="text" onChange={ev => setLabels(ev.target.value)} name="labels" value={labels}></input>
                    </label>
                    <label>Linked Issues:
                <input className="modalInput ouline" type="text" onChange={ev => setLinkedIssues(ev.target.value)} name="linkedIssues" value={linkedIssues}></input>
                    </label>
                    <label>Assignee:
                        <select className="modalInput ouline" onChange={ev=> { setAssignee(ev.target.value) }} value={assignee}>
                        {develop}
                        </select>
                        <p>Assign to me</p>
                    </label>
                    <label>Epic:
                <input className="modalInput ouline" type="text" onChange={ev => setEpic(ev.target.value)} name="epic" value={epic}></input>
                    </label>
                    <label>Sprint:
                <input className="modalInput ouline" type="text" onChange={ev => setSprint(ev.target.value)} name="sprint" value={sprint}></input>
                    </label>
                    <label>Comment:
                <input className="modalTextArea outline" type="textarea" onChange={ev => setComment(ev.target.value)} name="comment" value={comment}></input>
                    </label>
                    <button className="toggle-button" type="submit">Submit</button>
                    <button className="cancel" type="button" onClick={clearValues}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default TicketModal;