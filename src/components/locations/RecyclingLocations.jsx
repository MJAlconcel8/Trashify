import React from 'react'
import './locations.css'
import { locations } from './locations'
import map_pin from '../../assets/map-pin.png'
import {v4 as uuidv4} from 'uuid'

const RecyclingLocations = () => {
  return (
    <div className="locations">
        <h1 className='.title-location'>Recycling Locations</h1>

        <div className="location-cards">
                {
                    locations.map((location) => {
                        return(
                            <a href={location.map} target='_blank'>
                                <div className='__card' key={uuidv4()}>
                                    <div className='map-icon'>
                                        <img src={map_pin} alt="" />
                                    </div>
                                    <div className="info">
                                        <p className="name">{location.name}</p>
                                        <p className="address">{location.address}</p>
                                    </div>
                                </div>
                            </a>
                        )
                    })
                }
        </div>
    </div>
  )
}

export default RecyclingLocations
