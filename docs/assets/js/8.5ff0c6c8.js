(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{303:function(e,t,s){e.exports=s.p+"assets/img/tool_example_2.71143e3b.jpg"},304:function(e,t,s){e.exports=s.p+"assets/img/grasshopper_tree.f9e0400a.jpg"},305:function(e,t,s){e.exports=s.p+"assets/img/tool_example_4.8e4d95ef.jpg"},408:function(e,t,s){"use strict";s.r(t);var o=s(42),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"network-tools"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#network-tools"}},[e._v("#")]),e._v(" Network Tools")]),e._v(" "),o("p",[e._v("The list below includes all of the Network Tools. Please follow the temple to document each tool.")]),e._v(" "),o("h2",{attrs:{id:"distance-to-green-space"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#distance-to-green-space"}},[e._v("#")]),e._v(" Distance to Green Space")]),e._v(" "),o("p",[o("img",{attrs:{src:s(303),alt:"description"}})]),e._v(" "),o("h3",{attrs:{id:"description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),o("p",[e._v("This is a basic description of the tool that is simple enough that for anyone to understand what the tool does and why someone would use it. Keep it to 3 sentences or less.")]),e._v(" "),o("h3",{attrs:{id:"how-to-use"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[e._v("#")]),e._v(" How To Use")]),e._v(" "),o("p",[o("b",[e._v("Step by Step Instructions:")])]),e._v(" "),o("ol",[o("li",[e._v("Link to epw file")]),e._v(" "),o("li",[e._v("Link to epw file`")]),e._v(" "),o("li",[e._v('Right click on "Context" -> Select Multiple and select building obstructions.')]),e._v(" "),o("li",[e._v('Right click on "Ground" -> Select Multiple and select ground.')]),e._v(" "),o("li",[e._v('Right click on "Ground" -> Select Multiple and select the massing(s) you want to test.')]),e._v(" "),o("li",[e._v("Adjust Threshold X,Y,Z")]),e._v(" "),o("li",[e._v("Review visual and metric outputs. Does it look correct? Does something look wrong? Common issues below.")])]),e._v(" "),o("p",[o("img",{attrs:{src:s(304),alt:"description"}})]),e._v(" "),o("h3",{attrs:{id:"troubleshooting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),o("p",[e._v("Make sure to properly load the context as it is crucial for to test visibility quality")]),e._v(" "),o("p",[e._v("If you don't already have the Visibility Quality Tool, please add to your library for easy usage.")]),e._v(" "),o("h3",{attrs:{id:"required-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#required-files"}},[e._v("#")]),e._v(" Required Files")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/files/Analysis%20Tool%20Example.3dm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rhino File"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/files/Analysis%20Tool%20Example.gh",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grasshopper File"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("img",{attrs:{src:s(305),alt:"description"}})]),e._v(" "),o("br"),e._v(" "),o("h3",{attrs:{id:"modeling-standards"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#modeling-standards"}},[e._v("#")]),e._v(" Modeling Standards")]),e._v(" "),o("p",[o("b",[e._v("Please follow the following Rhino standards to ensure the proper functionality of the tool: ")])]),e._v(" "),o("p",[o("input",{attrs:{type:"checkbox"}}),e._v(" "),o("b",[e._v("My test massing is a single, simplified, CLOSED polysurface.")])]),e._v(" "),o("li",[e._v('Try "SelClosedSrf" to make sure it is closed.')]),e._v(" "),o("p",[o("input",{attrs:{type:"checkbox"}}),e._v(" "),o("b",[e._v("My model is oriented to True North.")])]),e._v(" "),o("li",[e._v("Re-orient if it was rotated off of North at the start of the project.")]),e._v(" "),o("p",[o("input",{attrs:{type:"checkbox"}}),e._v(" "),o("b",[e._v("Any groups or blocks in the model have been ungrouped/exploded.")])]),e._v(" "),o("li",[e._v('Try "SelBlockInstance" and "SelGroup" to make sure.')]),e._v(" "),o("p",[o("input",{attrs:{type:"checkbox"}}),e._v(" "),o("b",[e._v("My model is set to either Meters or Feet (not mm or in).")])]),e._v(" "),o("p",[o("input",{attrs:{type:"checkbox"}}),e._v(" "),o("b",[e._v("My model is free of overlapping, coplanar, or intersecting geometry.")])]),e._v(" "),o("p",[o("input",{attrs:{type:"checkbox"}}),e._v(" "),o("b",[e._v("Any obstructions around the space have been modeled (trees, topography, buildings).")])]),e._v(" "),o("p",[o("input",{attrs:{type:"checkbox"}}),e._v(" "),o("b",[e._v("Any curved surfaces in the model have been simplified to individual flat planes.")])]),e._v(" "),o("p",[o("input",{attrs:{type:"checkbox"}}),e._v(" "),o("b",[e._v("Any surrounding context has been made into a single, joined mesh.")])]),e._v(" "),o("h3",{attrs:{id:"sources-calculations-metrics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sources-calculations-metrics"}},[e._v("#")]),e._v(" Sources, Calculations + Metrics")]),e._v(" "),o("p",[e._v("This tool uses this method of calculating X from this source. The metric is derived in this manner.")]),e._v(" "),o("h3",{attrs:{id:"limitations-context"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#limitations-context"}},[e._v("#")]),e._v(" Limitations & Context")]),e._v(" "),o("p",[e._v("This tool does X it does not do Z and Y.")]),e._v(" "),o("h3",{attrs:{id:"examples"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),o("p",[e._v("Here is how we used this tool on a project!")]),e._v(" "),o("p",[e._v("Some more text here perhaps.")]),e._v(" "),o("p",[o("b",[e._v(" More project examples here: ")])]),e._v(" "),o("h2",{attrs:{id:"public-space-allocation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#public-space-allocation"}},[e._v("#")]),e._v(" Public Space Allocation")]),e._v(" "),o("p",[o("img",{attrs:{src:s(303),alt:"description"}})]),e._v(" "),o("h3",{attrs:{id:"description-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[e._v("#")]),e._v(" Description")]),e._v(" "),o("p",[e._v("This is a basic description of the tool that is simple enough that for anyone to understand what the tool does and why someone would use it. Keep it to 3 sentences or less.")]),e._v(" "),o("h3",{attrs:{id:"how-to-use-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-2"}},[e._v("#")]),e._v(" How To Use")]),e._v(" "),o("p",[o("b",[e._v("Step by Step Instructions:")])]),e._v(" "),o("ol",[o("li",[e._v("Link to epw file")]),e._v(" "),o("li",[e._v("Link to epw file`")]),e._v(" "),o("li",[e._v('Right click on "Context" -> Select Multiple and select building obstructions.')]),e._v(" "),o("li",[e._v('Right click on "Ground" -> Select Multiple and select ground.')]),e._v(" "),o("li",[e._v('Right click on "Ground" -> Select Multiple and select the massing(s) you want to test.')]),e._v(" "),o("li",[e._v("Adjust Threshold X,Y,Z")]),e._v(" "),o("li",[e._v("Review visual and metric outputs. Does it look correct? Does something look wrong? Common issues below.")])]),e._v(" "),o("p",[o("img",{attrs:{src:s(304),alt:"description"}})]),e._v(" "),o("h3",{attrs:{id:"troubleshooting-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-2"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),o("p",[e._v("Make sure to properly load the context as it is crucial for to test visibility quality")]),e._v(" "),o("p",[e._v("If you don't already have the Visibility Quality Tool, please add to your library for easy usage.")]),e._v(" "),o("h3",{attrs:{id:"required-files-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#required-files-2"}},[e._v("#")]),e._v(" Required Files")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/files/Analysis%20Tool%20Example.3dm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rhino File"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/XIM-GSAPP/XIM-GSAPP-Fa20/raw/main/src/files/Analysis%20Tool%20Example.gh",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grasshopper File"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("img",{attrs:{src:s(305),alt:"description"}})]),e._v(" "),o("br"),e._v(" "),o("h3",{attrs:{id:"modeling-standards-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#modeling-standards-2"}},[e._v("#")]),e._v(" Modeling Standards")]),e._v(" "),o("p",[o("b",[e._v("Please follow the following Rhino standards to ensure the proper functionality of the tool: ")])]),e._v(" "),o("p",[o("input",{attrs:{type:"checkbox"}}),e._v(" "),o("b",[e._v("My test massing is a single, simplified, CLOSED polysurface.")])]),e._v(" "),o("li",[e._v('Try "SelClosedSrf" to make sure it is closed.')]),e._v(" "),o("p",[o("input",{attrs:{type:"checkbox"}}),e._v(" "),o("b",[e._v("My model is oriented to True North.")])]),e._v(" "),o("li",[e._v("Re-orient if it was rotated off of North at the start of the project.")]),e._v(" "),o("p",[o("input",{attrs:{type:"checkbox"}}),e._v(" "),o("b",[e._v("Any groups or blocks in the model have been ungrouped/exploded.")])]),e._v(" "),o("li",[e._v('Try "SelBlockInstance" and "SelGroup" to make sure.')]),e._v(" "),o("p",[o("input",{attrs:{type:"checkbox"}}),e._v(" "),o("b",[e._v("My model is set to either Meters or Feet (not mm or in).")]),o("br")]),e._v(" "),o("p",[o("input",{attrs:{type:"checkbox"}}),e._v(" "),o("b",[e._v("My model is free of overlapping, coplanar, or intersecting geometry.")]),o("br")]),e._v(" "),o("p",[o("input",{attrs:{type:"checkbox"}}),e._v(" "),o("b",[e._v("Any obstructions around the space have been modeled (trees, topography, buildings).")]),o("br")]),e._v(" "),o("p",[o("input",{attrs:{type:"checkbox"}}),e._v(" "),o("b",[e._v("Any curved surfaces in the model have been simplified to individual flat planes.")]),o("br")]),e._v(" "),o("p",[o("input",{attrs:{type:"checkbox"}}),e._v(" "),o("b",[e._v("Any surrounding context has been made into a single, joined mesh.")])]),e._v(" "),o("h3",{attrs:{id:"sources-calculations-metrics-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sources-calculations-metrics-2"}},[e._v("#")]),e._v(" Sources, Calculations + Metrics")]),e._v(" "),o("p",[e._v("This tool uses this method of calculating X from this source. The metric is derived in this manner.")]),e._v(" "),o("h3",{attrs:{id:"limitations-context-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#limitations-context-2"}},[e._v("#")]),e._v(" Limitations & Context")]),e._v(" "),o("p",[e._v("This tool does X it does not do Z and Y.")]),e._v(" "),o("h3",{attrs:{id:"examples-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),o("p",[e._v("Here is how we used this tool on a project!")]),e._v(" "),o("p",[e._v("Some more text here perhaps.")]),e._v(" "),o("p",[o("b",[e._v(" More project examples here: ")])])])}),[],!1,null,null,null);t.default=i.exports}}]);