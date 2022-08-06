import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Team extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.team


    return <div className="team-area bg-gray mg-top-70 pd-top-90 pd-bottom-70">
          <div className="container">
            <div className="section-title text-center">
              <h2 className="title">{ data.title }</h2>
            </div>
            <div className="col">
            { data.items.map( ( item, i )=>
                <div key={i} className="col-lg-3 col-sm-6" style={{ marginRight:'40%'}} >
                  <div className="single-team">
                    <div className="thumb">
                      <img src={publicUrl+item.image} alt="team" />
                    </div>
                    <div className="team-details">
                      <h4>{ item.name }</h4>
                      <span>{ item.designation }</span>
                    </div>
                  </div>
                </div>
             )}
            
            </div>
          </div>
        </div>

        }
}

export default Team