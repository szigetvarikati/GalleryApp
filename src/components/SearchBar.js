import React, { useState } from 'react';
import Button from './Button';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  // const [prefix, setPrefix] = useState('');
  // const [type, setType] = useState('');
  // const [format, setFormat] = useState('');
  // const [date, setDate] = useState('');

  const handleSearch = () => {
    console.log('Search:', searchQuery /*prefix, type, format, date*/);
  };

  return (
    <div className="container">
      <div className="row mt-3 justify-content-center">
        <div className="col-lg-4 col-md-4 col-sm-4">
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
        <div className="col-lg-4 col-md-4 col-sm-4">
          <div className="input-group mb-3">
            <Button label="Keresés" onClick={handleSearch} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
