module.exports = {
    url: 'https://www.google.com',
    elements : {
        searchInput: by.name('q'),
        searchResultLink: by.css('div.g > h3 > a')
    },
    /**
     * enters a search term into Google's search box and presses enter
     * @param {string} searchQuery
     * @returns {Promise} a promise to enter the search values
     */
    performSearch: function (searchQuery) {
        var selector = by.name('q');
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).sendKeys(searchQuery, selenium.Key.ENTER);
    },
    verifyTitle: function(title) {
        driver.getTitle().then(function(title) {
            if(expectedTitle === title){
                console.log("Verification Successful - The correct title is displayed on the web page.");
            }
            else{
                console.log("Verification Failed - An incorrect title is displayed on the web page.");
            }
        });
    }
};