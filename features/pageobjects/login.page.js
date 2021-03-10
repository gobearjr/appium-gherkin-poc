class LoginPage {
    /**
     * define selectors using getter methods
     */
    get btnNext() {return $("~NEXT")}
    get btnCancel() {return $("~CANCEL")}
    get btnBackToGallery() {return $("~Back to Gallery")}

}

module.exports = new LoginPage();
