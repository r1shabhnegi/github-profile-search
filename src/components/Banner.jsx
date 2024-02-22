import searchIcon from '/src/assets/Search.svg';
import { fetchDataFromApi } from '../apiCalls/fetchDataFromApi';
import SearchResult from './SearchResult';
import { useState } from 'react';

const Banner = () => {
  const [searchedData, setSearchedData] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchInput = async (e) => {
    const data = await fetchDataFromApi(e.target.value);
    console.log(data);
    data.message === 'Not Found' ? setSearchOpen(false) : setSearchOpen(true);
    setSearchedData(data);
  };

  return (
    <section>
      <div className="bg-[url('/src/assets/hero-image-github-profile.png')] h-52 bg-center bg-no-repeat bg-cover px-2 py-8">
        <div className='w-full max-w-96 m-auto relative'>
          <input
            type='text'
            className='w-full rounded-md h-9 p-6 pl-11 outline-none bg-[#364153] text-[#CDD5E0]'
            placeholder='Search...'
            onChange={(e) => handleSearchInput(e)}
          />
          <img
            src={`${searchIcon}`}
            alt='search-icon'
            className='absolute top-3 left-2.5'
          />
          {searchOpen && <SearchResult searchedData={searchedData} />}
        </div>
      </div>
    </section>
  );
};
export default Banner;
