import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteAllWatchlist, deleteWatchlist, getHistory } from '../services/allApi'

function WatchHistory() {
  const [history,setHistory] = useState([])
  const getWatchHistory=async()=>{
    const {data} =await getHistory()
    setHistory(data)
  } 

  const removeWatchlist=async(id)=>{
    // make api call
    await deleteWatchlist(id)
    // get all category
    getHistory()

  }

  // const removeAllWatchlist = async ()=>{
  //   await deleteAllWatchlist()
  //   setHistory([])

  // }
  useEffect(()=>{
    getWatchHistory()
  }

  )

  return (
    <>
<div className="d-flex justify-content-between container align-items-center m-3">

  <h3>Watch History</h3>

  <Link to="/home" style={{textDecoration:'none',color:'white',fontSize:'20px'}}> <i class="fa-solid fa-arrow-left m-1" ></i>Back To Home</Link>
</div>
<div className="  p-5 container   mb-5 " >
<div className='d-flex flex-row-reverse'>
  <button className='btn btn-success me-5 mb-5' >Clear all</button>
</div>

  <table className="table light border rounded" variant="dark">
    <thead>
      <tr >
        <th style={{color:'white'}}>#</th>
        <th style={{color:'white'}}>Caption</th>
        <th style={{color:'white'}}>URL</th>
        <th style={{color:'white'}}>Time Stamp</th>
        <th style={{color:'white'}}></th>

      </tr>
    </thead>
    <tbody >
{     
history.length>0?
history.map((item,index)=>(
  <tr>
  <td style={{color:'white'}}> {index+1} </td>
  <td style={{color:'white'}}>{item?.caption}</td>
  <td><a href={item?.embbedlink} target='_blank' >{item?.embbedlink}</a></td>
  <td style={{color:'white'}}>{item?.timeStamp}</td>
  <td>  <button onClick={()=>removeWatchlist(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
</td>
</tr>
)):


      <p className='fw-bolder fs-5 text-danger mt-3'>Sorry nothing to display!!!</p>
}    </tbody>
  </table>
</div>
    </>
  )
}

export default WatchHistory  