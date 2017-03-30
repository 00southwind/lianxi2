;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-search" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M173.0138 159.1531c57.5463-65.4416 141.5648-106.8386 228.5544-112.2539 81.4181-6.0939 164.835 18.8452 229.213 69.1301 78.1382 59.1929 128.0364 154.2514 131.3953 252.3189 4.656 84.9654-25.4258 170.7682-80.7975 235.1805 86.2121 86.2655 172.5211 172.4761 258.7132 258.7626-18.767 18.7093-37.4571 37.4956-56.2252 56.1839-87.0865-87.043-174.0941-174.1439-261.2206-261.1479-71.9662 52.6933-165.6295 74.3896-253.5105 59.1529-86.9496-13.9146-167.1265-64.2384-218.229-135.8719-32.2944-44.6377-53.334-97.406-60.3985-152.0589C77 332.4446 107.7624 231.0593 173.0138 159.1531zM392.387 87.4427c-13.8392 2.0766-27.7933 3.6875-41.2237 7.7038-85.8433 21.1157-160.159 83.5114-196.6847 163.9169-20.8447 44.7926-29.9279 94.9416-26.5311 144.2192 5.2007 95.2124 60.4575 185.6911 142.1664 234.5969 84.3103 52.6163 195.7723 57.8748 284.7596 13.7217 85.5715-40.5015 148.7652-124.5765 163.8077-218.0622 7.2774-42.737 5.2407-87.1599-6.4259-128.9456-24.0657-90.4197-93.9352-166.9448-181.6033-199.4907C486.8479 88.1802 439.0064 82.669 392.387 87.4427z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-Left" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M751.818752 111.637504 703.286272 63.104 254.990336 511.491072 703.286272 959.830016l48.53248-48.533504L351.976448 511.460352 751.818752 111.637504zM751.818752 111.637504"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-right" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M253.647872 911.81056l48.335872 48.336896 446.498816-446.589952L301.983744 67.017728 253.647872 115.3536l398.239744 398.232576L253.647872 911.81056z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-apple" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M754.714127 540.65462c-0.977297-113.176642 92.377635-167.599136 96.794406-170.231079-52.601117-76.964906-134.578466-87.534636-163.871806-88.765673-69.664424-7.046486-135.849464 41.049928-171.213305 41.049928-35.365888 0-89.876573-40.031738-147.697789-38.97057-75.990762 1.062192-145.911023 44.192501-185.053065 112.11445-78.920608 136.864134-20.165075 339.652723 56.674043 450.759217 37.571203 54.337559 82.402038 115.425869 141.284466 113.219621 56.717023-2.25025 78.114209-36.678364 146.6376-36.678364 68.433336 0 87.750055 36.678364 147.651738 35.530215 60.877957-1.102101 99.637267-55.440683 136.868719-109.948111 43.131054-63.049988 60.708081-124.052341 61.896188-127.236869C873.371342 721.115692 755.860277 676.073846 754.714127 540.65462M641.999494 208.216205c31.288869-37.865399 52.34528-90.505293 46.529593-142.891408-45.000711 1.825578-99.467391 29.971615-131.817472 67.837015-28.953589 33.493835-54.297828 87.069031-47.419906 138.434909C559.429627 275.417747 610.79761 245.998717 641.999494 208.216205"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shopping-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M908.145 943.852c-3.418 3.832-8.292 6.017-13.419 6.017h-753.231c-5.126 0-10.010-2.186-13.428-6.017-3.409-3.822-5.028-8.922-4.451-14.013l71.744-627.694c1.034-9.083 8.724-15.946 17.871-15.946h62.122c9.938 0 17.988 8.050 17.988 17.988s-8.050 17.988-17.988 17.988h-46.076l-67.625 591.717h712.911l-67.625-591.717h-56.347c-9.929 0-17.988-8.050-17.988-17.988s8.059-17.988 17.988-17.988h72.392c9.147 0 16.837 6.863 17.88 15.946l71.736 627.694c0.576 5.091-1.043 10.19-4.451 14.013z"  ></path>' +
    '' +
    '<path d="M625.116 304.188c0 9.938-8.050 17.988-17.988 17.988h-174.86c-9.938 0-17.988-8.050-17.988-17.988s8.050-17.988 17.988-17.988h174.86c9.938 0 17.988 8.050 17.988 17.988z"  ></path>' +
    '' +
    '<path d="M715.379 393.857c0 19.805-16.054 35.867-35.867 35.867-19.805 0-35.867-16.063-35.867-35.867 0-13.248 7.186-24.823 17.88-31.028v-112.442c0-79.083-64.333-143.417-143.416-143.417s-143.416 64.333-143.416 143.417v112.442c10.694 6.206 17.88 17.782 17.88 31.028 0 19.805-16.063 35.867-35.867 35.867-19.813 0-35.867-16.063-35.867-35.867 0-13.248 7.186-24.823 17.88-31.028v-112.442c0-98.915 80.477-179.393 179.393-179.393s179.393 80.477 179.393 179.392v112.442c10.694 6.206 17.88 17.782 17.88 31.028z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)