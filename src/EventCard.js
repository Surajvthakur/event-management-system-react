import React, { useState } from 'react';

const EventCard = ({ event, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [eventName, setEventName] = useState(event.name);
    const [eventDate, setEventDate] = useState(event.date);
    const [eventDescription, setEventDescription] = useState(event.description);

    const handleEdit = () => {
        if (isEditing) {
            onEdit(event.id, { name: eventName, date: eventDate, description: eventDescription });
        }
        setIsEditing(!isEditing);
    };

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <div className="card-body">
                    {isEditing ? (
                        <>
                            <input type="text" className="form-control mb-2" value={eventName} onChange={(e) => setEventName(e.target.value)} />
                            <input type="date" className="form-control mb-2" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
                            <textarea className="form-control mb-2" rows="3" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)}></textarea>
                        </>
                    ) : (
                        <>
                            <h5 className="card-title">{event.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{event.date}</h6>
                            <p className="card-text">{event.description}</p>
                        </>
                    )}
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-danger btn-sm delete" onClick={() => onDelete(event.id)}>Delete</button>
                        <button className="btn btn-primary btn-sm" onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
