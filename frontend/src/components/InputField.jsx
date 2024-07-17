import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const InputField = ({ label, type = "text", placeholder, value, onChange, readOnly }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const handleTogglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <div className="relative">
                <input
                    type={type === 'password' && !isPasswordVisible ? 'password' : 'text'}
                    placeholder={placeholder}
                    className="input input-bordered w-full pr-10"
                    value={value}
                    onChange={onChange}
                    readOnly={readOnly}
                />
                {type === 'password' && (
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700"
                        onClick={handleTogglePasswordVisibility}
                    >
                        {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                    </button>
                )}
            </div>
        </div>
    );
};

export default InputField;
