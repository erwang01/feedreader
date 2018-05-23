/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have URLs', function () {
            if (allFeeds != null) {
                for (var feed in allFeeds, function() {
                    expect(feed.url).not.equals("");
                });
            };
        });


        /* loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have names', function () {
            if (allFeeds != null) {
                for (var feed in allFeeds, function() {
                    expect(feed.name).not.equals("");
                });
            };
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* ensures the menu changes
          * visibility when the menu icon is clicked.
          * Both shows and hides the menu
          */
         it('reveals and hides', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).not.toBe(true);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });
    });
    /* test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        it ('load the feed', function() {
            expect($('.feed').children().children('.entry').length).not.toBe(0);
        });
    });
    /* test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                this.content = $('.feed');
            });
            loadFeed(1, function() {
                this.newContent = $('.feed');
            });
            done();
        });
        it ('loads', function (done) {
            expect(this.content).not.toEqual(this.newContent);

        });
    });
}());
