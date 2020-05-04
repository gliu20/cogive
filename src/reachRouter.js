
const HospitalPage = props => {
    return (
        <div className="container-hospital">
            <div className="name-container">
                <h1>{props.name}</h1>
            </div>
            <div className="location-data">
                <p className="country-text">{props.country}</p>
                <p className="state-text">{props.state}</p>
                <p className="city-text">{props.city}</p>
                <p className="address-text">{props.address}</p>
            </div>
            <div className="requirements">
                <p className="requirementsText">Number of masks needed : {props.requirements}</p>
            </div>
            <div className="contact-details">
                <p className="email-text">{props.email}</p>
                <p className="number-text">{props.number}</p>
            </div>
        </div>
    )
}


const HospitalRouter = props => {
    return(
        <Router>
            <HospitalPage path="hospital/:name/:country/:state/:city/:address/:requirements/:email/:number"/>
        </Router>
    )
}
export {HospitalRouter}
