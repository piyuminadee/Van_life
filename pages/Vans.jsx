import React from 'react'
import './Vans.css'
import { Link } from 'react-router-dom';

const Vans = () => {

    const [vans, setVans] = React.useState([]);

    React.useEffect(()=>{
        fetch("/api/vans")
        .then((response) => response.json())
        .then(data => setVans(data.vans))
    }, [])
console.log(vans)
    const vanElement = vans.map((van)=> (
        <div key={van.id} className='vanCard'>
        <Link to={`/vans/${van.id}`}  >
           <img src={van.imageUrl} className='v-img' />
           <div className='van-crd-inner'>
            <h3>{van.name}</h3>
            <h3>${van.price}/day</h3>
           </div>
           
           <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
        </div>
    ))
  return (
    <div className='container_out'>


    <h1 className=''>Explorer our van options</h1>
    <div className='container' >
    {vanElement}

    </div>

    </div>
  )
}

export default Vans