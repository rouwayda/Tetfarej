import React, { useEffect , useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from "axios";
import {img_300, noPicture } from '../../Config/Config';
import "../Caroussel/Caroussel.css"
const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="path-to-img" onDragStart={handleDragStart} />,
  <img src="path-to-img" onDragStart={handleDragStart} />,
  <img src="path-to-img" onDragStart={handleDragStart} />,
];

const Carousel = ({media_type , id}) => {
    const [actors,setactors]= useState([]);

    const items = actors.map((c) => (
        <div className='carouselItem'>
            <img
               src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
               alt={c?.name}
               onDragStart ={handleDragStart}
               className="carouselItem_txt"/>
               <b className="carouselItem_txt">{c?.name}</b>
               </div> 
       
    ));

    const responsive = {
        0: {
          items: 3,
        },
        512: {
          items: 5,
        },
        1024: {
          items: 7,
        },
      };

    const fetchActors = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        setactors(data.cast)
        };

        useEffect(() => {
            fetchActors();
            
            // eslint-disable-next-line
          }, []);

  return (
    <AliceCarousel autoPlay responsive={responsive} infinite disableDotsControls disableButtonsControls mouseTracking items={items} />
  );
}
export default Carousel;