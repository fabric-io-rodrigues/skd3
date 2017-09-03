/* skd3 version 0.1.0 (https://github.com/fabriciorhs/skd3) 2017-09-03 */
(function(){
// set up main sk object
var sk = {};
sk.alertVersion = function () { alert(this.version);}

// Node/CommonJS - require D3
if (typeof(module) !== 'undefined' && typeof(exports) !== 'undefined' && typeof(d3) == 'undefined') {
    d3 = require('d3');
}

// Node/CommonJS exports
if (typeof(module) !== 'undefined' && typeof(exports) !== 'undefined') {
  module.exports = sk;
}

if (typeof(window) !== 'undefined') {
  window.sk = sk;
}
// https://github.com/d3/d3-sankey Version 0.5.0. Copyright 2017 Mike Bostock.
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("d3-array"),require("d3-collection"),require("d3-shape")):"function"==typeof define&&define.amd?define(["exports","d3-array","d3-collection","d3-shape"],t):t(n.d3=n.d3||{},n.d3,n.d3,n.d3)}(this,function(n,t,e,r){"use strict";function o(n){return function(){return n}}function u(n,t){return n.source.y-t.source.y}function i(n,t){return n.target.y-t.target.y}function c(n,t){return n.y-t.y}function f(n){return n.value}function s(n){return n.y+n.dy/2}function a(n){return s(n.source)*n.value}function d(n){return s(n.target)*n.value}function y(n){return n.nodes}function l(n){return n.links}function h(n){return[n.source.x+n.source.dx,n.source.y+n.sy+n.dy/2]}function g(n){return[n.target.x,n.target.y+n.ty+n.dy/2]}var k=function(){function n(){var n={nodes:j.apply(null,arguments),links:H.apply(null,arguments)};return r(n),h(n),g(n),v(n),E(n),n}function r(n){n.nodes.forEach(function(n){n.sourceLinks=[],n.targetLinks=[]}),n.links.forEach(function(t){var e=t.source,r=t.target;"number"==typeof e&&(e=t.source=n.nodes[t.source]),"number"==typeof r&&(r=t.target=n.nodes[t.target]),e.sourceLinks.push(t),r.targetLinks.push(t)})}function h(n){n.nodes.forEach(function(n){n.value=Math.max(t.sum(n.sourceLinks,f),t.sum(n.targetLinks,f))})}function g(n){for(var t,e=n.nodes,r=0;e.length;)t=[],e.forEach(function(n){n.x=r,n.dx=q,n.sourceLinks.forEach(function(n){t.indexOf(n.target)<0&&t.push(n.target)})}),e=t,++r;k(n,r),p(n,(m-L-q)/(r-1))}function k(n,t){n.nodes.forEach(function(n){n.sourceLinks.length||(n.x=t-1)})}function p(n,t){n.nodes.forEach(function(n){n.x=L+n.x*t})}function v(n){function r(){o.forEach(function(n){var t,e,r,o=x,u=n.length;for(n.sort(c),r=0;r<u;++r)t=n[r],e=o-t.y,e>0&&(t.y+=e),o=t.y+t.dy+z;if((e=o-z-b)>0)for(o=t.y-=e,r=u-2;r>=0;--r)t=n[r],e=t.y+t.dy+z-o,e>0&&(t.y-=e),o=t.y})}var o=e.nest().key(function(n){return n.x}).sortKeys(t.ascending).entries(n.nodes).map(function(n){return n.values});!function(){var e=t.min(o,function(n){return(b-x-(n.length-1)*z)/t.sum(n,f)});o.forEach(function(n){n.forEach(function(n,t){n.y=t,n.dy=n.value*e})}),n.links.forEach(function(n){n.dy=n.value*e})}(),r();for(var u=1,i=M;i>0;--i)!function(n){o.slice().reverse().forEach(function(e){e.forEach(function(e){e.sourceLinks.length&&(e.y+=(t.sum(e.sourceLinks,d)/t.sum(e.sourceLinks,f)-s(e))*n)})})}(u*=.99),r(),function(n){o.forEach(function(e){e.forEach(function(e){e.targetLinks.length&&(e.y+=(t.sum(e.targetLinks,a)/t.sum(e.targetLinks,f)-s(e))*n)})})}(u),r()}function E(n){n.nodes.forEach(function(n){n.sourceLinks.sort(i),n.targetLinks.sort(u)}),n.nodes.forEach(function(n){var t=0,e=0;n.sourceLinks.forEach(function(n){n.sy=t,t+=n.dy}),n.targetLinks.forEach(function(n){n.ty=e,e+=n.dy})})}var L=0,x=0,m=1,b=1,q=24,z=8,j=y,H=l,M=32;return n.update=function(n){return E(n),n},n.nodeWidth=function(t){return arguments.length?(q=+t,n):q},n.nodePadding=function(t){return arguments.length?(z=+t,n):z},n.nodes=function(t){return arguments.length?(j="function"==typeof t?t:o(t),n):j},n.links=function(t){return arguments.length?(H="function"==typeof t?t:o(t),n):H},n.size=function(t){return arguments.length?(L=x=0,m=+t[0],b=+t[1],n):[m-L,b-x]},n.extent=function(t){return arguments.length?(L=+t[0][0],m=+t[1][0],x=+t[0][1],b=+t[1][1],n):[[L,x],[m,b]]},n.iterations=function(t){return arguments.length?(M=+t,n):M},n},p=function(){return r.linkHorizontal().source(h).target(g)};n.sankey=k,n.sankeyLinkHorizontal=p,Object.defineProperty(n,"__esModule",{value:!0})});/**
 * d3.tip
 * Copyright (c) 2013-2017 Justin Palmer
 *
 * Tooltips for d3.js SVG visualizations
 */
