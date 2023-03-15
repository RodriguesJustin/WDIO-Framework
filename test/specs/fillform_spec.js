import FormPage from '../pageobjects/form.page';

describe('Form Page Functionality', () => {
    let thankYouModal;

    beforeEach(() => {
        browser.url('https://demoqa.com/automation-practice-form');
        thankYouModal = $('#example-modal-sizes-title-lg')
      });

  it('should be able to fill out the form', async () => { 
    // Navigate to the registration page
        FormPage.submitButton.waitForFormPage(1000);
    // Fill in the form with valid data
    FormPage.fillForm(
      'John',
      'Doe',
      'john.doe@example.com',
      'Male',
      '1234567890',
      //'01/01/2000',
      'Maths, English',
      ['NCR', 'Delhi'],
      '/path/to/file.jpg',
      '123 Main St',
      'California',
      'Los Angeles'
    );

    // Submit the form
    FormPage.submitForm();

    // Assert that the form submission was successful
    await thankYouModal.waitForExist({ timeout: 9000 });
    expect(thankYouModal).toBeDisplayed();
  });
});
