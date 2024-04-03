function MetaDataPanel({ photo }) {
  return (
    <div className="container">
      <div className="card-mt-3">
        <div className="card-body">
          <h5 className="card-title">Metaadatok</h5>
          {photo && (
            <>
              <div className="img-container">
                <img
                  className="card-img-top img-fluid img-thumbnail"
                  src="logo192.png"
                  alt={photo.description_str}
                  width="100"
                />
              </div>
              <p className="card-text">
                Azonosító: <span className="bold-meta-text">{photo.id}</span>
              </p>
              <p className="card-text">
                Fájlnév:{' '}
                <span className="bold-meta-text">
                  {photo.filename_str || 'N/A'}
                </span>
              </p>
              <p className="card-text">
                Gyűjtemény:{' '}
                <span className="bold-meta-text">
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
                Technikai infó: <span className="bold-meta-text">{'N/A'}</span>{' '}
              </p>
              <p className="card-text">
                Master Format:{' '}
                <span className="bold-meta-text">
                  {photo.format_str || 'N/A'}
                </span>
              </p>
              <p className="card-text">
                MatedataSet:{' '}
                <span className="bold-meta-text">
                  {photo.serialinfo_str || 'N/A'}
                </span>
              </p>
              <p className="card-text">
                Kiadás dátuma:{' '}
                <span className="bold-meta-text">
                  {photo.createDate_dt.slice(0, 10) || 'N/A'}
                </span>
              </p>
              <p className="card-text">
                Utolsó módosítás:{' '}
                <span className="bold-meta-text">
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
