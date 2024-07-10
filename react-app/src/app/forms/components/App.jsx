import React, { useState, useEffect } from 'react';

const Component = ({ formURL }) => {
    const [formData, setFormData] = useState();
    const [formValues, setFormValues] = useState({});
    const [errors, setErrors] = useState({});

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
            const updatedData = await Promise.all(
                myJson?.data.map(async (item) => {
                    if (item.Options && item.Options.endsWith('.json')) {
                        try {
                            const optionResponse = await fetch(item.Options);
                            if (optionResponse.ok) {
                                const optionData = await optionResponse.json();
                                const locations = optionData?.data?.map(loc => loc.location).join(",") || "";
                                return { ...item, Options: locations };
                            }
                        } catch (error) {
                            console.error('Fetch error for option:', error);
                        }
                    }
                    return item;
                })
            );
            setFormData(updatedData);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    const validateField = (name, value, min, max, desc) => {
        const newErrors = { ...errors };
        const field = formData.find(item => item.Name === name);
        const numValue = Number(value);
        const numValuemin = Number(min);
        const numValuemax = Number(max);
        if (field && !value) {
            newErrors[name] = "Enter a value";
        } else if(numValue < numValuemin || numValue > numValuemax){
            desc = desc.replace('${Min}', min).replace('${Max}', max);
            newErrors[name] = desc;
        }else {
            delete newErrors[name];
        }
        setErrors(newErrors);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        let min = e.target.getAttribute("data-min");
        let max =  e.target.getAttribute("data-max");
        let desc =  e.target.getAttribute("data-description");
        setFormValues({
            ...formValues,
            [name]: value,
        });
        validateField(name, value, min, max, desc);
    };

    useEffect(() => {
        if(!errors["cost"]){
            setFormValues({
                ...formValues,
                borrow: formValues["cost"] * 80/100,
            });
        }
    }, [formValues["cost"]]);

    useEffect(() => {
        getData();
    }, [formURL]);


    return (
        <div className="react-form">
            <h3>Calcula ti cuota</h3>
            <div className="react-form__sections">
                {formData?.map((data, index) => (
                    <div key={index} className="react-form__section">
                        {data.Type != "submit" && (
                            <label>{data.Label}</label>
                        )}
                        <div className="react-form__section--options">
                            {data.Type === "select" && (
                                <select name={data.Name}>
                                    {data.Options}
                                    {data.Options.split(",").map((option, optIndex) => (
                                        <option key={optIndex} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            )}
                            {data.Type === "text" && (
                                <>
                                    <input 
                                        value={formValues[data.Name] || ""} 
                                        onChange={handleChange} 
                                        name={data.Name} 
                                        type="text" 
                                        placeholder={data.Placeholder}
                                        data-min={data.Min}
                                        data-max={data.Max}
                                        data-description={data.Description}
                                        required={data.Mandatory == "True" ? true : false}
                                    />
                                    <div className="message">
                                        {errors[data.Name] && <span className="error">{errors[data.Name]}</span>}
                                        {!errors[data.Name] && (<>
                                            <span className="message-left">Min {data.MinMaxPrefix} {data.Min} {data.MinMaxSuffix}</span>
                                            <span className="message-right">Max {data.MinMaxPrefix} {data.Max} {data.MinMaxSuffix}</span></>
                                        )}
                                    </div>
                                </>
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