// import { data } from 'autoprefixer';
import React from 'react'
import { useParams } from 'react-router-dom'
import './Vans.css'


const VanDetails = () => {
    const [van, setVan] = React.useState(null);
    const params = useParams()
    React.useEffect(()=>{
      fetch(`/api/vans/${params.id}`)
        .then(response=>response.json())
        .then(data => setVan(data.vans))
    }, [params.id])
    
   
  return (

    <div>
      <h1>Van Details Page Goes Here
      </h1>
      {van ? (
        <div className='vd-details'>
        <img src={van.imageUrl} className='vd-img' />
           
           
           <i className={`vand-type ${van.type} selected`}>{van.type}</i>
           <div className='vand-crd-inner'>
            <h1>{van.name}</h1>
            <h3>${van.price}/day</h3>
            <p>{van.description}</p>
            <button>Rent this van</button>
           </div>
        </div>
      ) 
      : <h2>Loading...</h2>}
    </div>
    
  )
}

export default VanDetails