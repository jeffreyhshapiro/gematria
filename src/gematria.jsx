import React, { Component } from 'react';
import {Row, Grid, Col, Panel, OverlayTrigger, Tooltip} from 'react-bootstrap';
import './css/gematria.css'

let gematriaValues = [  
   {  
      "letter":"א",
      "name":"Aleph",
      "gematria":"1"
   },
   {  
      "letter":"ב",
      "name":"Bet",
      "gematria":"2"
   },
   {  
      "letter":"ג",
      "name":"Gimel",
      "gematria":"3"
   },
   {  
      "letter":"ד",
      "name":"Daleth",
      "gematria":"4"
   },
   {  
      "letter":"ה",
      "name":"Heh",
      "gematria":"5"
   },
   {  
      "letter":"ו",
      "name":"Vav",
      "gematria":"6"
   },
   {  
      "letter":"ז",
      "name":"Zayin",
      "gematria":"7"
   },
   {  
      "letter":"ח",
      "name":"Het",
      "gematria":"8"
   },
   {  
      "letter":"ט",
      "name":"Tet",
      "gematria":"9"
   },
   {  
      "letter":"י",
      "name":"Yud",
      "gematria":"10"
   },
   {  
      "letter":"כ",
      "name":"Kaf",
      "gematria":"20"
   },
   {  
      "letter":"ל",
      "name":"Lamed",
      "gematria":"30"
   },
   {  
      "letter":"מ",
      "name":"Mem",
      "gematria":"40"
   },
   {  
      "letter":"נ",
      "name":"Nun",
      "gematria":"50"
   },
   {  
      "letter":"ס",
      "name":"Samech",
      "gematria":"60"
   },
   {  
      "letter":"ע",
      "name":"Ayin",
      "gematria":"70"
   },
   {  
      "letter":"פ",
      "name":"Peh",
      "gematria":"80"
   },
   {  
      "letter":"צ",
      "name":"Tzady",
      "gematria":"90"
   },
   {  
      "letter":"ק",
      "name":"Koof",
      "gematria":"100"
   },
   {  
      "letter":"ר",
      "name":"Reish",
      "gematria":"200"
   },
   {  
      "letter":"ש",
      "name":"Shin",
      "gematria":"300"
   },
   {  
      "letter":"ת",
      "name":"Taf",
      "gematria":"400"
   },
   {  
      "letter":"ך",
      "name":"Kaf (sofit)",
      "gematria":"20"
   },
   {  
      "letter":"ם",
      "name":"Mem (sofit)",
      "gematria":"40"
   },
   {  
      "letter":"ן",
      "name":"Nun (sofit)",
      "gematria":"50"
   },
   {  
      "letter":"ף",
      "name":"Peh (sofit)",
      "gematria":"80"
   },
   {  
      "letter":"ץ",
      "name":"Tzady (sofit)",
      "gematria":"90"
   },
   {  
      "letter":"Clear",
      "name":"Clear word",
      "gematria":"clear"
   }
]

//this.props.getLetter is passed from the parent component class Input

class Gematria extends Component {

  render() {

    return(
      <div id="alephBet">
        <Grid>
          <Row>
        {
          gematriaValues.map((val, i) => {
            return  <OverlayTrigger placement="top" overlay={<Tooltip id={val.name}>{val.name} {val.gematria}</Tooltip>} key={i}>
                      <Col lg={1} md={1} sm={1} xs={2} className="pull-right">
                        <Panel className="gematriaPanel" onClick={this.props.getLetter.bind(this, val)} >
                          <div className="text-center hebrewLetter">
                            {val.letter}
                          </div>
                        </Panel>
                      </Col>
                    </OverlayTrigger>
          })
        }
        </Row>
        </Grid>
      </div>
    )
  }

}

export default Gematria
