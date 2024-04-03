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
              <p className="card-text">
                Azonosító: <span className="bold-text">{photo.id}</span>
              </p>
              <p className="card-text">
                Fájlnév:{' '}
                <span className="bold-text">{photo.filename_str || 'N/A'}</span>
              </p>
              <p className="card-text">
                Gyűjtemény:{' '}
                <span className="bold-text">
                  {photo.creator_str +
                    '-' +
                    photo.prefix_str +
                    '-' +
                    photo.premid_str +
                    '-' +
                    photo.postmid_str || 'N/A'}
                </span>
              </p>
              <p className="card-text">Riport</p>
              <p className="card-text">
                Technikai infó: <span className="bold-text">{'N/A'}</span>{' '}
              </p>
              <p className="card-text">
                Master Format:{' '}
                <span className="bold-text">{photo.format_str || 'N/A'}</span>
              </p>
              <p className="card-text">
                MatedataSet:{' '}
                <span className="bold-text">
                  {photo.serialinfo_str || 'N/A'}
                </span>
              </p>
              <p className="card-text">
                Kiadás dátuma:{' '}
                <span className="bold-text">
                  {photo.createDate_dt || 'N/A'}
                </span>
              </p>
              <p className="card-text">
                Utolsó módosítás:{' '}
                <span className="bold-text">
                  {photo.updateDate_dt || 'N/A'}
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MetaDataPanel;
