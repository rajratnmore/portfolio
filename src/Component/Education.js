import React from "react";

const Education = () => {

    return (
        <>

            <ul className="education_list">
                <li>
                    <h6 className="education_heading">Master's in Computer Application <span style={{ letterSpacing: ".1rem" }}>(MCA)</span></h6>
                    <p className="education_year">2018-2021</p>
                    <p className="text-muted">K. K. Wagh Institute of Engineering Education and Research, Nashik </p>
                    <p className="text-muted fw-bold">Savitribai Phule Pune University </p>
                </li>
                <li>
                    <h6 className="education_heading">Bachelor's in Computer Application <span style={{ letterSpacing: ".1rem" }}>(BCA)</span></h6>
                    <p className="education_year">2014-2018</p>
                    <p className="text-muted">Smt. S. M. Agrawal Institute of Management, Chalisgaon </p>
                    <p className="text-muted fw-bold">Kavayitri Bahinabai Chaudhari North Maharashtra University Jalgaon</p>
                </li>
                <li>
                    <h6 className="education_heading">12 <sup>th</sup> <span style={{ letterSpacing: ".1rem" }}>(HSC)</span></h6>
                    <p className="education_year">2013-2014</p>
                    <p className="text-muted">G. V. P. M. High School Mehunbare, Chalisgaon </p>
                    <p className="text-muted fw-bold">Maharashtra State Board Secondary & Higher Secondary Education Pune</p>
                </li>
                <li>
                    <h6 className="education_heading">10 <sup>th</sup> <span style={{ letterSpacing: ".1rem" }}>(SSC)</span></h6>
                    <p className="education_year">2011-2012</p>
                    <p className="text-muted">M. V. Chinchagavhan, Chalisgaon</p>
                    <p className="text-muted fw-bold">Maharashtra State Board Secondary & Higher Secondary Education Pune</p>
                </li>
            </ul>

        </>
    );
}

export default Education;