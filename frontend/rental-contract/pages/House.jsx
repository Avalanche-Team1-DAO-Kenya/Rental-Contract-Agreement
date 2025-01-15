import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { apartments } from '../assets/frontend-assets/assets';

const House = () => {
  const { location } = useParams();
  const [filteredHouses, setFilteredHouses] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (location) {
      setFilteredHouses(apartments.filter(house => house.location === location));
    } else {
      setFilteredHouses(apartments);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [apartments, location]);

  return (
    <div>
      <p className='text-gray-600'>Browse through the houses list</p>
      <div className='flex flex-col sm:flex-row items-start gap-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={() => setShowFilter(prev => !prev)}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => location === 'New York' ? navigate('/houses') : navigate('/houses/New York')} className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray_300 rounded transition-all cursor-pointer'>New York</p>
          <p onClick={() => location === 'Los Angeles' ? navigate('/houses') : navigate('/houses/Los Angeles')} className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray_300 rounded transition-all cursor-pointer'>Los Angeles</p>
          <p onClick={() => location === 'Chicago' ? navigate('/houses') : navigate('/houses/Chicago')} className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray_300 rounded transition-all cursor-pointer'>Chicago</p>
          <p onClick={() => location === 'Houston' ? navigate('/houses') : navigate('/houses/Houston')} className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray_300 rounded transition-all cursor-pointer'>Houston</p>
          <p onClick={() => location === 'Phoenix' ? navigate('/houses') : navigate('/houses/Phoenix')} className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray_300 rounded transition-all cursor-pointer'>Phoenix</p>
          <p onClick={() => location === 'Philadelphia' ? navigate('/houses') : navigate('/houses/Philadelphia')} className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray_300 rounded transition-all cursor-pointer'>Philadelphia</p>
        </div>
        
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filteredHouses.map((item, index) => (
            <div onClick={() => navigate(`/house/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500' key={index}>
              <img className='bg-blue-50' src={item.image} alt="" />
              <div className='pt-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                  <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                  <p>Available</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.location}</p>
                <p className='text-gray-600 text-sm'>${item.price} / month</p>
                <p className='text-gray-600 text-sm'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default House;