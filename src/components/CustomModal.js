import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import MetaDataPanel from './MetaDataPanel';
import MyButton from './MyButton';

function CustomModal({
  showModal,
  handleCloseModal,
  handleSave,
  handleDelete,
  photoData,
}) {
  const [editing, setEditing] = useState(false);

  const toggleEdit = () => {
    setEditing(!editing);
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} centered>
      <Modal.Header>
        <Modal.Title>Publikus adatok</Modal.Title>
        <FaTimes
          onClick={() => {
            handleCloseModal();
            setEditing(false);
          }}
        />
      </Modal.Header>
      <Modal.Body>
        {editing ? (
          <Form>
            <Form.Label className="custom-label">Rövidített cím</Form.Label>
            <Form.Control
              className="custom-input"
              type="text"
              placeholder={photoData.description_str}
            />
            <Form.Label className="custom-label">Készítés dátuma</Form.Label>
            <Form.Control
              className="custom-input"
              type="text"
              placeholder={photoData.createDate_dt.slice(0, 10)}
            />
            <Form.Label className="custom-label">Ország</Form.Label>
            <Form.Control className="custom-input" type="text" placeholder="" />
            <Form.Label className="custom-label">Város</Form.Label>
            <Form.Control className="custom-input" type="text" placeholder="" />
            <Form.Label className="custom-label">Képszöveg</Form.Label>
            <Form.Control
              className="custom-input"
              as="textarea"
              rows={5}
              placeholder="Leírás"
            />
            <Form.Label className="custom-label">Háttérinfó</Form.Label>
            <Form.Control
              className="custom-input"
              as="textarea"
              rows={2}
              placeholder="Leírás"
            />
          </Form>
        ) : (
          <MetaDataPanel photo={photoData} />
        )}
      </Modal.Body>
      <Modal.Footer>
        <MyButton
          variant="secondary"
          onClick={() => {
            handleCloseModal();
            setEditing(false);
          }}
          label="Vissza"
        />
        {editing && (
          <MyButton
            variant="danger"
            onClick={() => {
              handleDelete();
              toggleEdit();
            }}
            label="Törlés"
          />
        )}
        {editing && (
          <MyButton
            variant="primary"
            onClick={() => {
              handleSave();
              toggleEdit();
            }}
            label="Mentés"
          />
        )}
        {!editing && (
          <MyButton variant="info" onClick={toggleEdit} label="Szerkesztés" />
        )}
      </Modal.Footer>
    </Modal>
  );
}
export default CustomModal;
