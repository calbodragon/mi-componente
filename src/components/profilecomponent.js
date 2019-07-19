import React from 'react';
import conflogo from '../image/logo-ag.png';
import './style/Profilestyles.css';
class Profile extends React.Component {

    render() {
        return (
            //componentes de mi card
            <div className="Profile">
                {/*encabezado de mi perefil*/}
                <div className="Profile__header">
                    <img class="Profile__logo" src={conflogo} alt="logo d ela akademia geek"></img>
                    {/*nombre  de usuario y del abatar*/}
                </div>
                <div className="Profile__section-name">
                    <img className="Profile__avatar" src="https://eafitrequisitos.s3.us-east-2.amazonaws.com/john.png" alt="avatar del usuario"></img>
                    <h1>cristhiam alberto<br />Bohorquez Rodriguez</h1>
                </div>
                {/* informacion profesional del usuario*/}
                <div className="Profile__section-info">
                    <h2>desarrollador front-end</h2>
                    <p>@calbodragon9282</p>
                </div>

                <div class="Profile__footer">
                    {/*etiqueta que hace mencion a la geek conferencia*/}
                    #geekconf
           </div>
            </div>
        )
    }
}

export default Profile;