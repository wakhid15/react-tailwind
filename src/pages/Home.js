import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
  const jumbotronStyle = {
    backgroundImage: "url('https://assets.jatimnetwork.com/crop/66x0:1245x688/750x500/webp/photo/2022/12/22/2475311149.jpg')",
    height: '100vh',
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  };

  return (
    <div>
      <header>
        {/* <!-- Navbar --> */}
        <Navigation></Navigation>
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center"
          style={jumbotronStyle}
        >
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
            style={overlayStyle}
          >
            <div className="flex h-full items-center justify-center">
              <div className="text-white">
                <h1 className="mb-8 text-4xl w-10 h-20 font-semibold">
                  EXPLORE MALANG{' '}
                </h1>
                <h4 className="mb-2 text-xl font-semibold">JANGAN DI RUMAH AJA MALANG ITU LUAS, HEALING YUUK...!!!</h4>
                <p className="mb-6 text-xl font-semibold">
                  
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
