class FormPage {
    get firstNameInput() {
        return $('#firstName')
    }
    get lastNameInput() {
        return $('#lastName')
    }
    get emailInput() {
        return $('#userEmail')
    }
    get genderButton() {
        return {
            male: $('#gender-radio-1'),
            female: $('#gender-radio-2'),
            other: $('#gender-radio-3')
        }
    }
    get mobileInput() {
        return $('#userNumber')
    }
    get dateOfBirthInput() {
        return $('#dateOfBirthInput')
    }
    get subjectsInput() {
        return $('#')
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

    fillForm(firstName, lastName, email, gender, mobile, birthday, subjects, hobbies, upload, address, state, city) {
        this.firstNameInput.setValue(firstName);
        this.lastNameInput.setValue(lastName);
        this.emailInput.setValue(email);
       // this.genderButton.selectByVisibleText(gender);
        this.mobileInput.setValue(mobile);
        this.dateOfBirthInput.setValue(birthday);
        this.subjectsInput.setValue(subjects);
       // this.hobbieButtons.setValue(hobbies);
       // this.uploadButton.setValue(upload);
        this.currentAddressInput.setValue(address);
        this.stateDropdown.selectByVisibleText(state);
        this.cityDropdown.selectByVisibleText(city);
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

}

export default new FormPage();