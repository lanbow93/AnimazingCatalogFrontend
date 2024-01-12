'use client';
function SearchBox() {
  return (
    <>
      <input type='text' />
      <button onClick={() => console.log("Success")}>
        <img
          src='/searchIcon.png'
          alt='magnifyingGlass Icon'
        />
      </button>
    </>
  );
}

export default SearchBox;
