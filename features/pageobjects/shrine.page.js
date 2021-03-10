class ShrinePage {
    /**
     * define selectors using getter methods
     */
    get btnSearch() {return $("~Search")}
    get btnBackToGallery() {return $("~Back to Gallery")}
    get btnClothing() {return $("~CLOTHING")}
    get btnAll() {return $("~ALL")}
    get btnDrawer() {return $("~Open menu")}
    get btnShoppingCart() {return $("~Shopping cart, 1 item")}

}

module.exports = new ShrinePage();
