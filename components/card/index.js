import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardTempl = ({ name, changeName, newName }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Button variant="primary" onClick={() => changeName(newName)}>Cambiar nombre</Button>
            </Card.Body>
        </Card>
    )
}

export default CardTempl