class HomePage {
    /**
     * define selectors using getter methods
     */
    get btnApp() {return $("~App")}
    get btnContent() {return $('//android.widget.TextView[@content-desc="Content"]')}
    get btnMedia() {return $("~Media")}
    get btnAlarm() {return $('//android.widget.TextView[@content-desc="Alarm"]')}
    get btnPackage() {return $('//android.widget.TextView[@content-desc="Packages"]')}

    click(menu){
        console.log(menu);
        if (menu === 'App'){
            this.btnApp.click();
        } else if (menu === 'Content'){
            this.btnContent.click();
        }
    }
}

module.exports = new HomePage();
