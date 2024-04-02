import React, { useState, useEffect } from 'react';
import CustomModal from './Modal';

function PhotoTable() {
  const [photos, setPhotos] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    // Mentés logika
    handleCloseModal();
  };

  const handleDelete = () => {
    // Törlés logika
    handleCloseModal();
  };

  useEffect(() => {
    // Fetch data from foto.json
    fetch('/foto.json')
      .then((response) => response.json())
      .then((data) => {
        // Extract the docs array from the response
        const docs = data.response.docs;
        setPhotos(docs);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <h2>Photo Table</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">IMG</th>
              <th scope="col">IDs</th>
              <th scope="col">RIPORT/SLUG</th>
              <th scope="col">SIZE</th>
              <th scope="col">CREATE DATE</th>
              <th scope="col">MODIFY DATE</th>
              <th scope="col">FORMAT</th>
            </tr>
          </thead>
          <tbody>
            {photos.map((photo) => (
              <tr key={photo.id}>
                <td>
                  <div className="img-container">
                    <img
                      className="card-img-top img-fluid img-hover img-thumbnail"
                      src="logo192.png"
                      alt={photo.description_str}
                      width="100"
                    />
                  </div>
                </td>
                <td>{photo.id}</td>
                <td>{photo.description_str}</td>
                <td>
                  {photo.ow_i} x {photo.oh_i}
                </td>
                <td>{photo.createDate_dt.slice(0, 10)}</td>
                <td>modify date</td>
                <td>
                  {photo.format_str}
                  <p>({photo.bitdepth_i} bit)</p>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CustomModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleSave={handleSave}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default PhotoTable;