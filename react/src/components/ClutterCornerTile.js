import React from 'react';

class ClutterCornerTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

  }

  render() {

      return(
        <div className='clutter-tile'>
          <button className= 'left' onClick={this.props.handleBedCornerClick}>&larr;</button>
          <button className= 'right' onClick={this.props.handlePlantCornerClick}>&rarr;</button>
          <img className="cupboard-img" src={assetHelper["cupboard.png"]}></img>
          <img className="chair-img" src={assetHelper["chair.png"]}></img>
          <img className="book-img" src={assetHelper["book.png"]}></img>
          <img className="key-img" onClick={this.props.handleKeyLookClick} src={assetHelper["key.png"]}></img>
        </div>


      )
    }
  }

export default ClutterCornerTile;
