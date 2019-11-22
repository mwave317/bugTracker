import React, { useState } from 'react';
import '../css/ticketModal.css';

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

        const TicketData = {
            summary,
            type,
            reporter,
            description,
            labels,
            attachement,
            linkedIssues,
            assignee,
            epic,
            sprint,
            comment,

        }
        setUser(TicketData);
        clearValues();
        setClose(true);
    };
    return (
        <div className={!close ? "modal" : "hidden"}>
            <h2 className="ticket-h2">New Ticket</h2>
            <div className="actions">
                <form onSubmit={ticketModalSubmit}>
                    <label>Summary:</label>
                    <input className="modalInput" type="text" onChange={ev => setSummary(ev.target.value)} name="summary" value={summary}></input>

                    <label>Type:
                <input className="modalInput" type="text" onChange={ev => setType(ev.target.value)} name="type" value={type}></input>
                    </label>
                    <label>Reporter:
                <input className="modalInput" type="text" onChange={ev => setReporter(ev.target.value)} name="reporter" value={reporter}></input>
                    </label>
                    <label>Description:
                <input className="modalTextArea" type="textarea" onChange={ev => setDescription(ev.target.value)} name="description" value={description}></input>
                    </label>
                    <label>Labels:<input className="modalInput" type="text" onChange={ev => setLabels(ev.target.value)} name="labels" value={labels}></input>
                    </label>
                    <label>Attachement:
                <input className="modalInput" type="text" onChange={ev => setAttachment(ev.target.value)} name="attachement" value={attachement} placeholder="Drop files to attach or browse."></input>
                    </label>
                    <label>Sprint:
                <input className="modalInput" type="text" onChange={ev => setLinkedIssues(ev.target.value)} name="linkedIssues" value={linkedIssues}></input>
                    </label>
                    <label>Assignee:
                <input className="modalInput" type="text" onChange={ev => setAssignee(ev.target.value)} name="assignee" value={assignee}></input>
                        <p>Assign to me</p>
                    </label>
                    <label>Epic:
                <input className="modalInput" type="text" onChange={ev => setEpic(ev.target.value)} name="epic" value={epic}></input>
                    </label>
                    <label>Sprint:
                <input className="modalInput" type="text" onChange={ev => setSprint(ev.target.value)} name="sprint" value={sprint}></input>
                    </label>
                    <label>Comment:
                <input className="modalTextArea" type="textarea" onChange={ev => setComment(ev.target.value)} name="comment" value={comment}></input>
                    </label>
                    <button className="toggle-button" type="submit">Submit</button>
                    <button className="cancel" type="button" onClick={clearValues}>Cancel</button>
                </form>
            </div>

            <p>{user && JSON.stringify(user, null, 2)}</p>
        </div>
    )
}

export default TicketModal;