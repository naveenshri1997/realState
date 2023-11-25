import React, { useEffect, useState } from 'react'
import axios, * as others from 'axios';
import bannerImg from '../banner.jpg';

const Search = () => {
  const [search, setsearch] = useState([]);
  const [purpose, setpurpose] = useState('for-rent');
  const [roomsMax, setroomsMax] = useState('2');
  const [bathsMax, setbathsMax] = useState('2');
  const [priceMin, setpriceMin] = useState('0');
  const [priceMax, setpriceMax] = useState('6000000');
  useEffect(() => {
    const fetch = async () => {
      if (purpose !== '') {
        const options = {
          method: 'GET',
          url: 'https://bayut.p.rapidapi.com/properties/list',
          params: {
            locationExternalIDs: '5002,6020',  
            purpose: purpose,
            priceMin: priceMin,
            priceMax: priceMax,
            roomsMin: roomsMax,
            roomsMax: roomsMax,
            bathsMin: bathsMax,
            bathsMax: bathsMax,
            hitsPerPage: '40',
            page: '0',
            lang: 'en',
            sort: 'city-level-score',
            categoryExternalID: '4'
          },
          headers: {
            'X-RapidAPI-Key': 'fbe357eb3bmsh53f418d7545f371p191736jsn16c696b7959d',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
        };

        try {
          const response = await axios.request(options);
          console.log("response.hts", response);
          setsearch([response.data.hits][0]);
          console.log('showdata', search);

        } catch (error) {
          console.error(error);
        }
      }
    }
    fetch();
  }, [purpose, roomsMax, bathsMax, priceMin, priceMax]) 
  const handleClick = (e) => {
    e.currentTarget.classList.toggle('show');
  };

  function handleSelect(e) {
    setpurpose(e.target.value);
  }

  function handleMaxRooms(e) {
    setroomsMax(e.target.value);
  }

  function handleMaxBaths(e) {
    setbathsMax(e.target.value);
  }

  function handleMinPrice(e) {
    setpriceMin(e.target.value);
  }

  function handleMaxPrice(e) {
    setpriceMax(e.target.value);
  }

  return (
    <>
      <div className='flex flex-col flex-wrap search_bar' style={{background:`url(${bannerImg})`}}>
        <div className='gap-0 md:columns-5 sm:columns-3 columns-xs '>
        <div className='grow'>
          <select className='cus-form block w-full rounded py-1.5' onChange={handleSelect}>
            <option name="purpose" >select</option>
            <option name="purpose" value='for-sale'>for-sale</option>
            <option name="purpose" value='for-rent'>for-rent</option>
          </select>
        </div>
        <div className='grow'>
          <select className='cus-form block w-full rounded py-1.5' onChange={handleMaxRooms}>
            <option name="maxrooms" >Max Rooms</option>
            <option name="maxrooms" value='1'>1</option>
            <option name="maxrooms" value='2'>2</option>
          </select>
        </div>
        <div className='grow'>
          <select className='cus-form block w-full rounded py-1.5' onChange={handleMaxBaths}>
            <option name="bathmax" >Max Baths</option>
            <option name="bathmax" value='1'>1</option>
            <option name="bathmax" value='2'>2</option>
          </select>
        </div>
        {
          purpose == 'for-sale'?        
         <> 
        <div className='grow'>
          <select className='cus-form block w-full rounded py-1.5' onChange={handleMinPrice}>
            <option name="minprice" >Min Price</option>
            <option name="minprice" value='500000'>50,0000</option>
            <option name="minprice" value='1000000'>10,00,000</option>
            <option name="minprice" value='1500000'>15,00,000</option>
            <option name="minprice" value='2000000'>20,00,000</option>
            <option name="minprice" value='2500000'>25,00,000</option>
            <option name="minprice" value='3000000'>30,00,000</option>
            <option name="minprice" value='4000000'>40,00,000</option>
            <option name="minprice" value='5000000'>50,00,000</option>
            <option name="minprice" value='9000000'>90,00,000</option>
          </select>
        </div> 

        <div className='grow'>
          <select className='cus-form block w-full rounded py-1.5' onChange={handleMaxPrice}>
            <option name="maxprice" >Max Price</option>
            <option name="maxprice" value='500000'>50,0000</option>
            <option name="maxprice" value='1000000'>10,00,000</option>
            <option name="maxprice" value='1500000'>15,00,000</option>
            <option name="maxprice" value='2000000'>20,00,000</option>
            <option name="maxprice" value='2500000'>25,00,000</option>
            <option name="maxprice" value='3000000'>30,00,000</option>
            <option name="maxprice" value='4000000'>40,00,000</option>
            <option name="maxprice" value='5000000'>50,00,000</option>
            <option name="maxprice" value='9000000'>90,00,000</option>
          </select>
        </div>
        </>
        :
        <>
        <div className='grow'>
          <select className='cus-form block w-full rounded py-1.5' onChange={handleMinPrice}>
            <option name="minprice" >Max Price</option>
            <option name="minprice" value='3000'>3000</option>
            <option name="minprice" value='5000'>5000</option>
            <option name="minprice" value='10000'>10,000</option>
            <option name="minprice" value='15000'>15,000</option>
            <option name="minprice" value='20000'>20,000</option>
            <option name="minprice" value='25000'>25,000</option>
            <option name="minprice" value='30000'>30,000</option>
            <option name="minprice" value='40000'>40,000</option>
            <option name="minprice" value='50000'>50,000</option>
          </select>
        </div>
        <div className='grow'>
          <select className='cus-form block w-full rounded py-1.5' onChange={handleMaxPrice}>
            <option name="maxprice" >Max Price</option>
            <option name="maxprice" value='3000'>3000</option>
            <option name="maxprice" value='5000'>5000</option>
            <option name="maxprice" value='10000'>10,000</option>
            <option name="maxprice" value='15000'>15,000</option>
            <option name="maxprice" value='20000'>20,000</option>
            <option name="maxprice" value='25000'>25,000</option>
            <option name="maxprice" value='30000'>30,000</option>
            <option name="maxprice" value='40000'>40,000</option>
            <option name="maxprice" value='50000'>50,000</option>
            </select>
        </div>
        </>
      }
      </div>
      </div>
      {search.map((data1) => {
        return (
          <div className='flex flex-wrap p-3 my-4 bg-slate-50 property'>
            <div className='prop-product'>
              {data1.product}
            </div>
            <div className='prop-product_purpose'>
              {data1.purpose}
            </div>
            <div className='space-x-4'>
              <img src={data1.coverPhoto.url} className='rounded-lg prop-img' />
            </div>
            <div className='space-x-4 pro-box'>
              <h5 className='prod_title'>{data1.title} </h5>

              <div onClick={handleClick} className='prop_amenities'>
                {data1.amenities.map((data2) => {
                  return (
                    <span className='prop_amenities_box'> {data2}</span>
                  );

                })}
                <div className='pro_box_side'>
                  <div className='textbox'>
                    ^
                  </div>
                </div>
              </div>
              <div className='flex flex-row'>
                {
                  purpose=='for-sale'?
                  <h3 className='title'><strong>Rs {data1.price / 100000} <small className='subtitie'>Lakh</small></strong></h3>
                  :
                  <h3 className='title'><strong>Rs {data1.price} <small className='subtitie'></small></strong></h3>
                }
                <h3 className='title'><strong>{data1.area} <small className='subtitie'>/sq ft.</small></strong></h3>
                <h3 className='title'><strong>{data1.rooms}BHK</strong> <br />
                  <strong><small className='subtitie'>{data1.baths} Bath room</small></strong>
                </h3>
              </div>
            </div>
          </div>
        )
      })}

    </>

  )
}

export default Search
