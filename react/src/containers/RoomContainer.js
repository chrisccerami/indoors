import React from 'react';
import AllCorners from '../components/AllCorners'

class RoomContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
    render() {
      let rooms = this.props.rooms.map((room) => {
        return (
            <AllCorners
              key= {room.id}
              id= {room.id}
              name= {room.name}
              current_user= {room.current_user}
              plant_health= {room.plant_health}
            />
        )
      })
      return(
        <div className='room-container'>
          {rooms}
        </div>

      )
    }
  }

export default RoomContainer;
