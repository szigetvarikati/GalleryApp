import React, { useState } from 'react';
import MyButton from './MyButton';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Search:', searchQuery);
  };

  return (
    <div className="container mt-3 app.header">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="prefix/típus/formátum/dátum"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Szabadszavas keresés"
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 text-center">
          <div className="input-group mb-3">
            <MyButton
              variant="outline-secondary"
              label="Keresés"
              onClick={handleSearch}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
