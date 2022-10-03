import React, { useState } from 'react';
import './SignUpForm.css'

function SignUpForm() {
    const [firstNameInput, setFirstNameInput] = useState('');
    const [lastNameInput, setLastNameInput] = useState('');
    const [emailAddressInput, setEmailAddressInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [isLastNameValid, setIsLastNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    function verifyInputs(event) {
        firstNameInput === "" ? setIsFirstNameValid(false) : setIsFirstNameValid(true);
        lastNameInput === "" ? setIsLastNameValid(false) : setIsLastNameValid(true);
        emailAddressInput === "" ? setIsEmailValid(false) : setIsEmailValid(true);
        passwordInput === "" ? setIsPasswordValid(false) : setIsPasswordValid(true);
    }

    function firstNameChangeHandler(event) {
        setFirstNameInput(event.target.value)
    }

    function lastNameChangeHandler(event) {
        setLastNameInput(event.target.value)
    }

    function emailAddressChangeHandler(event) {
        setEmailAddressInput(event.target.value)
    }

    function passwordChangeHandler(event) {
        setPasswordInput(event.target.value)
    }

    return (
        <div className="signup__form__card">
            <form className="signup__form">
                <input placeholder="First Name" value={firstNameInput} onChange={firstNameChangeHandler}></input>
                { !isFirstNameValid ? (
                    <p>First Name cannot be empty</p>
                ) : <p></p>}
                <input placeholder="Last Name" value={lastNameInput} onChange={lastNameChangeHandler}></input>
                { !isLastNameValid ? (
                    <p>Last Name cannot be empty</p>
                ) : <p></p>}
                <input placeholder="Email Address" value={emailAddressInput} onChange={emailAddressChangeHandler}></input>
                { !isEmailValid ? (
                    <p>Looks like this is not an email</p>
                ) : <p></p>}
                <input placeholder="Password" value={passwordInput} onChange={passwordChangeHandler}></input>
                { !isPasswordValid ? (
                    <p>Password cannot be empty</p>
                ) : <p></p>}
                <input type="button" value="CLAIM YOUR FREE TRIAL" className="sign__form__button" onClick={verifyInputs}></input>
            </form>
            <div className="disclaimer">
                <p>By clicking the button, you are agreeing to our <span className="terms-and-service">Terms and Services</span></p>
            </div>
        </div>
    )
}

export default SignUpForm;