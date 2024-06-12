import React, { useState } from 'react'

import axios from 'axios'

export const Search = () => {
    const [data,setData]=useState(
        {
          "title":""
        }
      )

      const [result,setResult]=useState([])


      const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
      }
      const readVlue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/search",data).then(
            (response)=>{
              setResult(response.data)
              
            }
          ).catch(
            (error)=>{
              console.log(error.message)
              alert(error.map)
            }
          ).finally()
      }
  return (
    <div>
        <h1><center>SEARCH RECIPE</center></h1>
    
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">title</label>
                    <input type="text" className="form-control"name='title' value={data.title}onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <br /><br />  <button onClick={readVlue} className="btn btn-primary">Search</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {result.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src={value.image}></img>
                                            <div class="card-body">
                                                <p class="card-text">incredients:{value.incredients}</p>
                                                <p class="card-text">title:{value.title}</p>
                                                <p class="card-text">description:{value.description}</p>
                                                <p class="card-text">type:{value.type}</p>
                                                
                                                

                                            </div>
                                        </div>
                                    </div>

                                }
                            )

                            }
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
