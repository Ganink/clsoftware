/* Stat Counter
    * ------------------------------------------------------ */
var clStatCount = function () {
    var statSection = $(".s-stats"),
        stats = $(".item-stats__count");
    statSection.waypoint({
        handler: function (direction) {
            if (direction === "down") {
                stats.each(function () {
                    var $this = $(this);
                    $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (curValue) {
                            $this.text(Math.ceil(curValue));
                        }
                    });
                });
            }
            // trigger once only
            this.destroy();
        },
        offset: "90%"
    });
};
