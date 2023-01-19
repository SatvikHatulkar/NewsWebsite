import React from 'react'
import loading from "./loading.gif"

const Spinner = ()=>{
    return (
      <div>
        <img className="my-3" src={loading} alt="loading" style={{width:"20px", height:"20px"}} />
      </div>
    )

}

export default Spinner