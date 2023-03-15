import formPage from '../pageobjects/form.page';

describe('Form Page Functionality', () => {
    beforeEach(() => {
        formPage.open();
      });

  it('should be able to fill out the form', async () => { 
    // Navigate to the registration page
   
    // Fill in the form with valid data
    formPage.fillForm(
      'John',
      'Doe',
      'john.doe@example.com',
      'Male',
      '1234567890',
      '01/01/2000',
      'Maths, English',
      ['NCR', 'Delhi'],
      '/path/to/file.jpg',
      '123 Main St',
      'California',
      'Los Angeles'
    );

    // Submit the form
    formPage.submitForm();

    // Assert that the form submission was successful
    await thankYouModal.waitForExist({ timeout: 5000 });
    expect(thankYouModal).toBeDisplayed();
  });
});
