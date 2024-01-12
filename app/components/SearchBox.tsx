'use client';
function SearchBox() {
  return (
    <>
      <input type='text' />
      <button onClick={() => console.log("Success")}>
        <img
          src='/searchIcon.png'
          alt=''
        />
      </button>
    </>
  );
}

export default SearchBox;
