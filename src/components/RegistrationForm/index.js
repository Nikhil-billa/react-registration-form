// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
    state = {
          firstNameInput: '',
          lastNameInput: '',
          showFirstNameError: false,
          showLastNameError: false,
          isFormSubmitted: false,
    }

    onBlurLastName = () => {
      const isValidLastName = this.validateLastName()

      this.setState({showLastNameError: !isValidLastName})
    }

    onChangeLastName = (event) => {
      this.setState({lastNameInput: event.target.value})
    }

    renderLastNameField = () => {
      const {lastNameInput, showLastNameError} = this.state 
      const className = showLastNameError ? 'name-input-field error-field' : 'name-input-field'

      return (
         <div className="block">
            <label htmlFor="lastname" className="name">
              LAST NAME
            </label>
            <input
              type="text"
              id="latname"
              placeholder="Last name"
              className={className}
              value={lastNameInput}
              onChange={this.onChangeLastName}
              onBlur={this.onBlurLastName}
            />
          </div>
      )
    }


    onBlurFirstName = () => {
      const isValidFirstName = this.validateFirstName()

      this.setState({showFirstNameError: !isValidFirstName})
    }

    onChangeFirstName = (event) => {
      this.setState({firstNameInput: event.target.value})
    }

    renderFirstNameField = () => {
      const {firstNameInput, showFirstNameError} = this.state 
      const className = showFirstNameError ? 'name-input-field error-field' : 'name-input-field'

      return (
           <div className="block">
            <label htmlFor="firstname" className="name">
              FIRST NAME
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="First name"
              className={className}
              value={firstNameInput}
              onChange={this.onChangeFirstName}
              onBlur={this.onBlurFirstName}
            />
          </div>
      )
    }

  validateLastName = () => {
    const {lastNameInput} = this.state 

    return lastNameInput  !== ''
  }

  validateFirstName = () => {
    const {firstNameInput} = this.state 

    return  firstNameInput !== ''
  }

  onSubmitForm = (event) => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  renderFormDetails = () => {
    const {showFirstNameError, showLastNameError} = this.state 

    return (
      <div className="form-container">
        <form onSubmit={this.onSubmitForm}>
             {this.renderFirstNameField()}
             {showFirstNameError && <p> Required </p>}
             {this.renderLastNameField()}
             {showLastNameError && <p> Required </p>}
          
          <div className="button-container">
            <button className="button" type="button"> Submit </button>
          </div>
        </form>
      </div>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevstate => ({
      isFormSubmitted: !prevstate.isFormSubmitted,
      firstNameInput: '',
      lastNameInput: '',
    }))
  }


  renderSuccessDetails = () => (
    
      <>
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="image"
        />
        <p> Submitted Successfully </p>
        <div className="button-container">
          <button className="button2" 
          type="button"
          onClick={this.onClickSubmitAnotherResponse}
          > Submit Another Respons 
          </button>
        </div>
      </>
    )
  

  render() {
    const {isFormSubmitted} = this.state 

    return (
      <div className="app-container">
        <h1 className="heading"> Registration </h1>
        {isFormSubmitted ? 
                   this.renderSuccessDetails() : this.renderFormDetails()}
      </div>
    )
  }
}

export default RegistrationForm
