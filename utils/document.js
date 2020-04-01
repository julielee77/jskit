/**
 * @file dom
 */

/**
 * likes jQuery, when DOM is ready
 *
 * @export
 * @param {*} fn
 */
export function domReady(fn) {
    // latest browsers
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn, false);
    } else {
        IEContentLoaded(fn);
    }
    // IE simulates  DOMContentLoaded
    function IEContentLoaded(fn) {
        const d = document;
        let done = false;
        // when done execute next
        function init() {
            if (!done) {
                done = true;
                fn();
            }
        }
        // execute hack immediately
        (() => {
            try {
                d.documentElement.doScroll('left');
            } catch (e) {
                // delay to try again
                setTimeout(arguments.callee, 50);
                return;
            }
            init();
        })();
        // listen loading status of document
        d.onreadystatechange = () => {
            // if the function is bind after domReady, execute it immediately
            if (d.readyState === 'complete') {
                d.onreadystatechange = null;
                init();
            }
        };
    }
}