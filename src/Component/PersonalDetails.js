import React from "react";

const PersonalDetails = () => {

    return (
        <>
            <div className="personal_details">

                <div className="personal">
                    <h6 style={{ color: "#f48c06" }}>Personal Info</h6>
                    <ul>
                        <li>Nationality : Indian</li>
                        <li>Gender : Male </li>
                        <li>Marital Status : Single </li>
                        <li>Language Known : English, Hindi, Marathi</li>
                    </ul>
                </div>

                <div className="strength">
                    <h6 style={{ color: "#f48c06" }}>Strength</h6>
                    <ul>
                        <li>Good Team Player</li>
                        <li>Self-Motivated</li>
                        <li>Technical Skills</li>
                        <li>Punctuality</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default PersonalDetails;