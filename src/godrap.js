import React, { Component } from 'react';
import Image from './Image';
import 'bulma/css/bulma.css';
import Columns from './Columns';
class Godrap extends Component{
    render(){
        return(
            <div>
                <section className="sections">
                <Columns className ="columns">

                    <Columns className="column">
                        <Image src={require('./img/iphoneX.png')} alt="IphoneX"/>
                    </Columns>

                    <Columns className="column">
                        <Image src={require('./img/VivoV11.jpeg')} alt="Vivo v11"/>
                    </Columns>

                </Columns>
                </section>
            </div>
        );
    }   
};

export default Godrap;