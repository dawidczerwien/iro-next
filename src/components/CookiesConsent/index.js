'use client';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
  const [consent, setConsent] = useState(false);

  const handleAccept = () => {
    setConsent(true);
    // Set cookie or perform other actions
    Cookies.set('consent', 'true', { expires: 365 });
  };

  const handleDecline = () => {
    setConsent(true);
    // Remove cookie or perform other actions
    Cookies.remove('consent');
  };

  useEffect(()=> {
    if(Cookies.get('consent') === 'true'){
      setConsent(true);
    }
  }, [])

  return (
    <>
      {!consent && (
        <div className='cookie-banner'>
          <p className='cookie-message'>
          Ta strona używa plików cookie, aby poprawić komfort użytkowania.
          </p>
          <div className='button-container'>
            <button className='accept-button' onClick={handleAccept}>
              Akceptuj
            </button>
            <button className='decline-button' onClick={handleDecline}>
              Odrzuć
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
