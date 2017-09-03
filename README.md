# skd3
Sankey Diagram made easy. A javascript library that extends the popular D3.js/d3-sankey to enable fast and beautiful.

[![Build Status](https://travis-ci.org/FabricioRHS/skd3.svg?branch=master)](https://travis-ci.org/fabriciorhs/skd3)
[![Dependencies Status](https://david-dm.org/fabriciorhs/skd3.svg)](https://david-dm.org/fabriciorhs/skd3)

<sup>Inspired by the work of Mike Bostock's [`d3-sankey`](http://github.com/d3/d3-sankey)</sup>

>As a proposal to simplify the generation of the sankey chart

Sankey diagrams visualize the directed flow between nodes in an acyclic network. For example, this diagram shows a possible scenario of UK energy production and consumption in 2050:

<img alt="Sankey diagram" src="https://raw.githubusercontent.com/fabriciorhs/skd3/master/img/energy.png" width="960">

Source: Department of Energy & Climate Change, from: [`Mike Bostock - json sample`](https://bl.ocks.org/mbostock/ca9a0bb7ba204d12974bca90acc507c0).

## Dependencies

SKD3 requires [d3.js](http://d3js.org/) version **[4.9.0](https://github.com/d3/d3/releases/tag/v4.9.0)** and later.

## Installing

If you use NPM, `npm install skd3`. Otherwise, download the [latest release](https://github.com/fabriciorhs/skd3/releases/latest). You can also load directly from [rawgit.com](https://cdn.rawgit.com/):

```html
<script src="https://cdn.rawgit.com/fabriciorhs/skd3/master/build/sk.d3.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/fabriciorhs/skd3/master/build/sk.d3.min.css"  />
<style>
	#sankeyChart {
		height: 500px;
		width: 960px;
	}
</style>

<div id="sankeyChart"/>
```

## Usage

```js
var objSankey = sk.createSankey('#sankeyChart', configSankey, datajson);
```

Example of config:

```js
var configSankey = {
	margin: { top: 10, left: 10, right: 10, bottom: 10 },
	nodes: {
		dynamicSizeFontNode: {
			enabled: true,
			minSize: 14,
			maxSize: 30
		},
		canDragNodes: true,
		colors: d3.scaleOrdinal(d3.schemeCategory10)
	},
	links: {
		formatValue: function(val) {
			return d3.format(",.0f")(val) + ' TWh';
		}
	},
	tooltip: {
		infoDiv: true,
		labelSource: 'Input:',
		labelTarget: 'Output:'
	}
}
```

Example data json:

```js
var datajson = {nodes: [
  {id: 0, name: "Alice", color: "green"},
  {id: 1, name: "Bob", color: "yellow"},
  {id: 2, name: "Carol", color: "blue"}
],
links: [
  {source: 0, target: 1, value: 1},
  {source: 1, target: 2, value: 1}
]};
```

## Update links values using d3`s transitions:

```js
objSankey.updateData(new_dataJson);
```

Result:

<img alt="Sankey transitions" src="https://raw.githubusercontent.com/fabriciorhs/skd3/master/img/sankey_transitions.gif" width="400">


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/fabriciorhs/skd3/issues/new)

## Author

**Fabricio Rodrigues**

+ [github/fabriciorhs](https://github.com/fabriciorhs)
+ [twitter/fabriciorhs](http://twitter.com/fabriciorhs)

## License

Copyright © 2017 [Fabricio Rodrigues](https://github.com/fabriciorhs)
Released under the MIT license.

***
