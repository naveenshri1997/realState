import React, {useEffect,useState} from 'react'
import axios, * as others from 'axios';

const Property = () => {
    const [search,setsearch]= useState([]);   
    const [purpose,setpurpose]= useState('for-rent');

    useEffect(() => {    
    const fetch = async () => {
     if(purpose!==''){
      const options = {
        method: 'GET',
        url: 'https://bayut.p.rapidapi.com/properties/list',
        params: {
          locationExternalIDs: '5002,6020',
          purpose: purpose,
          hitsPerPage: '10',
          page: '0',
          lang: 'en',
          sort: 'city-level-score',          
          categoryExternalID: '4'
        },
        headers: {
          'X-RapidAPI-Key': '9075350947msh0d41ea3cf9a37a8p1ee607jsnaebd9d0e6a12',
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
  },[purpose])
    const handleClick = (e) => {    
      e.currentTarget.classList.toggle('show');            
    };

    function handleSelect(e){
      setpurpose(e.target.value);   
    }

  return (
    <>
      <div className='grid grid-cols-4'>
      <div className='col-end-5 col-span-1'>
      <select className='block w-full rounded py-1.5' onChange={handleSelect}>
        <option name="purpose" >select</option>
        <option name="purpose" value='for-sale'>for-sale</option>
        <option name="purpose" value='for-rent'>for-rent</option>
      </select>      
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
              <img src={data1.coverPhoto.url} className='rounded-lg prop-img'/>
            </div>
            <div className='space-x-4 pro-box'>                                       
              <h5 className='prod_title'>{data1.title} </h5>
              
                <div onClick={handleClick} className='prop_amenities'>           
              {data1.amenities.map((data2) => {             
              return (    
                 <span  className='prop_amenities_box'> {data2}</span>            
              );
                
              })} 
              <div className='pro_box_side'>
                <div className='textbox'>
                ^
                </div>              
              </div>   
             </div>    
             <div className='flex flex-row'>              
             <h3 className='title'><strong>Rs {data1.price/100000} <small className='subtitie'>Lakh</small></strong></h3> 
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

export default Property