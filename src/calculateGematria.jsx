import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
let gematriaValues = [{"letter":"א","name":"Aleph","gematria":"1"},{"letter":"ב","name":"Bet","gematria":"2"},{"letter":"ג","name":"Gimel","gematria":"3"},{"letter":"ד","name":"Daleth","gematria":"4"},{"letter":"ה","name":"Heh","gematria":"5"},{"letter":"ו","name":"Vav","gematria":"6"},{"letter":"ז","name":"Zayin","gematria":"7"},{"letter":"ח","name":"Het","gematria":"8"},{"letter":"ט","name":"Tet","gematria":"9"},{"letter":"י","name":"Yud","gematria":"10"},{"letter":"כ","name":"Kaf","gematria":"20"},{"letter":"ל","name":"Lamed","gematria":"30"},{"letter":"מ","name":"Mem","gematria":"40"},{"letter":"נ","name":"Nun","gematria":"50"},{"letter":"ס","name":"Samech","gematria":"60"},{"letter":"ע","name":"Ayin","gematria":"70"},{"letter":"פ","name":"Peh","gematria":"80"},{"letter":"צ","name":"Tzady","gematria":"90"},{"letter":"ק","name":"Koof","gematria":"100"},{"letter":"ר","name":"Reish","gematria":"200"},{"letter":"ש","name":"Shin","gematria":"300"},{"letter":"ת","name":"Taf","gematria":"400"},{"letter":"ך","name":"Kaf (sofit)","gematria":"500"},{"letter":"ם","name":"Mem (sofit)","gematria":"600"},{"letter":"ן","name":"Nun (sofit)","gematria":"700"},{"letter":"ף","name":"Peh (sofit)","gematria":"800"},{"letter":"ץ","name":"Tzady (sofit)","gematria":"900"}]

class Calculator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gematriaValue: 0
        }

        this.calculateValue = this.calculateValue.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.calculateValue(nextProps)
    }

    calculateValue(nextProps) {
        let phraseArr = nextProps.calculatePhrase.split('');
        let total = 0;

        phraseArr.forEach((letter) => {
            gematriaValues.find((target) => {
                if(letter === target.letter) {
                    return total += parseInt(target.gematria)
                }
            });
        });

        this.setState({
            gematriaValue: total
        });
    }

    render() {
        return (
            <section id="calculate-phrase">
                <Col sm={6} md={6} className="header"> 
                    <h2>Value</h2>
                    <h2>
                        {this.state.gematriaValue}
                    </h2>
                </Col>
                <Col sm={6} md={6} className='pull-right'>
                    <h2>Word</h2>
                    <h2>
                        {this.props.calculatePhrase}
                    </h2>
                </Col>
            </section>
        )
    }
}

export default Calculator