import React from 'react';

const Documents = () => {
  return (
    <>
      <section className='documents-area section'>
        <div className='container'>
          <h3 className='mb-4'>Dokumenty</h3>
          <ul>
            <li style={{ listStyle: 'disc' }}>
              <a href='/documents/Statut.pdf' target='_blank' className='mt-3'>
                Statut IRO od 16-03-2024.pdf
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Documents;
