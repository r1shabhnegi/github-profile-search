const SearchResult = ({ searchedData }) => {
  return (
    <div className='text-white w-full flex mt-2 bg-[#20293A] rounded-lg'>
      <img
        src={`${searchedData.avatar_url}`}
        alt='searched image'
        className='w-20 m-2 rounded-lg'
      />
      <div className='ml-1 flex flex-col justify-center gap-1'>
        <p className='text-[#CDD5E0] text-base'>{searchedData.name}</p>
        <p className='text-[#b3b6bc] text-xs'>{searchedData.bio}</p>
      </div>
    </div>
  );
};
export default SearchResult;
