import React, {useEffect, useState} from 'react';

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setLoaded(true);
    } else {
      window.addEventListener('load', () => {setLoaded(true)});
      // cleanup event listener on unmount
      return () => window.removeEventListener('load', () => {setLoaded(true)});
    }
  }, [document.readyState])

  return (
    <>
    {loaded == false && 
      <div id="preloader">
          <div className="preloader">
              <span></span>
              <span></span>
          </div>
      </div>
    }
    </>
  );
};

export default Preloader;