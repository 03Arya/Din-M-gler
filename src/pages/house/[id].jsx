import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Modal from 'react-modal';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSkype } from '@fortawesome/free-brands-svg-icons';


export default function HouseDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [house, setHouse] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [sliderKey, setSliderKey] = useState(0);
  const settings = {
    dots: false,
    arrows: false,
    scrollX: false,
    scrollY: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  }


  useEffect(() => {
    if (id) { // Make sure id is not undefined
      fetch(`https://dinmaegler.onrender.com/homes/${id}`)
        .then(response => response.json())
        .then(data => setHouse(data))
        .catch(error => console.error('Error:', error));
      console.log(house);
      
    }
  }, [id]);

  if (!house) {
    return <div>Loading...</div>;
  }

  return (

    <main>
      <Navigation />
      <section>
        <img className='houseImageBig' src={house.images[0]?.url} alt={house.title} />
        <div className='houseContainer1'>
          <div className='houseCityDiv'>
            <p className='houseAdress'>{house.adress1}</p>
            <p className='houseCode'>{house.postalcode} {house.city}</p>
          </div>
          <div className='iconsDiv'>
            <a onClick={() => setModalIsOpen(true)}>
              <FontAwesomeIcon icon={faImage} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faLayerGroup} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faLocationDot} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faHeart} />
            </a>
          </div>
          <p className='housePrice'>Kr. {house.price}</p>
        </div>
        <div className='houseContainer2'>
          <div>
            <p>Sagsnummer:</p>
            <p>Boligareal:</p>
            <p>Grundareal</p>
            <p>Rum/værelser</p>
            <p>Antal Plan:</p>
          </div>

          <div>
            <p>{house.id ? house.id : '-'}</p>
            <p>{house.size ? `${house.size} m2` : '-'}</p>
            <p>{house.lotsize ? `${house.lotsize} m2` : '-'}</p>
            <p>{house.rooms ? house.rooms : '-'}</p>
            <p>{house.floors ? house.floors : '-'}</p>
          </div>

          <div>
            <p>Kælder:</p>
            <p>Byggeår:</p>
            <p>Ombygget:</p>
            <p>Energimærke</p>
          </div>

          <div>
            <p>{house.basement ? house.basement : '-'}</p>
            <p>{house.built ? house.built : '-'}</p>
            <p>{house.remodel ? house.remodel : '-'}</p>
            <p>{house.energylabel ? house.energylabel : '-'}</p>
          </div>

          <div>
            <p>udbetaling:</p>
            <p>Brutto ex ejerudgift:</p>
            <p>Netto ex ejerudgift:</p>
            <p>Ejerudgifter:</p>
          </div>

          <div>
            <p>{house.payment ? house.payment : '-'}</p>
            <p>{house.gross ? house.gross : '-'}</p>
            <p>{house.netto ? house.netto : '-'}</p>
            <p>{house.cost ? house.cost : '-'}</p>

          </div>
        </div>

        <div className='houseContainer3'>
          <div className='descriptionDiv'>
            <p className='descriptionHeader'>Beskrivelse</p>
            <p className='houseDescription'>{house.description}</p>
          </div>

          <div className='sellerContainer'>
            <p className='sellerHeader'>Ansvalig mægler</p>
            <div className='sellerDiv'>
              <div className='imageContainer'>
                <img src={house.agent.image.url} alt="" />
                <div>
                  <a href="">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href="">
                    <FontAwesomeIcon icon={faSkype} />
                  </a>
                </div>
              </div>
              <div className='sellerInfo'>
                <p className='sellerName'>{house.agent.name}</p>
                <p className='sellerTitle'>{house.agent.title}</p>
                <span className='line'></span>
                <p className='sellerPhone'><FontAwesomeIcon icon={faPhone} />{house.agent.phone}</p>
                <p className='sellerEmail'><FontAwesomeIcon icon={faPaperPlane} />{house.agent.email}</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        onAfterOpen={() => setTimeout(() => setSliderKey(prevKey => prevKey + 1), 1000)}
        contentLabel="Image Gallery"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
          },
          content: {
            color: 'white',
            background: 'transparent',
            border: 'none',
            borderRadius: '0px',
            width: "1600px",
            margin: "auto",
            width1: "1200px",
          }
        }}
      >
        {house && (
          <Slider key={sliderKey} {...settings}>
            {house.images.map((image, index) => (
              <div className='sliderContainer' key={index}>
                <img src={image.url} alt={`Slide ${index}`} />
                <div className='iconsDivSlider'>
                  <a onClick={() => setModalIsOpen(false)}>
                    <FontAwesomeIcon icon={faImage} />
                  </a>
                  <a href="">
                    <FontAwesomeIcon icon={faLayerGroup} />
                  </a>
                  <a href="">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </a>
                  <a href="">
                    <FontAwesomeIcon icon={faHeart} />
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </Modal>
      <Footer />
    </main>
  )
    ;
}