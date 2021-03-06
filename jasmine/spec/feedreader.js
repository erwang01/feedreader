/* feedreader.js
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This suite is all about the RSS
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
            for (var feed in allFeeds) {
                expect(allFeeds[feed].url).toBeDefined();
                expect(allFeeds[feed].url).not.toEqual("");
            };
        });


        /* loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have names', function () {
            for (var feed in allFeeds) {
                expect(allFeeds[feed].name).toBeDefined();
                expect(allFeeds[feed].name).not.toEqual("");
            };
        });
    });


    /* test suite named "The menu" */
    describe('The menu', function() {
        /* ensures the menu element is
         * hidden by default.
         */
        var body = $('body');
        it('is hidden by default', function () {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

         /* ensures the menu changes
          * visibility when the menu icon is clicked.
          * Both shows and hides the menu
          */
         it('reveals and hides', function() {
            $('.menu-icon-link').click();
            expect(body.hasClass('menu-hidden')).not.toBe(true);
            $('.menu-icon-link').click();
            expect(body.hasClass('menu-hidden')).toBe(true);
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
            expect($('.feed .entry').length).not.toBe(0);
        });
    });
    /* test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        var content, newContent;
        beforeEach(function(done) {
            loadFeed(0, function() {
                content = $('.feed .entry')[0].innerText;
                loadFeed(1, function() {
                    newContent = $('.feed')[0].innerText;
                    done();
                });
            });
            
        });
        it ('loads', function () {
            expect(content).not.toEqual(newContent);

        });
    });
}());
