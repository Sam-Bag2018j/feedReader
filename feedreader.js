
$(function () {

    describe('RSS Feeds', function () {

        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /*  test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url defined', function () {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });


        /* test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name defined', function () {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });


    /* test that ensures the menu element is
     * hidden by default.*/
    describe('The menu', function () {
        const bodyContainer = document.querySelector('body');
        it('hiden menu by default', function () {
            expect(bodyContainer.classList.contains('menu-hidden')).toBe(true);
        });

        /* test to ensure the menu will display 
          when it is clicked and will disapear when click on it again.*/

        it('hide and show menue when click it', function () {
            const menu_icon = document.querySelector('.menu-icon-link');
            menu_icon.click();
            expect(bodyContainer.classList.contains('menu-hidden')).toBe(false);

            menu_icon.click();
            expect(bodyContainer.classList.contains('menu-hidden')).toBe(true);

        });
    });

    /*  test suite named "Initial Entries" */
    /* that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container */
    describe('Initial Entries', function () {

        beforeEach(function (done) {
            //load the first feed of loadFeed
            loadFeed(0, function () {
                done();
            });

        });

        it('loadFeed should be work', function () {
            //store all entries in feedChild variable
            var feedChild = document.querySelectorAll('.feed .entry');

            console.log(feedChild);
            console.log(feedChild.length);
            expect(feedChild.length > 0).toBe(true);
        });
    });
    /* a new test suite named "New Feed Selection" 
    /*to ensure when a new feed is loaded
     /* by the loadFeed function that the content actually changes.*/

    describe('New Feed Selection', function () {
        let firstFeed;
 
        beforeEach((done) => {
            // Load first feed 
            loadFeed(0, () => {
                firstFeed = document.querySelector('.feed').innerHTML;

                loadFeed(1, () => {
                    done();
                });
            });
        });
        it('content should be change after lod new page', ((done) => {
            //load new feed
            var secondFeed = document.querySelector('.feed').innerHTML;
            expect(firstFeed).not.toBe(secondFeed);
            done();
        }));
    })



}());
