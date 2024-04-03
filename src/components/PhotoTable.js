import React, { useState, useEffect } from 'react';
import CustomModal from './CustomModal';
import SortSelect from './SortSelect';

function PhotoTable() {
  const [photos, setPhotos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [sortDirections, setSortDirections] = useState({});

  useEffect(() => {
    fetch('/foto.json')
      .then((response) => response.json())
      .then((data) => {
        const docs = data.response.docs;
        setPhotos(docs);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleThumbnailClick = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSave = (updatedPhotoData) => {
    // Handle save logic here, you can pass updatedPhotoData to API or update state

    // API endpoint for saving photo data
    //const saveEndpoint = '/api/photos';

    // First, just log the API call parameters
    console.log(
      'Calling API to save photo data with parameters:',
      updatedPhotoData
    );

    // Simulate a successful save by closing the modal
    handleCloseModal();

    // Uncomment and use the below code if you have an actual API to call
    /*
    fetch(saveEndpoint, {
      method: 'PUT', // Or other HTTP method like POST
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPhotoData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to save photo data');
        }
        console.log('Photo data saved successfully');
        // Handle successful save here if needed
      })
      .catch((error) => {
        console.error('Error saving photo data:', error);
        // Handle error here if needed
      });
    */
  };

  const handleDelete = () => {
    // Handle delete logic here

    // API endpoint for deleting photo
    //const deleteEndpoint = '/api/photos/:id'; // Replace :id with the actual photo ID

    // First, just log the API call
    console.log('Calling API to delete photo');

    // Simulate a successful delete by closing the modal
    handleCloseModal();

    // Uncomment and use the below code if you have an actual API to call
    /*
    fetch(deleteEndpoint, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete photo');
        }
        console.log('Photo deleted successfully');
        // Handle successful delete here if needed
      })
      .catch((error) => {
        console.error('Error deleting photo:', error);
        // Handle error here if needed
      });
    */
  };

  const handleSort = (sortBy) => {
    const newSortDirections = { ...sortDirections };
    newSortDirections[sortBy] =
      newSortDirections[sortBy] === 'asc' ? 'desc' : 'asc';
    setSortDirections(newSortDirections);

    const sortedPhotos = [...photos].sort((a, b) => {
      if (newSortDirections[sortBy] === 'asc') {
        return a[sortBy] < b[sortBy] ? -1 : 1;
      } else {
        return a[sortBy] > b[sortBy] ? -1 : 1;
      }
    });
    setPhotos(sortedPhotos);
  };

  return (
    <div className="container">
      <SortSelect handleSort={handleSort} />
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th scope="col">IMG</th>
              <th scope="col" onClick={() => handleSort('id')}>
                IDs {sortDirections['id'] === 'asc' ? '▲' : '▼'}
              </th>
              <th scope="col" onClick={() => handleSort('description_str')}>
                RIPORT/SLUG{' '}
                {sortDirections['description_str'] === 'asc' ? '▲' : '▼'}
              </th>
              <th scope="col" onClick={() => handleSort('ow_i')}>
                SIZE {sortDirections['ow_i'] === 'asc' ? '▲' : '▼'}
              </th>
              <th scope="col" onClick={() => handleSort('createDate_dt')}>
                CREATE DATE{' '}
                {sortDirections['createDate_dt'] === 'asc' ? '▲' : '▼'}
              </th>
              <th scope="col">MODIFY DATE</th>
              <th scope="col">FORMAT</th>
            </tr>
          </thead>
          <tbody>
            {photos.map((photo) => (
              <tr key={photo.id} onClick={() => handleThumbnailClick(photo)}>
                <td>
                  <div className="img-container">
                    <img
                      className="card-img-top img-fluid img-hover img-thumbnail"
                      src="logo192.png"
                      alt={photo.description_str}
                    />
                  </div>
                </td>
                <td>
                  <span className="bold-text">ID:</span> {photo.id}
                </td>
                <td>
                  <span className="bold-text">RIPORT/SLUG:</span>{' '}
                  {photo.description_str}
                </td>
                <td>
                  <span className="bold-text">SIZE:</span>{' '}
                  <span>
                    {photo.ow_i} x {photo.oh_i}
                  </span>
                </td>
                <td>
                  <span className="bold-text">CREATE DATE:</span>{' '}
                  <span>{photo.createDate_dt.slice(0, 10)}</span>
                </td>
                <td>
                  <span className="bold-text">MODIFY DATE:</span>{' '}
                  <span>modify date</span>
                </td>
                <td>
                  <span className="bold-text">FORMAT:</span>{' '}
                  <span>
                    {photo.format_str} <br /> ({photo.bitdepth_i} bit)
                  </span>
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
        photoData={selectedPhoto}
      />
    </div>
  );
}

export default PhotoTable;
