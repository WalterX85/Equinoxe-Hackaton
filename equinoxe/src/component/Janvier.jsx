import React from 'react';

function Janvier({ setJanvier }) {
  return (
      <>
        <p>Hello from janvier</p>
        <button type="button" onClick={() => {
          setJanvier('agroforesterie');
        }}
        >
          click me :)
        </button>
      </>
  )
};

export default Janvier;