// eslint-disable-next-line no-extra-semi
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module with d3 as a dependency.
    define([
      'd3-collection',
      'd3-selection'
    ], factory)
  } else if (typeof module === 'object' && module.exports) {
    /* eslint-disable global-require */
    // CommonJS
    var d3Collection = require('d3-collection'),
        d3Selection = require('d3-selection')
    module.exports = factory(d3Collection, d3Selection)
    /* eslint-enable global-require */
  } else {
    // Browser global.
    var d3 = root.d3
    // eslint-disable-next-line no-param-reassign
    root.d3.tip = factory(d3, d3)
  }
}(this, function(d3Collection, d3Selection) {
  // Public - contructs a new tooltip
  //
  // Returns a tip
  return function() {
    var direction   = d3TipDirection,
        offset      = d3TipOffset,
        html        = d3TipHTML,
        rootElement = document.body,
        node        = initNode(),
        svg         = null,
        point       = null,
        target      = null

    function tip(vis) {
      svg = getSVGNode(vis)
      if (!svg) return
      point = svg.createSVGPoint()
      rootElement.appendChild(node)
    }

    // Public - show the tooltip on the screen
    //
    // Returns a tip
    tip.show = function() {
      var args = Array.prototype.slice.call(arguments)
      if (args[args.length - 1] instanceof SVGElement) target = args.pop()

      var content = html.apply(this, args),
          poffset = offset.apply(this, args),
          dir     = direction.apply(this, args),
          nodel   = getNodeEl(),
          i       = directions.length,
          coords,
          scrollTop  = document.documentElement.scrollTop ||
            rootElement.scrollTop,
          scrollLeft = document.documentElement.scrollLeft ||
            rootElement.scrollLeft

      nodel.html(content)
        .style('opacity', 1).style('pointer-events', 'all')

      while (i--) nodel.classed(directions[i], false)
      coords = directionCallbacks.get(dir).apply(this)
      nodel.classed(dir, true)
        .style('top', (coords.top + poffset[0]) + scrollTop + 'px')
        .style('left', (coords.left + poffset[1]) + scrollLeft + 'px')

      return tip
    }

    // Public - hide the tooltip
    //
    // Returns a tip
    tip.hide = function() {
      var nodel = getNodeEl()
      nodel.style('opacity', 0).style('pointer-events', 'none')
      return tip
    }

    // Public: Proxy attr calls to the d3 tip container.
    // Sets or gets attribute value.
    //
    // n - name of the attribute
    // v - value of the attribute
    //
    // Returns tip or attribute value
    // eslint-disable-next-line no-unused-vars
    tip.attr = function(n, v) {
      if (arguments.length < 2 && typeof n === 'string') {
        return getNodeEl().attr(n)
      }

      var args =  Array.prototype.slice.call(arguments)
      d3Selection.selection.prototype.attr.apply(getNodeEl(), args)
      return tip
    }

    // Public: Proxy style calls to the d3 tip container.
    // Sets or gets a style value.
    //
    // n - name of the property
    // v - value of the property
    //
    // Returns tip or style property value
    // eslint-disable-next-line no-unused-vars
    tip.style = function(n, v) {
      if (arguments.length < 2 && typeof n === 'string') {
        return getNodeEl().style(n)
      }

      var args = Array.prototype.slice.call(arguments)
      d3Selection.selection.prototype.style.apply(getNodeEl(), args)
      return tip
    }

    // Public: Set or get the direction of the tooltip
    //
    // v - One of n(north), s(south), e(east), or w(west), nw(northwest),
    //     sw(southwest), ne(northeast) or se(southeast)
    //
    // Returns tip or direction
    tip.direction = function(v) {
      if (!arguments.length) return direction
      direction = v == null ? v : functor(v)

      return tip
    }

    // Public: Sets or gets the offset of the tip
    //
    // v - Array of [x, y] offset
    //
    // Returns offset or
    tip.offset = function(v) {
      if (!arguments.length) return offset
      offset = v == null ? v : functor(v)

      return tip
    }

    // Public: sets or gets the html value of the tooltip
    //
    // v - String value of the tip
    //
    // Returns html value or tip
    tip.html = function(v) {
      if (!arguments.length) return html
      html = v == null ? v : functor(v)

      return tip
    }

    // Public: sets or gets the root element anchor of the tooltip
    //
    // v - root element of the tooltip
    //
    // Returns root node of tip
    tip.rootElement = function(v) {
      if (!arguments.length) return rootElement
      rootElement = v == null ? v : functor(v)

      return tip
    }

    // Public: destroys the tooltip and removes it from the DOM
    //
    // Returns a tip
    tip.destroy = function() {
      if (node) {
        getNodeEl().remove()
        node = null
      }
      return tip
    }

    function d3TipDirection() { return 'n' }
    function d3TipOffset() { return [0, 0] }
    function d3TipHTML() { return ' ' }

    var directionCallbacks = d3Collection.map({
          n:  directionNorth,
          s:  directionSouth,
          e:  directionEast,
          w:  directionWest,
          nw: directionNorthWest,
          ne: directionNorthEast,
          sw: directionSouthWest,
          se: directionSouthEast
        }),
        directions = directionCallbacks.keys()

    function directionNorth() {
      var bbox = getScreenBBox()
      return {
        top:  bbox.n.y - node.offsetHeight,
        left: bbox.n.x - node.offsetWidth / 2
      }
    }

    function directionSouth() {
      var bbox = getScreenBBox()
      return {
        top:  bbox.s.y,
        left: bbox.s.x - node.offsetWidth / 2
      }
    }

    function directionEast() {
      var bbox = getScreenBBox()
      return {
        top:  bbox.e.y - node.offsetHeight / 2,
        left: bbox.e.x
      }
    }

    function directionWest() {
      var bbox = getScreenBBox()
      return {
        top:  bbox.w.y - node.offsetHeight / 2,
        left: bbox.w.x - node.offsetWidth
      }
    }

    function directionNorthWest() {
      var bbox = getScreenBBox()
      return {
        top:  bbox.nw.y - node.offsetHeight,
        left: bbox.nw.x - node.offsetWidth
      }
    }

    function directionNorthEast() {
      var bbox = getScreenBBox()
      return {
        top:  bbox.ne.y - node.offsetHeight,
        left: bbox.ne.x
      }
    }

    function directionSouthWest() {
      var bbox = getScreenBBox()
      return {
        top:  bbox.sw.y,
        left: bbox.sw.x - node.offsetWidth
      }
    }

    function directionSouthEast() {
      var bbox = getScreenBBox()
      return {
        top:  bbox.se.y,
        left: bbox.se.x
      }
    }

    function initNode() {
      var div = d3Selection.select(document.createElement('div'))
      div
        .style('position', 'absolute')
        .style('top', 0)
        .style('opacity', 0)
        .style('pointer-events', 'none')
        .style('box-sizing', 'border-box')

      return div.node()
    }

    function getSVGNode(element) {
      var svgNode = element.node()
      if (!svgNode) return null
      if (svgNode.tagName.toLowerCase() === 'svg') return svgNode
      return svgNode.ownerSVGElement
    }

    function getNodeEl() {
      if (node == null) {
        node = initNode()
        // re-add node to DOM
        rootElement.appendChild(node)
      }
      return d3Selection.select(node)
    }

    // Private - gets the screen coordinates of a shape
    //
    // Given a shape on the screen, will return an SVGPoint for the directions
    // n(north), s(south), e(east), w(west), ne(northeast), se(southeast),
    // nw(northwest), sw(southwest).
    //
    //    +-+-+
    //    |   |
    //    +   +
    //    |   |
    //    +-+-+
    //
    // Returns an Object {n, s, e, w, nw, sw, ne, se}
    function getScreenBBox() {
      var targetel   = target || d3Selection.event.target

      while (targetel.getScreenCTM == null && targetel.parentNode == null) {
        targetel = targetel.parentNode
      }

      var bbox       = {},
          matrix     = targetel.getScreenCTM(),
          tbbox      = targetel.getBBox(),
          width      = tbbox.width,
          height     = tbbox.height,
          x          = tbbox.x,
          y          = tbbox.y

      point.x = x
      point.y = y
      bbox.nw = point.matrixTransform(matrix)
      point.x += width
      bbox.ne = point.matrixTransform(matrix)
      point.y += height
      bbox.se = point.matrixTransform(matrix)
      point.x -= width
      bbox.sw = point.matrixTransform(matrix)
      point.y -= height / 2
      bbox.w = point.matrixTransform(matrix)
      point.x += width
      bbox.e = point.matrixTransform(matrix)
      point.x -= width / 2
      point.y -= height / 2
      bbox.n = point.matrixTransform(matrix)
      point.y += height
      bbox.s = point.matrixTransform(matrix)

      return bbox
    }

    // Private - replace D3JS 3.X d3.functor() function
    function functor(v) {
      return typeof v === 'function' ? v : function() {
        return v
      }
    }

    return tip
  }
// eslint-disable-next-line semi
}));
sk.createSankey = function(containerId, configSankey, dataSankey) {

	// to prevent NaN value, related https://github.com/d3/d3-sankey/issues/39
	var _safeValueToLink = function(v) { return Math.max(v, Number.MIN_VALUE); }

    var _dataSankey = {
        nodes: [],
        links: []
    };

    //load data
    dataSankey.nodes.map(function(d) {
        _dataSankey.nodes.push({
            name: d.name,
            color: d.color,
            id: d.id
        });
    });
    dataSankey.links.map(function(l) {
        _dataSankey.links.push({
            source: l.source,
            target: l.target,
            id: l.id,
            value: _safeValueToLink(l.value)
        });
    });

    //var _dataSankey = Object.assign({}, dataSankey);

    var _updateLinksId = function(linkData) {
        for (var i = 0; i < linkData.length; i++)
            if (linkData[i].id == undefined)
                linkData[i].id = linkData[i].source + " -> " + linkData[i].target;
    };
    //update links id
    _updateLinksId(_dataSankey.links);

    //removing old svg and tips
    d3.select('.d3-tip-nodes').remove();
    d3.select('.d3-tip').remove();
    d3.select(containerId + ' svg').remove()

    var container = d3.select(containerId);

    function _getDimensions(container, margin) {
        var bbox = container.node().getBoundingClientRect();
        return {
            width: bbox.width - margin.left - margin.right,
            height: bbox.height - margin.top - margin.bottom
        };
    }
    var dimensions = _getDimensions(container, configSankey.margin);

    var svg_base = container.append("svg")
        .attr('width', dimensions.width + configSankey.margin.left + configSankey.margin.right)
        .attr('height', dimensions.height + configSankey.margin.top + configSankey.margin.bottom)
        .attr("class", "sk-svg");
    var svg = svg_base.append("g")
        .attr('transform', "translate(" + configSankey.margin.left + "," + configSankey.margin.top + ")");

    var sankey = d3.sankey()
        .nodeWidth(15)
        .nodePadding(10)
        .extent([
            [0, 0],
            [dimensions.width, dimensions.height]
        ]);

    var path = d3.sankeyLinkHorizontal();

    //Fonts
    var _getFontSize = function(d) {
        return configSankey.nodes.fontSize;
    }; //For default
    var _dynamicFontSize;
    var _updateRangeFontData = function(d) {}; //For default
    if (configSankey.nodes.dynamicSizeFontNode.enabled) {
        _dynamicFontSize = d3.scaleLinear().range(
            [configSankey.nodes.dynamicSizeFontNode.minSize,
                configSankey.nodes.dynamicSizeFontNode.maxSize
            ]);
        _updateRangeFontData = function(nodeData) {
            _dynamicFontSize.domain(d3.extent(nodeData, function(d) {
                return d.value
            }));
        };
        _getFontSize = function(d) {
            return Math.floor(_dynamicFontSize(d.value));
        };
    }

    //Colors
    //set color in nodes, case not exists
    for (var i = 0; i < _dataSankey.nodes.length; i++)
        if (_dataSankey.nodes[i].color == undefined)
            _dataSankey.nodes[i].color = configSankey.nodes.colors(_dataSankey.nodes[i].name.replace(/ .*/, ""));

    //Tooltip function:
    //D3 sankey diagram with view options (Austin Czarnecki�s Block cc6371af0b726e61b9ab)
    //https://bl.ocks.org/austinczarnecki/cc6371af0b726e61b9ab
    var linkTooltipOffset = 65,
        nodeTooltipOffset = 130;
    var tipLinks = d3.tip().attr("class", "d3-tip").offset([-10, 0]);
    var tipNodes = d3.tip().attr("class", "d3-tip d3-tip-nodes").offset([-10, 0]);

    function _formatValueTooltip(val) {
        if (configSankey.links.formatValue)
            return configSankey.links.formatValue(val);
        else
            return val + ' ' + configSankey.links.unit;
    }

    tipLinks.html(function(d) {
        var title, candidate;
        if (_dataSankey.links.indexOf(d.source.name) > -1) {
            candidate = d.source.name;
            title = d.target.name;
        } else {
            candidate = d.target.name;
            title = d.source.name;
        }
        var html = '<div class="table-wrapper">' +
            '<center><h1>' + title + '</h1></center>' +
            '<table>' +
            '<tr>' +
            '<td class="col-left">' + candidate + '</td>' +
            '<td align="right">' + _formatValueTooltip(d.value) + '</td>' +
            '</tr>' +
            '</table>' +
            '</div>';
        return html;
    });
    var topContentSVG = d3.select('.sk-svg').node().getBoundingClientRect().top;
    tipLinks.move = function(event) {
        tipLinks
            .style("top", function() {
                if (d3.event.pageY - topContentSVG - linkTooltipOffset >= 0)
                    return (d3.event.pageY - linkTooltipOffset) + "px";
                else
                    return d3.event.pageY + 20 + "px";
            })
            .style("left", function() {
                var left = (Math.max(d3.event.pageX - linkTooltipOffset, 10));
                left = Math.min(left, window.innerWidth - d3.select('.d3-tip').node().getBoundingClientRect().width - 20)
                return left + "px";
            })
    };

    tipNodes.html(function(d) {
        var nodeName = d.name;
        var linksFrom = d.targetLinks; //invert for reference
        var linksTo = d.sourceLinks;
        var html;

        html = '<div class="table-wrapper">' +
            '<center><h1>' + nodeName + '</h1></center>' +
            '<table>';
        if (linksFrom.length > 0 & linksTo.length > 0) {
            html += '<tr><td><h2>' + configSankey.tooltip.labelSource + '</h2></td><td></td></tr>'
        }
        for (i = 0; i < linksFrom.length; ++i) {
            html += '<tr>' +
                '<td class="col-left">' + linksFrom[i].source.name + '</td>' +
                '<td align="right">' + _formatValueTooltip(linksFrom[i].value) + '</td>' +
                '</tr>';
        }
        if (linksFrom.length > 0 & linksTo.length > 0) {
            html += '<tr><td></td><td></td><tr><td></td><td></td> </tr><tr><td><h2>' + configSankey.tooltip.labelTarget + '</h2></td><td></td></tr>'
        }
        for (i = 0; i < linksTo.length; ++i) {
            html += '<tr>' +
                '<td class="col-left">' + linksTo[i].target.name + '</td>' +
                '<td align="right">' + _formatValueTooltip(linksTo[i].value) + '</td>' +
                '</tr>';
        }
        html += '</table></div>';
        return html;
    });
    tipNodes.move = function(event) {
        tipNodes.boxInfo = d3.select('.d3-tip-nodes').node().getBoundingClientRect();
        tipNodes
            .style("top",
                function() {
                    if ((d3.event.pageY - topContentSVG - tipNodes.boxInfo.height - 20) >= 0)
                        return (d3.event.pageY - tipNodes.boxInfo.height - 20) + "px";
                    else
                        return d3.event.pageY + 20 + "px";
                }
            )
            .style("left", function() {
                var left = (Math.max(d3.event.pageX - nodeTooltipOffset, 10));
                left = Math.min(left, window.innerWidth - d3.select('.d3-tip').node().getBoundingClientRect().width - 20)
                return left + "px";
            })
    };

    svg.call(tipLinks);
    svg.call(tipNodes);
    var _stopTooltips = function() {
        if (tipLinks) tipLinks.hide();
        if (tipNodes) tipNodes.hide();
    };

    //Load data
    sankey(_dataSankey);

    //update range font data
    _updateRangeFontData(_dataSankey.nodes);


    var link = svg.append("g").selectAll(".sk-link")
        .data(_dataSankey.links, function(d) {
            return d.id;
        })
        .enter().append("path")
        .attr("class", "sk-link")
        .attr("d", path)
        .style("stroke", function(d) {
            return d.source.color;
        })
        .style("stroke-width", function(d) {
            return Math.max(1, d.dy) + "px";
        })
        .sort(function(a, b) {
            return b.dy - a.dy;
        });
    if (configSankey.tooltip.infoDiv)
        link.on('mousemove', tipLinks.move).on('mouseover', tipLinks.show).on('mouseout', tipLinks.hide);
    else
        link.append("title").text(function(d) {
            return d.source.name + " -> " + d.target.name + "\n" + _formatValueTooltip(d.value);
        });

    // the function for moving the nodes
    function _dragmove(d) {
        _stopTooltips();
        d3.select(this).attr("transform", "translate(" + d.x + "," + (d.y = Math.max(0, Math.min(dimensions.height - d.dy, d3.event.y))) + ")");
        sankey.update(_dataSankey);
        link.attr("d", path);
    }

    var node = svg.append("g").selectAll(".sk-node")
        .data(_dataSankey.nodes, function(d) {
            return d.name;
        })
        .enter().append("g")
        .attr("class", "sk-node")
        .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        })
    if (configSankey.tooltip.infoDiv)
        node.on('mousemove', tipNodes.move).on('mouseover', tipNodes.show).on('mouseout', tipNodes.hide);
    else
        node.append("title").text(function(d) {
            return d.name + "\n" + _formatValueTooltip(d.value);
        });
    //Drag nodes	
    if (configSankey.nodes.canDragNodes)
        node.call(d3.drag().subject(function(d) {
            return d;
        }).on("start", function() {
            d3.event.sourceEvent.stopPropagation();
            this.parentNode.appendChild(this);
        }).on("drag", _dragmove));

    node.append("rect")
        .attr("height", function(d) {
            return d.dy;
        })
        .attr("width", sankey.nodeWidth())
        .style("fill", function(d) {
            return d.color;
        })
        .style("stroke", function(d) {
            return d3.rgb(d.color).darker(1.8);
        });

    node.append("text")
        .attr("x", -6)
        .attr("y", function(d) {
            return d.dy / 2;
        })
        .attr("dy", ".35em")
        .attr("text-anchor", "end")
        .attr("transform", null)
        .style("fill", function(d) {
            return d3.rgb(d.color).darker(2.4);
        })
        .text(function(d) {
            return d.name;
        })
        .style("font-size", function(d) {
            return _getFontSize(d) + "px";
        })
        .filter(function(d) {
            return d.x < dimensions.width / 2;
        })
        .attr("x", 6 + sankey.nodeWidth())
        .attr("text-anchor", "start");

    //https://bl.ocks.org/syntagmatic/77c7f7e8802e8824eed473dd065c450b
    var _updateLinksValues = function(dataUpdated) {
        _stopTooltips();
        sankey(dataUpdated);
        sankey.update(dataUpdated);

        //update range font data
        _updateRangeFontData(dataUpdated.nodes);

        svg.selectAll(".sk-link")
            .data(dataUpdated.links, function(d) {
                return d.id;
            })
            .sort(function(a, b) {
                return b.dy - a.dy;
            })
            .transition()
            .duration(1300)
            .attr("d", path)
            .style("stroke-width", function(d) {
                return Math.max(1, d.dy) + "px";
            });

        svg.selectAll(".sk-node")
            .data(dataUpdated.nodes, function(d) {
                return d.name;
            })
            .transition()
            .duration(1300)
            .attr("transform", function(d) {
                return "translate(" + d.x + "," + d.y + ")";
            });

        svg.selectAll(".sk-node rect")
            .transition()
            .duration(1300)
            .attr("height", function(d) {
                return d.dy;
            });

        svg.selectAll(".sk-node text")
            .transition()
            .duration(1300)
            .attr("y", function(d) {
                return d.dy / 2;
            })
            .style("font-size", function(d) {
                return _getFontSize(d) + "px";
            });
    };

	//Update value of links, for call the function '_updateLinksValues' transition values (old to new)
	//This function only update values from links
    this.updateData = function(dataUpdated) {
        for (var i = 0; i < dataUpdated.links.length; i++) {
            var idLinkUpdate = dataUpdated.links[i].id || dataUpdated.links[i].source + " -> " + dataUpdated.links[i].target;
            var linkToUpdate = _dataSankey.links.filter(function(l) {
                return l.id == idLinkUpdate
            })[0];
            if (linkToUpdate) linkToUpdate.value = _safeValueToLink(dataUpdated.links[i].value);
        }
        _updateLinksValues(_dataSankey);
    };

    return this;
};
sk.version = "0.1.0";
})();
//# sourceMappingURL=sk.d3.js.map