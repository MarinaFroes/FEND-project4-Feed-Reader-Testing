/* feedreader.js
 */

(() => {
    describe('RSS Feeds', () => {
        /* Test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('urls are defined and not empty', () => {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined and not empty', () => {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        });
    });

    describe('The menu', () => {
        const menu = document.querySelector('body');
        /* Test that ensures the menu element is
         * hidden by default. 
         */
        it('is hidden by default', () => {
            expect(menu).toHaveClass('menu-hidden');
        });
        /* Test that ensures the menu changes
        * visibility when the menu icon is clicked.
        */
        it('is displayed on click', () => {
            const menuIcon = document.querySelector('.menu-icon-link');
            menuIcon.click();
            expect(menu).not.toHaveClass('menu-hidden');
            menuIcon.click();
            expect(menu).toHaveClass('menu-hidden');
        });
    });

    describe('Initial Entries', () => {
        /* Test that ensures when the loadFeed
        * function is called and completes its work, there is at least
        * a single .entry element within the .feed container.
        */
        beforeEach( done => {
            loadFeed(0, done);
        });

        it('have at least 01 entry', () => {
            const allEntries = document.querySelectorAll('.feed .entry');
            expect(allEntries.length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', () => {
        let initialFeed, finalFeed;
        /* Test that ensures when a new feed is loaded
        * by the loadFeed function that the content actually changes.
        */
        beforeEach( done => {
            loadFeed(0, () => {
                initialFeed = document.querySelector('.feed').innerText;
                loadFeed(1, () => {
                    finalFeed = document.querySelector('.feed').innerText;
                    done();
                });
            });
        });

        it('changes content when new feed is loaded', () => {
            expect(initialFeed).not.toBe(finalFeed);
        });
    });
})();
