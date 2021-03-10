class GalleryPage {
    /**
     * define selectors using getter methods
     */
    get cardShrine() {return $('~Shrine')}
    get cardReply() {return $('~Reply')}

}

module.exports = new GalleryPage();
