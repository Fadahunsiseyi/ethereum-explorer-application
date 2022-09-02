import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchTransaction } from '../redux/search/SearchReducer';
import { ChevronLeftIcon, MicrophoneIcon, CogIcon } from '../assets/icons/Icons';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const handleSearch = (e) => {
    dispatch(searchTransaction(e.target.value.trim()));
  };
  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <nav>
      <button type="button" className="chevBtn" onClick={handleNavigate}>
        <ChevronLeftIcon />
      </button>
      {pathname === '/' ? (
        <div className="search-input">
          <input
            name="search input"
            placeholder="Search Transaction..."
            id="search-input"
            onClick={handleSearch}
          />
        </div>
      ) : (
        <h3>
          Transaction Block Details
        </h3>
      ) }
      <div className="icons">
        <CogIcon />
        <MicrophoneIcon />
      </div>
    </nav>
  );
};

export default Navbar;
