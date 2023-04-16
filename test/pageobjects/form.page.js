class FormPage {
    get firstNameInput() {
        return $('#firstName');
    }
    get lastNameInput() {
        return $('#lastName');
    }
    get emailInput() {
        return $('#userEmail');
    }
    get genderButtonMale() {
        return  $('#gender-radio-1');
          
    }
    get genderButtonFemale() {
        return $('#gender-radio-2');
    }
        
    get genderButtonOther() {
        return $('#gender-radio-3');
        
    }
    get mobileInput() {
        return $('#userNumber')
    }
    get dateOfBirthInput() {
        return $('#dateOfBirthInput')
    }
    get subjectsInput() {
        return $('#subjectsContainer')
    }
    get hobbieButtons() {
        return {
            sports: $('[for="#hobbies-checkbox-1"]'),
            reading: $('[for="hobbies-checkbox-2"]'),
            music: $('[for="hobbies-checkbox-3"]')
        }
    }
    get uploadButton() {
        return $('#uploadPicture')
    }
    get currentAddressInput() {
        return $('#currentAddress')
    }
    get stateDropdown() {
        return $('#state')
    }
    get cityDropdown() {
        return $('#city')
    }
    get submitButton() {
        return $('#submit')
    }
    get thankYouModal() {
        return $('#example-modal-sizes-title-lg')
    }

    open() {
          browser.url('https://demoqa.com/automation-practice-form');
        }

    fillForm(firstName, lastName, email, mobile, subjects, address, state, city) {
        this.firstNameInput.setValue(firstName);
        this.lastNameInput.setValue(lastName);
        this.emailInput.setValue(email);
        this.selectMobileNumber(mobile);
        this.subjectsInput.setValue(subjects);
        this.currentAddressInput.setValue(address);
        this.stateDropdown.selectByVisibleText(state);
        this.cityDropdown.selectByVisibleText(city);
        this.selectGenderButton();
       
       
       // this.uploadButton.setValue(upload);
    
    }
    submitForm() {
        this.submitButton.click()
    }
    waitForFormPage() {
        return this.submitButton.isDisplayed();
    }

    isThankYouModalDisplayed() {
        return this.thankYouModal.isDisplayed();
    }
    getThankYouText() {
        return this.thankYouModal.getText();
    }
    selectDateOfBirth() {
        this.dateOfBirthInput.click();
        const dateMonth= $(`.react-datepicker__day--002`);
        dateMonth.click();
      }
    selectGenderButton(genderButton) {
        const genderradio = this.genderButtonMale
        genderradio.click();
    }
    selectMobileNumber(mobile) {
        this.mobileInput.setValue(mobile);
      
    }


}

export default new FormPage();