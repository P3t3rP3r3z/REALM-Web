import React, { Component } from "react";
import map from "../assets/images/map.PNG";
import addpicture from "../assets/images/addpicture.png";
import "../assets/CSS/sharedStyles.css"

class EventView extends Component {
   constructor(props) {
      super(props);
      const { name, category, host, date, startTime, endTime, location, description, spotsAvailable } = props.location.state

      this.state = {
         green: false,
         name: name,
         category: category,
         host: host,
         date: date,
         startTime: startTime,
         endTime: endTime,
         location: location,
         description: description,
         spotsAvailable: spotsAvailable
      }
   }


   changeColor() {
      this.setState({ green: !this.state.green })
   }

   render() {
      let btn_class = this.state.green ? "greenButton" : "redButton";
      console.log(this.state)

      const btn_classStyle = {
         margin: '2em',
         marginLeft: '3em',
         height: '6em',
         width: '6em',
         borderRadius: '8px'
      };

      return (

         <div style={{ textAlign: 'center' }}>
            <h1 className="eventHeader">{this.state.name}</h1>
         <span style={{display:'flex'}}>
            <img src={map} className="eventViewMapStyling" />
            <p className='eventDescription'><strong style={{fontSize:'large'}}>Description: </strong><br/>{this.state.description}</p>
         </span>

            <span >
               <ul className="ulEventData">

                  <li style={{ padding: '5px', height: '60px', marginBottom: '5px', textAlign: 'center' }}>
                     <text className="lisTxt_lead">Total Attending:</text>
                     <text className="lisTxt_content">1s / </text>
                     <text className="lisTxt_lead">Total Capacity:</text>
                     <text className="lisTxt_content"> {this.state.spotsAvailable}</text>
                  </li>

                  <li className="eventLis">
                     <text className="lisTxt_lead">Event Date and Time:</text>
                     <text className="lisTxt_content"> {this.state.date} {this.state.startTime} to {this.state.endTime}</text>
                  </li>

                  <li className="eventLis">
                     <text className="lisTxt_lead">Event Host:</text>
                     <text className="lisTxt_content"> {this.state.host}</text>
                  </li>

                  <li className="eventLis">
                     <text className="lisTxt_lead">Event Location:</text>
                     <text className="lisTxt_content"> {this.state.location}</text>
                  </li>

               </ul>

               <div >
                  <button className={btn_class} onClick={this.changeColor.bind(this)}
                     style={btn_classStyle}>
                     {btn_class === 'greenButton' ? <text>Attending</text> : <text>I wanna go!</text>}</button>

               </div>
            </span>
         </div>

      );
   }
}

export default EventView;