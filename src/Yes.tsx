import Envelope from './components/Envelope';
import { Polaroids } from './polaroids';
import './Yes.css';

const Yes = () => {
  // Gifts inside the envelopes
  const messages = [
    'You get massage in the evening. (1 hour)',
    'You can choose the restaurant we are eating at.',
    'Secret gift - revealed on valentines day',
  ];

  const envelopes = messages.map((message, index) => (
    <div key={index} className="flex flex-col items-center">
      <Envelope id={index}>{message}</Envelope>
      <p className="text-slate-100 mb-2 text-2xl">
        {['Anytime', 'For the weekend', 'Valentines day'][index]}
      </p>
    </div>
  ));

  // Create a grid layout for polaroids
  const polaroidsGrid = Polaroids.map((picture, index) => (
    <div
      key={`polaroid-grid-${index}`}
      className="flex justify-center items-start w-full"
    >
      <div className="bg-white p-4 shadow-2xl w-full max-w-64 filter grayscale hover:filter-none hover:scale-105 hover:rotate-0 transition-all duration-300 transform hover:z-10 flex flex-col"
           style={{ transform: `rotate(${picture.rotate}deg)` }}>
        <div className="flex-shrink-0 mb-3 w-full aspect-square overflow-hidden">
          <img
            src={picture.img}
            alt={picture.caption}
            className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <div className="md:text-lg text-sm text-center leading-tight pt-2 min-h-[2.5rem] flex items-center justify-center break-words">
          {picture.caption}
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="bg-red-950 w-screen min-h-screen flex flex-col justify-center py-8">
        <div className="bg-black pt-14 pb-11 mx-4 md:mx-24 md:my-20 my-10 rounded-3xl shadow-2xl opacity-70 shadow-red-600">
          <div>
            <h1 className="text-slate-100 md:text-5xl text-3xl text-center red-shadow">
              Happy Valentine's Day!
            </h1>
            <p className="text-slate-100 text-center mt-10 text-xl ">
              This Valentines you will get tickets to use when you want to.
              Remember you can only use them once, so choose wisely!
            </p>
          </div>
          <div className="envelopes-container flex justify-center flex-col xl:flex-row gap-4 mt-4">
            {envelopes}
          </div>
        </div>
        
        {/* Polaroids Grid Section */}
        <div className="mt-12 px-4 md:px-24">
          <h2 className="text-slate-100 text-3xl md:text-4xl text-center mb-8 red-shadow">
            Our Memories Together
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 justify-items-center items-start">
            {polaroidsGrid}
          </div>
        </div>
      </div>
    </>
  );
};
export default Yes;
