import { useState } from 'react';
import { FaChevronRight, FaLinkedin, FaTwitter } from 'react-icons/fa';

const TeamCard = ({ photo, name, title, details, socialLinks }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`relative overflow-hidden shadow-lg transition-all duration-500 mx-auto mt-2 cursor-pointer ${isExpanded? 'w-full' : 'ax-w-xs'} ${isExpanded? 'z-20' : 'z-10'}`}
      onClick={handleCardClick}
      style={{ height: '475px', width: isExpanded? '100vw' : '256px' }}
    >
      <img
        className={`w-full h-full object-cover ${isExpanded? 'brightness-100' : 'filter grayscale'} hover:grayscale-0 transition-all duration-1000`}
        src={photo}
        alt={`${name}'s photo`}
      />
      {!isExpanded && (
        <div
          className="absolute bottom-0 p-4 left-0 right-0 mx-auto text-center "
        >
          <h3 className="text-xl font-semibold  font-Montserrat">{name}</h3>
          <p className="text-sm font-normal font-Montserrat">{title}</p>
        </div>
      )}
      <div
        className={`absolute inset-0 flex ${isExpanded? 'flex-row' : 'flex-col justify-end'} bg-black bg-opacity-50 text-white z-10 transition-all duration-1000`}
        style={{
          transform: isExpanded? 'translateY(0)' : 'translateY(100%)',
          opacity: isExpanded? 1 : 0,
        }}
      >
        {isExpanded && (
          <div
            className={`transition-all duration-500 bg-black bg-opacity-70 w-full md:w-1/4 p-4 flex flex-col justify-start`}
            style={{
              transform: isExpanded? 'translateX(0)' : 'translateX(100%)',
              opacity: isExpanded? 1 : 0,
            }}
          >
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-sm">{title}</p>
            <div className="mt-2">
              <p className='text-sm mt-8'>{details}</p>
            </div>
            <div className="flex mt-4 ml-24 gap-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.icon === 'fab fa-linkedin' ? (
                    <FaLinkedin size={24} color="#fff" />
                  ) : (
                    <FaTwitter size={24} color="#fff" />
                  )}
                </a>
              ))}
            </div>
          </div>
        )}
        {isExpanded && (
          <div
            className="w-3/4 p-4 flex items-center"
            style={{
              transform: isExpanded? 'translateX(0)' : 'translateX(-100%)',
              opacity: isExpanded? 1 : 0,
            }}
          >
            
          </div>
        )}
        {isExpanded && (
          <div
            className="absolute mt-48 right-0 p-4 cursor-pointer"
            onClick={handleCardClick}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '50%',
            }}
          >
            <FaChevronRight size={24} color="#fff" />
          </div>
        )}
      </div>
    </div>
  );
};
export default TeamCard;