import React, { useState, useEffect } from 'react';

const Component = ({ formURL }) => {
    const [formData, setFormData] = useState();
    const [locations, setLocations] = useState();

    const getData = async () => {
        try {
            const response = await fetch(formURL, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const myJson = await response.json();
            console.log("myJson",myJson);
            
            setFormData(myJson);
        } catch (error) {
            console.error('Fetch error: ', error);
        }
    };

    const getLocations = async (locationURL) => {
        try {
            const response = await fetch("https://main--eds-xwalk-explore--bilaltk90.hlx.page/generic-lists/locations.json", {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const myJson = await response.json();
            setLocations(myJson);
        } catch (error) {
            console.error('Fetch error: ', error);
        }
    };


    useEffect(() => {
        getData();
        getLocations();
    }, [formURL]);


    return (
        <div className="react-form">
            <h3>Calculate Your Fee</h3>
            <div className="react-form__sections">
                {formData?.data?.map((data, index) => (
                    <div key={index} className="react-form__section">
                        {data.Type != "submit" && (
                            <label>{data.Label}</label>
                        )}
                        <div className="react-form__section--options">
                            {data.Type === "select" && (
                                <select name={data.Name}>
                                    {data.Options.split(",").map((option, optIndex) => (
                                        <option key={optIndex} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            )}
                            {data.Type === "getSelect" && (
                                <select name={data.Name}>
                                    {locations.map((option, optIndex) => (
                                        <option key={optIndex} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            )}
                            {data.Type === "text" && (
                                <input type="text" placeholder={data.Placeholder} required={data.Mandatory == "True" ? true : false}/>
                            )}
                        </div>
                        {data.Type === "submit" && (
                            <button>{data.Label}</button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Component;