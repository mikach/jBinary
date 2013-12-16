/**
 * Touch-based remote controller for your presentation courtesy 
 * of the folks at http://remotes.io
 */

(function(window){
    head.ready( 'remotes.ne.min.js', function() {
        new Remotes("preview")
            .on("swipe-left", function(e){ Reveal.right(); })
            .on("swipe-right", function(e){ Reveal.left(); })
            .on("swipe-up", function(e){ Reveal.down(); })
            .on("swipe-down", function(e){ Reveal.up(); })
            .on("tap", function(e){ Reveal.next(); })
            .on("zoom-out", function(e){ Reveal.toggleOverview(true); })
            .on("zoom-in", function(e){ Reveal.toggleOverview(false); })
        ;
    } );

    head.js('https://rawgithub.com/Remotes/Remotes/master/dist/remotes.ne.min.js');
})(window);