function MetaDataPanel({ photo }) {
  return (
    <div className="container">
      <div className="card-mt-3">
        <div className="card-body">
          <h5 className="card-title">Metaadatok</h5>
          {photo && (
            <>
              {console.log(photo, photo.id)}
              <div className="img-container">
                    <img
                      className="card-img-top img-fluid img-thumbnail"
                      src="logo192.png"
                      alt={photo.description_str}
                      width="100"
                    />
                  </div>
              <p className="card-text">Azonosító: {photo.id}</p>
              <p className="card-text">
                Fájlnév: {photo.filename_str || 'N/A'}
              </p>
              <p className="card-text">
                Gyűjtemény:{' '}
                {photo.creator_str + '-' + photo.prefix_str + '-' + photo.premid_str + '-' + photo.postmid_str || 'N/A'}
              </p>
              <p className="card-text">Riport</p>
              <p className="card-text">Technikai infó: {'N/A'} </p>
              <p className="card-text">
                Master Format: {photo.format_str || 'N/A'}
              </p>
              <p className="card-text">
                MatedataSet: {photo.serialinfo_str || 'N/A'}
              </p>
              <p className="card-text">
                Kiadás dátuma: {photo.createDate_dt || 'N/A'}
              </p>
              <p className="card-text">
                Utolsó módosítás: {photo.updateDate_dt || 'N/A'}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MetaDataPanel;
