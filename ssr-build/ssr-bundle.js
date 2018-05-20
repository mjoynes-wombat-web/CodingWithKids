module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "4OB8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__("cz0o");

function isObjectObject(o) {
  return isObject(o) === true && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor, prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};

/***/ }),

/***/ "51Op":
/***/ (function(module, exports) {

module.exports = { prefix: 'fal', iconName: 'compress', icon: [448, 512, [], "f066", "M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v116h116c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v116H12c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h116v116c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12zm160 0V352h116c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12z"] };

/***/ }),

/***/ "97RM":
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "AX2D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return Children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClass", function() { return createClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return createFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return isValidElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return findDOMNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return unmountComponentAtNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return PureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_renderSubtreeIntoContainer", function() { return renderSubtreeIntoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return extend; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a; });



var version = '15.1.0'; // trick libraries to think we are react

var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

var REACT_ELEMENT_TYPE = typeof Symbol !== 'undefined' && Symbol.for && Symbol.for('react.element') || 0xeac7;

var COMPONENT_WRAPPER_KEY = typeof Symbol !== 'undefined' && Symbol.for ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

// don't autobind these methods since they already have guaranteed context.
var AUTOBIND_BLACKLIST = {
	constructor: 1,
	render: 1,
	shouldComponentUpdate: 1,
	componentWillReceiveProps: 1,
	componentWillUpdate: 1,
	componentDidUpdate: 1,
	componentWillMount: 1,
	componentDidMount: 1,
	componentWillUnmount: 1,
	componentDidUnmount: 1
};

var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;

var BYPASS_HOOK = {};

/*global process*/
var DEV = typeof process === 'undefined' || !process.env || "production" !== 'production';

// a component that renders nothing. Used to replace components for unmountComponentAtNode.
function EmptyComponent() {
	return null;
}

// make react think we're react.
var VNode = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])('a', null).constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
VNode.prototype.preactCompatUpgraded = false;
VNode.prototype.preactCompatNormalized = false;

Object.defineProperty(VNode.prototype, 'type', {
	get: function get() {
		return this.nodeName;
	},
	set: function set(v) {
		this.nodeName = v;
	},
	configurable: true
});

Object.defineProperty(VNode.prototype, 'props', {
	get: function get() {
		return this.attributes;
	},
	set: function set(v) {
		this.attributes = v;
	},
	configurable: true
});

var oldEventHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].event;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].event = function (e) {
	if (oldEventHook) {
		e = oldEventHook(e);
	}
	e.persist = Object;
	e.nativeEvent = e;
	return e;
};

var oldVnodeHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode = function (vnode) {
	if (!vnode.preactCompatUpgraded) {
		vnode.preactCompatUpgraded = true;

		var tag = vnode.nodeName,
		    attrs = vnode.attributes = extend({}, vnode.attributes);

		if (typeof tag === 'function') {
			if (tag[COMPONENT_WRAPPER_KEY] === true || tag.prototype && 'isReactComponent' in tag.prototype) {
				if (vnode.children && String(vnode.children) === '') {
					vnode.children = undefined;
				}
				if (vnode.children) {
					attrs.children = vnode.children;
				}

				if (!vnode.preactCompatNormalized) {
					normalizeVNode(vnode);
				}
				handleComponentVNode(vnode);
			}
		} else {
			if (vnode.children && String(vnode.children) === '') {
				vnode.children = undefined;
			}
			if (vnode.children) {
				attrs.children = vnode.children;
			}

			if (attrs.defaultValue) {
				if (!attrs.value && attrs.value !== 0) {
					attrs.value = attrs.defaultValue;
				}
				delete attrs.defaultValue;
			}

			handleElementVNode(vnode, attrs);
		}
	}

	if (oldVnodeHook) {
		oldVnodeHook(vnode);
	}
};

function handleComponentVNode(vnode) {
	var tag = vnode.nodeName,
	    a = vnode.attributes;

	vnode.attributes = {};
	if (tag.defaultProps) {
		extend(vnode.attributes, tag.defaultProps);
	}
	if (a) {
		extend(vnode.attributes, a);
	}
}

function handleElementVNode(vnode, a) {
	var shouldSanitize, attrs, i;
	if (a) {
		for (i in a) {
			if (shouldSanitize = CAMEL_PROPS.test(i)) {
				break;
			}
		}
		if (shouldSanitize) {
			attrs = vnode.attributes = {};
			for (i in a) {
				if (a.hasOwnProperty(i)) {
					attrs[CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i] = a[i];
				}
			}
		}
	}
}

// proxy render() since React returns a Component reference.
function render$1(vnode, parent, callback) {
	var prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;

	// ignore impossible previous renders
	if (prev && prev.parentNode !== parent) {
		prev = null;
	}

	// default to first Element child
	if (!prev && parent) {
		prev = parent.firstElementChild;
	}

	// remove unaffected siblings
	for (var i = parent.childNodes.length; i--;) {
		if (parent.childNodes[i] !== prev) {
			parent.removeChild(parent.childNodes[i]);
		}
	}

	var out = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(vnode, parent, prev);
	if (parent) {
		parent._preactCompatRendered = out && (out._component || { base: out });
	}
	if (typeof callback === 'function') {
		callback();
	}
	return out && out._component || out;
}

var ContextProvider = function ContextProvider() {};

ContextProvider.prototype.getChildContext = function () {
	return this.props.context;
};
ContextProvider.prototype.render = function (props) {
	return props.children[0];
};

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	var wrap = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(ContextProvider, { context: parentComponent.context }, vnode);
	var renderContainer = render$1(wrap, container);
	var component = renderContainer._component || renderContainer.base;
	if (callback) {
		callback.call(component, renderContainer);
	}
	return component;
}

function unmountComponentAtNode(container) {
	var existing = container._preactCompatRendered && container._preactCompatRendered.base;
	if (existing && existing.parentNode === container) {
		Object(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(EmptyComponent), container, existing);
		return true;
	}
	return false;
}

var ARR = [];

// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
	map: function map(children, fn, ctx) {
		if (children == null) {
			return null;
		}
		children = Children.toArray(children);
		if (ctx && ctx !== children) {
			fn = fn.bind(ctx);
		}
		return children.map(fn);
	},
	forEach: function forEach(children, fn, ctx) {
		if (children == null) {
			return null;
		}
		children = Children.toArray(children);
		if (ctx && ctx !== children) {
			fn = fn.bind(ctx);
		}
		children.forEach(fn);
	},
	count: function count(children) {
		return children && children.length || 0;
	},
	only: function only(children) {
		children = Children.toArray(children);
		if (children.length !== 1) {
			throw new Error('Children.only() expects only one child.');
		}
		return children[0];
	},
	toArray: function toArray(children) {
		if (children == null) {
			return [];
		}
		return ARR.concat(children);
	}
};

/** Track current render() component for ref assignment */
var currentComponent;

function createFactory(type) {
	return createElement.bind(null, type);
}

var DOM = {};
for (var i = ELEMENTS.length; i--;) {
	DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
}

function upgradeToVNodes(arr, offset) {
	for (var i = offset || 0; i < arr.length; i++) {
		var obj = arr[i];
		if (Array.isArray(obj)) {
			upgradeToVNodes(obj);
		} else if (obj && typeof obj === 'object' && !isValidElement(obj) && (obj.props && obj.type || obj.attributes && obj.nodeName || obj.children)) {
			arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
		}
	}
}

function isStatelessComponent(c) {
	return typeof c === 'function' && !(c.prototype && c.prototype.render);
}

// wraps stateless functional components in a PropTypes validator
function wrapStatelessComponent(WrappedComponent) {
	return createClass({
		displayName: WrappedComponent.displayName || WrappedComponent.name,
		render: function render() {
			return WrappedComponent(this.props, this.context);
		}
	});
}

function statelessComponentHook(Ctor) {
	var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	if (Wrapped) {
		return Wrapped === true ? Ctor : Wrapped;
	}

	Wrapped = wrapStatelessComponent(Ctor);

	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable: true, value: true });
	Wrapped.displayName = Ctor.displayName;
	Wrapped.propTypes = Ctor.propTypes;
	Wrapped.defaultProps = Ctor.defaultProps;

	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable: true, value: Wrapped });

	return Wrapped;
}

function createElement() {
	var args = [],
	    len = arguments.length;
	while (len--) {
		args[len] = arguments[len];
	}upgradeToVNodes(args, 2);
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["h"].apply(void 0, args));
}

function normalizeVNode(vnode) {
	vnode.preactCompatNormalized = true;

	applyClassName(vnode);

	if (isStatelessComponent(vnode.nodeName)) {
		vnode.nodeName = statelessComponentHook(vnode.nodeName);
	}

	var ref = vnode.attributes.ref,
	    type = ref && typeof ref;
	if (currentComponent && (type === 'string' || type === 'number')) {
		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	}

	applyEventNormalization(vnode);

	return vnode;
}

function cloneElement$1(element, props) {
	var children = [],
	    len = arguments.length - 2;
	while (len-- > 0) {
		children[len] = arguments[len + 2];
	}if (!isValidElement(element)) {
		return element;
	}
	var elementProps = element.attributes || element.props;
	var node = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(element.nodeName || element.type, extend({}, elementProps), element.children || elementProps && elementProps.children);
	// Only provide the 3rd argument if needed.
	// Arguments 3+ overwrite element.children in preactCloneElement
	var cloneArgs = [node, props];
	if (children && children.length) {
		cloneArgs.push(children);
	} else if (props && props.children) {
		cloneArgs.push(props.children);
	}
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["cloneElement"].apply(void 0, cloneArgs));
}

function isValidElement(element) {
	return element && (element instanceof VNode || element.$$typeof === REACT_ELEMENT_TYPE);
}

function createStringRefProxy(name, component) {
	return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
		if (component && component.refs) {
			component.refs[name] = resolved;
			if (resolved === null) {
				delete component._refProxies[name];
				component = null;
			}
		}
	});
}

function applyEventNormalization(ref) {
	var nodeName = ref.nodeName;
	var attributes = ref.attributes;

	if (!attributes || typeof nodeName !== 'string') {
		return;
	}
	var props = {};
	for (var i in attributes) {
		props[i.toLowerCase()] = i;
	}
	if (props.ondoubleclick) {
		attributes.ondblclick = attributes[props.ondoubleclick];
		delete attributes[props.ondoubleclick];
	}
	// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
	if (props.onchange && (nodeName === 'textarea' || nodeName.toLowerCase() === 'input' && !/^fil|che|rad/i.test(attributes.type))) {
		var normalized = props.oninput || 'oninput';
		if (!attributes[normalized]) {
			attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
			delete attributes[props.onchange];
		}
	}
}

function applyClassName(vnode) {
	var a = vnode.attributes || (vnode.attributes = {});
	classNameDescriptor.enumerable = 'className' in a;
	if (a.className) {
		a.class = a.className;
	}
	Object.defineProperty(a, 'className', classNameDescriptor);
}

var classNameDescriptor = {
	configurable: true,
	get: function get() {
		return this.class;
	},
	set: function set(v) {
		this.class = v;
	}
};

function extend(base, props) {
	var arguments$1 = arguments;

	for (var i = 1, obj = void 0; i < arguments.length; i++) {
		if (obj = arguments$1[i]) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					base[key] = obj[key];
				}
			}
		}
	}
	return base;
}

function shallowDiffers(a, b) {
	for (var i in a) {
		if (!(i in b)) {
			return true;
		}
	}
	for (var i$1 in b) {
		if (a[i$1] !== b[i$1]) {
			return true;
		}
	}
	return false;
}

function findDOMNode(component) {
	return component && component.base || component;
}

function F() {}

function createClass(obj) {
	function cl(props, context) {
		bindAll(this);
		Component$1.call(this, props, context, BYPASS_HOOK);
		newComponentHook.call(this, props, context);
	}

	obj = extend({ constructor: cl }, obj);

	// We need to apply mixins here so that getDefaultProps is correctly mixed
	if (obj.mixins) {
		applyMixins(obj, collateMixins(obj.mixins));
	}
	if (obj.statics) {
		extend(cl, obj.statics);
	}
	if (obj.propTypes) {
		cl.propTypes = obj.propTypes;
	}
	if (obj.defaultProps) {
		cl.defaultProps = obj.defaultProps;
	}
	if (obj.getDefaultProps) {
		cl.defaultProps = obj.getDefaultProps.call(cl);
	}

	F.prototype = Component$1.prototype;
	cl.prototype = extend(new F(), obj);

	cl.displayName = obj.displayName || 'Component';

	return cl;
}

// Flatten an Array of mixins to a map of method name to mixin implementations
function collateMixins(mixins) {
	var keyed = {};
	for (var i = 0; i < mixins.length; i++) {
		var mixin = mixins[i];
		for (var key in mixin) {
			if (mixin.hasOwnProperty(key) && typeof mixin[key] === 'function') {
				(keyed[key] || (keyed[key] = [])).push(mixin[key]);
			}
		}
	}
	return keyed;
}

// apply a mapping of Arrays of mixin methods to a component prototype
function applyMixins(proto, mixins) {
	for (var key in mixins) {
		if (mixins.hasOwnProperty(key)) {
			proto[key] = multihook(mixins[key].concat(proto[key] || ARR), key === 'getDefaultProps' || key === 'getInitialState' || key === 'getChildContext');
		}
	}
}

function bindAll(ctx) {
	for (var i in ctx) {
		var v = ctx[i];
		if (typeof v === 'function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
			(ctx[i] = v.bind(ctx)).__bound = true;
		}
	}
}

function callMethod(ctx, m, args) {
	if (typeof m === 'string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m === 'function') {
		return m.apply(ctx, args);
	}
}

function multihook(hooks, skipDuplicates) {
	return function () {
		var arguments$1 = arguments;
		var this$1 = this;

		var ret;
		for (var i = 0; i < hooks.length; i++) {
			var r = callMethod(this$1, hooks[i], arguments$1);

			if (skipDuplicates && r != null) {
				if (!ret) {
					ret = {};
				}
				for (var key in r) {
					if (r.hasOwnProperty(key)) {
						ret[key] = r[key];
					}
				}
			} else if (typeof r !== 'undefined') {
				ret = r;
			}
		}
		return ret;
	};
}

function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}

function propsHook(props, context) {
	if (!props) {
		return;
	}

	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	var c = props.children;
	if (c && Array.isArray(c) && c.length === 1 && (typeof c[0] === 'string' || typeof c[0] === 'function' || c[0] instanceof VNode)) {
		props.children = c[0];

		// but its totally still going to be an Array.
		if (props.children && typeof props.children === 'object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	// add proptype checking
	if (DEV) {
		var ctor = typeof this === 'function' ? this : this.constructor,
		    propTypes = this.propTypes || ctor.propTypes;
		var displayName = this.displayName || ctor.name;

		if (propTypes) {
			__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.checkPropTypes(propTypes, props, 'prop', displayName);
		}
	}
}

function beforeRender(props) {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent === this) {
		currentComponent = null;
	}
}

function Component$1(props, context, opts) {
	__WEBPACK_IMPORTED_MODULE_1_preact__["Component"].call(this, props, context);
	this.state = this.getInitialState ? this.getInitialState() : {};
	this.refs = {};
	this._refProxies = {};
	if (opts !== BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
extend(Component$1.prototype = new __WEBPACK_IMPORTED_MODULE_1_preact__["Component"](), {
	constructor: Component$1,

	isReactComponent: {},

	replaceState: function replaceState(state, callback) {
		var this$1 = this;

		this.setState(state, callback);
		for (var i in this$1.state) {
			if (!(i in state)) {
				delete this$1.state[i];
			}
		}
	},

	getDOMNode: function getDOMNode() {
		return this.base;
	},

	isMounted: function isMounted() {
		return !!this.base;
	}
});

function PureComponent(props, context) {
	Component$1.call(this, props, context);
}
F.prototype = Component$1.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function (props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};

var index = {
	version: version,
	DOM: DOM,
	PropTypes: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a,
	Children: Children,
	render: render$1,
	createClass: createClass,
	createFactory: createFactory,
	createElement: createElement,
	cloneElement: cloneElement$1,
	isValidElement: isValidElement,
	findDOMNode: findDOMNode,
	unmountComponentAtNode: unmountComponentAtNode,
	Component: Component$1,
	PureComponent: PureComponent,
	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer,
	__spread: extend
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=preact-compat.es.js.map

/***/ }),

/***/ "EBst":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) {
      W.push(arguments[l]);
    }n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) {
      if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) {
        W.push(r[l]);
      } else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;
    }var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) {
      e.__d && k(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === t[r] && (t[r] = o[r]);
    }return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) {
      S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        c[f[d].name] = f[d].value;
      }
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], _, r)) {
          c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
        }
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) {
      void 0 !== d[C] && b(d[C], !1);
    }while (v <= g) {
      void 0 !== (c = f[g--]) && b(c, !1);
    }
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
    }
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) {
      if (r[i].constructor === e) {
        o.__b = r[i].__b, r.splice(i, 1);break;
      }
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) {
            (P = V).base = T;
          }T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) {
      _ = r.constructor === t.nodeName;
    }return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : self.preact = $;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "IM/B":
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
	 true ? module['exports'] = factory() : typeof define === 'function' && define['amd'] ? define(factory()) : window['stylisRuleSheet'] = factory();
})(function () {

	'use strict';

	return function (insertRule) {
		var delimiter = '/*|*/';
		var needle = delimiter + '}';

		function toSheet(block) {
			if (block) try {
				insertRule(block + '}');
			} catch (e) {}
		}

		return function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64) return insertRule(content + ';'), '';
					break;
				// selector
				case 2:
					if (ns === 0) return content + delimiter;
					break;
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0] + content), '';
						default:
							return content + (at === 0 ? delimiter : '');
					}
				case -2:
					content.split(needle).forEach(toSheet);
			}
		};
	};
});

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("EBst");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ./node_modules/preact-compat/dist/preact-compat.es.js
var preact_compat_es = __webpack_require__("AX2D");

// CONCATENATED MODULE: ./node_modules/@fortawesome/fontawesome/index.es.js
/*!
 * Font Awesome Free 5.0.13 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER$1 = null;
var _PERFORMANCE = { mark: noop, measure: noop };

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER$1 = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var index_es__ref = _WINDOW.navigator || {};
var _ref$userAgent = index_es__ref.userAgent;
var userAgent = _ref$userAgent === undefined ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER$1;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';

var PRODUCTION = function () {
  try {
    return "production" === 'production';
  } catch (e) {
    return false;
  }
}();

var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];

var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter'].concat(oneToTen.map(function (n) {
  return n + 'x';
})).concat(oneToTwenty.map(function (n) {
  return 'w-' + n;
}));

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var toConsumableArray = function toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
};

var initial = WINDOW.FontAwesomeConfig || {};
var initialKeys = Object.keys(initial);

var _default = _extends({
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
}, initial);

if (!_default.autoReplaceSvg) _default.observeMutations = false;

var config$1 = _extends({}, _default);

WINDOW.FontAwesomeConfig = config$1;

function update(newConfig) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$asNewDefault = params.asNewDefault,
      asNewDefault = _params$asNewDefault === undefined ? false : _params$asNewDefault;

  var validKeys = Object.keys(config$1);
  var ok = asNewDefault ? function (k) {
    return ~validKeys.indexOf(k) && !~initialKeys.indexOf(k);
  } : function (k) {
    return ~validKeys.indexOf(k);
  };

  Object.keys(newConfig).forEach(function (configKey) {
    if (ok(configKey)) config$1[configKey] = newConfig[configKey];
  });
}

function auto(value) {
  update({
    autoReplaceSvg: value,
    observeMutations: value
  });
}

var w = WINDOW || {};

if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];

var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];
var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);

  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

var domready = function domready(fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
};

var d = UNITS_IN_GRID;

var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}

function bunker(fn) {
  try {
    fn();
  } catch (e) {
    if (!PRODUCTION) {
      throw e;
    }
  }
}

function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;

  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();
    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);

  return css;
}

var _uniqueId = 0;

function nextUniqueId() {
  _uniqueId++;

  return _uniqueId;
}

function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}

function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}

function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}

function htmlEscape(str) {
  return ('' + str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + (attributeName + '="' + htmlEscape(attributes[attributeName]) + '" ');
  }, '').trim();
}

function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + (styleName + ': ' + styles[styleName] + ';');
  }, '');
}

function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}

function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;

  var outer = {
    transform: 'translate(' + containerWidth / 2 + ' 256)'
  };
  var innerTranslate = 'translate(' + transform.x * 32 + ', ' + transform.y * 32 + ') ';
  var innerScale = 'scale(' + transform.size / 16 * (transform.flipX ? -1 : 1) + ', ' + transform.size / 16 * (transform.flipY ? -1 : 1) + ') ';
  var innerRotate = 'rotate(' + transform.rotate + ' 0 0)';
  var inner = {
    transform: innerTranslate + ' ' + innerScale + ' ' + innerRotate
  };
  var path = {
    transform: 'translate(' + iconWidth / 2 * -1 + ' -256)'
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}

function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === undefined ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === undefined ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === undefined ? false : _ref2$startCentered;

  var val = '';

  if (startCentered && IS_IE) {
    val += 'translate(' + (transform.x / d - width / 2) + 'em, ' + (transform.y / d - height / 2) + 'em) ';
  } else if (startCentered) {
    val += 'translate(calc(-50% + ' + transform.x / d + 'em), calc(-50% + ' + transform.y / d + 'em)) ';
  } else {
    val += 'translate(' + transform.x / d + 'em, ' + transform.y / d + 'em) ';
  }

  val += 'scale(' + transform.size / d * (transform.flipX ? -1 : 1) + ', ' + transform.size / d * (transform.flipY ? -1 : 1) + ') ';
  val += 'rotate(' + transform.rotate + 'deg) ';

  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

var makeIconMasking = function makeIconMasking(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;

  var trans = transformForSvg({ transform: transform, containerWidth: maskWidth, iconWidth: mainWidth });

  var maskRect = {
    tag: 'rect',
    attributes: _extends({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroup = {
    tag: 'g',
    attributes: _extends({}, trans.inner),
    children: [{ tag: 'path', attributes: _extends({}, mainPath.attributes, trans.path, { fill: 'black' }) }]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _extends({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = 'mask-' + nextUniqueId();
  var clipId = 'clip-' + nextUniqueId();
  var maskTag = {
    tag: 'mask',
    attributes: _extends({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{ tag: 'clipPath', attributes: { id: clipId }, children: [maskPath] }, maskTag]
  };

  children.push(defs, { tag: 'rect', attributes: _extends({ fill: 'currentColor', 'clip-path': 'url(#' + clipId + ')', mask: 'url(#' + maskId + ')' }, ALL_SPACE) });

  return {
    children: children,
    attributes: attributes
  };
};

var makeIconStandard = function makeIconStandard(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({ transform: transform, containerWidth: main.width, iconWidth: main.width });
    children.push({
      tag: 'g',
      attributes: _extends({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _extends({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _extends({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
};

var asIcon = function asIcon(_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;

    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_extends({}, styles, {
      'transform-origin': offset.x + transform.x / 16 + 'em ' + (offset.y + transform.y / 16) + 'em'
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
};

var asSymbol = function asSymbol(_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;

  var id = symbol === true ? prefix + '-' + config$1.familyPrefix + '-' + iconName : symbol;

  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _extends({}, attributes, { id: id }),
      children: children
    }]
  }];
};

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === undefined ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var widthClass = 'fa-w-' + Math.ceil(width / height * 16);
  var attrClass = [config$1.replacementClass, iconName ? config$1.familyPrefix + '-' + iconName : '', widthClass].concat(extra.classes).join(' ');

  var content = {
    children: [],
    attributes: _extends({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': '0 0 ' + width + ' ' + height
    })
  };

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({ tag: 'title', attributes: { id: content.attributes['aria-labelledby'] || 'title-' + nextUniqueId() }, children: [title] });

  var args = _extends({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    transform: transform,
    symbol: symbol,
    styles: extra.styles
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}

function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === undefined ? false : _params$watchable2;

  var attributes = _extends({}, extra.attributes, title ? { 'title': title } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _extends({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({ transform: transform, startCentered: true, width: width, height: height });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];

  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [title] });
  }

  return val;
}

var noop$2 = function noop() {};
var p = config$1.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : { mark: noop$2, measure: noop$2 };
var preamble = 'FA "5.0.13"';

var begin = function begin(name) {
  p.mark(preamble + ' ' + name + ' begins');
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark(preamble + ' ' + name + ' ends');
  p.measure(preamble + ' ' + name, preamble + ' ' + name + ' begins', preamble + ' ' + name + ' ends');
};

var perf = { begin: begin, end: end };

'use strict';

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */
var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

'use strict';

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */
var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

var styles$2 = namespace.styles;
var shims = namespace.shims;

var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};

var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles$2, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    acc[icon[3]] = iconName;

    return acc;
  });

  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];

    acc[iconName] = iconName;

    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });

    return acc;
  });

  var hasRegular = 'far' in styles$2;

  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = { prefix: prefix, iconName: iconName };

    return acc;
  }, {});
};

build();

function byUnicode(prefix, unicode) {
  return _byUnicode[prefix][unicode];
}

function byLigature(prefix, ligature) {
  return _byLigature[prefix][ligature];
}

function byOldName(name) {
  return _byOldName[name] || { prefix: null, iconName: null };
}

var styles$1 = namespace.styles;

var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return { prefix: null, iconName: null, rest: [] };
};

function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config$1.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};

      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config$1.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}

function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === undefined ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === undefined ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return '<' + tag + ' ' + joinAttributes(attributes) + '>' + children.map(toHtml).join('') + '</' + tag + '>';
  }
}

var noop$1 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;

  return typeof i2svg === 'string';
}

function getMutator() {
  if (config$1.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config$1.autoReplaceSvg];

  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config$1.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? '<!-- ' + node.outerHTML + ' -->' : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];

    // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement
    if (~classArray(node).indexOf(config$1.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp(config$1.familyPrefix + '-.*');

    delete abstract[0].attributes.style;

    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config$1.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, { toNode: [], toSvg: [] });

    abstract[0].attributes.class = splitClasses.toSvg.join(' ');

    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$1;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = WINDOW.requestAnimationFrame || function (op) {
      return op();
    };

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');

      mutations.map(mutator);

      mark();

      callbackFunction();
    });
  }
}

var disabled = false;

function disableObservation(operation) {
  disabled = true;
  operation();
  disabled = false;
}

var mo = null;

function observe(options) {
  if (!MUTATION_OBSERVER) return;

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback;

  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;

    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config$1.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config$1.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });

  if (!IS_DOM) return;

  mo.observe(DOCUMENT.getElementsByTagName('body')[0], {
    childList: true, attributes: true, characterData: true, subtree: true
  });
}

function disconnect() {
  if (!mo) return;

  mo.disconnect();
}

var styleParser = function styleParser(node) {
  var style = node.getAttribute('style');

  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

var classParser = function classParser(node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';

  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
};

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;
        case 'shrink':
          acc.size = acc.size - rest;
          break;
        case 'left':
          acc.x = acc.x - rest;
          break;
        case 'right':
          acc.x = acc.x + rest;
          break;
        case 'up':
          acc.y = acc.y - rest;
          break;
        case 'down':
          acc.y = acc.y + rest;
          break;
        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};

var transformParser = function transformParser(node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
};

var symbolParser = function symbolParser(node) {
  var symbol = node.getAttribute('data-fa-symbol');

  return symbol === null ? false : symbol === '' ? true : symbol;
};

var attributesParser = function attributesParser(node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }
    return acc;
  }, {});

  var title = node.getAttribute('title');

  if (config$1.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = config$1.replacementClass + '-title-' + nextUniqueId();
    } else {
      extraAttributes['aria-hidden'] = 'true';
    }
  }

  return extraAttributes;
};

var maskParser = function maskParser(node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
};

function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);

  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}

MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = { fill: 'currentColor' };
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};
var OPACITY_ANIMATE = _extends({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});
var DOT = {
  tag: 'circle',
  attributes: _extends({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, ANIMATION_BASE, { attributeName: 'r', values: '28;14;28;28;14;28;' }) }, { tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;1;1;0;1;' }) }]
};
var QUESTION = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;0;0;0;1;' }) }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '0;0;1;1;0;0;' }) }]
};

var missing = { tag: 'g', children: [RING, DOT, QUESTION, EXCLAMATION] };

var styles = namespace.styles;

var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Brands)/;
var STYLE_TO_PREFIX = {
  'Solid': 'fas',
  'Regular': 'far',
  'Light': 'fal',
  'Brands': 'fab'
};

function findIcon(iconName, prefix) {
  var val = {
    found: false,
    width: 512,
    height: 512,
    icon: missing
  };

  if (iconName && prefix && styles[prefix] && styles[prefix][iconName]) {
    var icon = styles[prefix][iconName];
    var width = icon[0];
    var height = icon[1];
    var vectorData = icon.slice(4);

    val = {
      found: true,
      width: width,
      height: height,
      icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
    };
  } else if (iconName && prefix && !config$1.showMissingIcons) {
    throw new MissingIcon('Icon is missing for prefix ' + prefix + ' with icon name ' + iconName);
  }

  return val;
}

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      extra = nodeMeta.extra;

  return [node, makeInlineSvgAbstract({
    icons: {
      main: findIcon(iconName, prefix),
      mask: findIcon(mask.iconName, mask.prefix)
    },
    prefix: prefix,
    iconName: iconName,
    transform: transform,
    symbol: symbol,
    mask: mask,
    title: title,
    extra: extra,
    watchable: true
  })];
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;

  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config$1.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return [node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })];
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function remove(node) {
  if (typeof node.remove === 'function') {
    node.remove();
  } else if (node && node.parentNode) {
    node.parentNode.removeChild(node);
  }
}

function searchPseudoElements(root) {
  if (!IS_DOM) return;

  var end = perf.begin('searchPseudoElements');

  disableObservation(function () {
    toArray(root.querySelectorAll('*')).forEach(function (node) {
      [':before', ':after'].forEach(function (pos) {
        var styles = WINDOW.getComputedStyle(node, pos);
        var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
        var children = toArray(node.children);
        var pseudoElement = children.filter(function (c) {
          return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === pos;
        })[0];

        if (pseudoElement) {
          if (pseudoElement.nextSibling && pseudoElement.nextSibling.textContent.indexOf(DATA_FA_PSEUDO_ELEMENT) > -1) {
            remove(pseudoElement.nextSibling);
          }
          remove(pseudoElement);
          pseudoElement = null;
        }

        if (fontFamily && !pseudoElement) {
          var content = styles.getPropertyValue('content');
          var i = DOCUMENT.createElement('i');
          i.setAttribute('class', '' + STYLE_TO_PREFIX[fontFamily[1]]);
          i.setAttribute(DATA_FA_PSEUDO_ELEMENT, pos);
          i.innerText = content.length === 3 ? content.substr(1, 1) : content;
          if (pos === ':before') {
            node.insertBefore(i, node.firstChild);
          } else {
            node.appendChild(i);
          }
        }
      });
    });
  });

  end();
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!IS_DOM) return;

  var htmlClassList = DOCUMENT.documentElement.classList;
  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add(HTML_CLASS_I2SVG_BASE_CLASS + '-' + suffix);
  };
  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove(HTML_CLASS_I2SVG_BASE_CLASS + '-' + suffix);
  };
  var prefixes = Object.keys(styles);
  var prefixesDomQuery = ['.' + LAYERS_TEXT_CLASSNAME + ':not([' + DATA_FA_I2SVG + '])'].concat(prefixes.map(function (p) {
    return '.' + p + ':not([' + DATA_FA_I2SVG + '])';
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = toArray(root.querySelectorAll(prefixesDomQuery));

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');

  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);

  mark();

  perform(mutations, function () {
    hclAdd('active');
    hclAdd('complete');
    hclRemove('pending');

    if (typeof callback === 'function') callback();
  });
}

function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var mutation = generateMutation(node);

  if (mutation) {
    perform([mutation], callback);
  }
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible; }\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em; }\n  .svg-inline--fa.fa-lg {\n    vertical-align: -.225em; }\n  .svg-inline--fa.fa-w-1 {\n    width: 0.0625em; }\n  .svg-inline--fa.fa-w-2 {\n    width: 0.125em; }\n  .svg-inline--fa.fa-w-3 {\n    width: 0.1875em; }\n  .svg-inline--fa.fa-w-4 {\n    width: 0.25em; }\n  .svg-inline--fa.fa-w-5 {\n    width: 0.3125em; }\n  .svg-inline--fa.fa-w-6 {\n    width: 0.375em; }\n  .svg-inline--fa.fa-w-7 {\n    width: 0.4375em; }\n  .svg-inline--fa.fa-w-8 {\n    width: 0.5em; }\n  .svg-inline--fa.fa-w-9 {\n    width: 0.5625em; }\n  .svg-inline--fa.fa-w-10 {\n    width: 0.625em; }\n  .svg-inline--fa.fa-w-11 {\n    width: 0.6875em; }\n  .svg-inline--fa.fa-w-12 {\n    width: 0.75em; }\n  .svg-inline--fa.fa-w-13 {\n    width: 0.8125em; }\n  .svg-inline--fa.fa-w-14 {\n    width: 0.875em; }\n  .svg-inline--fa.fa-w-15 {\n    width: 0.9375em; }\n  .svg-inline--fa.fa-w-16 {\n    width: 1em; }\n  .svg-inline--fa.fa-w-17 {\n    width: 1.0625em; }\n  .svg-inline--fa.fa-w-18 {\n    width: 1.125em; }\n  .svg-inline--fa.fa-w-19 {\n    width: 1.1875em; }\n  .svg-inline--fa.fa-w-20 {\n    width: 1.25em; }\n  .svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-border {\n    height: 1.5em; }\n  .svg-inline--fa.fa-li {\n    width: 2em; }\n  .svg-inline--fa.fa-fw {\n    width: 1.25em; }\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -.125em;\n  width: 1em; }\n  .fa-layers svg.svg-inline--fa {\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n\n.fa-layers-text, .fa-layers-counter {\n  display: inline-block;\n  position: absolute;\n  text-align: center; }\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center; }\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: .25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right; }\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left; }\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1em; }\n\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n";

var css = function css() {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config$1.familyPrefix;
  var rc = config$1.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp('\\.' + dfp + '\\-', 'g');
    var rPatt = new RegExp('\\.' + drc, 'g');

    s = s.replace(dPatt, '.' + fp + '-').replace(rPatt, '.' + rc);
  }

  return s;
};

function define(prefix, icons) {
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }
    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function') {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, normalized);
  }

  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */
  if (prefix === 'fas') {
    define('fa', icons);
  }
}

var Library = function () {
  function Library() {
    classCallCheck(this, Library);

    this.definitions = {};
  }

  createClass(Library, [{
    key: 'add',
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});

      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _extends({}, _this.definitions[key] || {}, additions[key]);
        define(key, additions[key]);
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: '_pullDefinitions',
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? { 0: definition } : definition;

      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;

        if (!additions[prefix]) additions[prefix] = {};

        additions[prefix][iconName] = icon;
      });

      return additions;
    }
  }]);
  return Library;
}();

function prepIcon(icon) {
  var width = icon[0];
  var height = icon[1];
  var vectorData = icon.slice(4);

  return {
    found: true,
    width: width,
    height: height,
    icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
  };
}

var _cssInserted = false;

function ensureCss() {
  if (!config$1.autoAddCss) {
    return;
  }

  if (!_cssInserted) {
    insertCss(css());
  }

  _cssInserted = true;
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });

  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });

  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;

      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });

  return val;
}

function findIconDefinition(params) {
  var _params$prefix = params.prefix,
      prefix = _params$prefix === undefined ? 'fa' : _params$prefix,
      iconName = params.iconName;

  if (!iconName) return;

  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});

    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _extends({}, params, { mask: mask }));
  };
}

var library = new Library();

var noAuto = function noAuto() {
  auto(false);
  disconnect();
};

var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();

      var _params$node = params.node,
          node = _params$node === undefined ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === undefined ? function () {} : _params$callback;

      if (config$1.searchPseudoElements) {
        searchPseudoElements(node);
      }

      onTree(node, callback);
    }
  },

  css: css,

  insertCss: function insertCss$$1() {
    insertCss(css());
  }
};

var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};

var index_es_icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === undefined ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === undefined ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === undefined ? null : _params$mask,
      _params$title = params.title,
      title = _params$title === undefined ? null : _params$title,
      _params$classes = params.classes,
      classes = _params$classes === undefined ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === undefined ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === undefined ? {} : _params$styles;

  if (!iconDefinition) return;

  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;

  return apiObject(_extends({ type: 'icon' }, iconDefinition), function () {
    ensureCss();

    if (config$1.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = config$1.replacementClass + '-title-' + nextUniqueId();
      } else {
        attributes['aria-hidden'] = 'true';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: prepIcon(icon),
        mask: mask ? prepIcon(mask.icon) : { found: false, width: null, height: null, icon: {} }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _extends({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});

var index_es_text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === undefined ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === undefined ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === undefined ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === undefined ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === undefined ? {} : _params$styles2;

  return apiObject({ type: 'text', content: content }, function () {
    ensureCss();

    return makeLayersTextAbstract({
      content: content,
      transform: _extends({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: [config$1.familyPrefix + '-layers-text'].concat(toConsumableArray(classes))
      }
    });
  });
};

var index_es_layer = function layer(assembler) {
  return apiObject({ type: 'layer' }, function () {
    ensureCss();

    var children = [];

    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });

    return [{
      tag: 'span',
      attributes: { class: config$1.familyPrefix + '-layers' },
      children: children
    }];
  });
};

var api$1 = {
  noAuto: noAuto,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: index_es_icon,
  text: index_es_text,
  layer: index_es_layer
};

var autoReplace = function autoReplace() {
  if (IS_DOM && config$1.autoReplaceSvg) api$1.dom.i2svg({ node: DOCUMENT });
};

function bootstrap() {
  if (IS_BROWSER) {
    if (!WINDOW.FontAwesome) {
      WINDOW.FontAwesome = api$1;
    }

    domready(function () {
      if (Object.keys(namespace.styles).length > 0) {
        autoReplace();
      }

      if (config$1.observeMutations && typeof MutationObserver === 'function') {
        observe({
          treeCallback: onTree,
          nodeCallback: onNode,
          pseudoElementsCallback: searchPseudoElements
        });
      }
    });
  }

  namespace.hooks = _extends({}, namespace.hooks, {

    addPack: function addPack(prefix, icons) {
      namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, icons);

      build();
      autoReplace();
    },

    addShims: function addShims(shims) {
      var _namespace$shims;

      (_namespace$shims = namespace.shims).push.apply(_namespace$shims, toConsumableArray(shims));

      build();
      autoReplace();
    }
  });
}

Object.defineProperty(api$1, 'config', {
  get: function get() {
    return config$1;
  },

  set: function set(newConfig) {
    update(newConfig);
  }
});

if (IS_DOM) bunker(bootstrap);

var config = api$1.config;


/* harmony default export */ var index_es = (api$1);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("KSGD");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js




var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var humps = createCommonjsModule(function (module) {
  // =========
  // = humps =
  // =========
  // Underscore-to-camelCase converter (and vice versa)
  // for strings and object keys

  // humps is copyright © 2012+ Dom Christie
  // Released under the MIT license.


  (function (global) {

    var _processKeys = function _processKeys(convert, obj, options) {
      if (!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj) || _isFunction(obj)) {
        return obj;
      }

      var output,
          i = 0,
          l = 0;

      if (_isArray(obj)) {
        output = [];
        for (l = obj.length; i < l; i++) {
          output.push(_processKeys(convert, obj[i], options));
        }
      } else {
        output = {};
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            output[convert(key, options)] = _processKeys(convert, obj[key], options);
          }
        }
      }
      return output;
    };

    // String conversion methods

    var separateWords = function separateWords(string, options) {
      options = options || {};
      var separator = options.separator || '_';
      var split = options.split || /(?=[A-Z])/;

      return string.split(split).join(separator);
    };

    var camelize = function camelize(string) {
      if (_isNumerical(string)) {
        return string;
      }
      string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
        return chr ? chr.toUpperCase() : '';
      });
      // Ensure 1st char is always lowercase
      return string.substr(0, 1).toLowerCase() + string.substr(1);
    };

    var pascalize = function pascalize(string) {
      var camelized = camelize(string);
      // Ensure 1st char is always uppercase
      return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
    };

    var decamelize = function decamelize(string, options) {
      return separateWords(string, options).toLowerCase();
    };

    // Utilities
    // Taken from Underscore.js

    var toString = Object.prototype.toString;

    var _isFunction = function _isFunction(obj) {
      return typeof obj === 'function';
    };
    var _isObject = function _isObject(obj) {
      return obj === Object(obj);
    };
    var _isArray = function _isArray(obj) {
      return toString.call(obj) == '[object Array]';
    };
    var _isDate = function _isDate(obj) {
      return toString.call(obj) == '[object Date]';
    };
    var _isRegExp = function _isRegExp(obj) {
      return toString.call(obj) == '[object RegExp]';
    };
    var _isBoolean = function _isBoolean(obj) {
      return toString.call(obj) == '[object Boolean]';
    };

    // Performant way to determine if obj coerces to a number
    var _isNumerical = function _isNumerical(obj) {
      obj = obj - 0;
      return obj === obj;
    };

    // Sets up function which handles processing keys
    // allowing the convert function to be modified by a callback
    var _processor = function _processor(convert, options) {
      var callback = options && 'process' in options ? options.process : options;

      if (typeof callback !== 'function') {
        return convert;
      }

      return function (string, options) {
        return callback(string, convert, options);
      };
    };

    var humps = {
      camelize: camelize,
      decamelize: decamelize,
      pascalize: pascalize,
      depascalize: decamelize,
      camelizeKeys: function camelizeKeys(object, options) {
        return _processKeys(_processor(camelize, options), object);
      },
      decamelizeKeys: function decamelizeKeys(object, options) {
        return _processKeys(_processor(decamelize, options), object, options);
      },
      pascalizeKeys: function pascalizeKeys(object, options) {
        return _processKeys(_processor(pascalize, options), object);
      },
      depascalizeKeys: function depascalizeKeys() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };

    if (false) {
      undefined(humps);
    } else if ('object' !== 'undefined' && module.exports) {
      module.exports = humps;
    } else {
      global.humps = humps;
    }
  })(commonjsGlobal);
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function wrap(fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function _await(value) {
      return new AwaitValue(value);
    }
  };
}();

var defineProperty = function defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var index_es__extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var index_es_toConsumableArray = function toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
};

function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = humps.camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();

    prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;

    return acc;
  }, {});
}

function convert(createElement, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var children = (element.children || []).map(convert.bind(null, createElement));

  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc.attrs['className'] = val;
        delete element.attributes['class'];
        break;
      case 'style':
        acc.attrs['style'] = styleToObject(val);
        break;
      default:
        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[humps.camelize(key)] = val;
        }
    }

    return acc;
  }, { attrs: {} });

  var _extraProps$style = extraProps.style,
      existingStyle = _extraProps$style === undefined ? {} : _extraProps$style,
      remaining = objectWithoutProperties(extraProps, ['style']);

  mixins.attrs['style'] = index_es__extends({}, mixins.attrs['style'], existingStyle);

  return createElement.apply(undefined, [element.tag, index_es__extends({}, mixins.attrs, remaining)].concat(index_es_toConsumableArray(children)));
}

var index_es_PRODUCTION = false;

try {
  index_es_PRODUCTION = "production" === 'production';
} catch (e) {}

var log = function log() {
  if (!index_es_PRODUCTION && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
};

function objectWithKey(key, value) {
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? defineProperty({}, key, value) : {};
}

function classList(props) {
  var _classes;

  var classes = (_classes = {
    'fa-spin': props.spin,
    'fa-pulse': props.pulse,
    'fa-fw': props.fixedWidth,
    'fa-border': props.border,
    'fa-li': props.listItem,
    'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
    'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
  }, defineProperty(_classes, 'fa-' + props.size, props.size !== null), defineProperty(_classes, 'fa-rotate-' + props.rotation, props.rotation !== null), defineProperty(_classes, 'fa-pull-' + props.pull, props.pull !== null), _classes);

  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
}

function normalizeIconArgs(icon) {
  if (icon === null) {
    return null;
  }

  if ((typeof icon === 'undefined' ? 'undefined' : _typeof(icon)) === 'object' && icon.prefix && icon.iconName) {
    return icon;
  }

  if (Array.isArray(icon) && icon.length === 2) {
    return { prefix: icon[0], iconName: icon[1] };
  }

  if (typeof icon === 'string') {
    return { prefix: 'fas', iconName: icon };
  }
}

function FontAwesomeIcon$1(props) {
  var iconArgs = props.icon,
      maskArgs = props.mask,
      symbol = props.symbol,
      className = props.className;

  var icon = normalizeIconArgs(iconArgs);
  var classes = objectWithKey('classes', [].concat(index_es_toConsumableArray(classList(props)), index_es_toConsumableArray(className.split(' '))));
  var transform = objectWithKey('transform', typeof props.transform === 'string' ? index_es.parse.transform(props.transform) : props.transform);
  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));

  var renderedIcon = index_es.icon(icon, index_es__extends({}, classes, transform, mask, {
    symbol: symbol
  }));

  if (!renderedIcon) {
    log('Could not find icon', icon);
    return null;
  }

  var abstract = renderedIcon.abstract;

  var convertCurry = convert.bind(null, preact_compat_es["default"].createElement);
  var extraProps = {};

  Object.keys(props).forEach(function (key) {
    if (!FontAwesomeIcon$1.defaultProps.hasOwnProperty(key)) extraProps[key] = props[key];
  });

  return convertCurry(abstract[0], extraProps);
}

FontAwesomeIcon$1.displayName = 'FontAwesomeIcon';

FontAwesomeIcon$1.propTypes = {
  border: prop_types_default.a.bool,

  className: prop_types_default.a.string,

  mask: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.array, prop_types_default.a.string]),

  fixedWidth: prop_types_default.a.bool,

  flip: prop_types_default.a.oneOf(['horizontal', 'vertical', 'both']),

  icon: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.array, prop_types_default.a.string]),

  listItem: prop_types_default.a.bool,

  pull: prop_types_default.a.oneOf(['right', 'left']),

  pulse: prop_types_default.a.bool,

  name: prop_types_default.a.string,

  rotation: prop_types_default.a.oneOf([90, 180, 270]),

  size: prop_types_default.a.oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),

  spin: prop_types_default.a.bool,

  symbol: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.string]),

  transform: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object])
};

FontAwesomeIcon$1.defaultProps = {
  border: false,
  className: '',
  mask: null,
  fixedWidth: false,
  flip: null,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  name: '',
  rotation: null,
  size: null,
  spin: false,
  symbol: false,
  transform: null
};

index_es.noAuto();

/* harmony default export */ var react_fontawesome_index_es = (FontAwesomeIcon$1);
// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-pro-light/faCompress.js
var faCompress = __webpack_require__("51Op");
var faCompress_default = /*#__PURE__*/__webpack_require__.n(faCompress);

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-pro-light/faExpand.js
var faExpand = __webpack_require__("K96Q");
var faExpand_default = /*#__PURE__*/__webpack_require__.n(faExpand);

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-pro-light/faWalking.js
var faWalking = __webpack_require__("y5jJ");
var faWalking_default = /*#__PURE__*/__webpack_require__.n(faWalking);

// EXTERNAL MODULE: ./assets/styles/index.scss
var assets_styles = __webpack_require__("kxo5");
var styles_default = /*#__PURE__*/__webpack_require__.n(assets_styles);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.es.js
var styled_components_es = __webpack_require__("VEsJ");

// EXTERNAL MODULE: ./node_modules/svg-react-loader/lib/loader.js!./assets/design/crab-final.svg
var crab_final = __webpack_require__("v93/");
var crab_final_default = /*#__PURE__*/__webpack_require__.n(crab_final);

// CONCATENATED MODULE: ./components/crab.jsx
var _templateObject = _taggedTemplateLiteralLoose(['\n&#crab{\n  width: ', 'px;\n  position: absolute;\n  top: -300px;\n  left: -300px;\n\n  .crab {\n    min-width: ', 'px;\n  }\n}\n'], ['\n&#crab{\n  width: ', 'px;\n  position: absolute;\n  top: -300px;\n  left: -300px;\n\n  .crab {\n    min-width: ', 'px;\n  }\n}\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  display: flex;\n  justify-content: center;\n  width: ', 'px;\n  overflow: visible;\n  align-items: flex-start;\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation-fill-mode: both;\n  transition: transform ', 's;\n  transition-timing-function: cubic-bezier(1, 1.02, 0.76, 0.99);\n  cursor: pointer;\n  pointer-events: none;\n  \n  &.walking {\n    pointer-events: all;\n    transform: translate(', ');\n    &.paused {\n      pointer-events: none;\n    }\n  }\n\n.crab {\n  overflow: visible;\n  min-width: ', 'px;\n  pointer-events: none;\n//******LEFT LEGS ANIMATIONS******//\n// First Leg Animations\n@keyframes moveLefts-firstLeg-firstPart {\n  10% { transform: rotate(-14deg); }\n  50% { transform: rotate(13deg); }\n}\n\n@keyframes moveLefts-firstLeg-secondPart {\n  35% { transform: rotate(-25deg); }\n  50% { transform: rotate(-25deg); }\n}\n\n@keyframes moveLefts-firstLeg-thirdPart {\n  35% { transform: rotate(8deg); }\n  50% { transform: rotate(12deg); }  \n}\n\n@keyframes returnLefts-firstLeg-firstPart {\n  100% { transform: rotate(-14deg); }\n}\n\n@keyframes returnLefts-firstLeg-secondPart {\n  100% { transform: rotate(31deg); }\n}\n\n@keyframes returnLefts-firstLeg-thirdPart {\n  100% { transform: rotate(-17deg); }\n}\n\n// Second Leg Animations\n@keyframes moveLefts-secondLeg-firstPart {\n  10% { transform: rotate(-15.5deg); }\n  50% { transform: rotate(10deg); }\n}\n\n@keyframes moveLefts-secondLeg-secondPart {\n  35% { transform: rotate(-30deg); }\n  50% { transform: rotate(-30deg); }\n}\n\n@keyframes moveLefts-secondLeg-thirdPart {\n  35% { transform: rotate(8deg); }\n  50% { transform: rotate(12deg); }  \n}\n\n// Third Leg Animations\n@keyframes moveLefts-thirdLeg-firstPart {\n  10% { transform: rotate(-15.5deg); }\n  50% { transform: rotate(10deg); }\n}\n\n@keyframes moveLefts-thirdLeg-secondPart {\n  35% { transform: rotate(-35deg); }\n  50% { transform: rotate(-35deg); }\n}\n\n@keyframes moveLefts-thirdLeg-thirdPart {\n  35% { transform: rotate(-3deg); }\n  50% { transform: rotate(-3deg); }  \n}\n\n// Fourth Leg Animations\n@keyframes moveLefts-fourthLeg-firstPart {\n  10% { transform: rotate(-11deg); }\n  50% { transform: rotate(14deg); }\n}\n\n@keyframes moveLefts-fourthLeg-secondPart {\n  35% { transform: rotate(-35deg); }\n  50% { transform: rotate(-35deg); }\n}\n\n@keyframes moveLefts-fourthLeg-thirdPart {\n  35% { transform: rotate(-45deg); }\n  50% { transform: rotate(-45deg); }  \n}\n\n//******RIGHT LEGS ANIMATIONS******//\n// First Leg Animations\n@keyframes moveRights-firstLeg-firstPart {\n  10% { transform: rotate(14deg); }\n  50% { transform: rotate(-13deg); }\n}\n\n@keyframes moveRights-firstLeg-secondPart {\n  35% { transform: rotate(25deg); }\n  50% { transform: rotate(25deg); }\n}\n\n@keyframes moveRights-firstLeg-thirdPart {\n  35% { transform: rotate(-8deg); }\n  50% { transform: rotate(-12deg); }  \n}\n\n// Second Leg Animations\n@keyframes moveRights-secondLeg-firstPart {\n  10% { transform: rotate(15.5deg); }\n  50% { transform: rotate(-10deg); }\n}\n\n@keyframes moveRights-secondLeg-secondPart {\n  35% { transform: rotate(30deg); }\n  50% { transform: rotate(30deg); }\n}\n\n@keyframes moveRights-secondLeg-thirdPart {\n  35% { transform: rotate(-8deg); }\n  50% { transform: rotate(-12deg); }  \n}\n\n// Third Leg Animations\n@keyframes moveRights-thirdLeg-firstPart {\n  10% { transform: rotate(15.5deg); }\n  50% { transform: rotate(-10deg); }\n}\n\n@keyframes moveRights-thirdLeg-secondPart {\n  35% { transform: rotate(35deg); }\n  50% { transform: rotate(35deg); }\n}\n\n@keyframes moveRights-thirdLeg-thirdPart {\n  35% { transform: rotate(3deg); }\n  50% { transform: rotate(3deg); }  \n}\n\n// Fourth Leg Animations\n@keyframes moveRights-fourthLeg-firstPart {\n  10% { transform: rotate(11deg); }\n  50% { transform: rotate(-14deg); }\n}\n\n@keyframes moveRights-fourthLeg-secondPart {\n  35% { transform: rotate(35deg); }\n  50% { transform: rotate(35deg); }\n}\n\n@keyframes moveRights-fourthLeg-thirdPart {\n  35% { transform: rotate(45deg); }\n  50% { transform: rotate(45deg); }  \n}\n\n@keyframes move-shell {\n  33.33% { transform: rotate(1deg); }\n  66.66% { transform: rotate(-1deg); }\n}\n\n.legs {\n  * { animation-fill-mode: both; }\n  .left-legs {\n      .first-leg {\n          transform: rotate(-14deg);\n          transform-origin: 56.80% 61.33%;\n          .second-part {\n              transform: rotate(31deg);\n              transform-origin: 73.13% 41.79%;\n              .third-part {\n                  transform: rotate(-17deg);\n                  transform-origin: 88.45% 56.52%;\n              }\n          }\n      }\n\n      .second-leg {\n          transform: rotate(-15.5deg);\n          transform-origin: 56.20% 68.90%;\n          .second-part {\n              transform: rotate(21deg);\n              transform-origin: 70.03% 53.45%;\n              .third-part {\n                  transform: rotate(-16deg);\n                  transform-origin: 83.50% 66.55%;\n              }\n          }\n      }\n\n      .third-leg {\n          transform: rotate(-15.5deg);\n          transform-origin: 55.73% 75.86%;\n          .second-part {\n              transform: rotate(4deg);\n              transform-origin: 67.48% 63.48%;\n              .third-part {\n                  transform: rotate(3deg);\n                  transform-origin: 79.50% 75.40%;\n              }\n          }\n      }\n\n      .fourth-leg {\n          transform: rotate(-11deg);\n          transform-origin: 55.18% 81.89%;\n          .second-part {\n              transform: rotate(3.5deg);\n              transform-origin: 65.50% 71.61%;\n              .third-part {\n                  transform: rotate(-15deg);\n                  transform-origin: 76.55% 82.51%;\n              }\n          }\n      }\n  }\n\n  .right-legs {\n      .first-leg {\n          transform: rotate(14deg);\n          transform-origin: 43.20% 61.33%;\n          .second-part {\n              transform: rotate(-31deg);\n              transform-origin: 26.87% 41.79%;\n              .third-part {\n                  transform: rotate(17deg);\n                  transform-origin: 11.55% 56.52%;\n              }\n          }\n      }\n\n      .second-leg {\n          transform: rotate(15.5deg);\n          transform-origin: 43.80% 68.90%;\n          .second-part {\n              transform: rotate(-21deg);\n              transform-origin: 29.97% 53.45%;\n              .third-part {\n                  transform: rotate(16deg);\n                  transform-origin: 16.50% 66.55%;\n              }\n          }\n      }\n\n      .third-leg {\n          transform: rotate(15.5deg);\n          transform-origin: 44.27% 75.86%;\n          .second-part {\n              transform: rotate(-4deg);\n              transform-origin: 32.52% 63.48%;\n              .third-part {\n                  transform: rotate(-3deg);\n                  transform-origin: 20.50% 75.40%;\n              }\n          }\n      }\n\n      .fourth-leg {\n          transform: rotate(11deg);\n          transform-origin: 44.82% 81.89%;\n          .second-part {\n              transform: rotate(-3.5deg);\n              transform-origin: 34.50% 71.61%;\n              .third-part {\n                  transform: rotate(15deg);\n                  transform-origin: 23.45% 82.51%;\n              }\n          }\n      }\n  }\n}\n\n&.walking {\n    .legs {\n      .left-legs *, .right-legs * {\n        animation-duration: ', 's;\n        animation-iteration-count: infinite;\n      }\n      .left-legs {\n          * { animation-direction: ', '; }\n          .first-leg {\n              animation-name: moveLefts-firstLeg-firstPart;\n              animation-delay:0.125s;\n              * { animation-delay:0.125s; }\n              .second-part {\n                  animation-name: moveLefts-firstLeg-secondPart;\n                  .third-part {\n                      animation-name: moveLefts-firstLeg-thirdPart;\n                  }\n              }\n          }\n          .second-leg {\n              animation-name: moveLefts-secondLeg-firstPart;\n              animation-delay:0.375s;\n              * { animation-delay:0.375s; }\n              .second-part {\n                  animation-name: moveLefts-secondLeg-secondPart;\n                  .third-part {\n                      animation-name: moveLefts-secondLeg-thirdPart;\n                  }\n              }\n          }\n          .third-leg {\n              animation-name: moveLefts-thirdLeg-firstPart;\n              .second-part {\n                  animation-name: moveLefts-thirdLeg-secondPart;\n                  .third-part {\n                      animation-name: moveLefts-thirdLeg-thirdPart;\n                  }\n              }\n          }\n\n          .fourth-leg {\n              animation-name: moveLefts-fourthLeg-firstPart;\n              animation-delay:0.25s;\n              * { animation-delay:0.25s; }\n              .second-part {\n                  animation-name: moveLefts-fourthLeg-secondPart;\n                  .third-part {\n                      animation-name: moveLefts-fourthLeg-thirdPart;\n                  }\n              }\n          }\n      }\n      .right-legs {\n          * { animation-direction: ', '; }\n          .first-leg {\n              animation-name: moveRights-firstLeg-firstPart;\n              animation-delay:0.255s;\n              * { animation-delay:0.255s; }\n              .second-part {\n                  animation-name: moveRights-firstLeg-secondPart;\n                  .third-part {\n                      animation-name: moveRights-firstLeg-thirdPart;\n                  }\n              }\n          }\n          .second-leg {\n              animation-name: moveRights-secondLeg-firstPart;\n              animation-delay:0.12s;\n              * { animation-delay:0.12s; }\n              .second-part {\n                  animation-name: moveRights-secondLeg-secondPart;\n                  .third-part {\n                      animation-name: moveRights-secondLeg-thirdPart;\n                  }\n              }\n          }\n          .third-leg {\n              animation-name: moveRights-thirdLeg-firstPart;\n              animation-delay:0.37s;\n              * { animation-delay:0.37s; }\n              .second-part {\n                  animation-name: moveRights-thirdLeg-secondPart;\n                  .third-part {\n                      animation-name: moveRights-thirdLeg-thirdPart;\n                  }\n              }\n          }\n\n          .fourth-leg {\n              animation-name: moveRights-fourthLeg-firstPart;\n              animation-delay:0.005s;\n              * { animation-delay:0.005s; }\n              .second-part {\n                  animation-name: moveRights-fourthLeg-secondPart;\n                  .third-part {\n                      animation-name: moveRights-fourthLeg-thirdPart;\n                  }\n              }\n          }\n      }\n  }\n  .shell {\n      transform-origin: 50% 85.07%;\n      animation-name: move-shell;\n      animation-duration: ', 's;\n      animation-iteration-count: infinite;\n      pointer-events: all;\n      cursor: pointer;\n  }\n\n  &.paused {\n    .legs *, .shell {\n      animation-play-state: paused;\n      pointer-events: none;\n    }\n  }\n}\n\n.pincers {\n  .left-pincer {\n    transform: rotate(20deg);\n    transform-origin: 55.28% 54.88%;\n    .second-part {\n      transform: rotate(-20deg);\n      transform-origin: 62.03% 43.22%;\n      .third-part {\n        transform: rotate(-75deg);\n        transform-origin: 64.93% 32.28%;\n        .moving-pincer {\n          transform: rotate(5deg);\n          transform-origin: 68.85% 19.08%;\n        }\n      }\n    }\n  }\n  .right-pincer {\n    transform: rotate(-20deg);\n    transform-origin: 44.70% 54.88%;\n    .second-part {\n      transform: rotate(20deg);\n      transform-origin: 37.65% 42.20%;\n      .third-part {\n        transform: rotate(20deg);\n        transform-origin: 34.38% 29.77%;\n        .moving-pincer {\n          transform: rotate(5deg);\n          transform-origin: 29.90% 14.78%;\n        }\n      }\n    }\n  }\n}\n\n.mouth {\n  .outer-mouth {\n    .right-mouth {\n      transform-origin: 50% 45.01%;\n    }\n    .left-mouth {\n      transform-origin: 50% 45.01%;\n    }\n  }\n}\n\n@keyframes left-eye {\n  0% { transform: rotate(23deg); }\n  5% { transform: rotate(23deg); }\n  7% { transform: rotate(27deg); }\n  10% { transform: rotate(20deg); }\n  25% { transform: rotate(20deg); }\n  30% { transform: rotate(-10deg); }\n  45% { transform: rotate(-10deg); }\n  55% { transform: rotate(10deg); }\n  75% { transform: rotate(-10deg); }\n  80% { transform: rotate(-20deg); }\n  85% { transform: rotate(23deg); }\n  100% { transform: rotate(23deg); }\n}\n\n@keyframes right-eye {\n  0% { transform: rotate(-10deg); }\n  7% { transform: rotate(-15deg); }\n  10% { transform: rotate(10deg); }\n  14% { transform: rotate(29deg); }\n  29% { transform: rotate(2deg); }\n  33% { transform: rotate(-20deg); }\n  44% { transform: rotate(10deg); }\n  51% { transform: rotate(-20deg); }\n  73% { transform: rotate(-25deg); }\n  81% { transform: rotate(-4deg); }\n  86% { transform: rotate(-10deg); }\n  100% { transform: rotate(-10deg); }\n}\n\n.eyes {\n  * {\n    animation-iteration-count: infinite;\n    animation-direction: normal;\n  }\n  .left-eye {\n    transform: rotate(23deg);\n    transform-origin: 59.88% 28.34%;\n    animation-name: left-eye;\n    animation-duration: 9s;\n  }\n\n  .right-eye {\n    transform: rotate(-10deg);\n    transform-origin: 40.13% 28.34%;\n    animation-name: right-eye;\n    animation-duration: 8.5s;\n  }\n}\n\n// EATING ANIMATION\n@keyframes eating-right-pincer {\n  25% { transform: rotate(40deg); }\n  50% { transform: rotate(-20deg); }\n}\n\n@keyframes eating-right-pincer-secondPart {\n  25% { transform: rotate(-30deg); }\n  50% { transform: rotate(20deg); }\n  70% { transform: rotate(70deg); }\n  75% { transform: rotate(70deg); }\n}\n\n@keyframes eating-right-pincer-thirdPart {\n  25% { transform: rotate(-10deg); }\n  50% { transform: rotate(20deg); }\n  70% { transform: rotate(40deg); }\n  75% { transform: rotate(40deg); }\n}\n\n@keyframes eating-right-pincer-close {\n  17% { transform: rotate(-5deg); }\n  20% { transform: rotate(35deg); }\n  50% { transform: rotate(35deg); }\n  70% { transform: rotate(35deg); }\n  75% { transform: rotate(-5deg); }\n}\n\n@keyframes eating-left-pincer {\n  33.33% { transform: rotate(20deg); }\n  46.66% { transform: rotate(5deg); }\n  50% { transform: rotate(5deg); }\n  60% { transform: rotate(0deg); }\n  90% { transform: rotate(0deg); }\n}\n\n@keyframes eating-left-pincer-secondPart {\n  33.33% { transform: rotate(-20deg); }\n  46.66% { transform: rotate(-24deg); }\n  50% { transform: rotate(-24deg); }\n  60% { transform: rotate(-30deg); }\n  90% { transform: rotate(-30deg); }\n}\n\n@keyframes eating-left-pincer-thirdPart {\n  33.33% { transform: rotate(-75deg); }\n  46.66% { transform: rotate(-75deg); }\n  50% { transform: rotate(-75deg); }\n  60% { transform: rotate(-80deg); }\n  90% { transform: rotate(-80deg); }\n}\n\n@keyframes eating-left-pincer-close {\n  46.66% { transform: rotate(5deg); }\n  50% { transform: rotate(-25deg); }\n  90% { transform: rotate(-25deg); }\n}\n\n@keyframes eating-right-mouth {\n  10% { transform: rotate(-4deg) skewX(4deg); }\n  20% { transform: rotate(-2deg) skewX(2deg); }\n  35% { transform: rotate(-4deg) skewX(4deg); }\n  45% { transform: rotate(-2deg) skewX(2deg); }\n  60% { transform: rotate(-4deg) skewX(4deg); }\n  65% { transform: rotate(-2deg) skewX(2deg); }\n  70% { transform: rotate(-4deg) skewX(4deg); }\n  80% { transform: rotate(-2deg) skewX(2deg); }\n  90% { transform: rotate(-4deg) skewX(4deg); }\n}\n\n@keyframes eating-left-mouth {\n  12% { transform: rotate(10deg) skewX(-10deg); }\n  22% { transform: rotate(2deg) skewX(-2deg); }\n  62% { transform: rotate(10deg) skewX(-10deg); }\n  67% { transform: rotate(2deg) skewX(-2deg); }\n  92% { transform: rotate(10deg) skewX(-10deg); }\n}\n\n&.eating {\n  .pincers {\n    * { animation-timing-function: ease-in-out; }\n    .right-pincer {\n      animation-name: eating-right-pincer;\n      animation-duration: 2s;\n      animation-delay: 0.5s;\n      * {\n        animation-duration: 2s;\n        animation-delay: 0.5s;\n      }\n      .second-part {\n        animation-name: eating-right-pincer-secondPart;\n        .third-part {\n          animation-name: eating-right-pincer-thirdPart;\n          .moving-pincer {\n            animation-name: eating-right-pincer-close;\n            animation-timing-function: linear;\n          }\n        }\n      }\n    }\n\n    .left-pincer {\n      animation-name: eating-left-pincer;\n      animation-duration: 3s;\n      animation-delay: 0.5s;\n      * {\n        animation-duration: 3s;\n        animation-delay: 0.5s;\n      }\n      .second-part {\n        animation-name: eating-left-pincer-secondPart;\n        .third-part {\n          animation-name: eating-left-pincer-thirdPart;\n          .moving-pincer {\n            animation-name: eating-left-pincer-close;\n            animation-timing-function: linear;\n          }\n        }\n      }\n    }\n  }\n\n  .mouth {\n    .outer-mouth {\n      * {\n        animation-duration: 1s;\n        animation-delay: 2.5s;\n        animation-timing-function: ease-in-out;\n      }\n      .right-mouth { animation-name: eating-right-mouth; }\n      .left-mouth { animation-name: eating-left-mouth; }\n    }\n  }\n}\n\n//WAVING ANIMATION\n@keyframes waving-right-pincer {\n  /* 0% { transform: rotate(-20deg); } */\n  25% { transform: rotate(40deg); }\n  45% { transform: rotate(-40deg); }\n  65% { transform: rotate(50deg); }\n}\n\n@keyframes waving-right-pincer-secondPart {\n  25% { transform: rotate(0deg); }\n  90% { transform: rotate(0deg); }\n}\n\n@keyframes waving-right-pincer-thirdPart {\n  25% { transform: rotate(5deg); }\n  90% { transform: rotate(5deg); }\n}\n\n@keyframes waving-left-pincer {\n  25% { transform: rotate(-30deg); }\n  45% { transform: rotate(40deg); }\n  65% { transform: rotate(-50deg); }\n}\n\n@keyframes waving-left-pincer-secondPart {\n  25% { transform: rotate(5deg); }\n  80% { transform: rotate(5deg); }\n}\n\n@keyframes waving-left-pincer-thirdPart {\n  25% { transform: rotate(0deg); }\n  80% { transform: rotate(0deg); }\n}\n\n&.waving {\n  .pincers {\n    .right-pincer {\n      animation-name: waving-right-pincer;\n      animation-duration: 2.5s;\n      animation-delay: 0.5s;\n      animation-timing-function: ease-in-out;\n      * {\n      animation-duration: 2.5s;\n      animation-delay: 0.5s;\n      animation-timing-function: ease-in-out;\n      }\n      .second-part {\n        animation-name: waving-right-pincer-secondPart;\n        .third-part {\n          animation-name: waving-right-pincer-thirdPart;\n        }\n      }\n    }\n\n    .left-pincer {\n      animation-name: waving-left-pincer;\n      animation-duration: 2.5s;\n      animation-delay: 1s;\n      animation-timing-function: ease-in-out;\n      * {\n        animation-duration: 2.5s;\n        animation-delay: 1s;\n        animation-timing-function: ease-in-out;\n      }\n      .second-part {\n        animation-name: waving-left-pincer-secondPart;\n        .third-part {\n          animation-name: waving-left-pincer-thirdPart;\n        }\n      }\n    }\n  }\n}\n\n//SNAPPING ANIMATION\n@keyframes snapping-right-pincer {\n  10% { transform: rotate(-30deg); }\n  90% { transform: rotate(-30deg); }\n}\n\n@keyframes snapping-right-pincer-secondPart {\n  10% { transform: rotate(0deg); }\n  90% { transform: rotate(0deg); }\n}\n\n@keyframes snapping-right-pincer-thirdPart {\n  10% { transform: rotate(10deg); }\n  90% { transform: rotate(10deg); }\n}\n\n@keyframes snapping-right-pincer-close {\n  17.43% { transform: rotate(5deg); }\n  21.43% { transform: rotate(35deg); }\n  25.43% { transform: rotate(5deg); }\n  40.29% { transform: rotate(5deg); }\n  44.29% { transform: rotate(35deg); }\n  48.29% { transform: rotate(5deg); }\n  63.15% { transform: rotate(5deg); }\n  67.15% { transform: rotate(35deg); }\n  71.15% { transform: rotate(5deg); }\n  74.58% { transform: rotate(5deg); }\n  78.58% { transform: rotate(35deg); }\n  82.58% { transform: rotate(5deg); }\n}\n\n@keyframes snapping-left-pincer {\n  10% { transform: rotate(30deg); }\n  90% { transform: rotate(30deg); }\n}\n\n@keyframes snapping-left-pincer-secondPart {\n  10% { transform: rotate(0deg); }\n  90% { transform: rotate(0deg); }\n}\n\n@keyframes snapping-left-pincer-thirdPart {\n  10% { transform: rotate(-10deg); }\n  90% { transform: rotate(-10deg); }\n}\n\n@keyframes snapping-left-pincer-close {\n  28.86% { transform: rotate(-5deg); }\n  32.86% { transform: rotate(-35deg); }\n  35.72% { transform: rotate(-5deg); }\n  38.58% { transform: rotate(-35deg); }\n  42.58% { transform: rotate(-5deg); }\n  51.72% { transform: rotate(-5deg); }\n  55.72% { transform: rotate(-35deg); }\n  59.72% { transform: rotate(-5deg); }\n  63.15% { transform: rotate(-5deg); }\n  67.15% { transform: rotate(-35deg); }\n  71.15% { transform: rotate(-5deg); }\n  74.58% { transform: rotate(-5deg); }\n  78.58% { transform: rotate(-35deg); }\n  82.58% { transform: rotate(-5deg); }\n}\n\n&.snapping {\n  .pincers {\n    .right-pincer {\n      animation-name: snapping-right-pincer;\n      animation-duration: 3s;\n      animation-delay: 0.5s;\n      animation-timing-function: ease-in-out;\n      * {\n        animation-duration: 3s;\n        animation-delay: 0.5s;\n        animation-timing-function: ease-in-out;\n      }\n      .second-part {\n        animation-name: snapping-right-pincer-secondPart;\n        .third-part {\n          animation-name: snapping-right-pincer-thirdPart;\n          .moving-pincer {\n            animation-name: snapping-right-pincer-close;\n            animation-timing-function: linear;\n          }\n        }\n      }\n    }\n\n    .left-pincer {\n      animation-name: snapping-left-pincer;\n      animation-duration: 3s;\n      animation-delay: 0.5s;\n      animation-timing-function: ease-in-out;\n      * {\n        animation-duration: 3s;\n        animation-delay: 0.5s;\n        animation-timing-function: ease-in-out;\n      }\n      .second-part {\n        animation-name: snapping-left-pincer-secondPart;\n        .third-part {\n          animation-name: snapping-left-pincer-thirdPart;\n          .moving-pincer {\n            animation-name: snapping-left-pincer-close;\n            animation-timing-function: linear;\n          }\n        }\n      }\n    }\n  }\n}\n}\n'], ['\n  display: flex;\n  justify-content: center;\n  width: ', 'px;\n  overflow: visible;\n  align-items: flex-start;\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation-fill-mode: both;\n  transition: transform ', 's;\n  transition-timing-function: cubic-bezier(1, 1.02, 0.76, 0.99);\n  cursor: pointer;\n  pointer-events: none;\n  \n  &.walking {\n    pointer-events: all;\n    transform: translate(', ');\n    &.paused {\n      pointer-events: none;\n    }\n  }\n\n.crab {\n  overflow: visible;\n  min-width: ', 'px;\n  pointer-events: none;\n//******LEFT LEGS ANIMATIONS******//\n// First Leg Animations\n@keyframes moveLefts-firstLeg-firstPart {\n  10% { transform: rotate(-14deg); }\n  50% { transform: rotate(13deg); }\n}\n\n@keyframes moveLefts-firstLeg-secondPart {\n  35% { transform: rotate(-25deg); }\n  50% { transform: rotate(-25deg); }\n}\n\n@keyframes moveLefts-firstLeg-thirdPart {\n  35% { transform: rotate(8deg); }\n  50% { transform: rotate(12deg); }  \n}\n\n@keyframes returnLefts-firstLeg-firstPart {\n  100% { transform: rotate(-14deg); }\n}\n\n@keyframes returnLefts-firstLeg-secondPart {\n  100% { transform: rotate(31deg); }\n}\n\n@keyframes returnLefts-firstLeg-thirdPart {\n  100% { transform: rotate(-17deg); }\n}\n\n// Second Leg Animations\n@keyframes moveLefts-secondLeg-firstPart {\n  10% { transform: rotate(-15.5deg); }\n  50% { transform: rotate(10deg); }\n}\n\n@keyframes moveLefts-secondLeg-secondPart {\n  35% { transform: rotate(-30deg); }\n  50% { transform: rotate(-30deg); }\n}\n\n@keyframes moveLefts-secondLeg-thirdPart {\n  35% { transform: rotate(8deg); }\n  50% { transform: rotate(12deg); }  \n}\n\n// Third Leg Animations\n@keyframes moveLefts-thirdLeg-firstPart {\n  10% { transform: rotate(-15.5deg); }\n  50% { transform: rotate(10deg); }\n}\n\n@keyframes moveLefts-thirdLeg-secondPart {\n  35% { transform: rotate(-35deg); }\n  50% { transform: rotate(-35deg); }\n}\n\n@keyframes moveLefts-thirdLeg-thirdPart {\n  35% { transform: rotate(-3deg); }\n  50% { transform: rotate(-3deg); }  \n}\n\n// Fourth Leg Animations\n@keyframes moveLefts-fourthLeg-firstPart {\n  10% { transform: rotate(-11deg); }\n  50% { transform: rotate(14deg); }\n}\n\n@keyframes moveLefts-fourthLeg-secondPart {\n  35% { transform: rotate(-35deg); }\n  50% { transform: rotate(-35deg); }\n}\n\n@keyframes moveLefts-fourthLeg-thirdPart {\n  35% { transform: rotate(-45deg); }\n  50% { transform: rotate(-45deg); }  \n}\n\n//******RIGHT LEGS ANIMATIONS******//\n// First Leg Animations\n@keyframes moveRights-firstLeg-firstPart {\n  10% { transform: rotate(14deg); }\n  50% { transform: rotate(-13deg); }\n}\n\n@keyframes moveRights-firstLeg-secondPart {\n  35% { transform: rotate(25deg); }\n  50% { transform: rotate(25deg); }\n}\n\n@keyframes moveRights-firstLeg-thirdPart {\n  35% { transform: rotate(-8deg); }\n  50% { transform: rotate(-12deg); }  \n}\n\n// Second Leg Animations\n@keyframes moveRights-secondLeg-firstPart {\n  10% { transform: rotate(15.5deg); }\n  50% { transform: rotate(-10deg); }\n}\n\n@keyframes moveRights-secondLeg-secondPart {\n  35% { transform: rotate(30deg); }\n  50% { transform: rotate(30deg); }\n}\n\n@keyframes moveRights-secondLeg-thirdPart {\n  35% { transform: rotate(-8deg); }\n  50% { transform: rotate(-12deg); }  \n}\n\n// Third Leg Animations\n@keyframes moveRights-thirdLeg-firstPart {\n  10% { transform: rotate(15.5deg); }\n  50% { transform: rotate(-10deg); }\n}\n\n@keyframes moveRights-thirdLeg-secondPart {\n  35% { transform: rotate(35deg); }\n  50% { transform: rotate(35deg); }\n}\n\n@keyframes moveRights-thirdLeg-thirdPart {\n  35% { transform: rotate(3deg); }\n  50% { transform: rotate(3deg); }  \n}\n\n// Fourth Leg Animations\n@keyframes moveRights-fourthLeg-firstPart {\n  10% { transform: rotate(11deg); }\n  50% { transform: rotate(-14deg); }\n}\n\n@keyframes moveRights-fourthLeg-secondPart {\n  35% { transform: rotate(35deg); }\n  50% { transform: rotate(35deg); }\n}\n\n@keyframes moveRights-fourthLeg-thirdPart {\n  35% { transform: rotate(45deg); }\n  50% { transform: rotate(45deg); }  \n}\n\n@keyframes move-shell {\n  33.33% { transform: rotate(1deg); }\n  66.66% { transform: rotate(-1deg); }\n}\n\n.legs {\n  * { animation-fill-mode: both; }\n  .left-legs {\n      .first-leg {\n          transform: rotate(-14deg);\n          transform-origin: 56.80% 61.33%;\n          .second-part {\n              transform: rotate(31deg);\n              transform-origin: 73.13% 41.79%;\n              .third-part {\n                  transform: rotate(-17deg);\n                  transform-origin: 88.45% 56.52%;\n              }\n          }\n      }\n\n      .second-leg {\n          transform: rotate(-15.5deg);\n          transform-origin: 56.20% 68.90%;\n          .second-part {\n              transform: rotate(21deg);\n              transform-origin: 70.03% 53.45%;\n              .third-part {\n                  transform: rotate(-16deg);\n                  transform-origin: 83.50% 66.55%;\n              }\n          }\n      }\n\n      .third-leg {\n          transform: rotate(-15.5deg);\n          transform-origin: 55.73% 75.86%;\n          .second-part {\n              transform: rotate(4deg);\n              transform-origin: 67.48% 63.48%;\n              .third-part {\n                  transform: rotate(3deg);\n                  transform-origin: 79.50% 75.40%;\n              }\n          }\n      }\n\n      .fourth-leg {\n          transform: rotate(-11deg);\n          transform-origin: 55.18% 81.89%;\n          .second-part {\n              transform: rotate(3.5deg);\n              transform-origin: 65.50% 71.61%;\n              .third-part {\n                  transform: rotate(-15deg);\n                  transform-origin: 76.55% 82.51%;\n              }\n          }\n      }\n  }\n\n  .right-legs {\n      .first-leg {\n          transform: rotate(14deg);\n          transform-origin: 43.20% 61.33%;\n          .second-part {\n              transform: rotate(-31deg);\n              transform-origin: 26.87% 41.79%;\n              .third-part {\n                  transform: rotate(17deg);\n                  transform-origin: 11.55% 56.52%;\n              }\n          }\n      }\n\n      .second-leg {\n          transform: rotate(15.5deg);\n          transform-origin: 43.80% 68.90%;\n          .second-part {\n              transform: rotate(-21deg);\n              transform-origin: 29.97% 53.45%;\n              .third-part {\n                  transform: rotate(16deg);\n                  transform-origin: 16.50% 66.55%;\n              }\n          }\n      }\n\n      .third-leg {\n          transform: rotate(15.5deg);\n          transform-origin: 44.27% 75.86%;\n          .second-part {\n              transform: rotate(-4deg);\n              transform-origin: 32.52% 63.48%;\n              .third-part {\n                  transform: rotate(-3deg);\n                  transform-origin: 20.50% 75.40%;\n              }\n          }\n      }\n\n      .fourth-leg {\n          transform: rotate(11deg);\n          transform-origin: 44.82% 81.89%;\n          .second-part {\n              transform: rotate(-3.5deg);\n              transform-origin: 34.50% 71.61%;\n              .third-part {\n                  transform: rotate(15deg);\n                  transform-origin: 23.45% 82.51%;\n              }\n          }\n      }\n  }\n}\n\n&.walking {\n    .legs {\n      .left-legs *, .right-legs * {\n        animation-duration: ', 's;\n        animation-iteration-count: infinite;\n      }\n      .left-legs {\n          * { animation-direction: ', '; }\n          .first-leg {\n              animation-name: moveLefts-firstLeg-firstPart;\n              animation-delay:0.125s;\n              * { animation-delay:0.125s; }\n              .second-part {\n                  animation-name: moveLefts-firstLeg-secondPart;\n                  .third-part {\n                      animation-name: moveLefts-firstLeg-thirdPart;\n                  }\n              }\n          }\n          .second-leg {\n              animation-name: moveLefts-secondLeg-firstPart;\n              animation-delay:0.375s;\n              * { animation-delay:0.375s; }\n              .second-part {\n                  animation-name: moveLefts-secondLeg-secondPart;\n                  .third-part {\n                      animation-name: moveLefts-secondLeg-thirdPart;\n                  }\n              }\n          }\n          .third-leg {\n              animation-name: moveLefts-thirdLeg-firstPart;\n              .second-part {\n                  animation-name: moveLefts-thirdLeg-secondPart;\n                  .third-part {\n                      animation-name: moveLefts-thirdLeg-thirdPart;\n                  }\n              }\n          }\n\n          .fourth-leg {\n              animation-name: moveLefts-fourthLeg-firstPart;\n              animation-delay:0.25s;\n              * { animation-delay:0.25s; }\n              .second-part {\n                  animation-name: moveLefts-fourthLeg-secondPart;\n                  .third-part {\n                      animation-name: moveLefts-fourthLeg-thirdPart;\n                  }\n              }\n          }\n      }\n      .right-legs {\n          * { animation-direction: ', '; }\n          .first-leg {\n              animation-name: moveRights-firstLeg-firstPart;\n              animation-delay:0.255s;\n              * { animation-delay:0.255s; }\n              .second-part {\n                  animation-name: moveRights-firstLeg-secondPart;\n                  .third-part {\n                      animation-name: moveRights-firstLeg-thirdPart;\n                  }\n              }\n          }\n          .second-leg {\n              animation-name: moveRights-secondLeg-firstPart;\n              animation-delay:0.12s;\n              * { animation-delay:0.12s; }\n              .second-part {\n                  animation-name: moveRights-secondLeg-secondPart;\n                  .third-part {\n                      animation-name: moveRights-secondLeg-thirdPart;\n                  }\n              }\n          }\n          .third-leg {\n              animation-name: moveRights-thirdLeg-firstPart;\n              animation-delay:0.37s;\n              * { animation-delay:0.37s; }\n              .second-part {\n                  animation-name: moveRights-thirdLeg-secondPart;\n                  .third-part {\n                      animation-name: moveRights-thirdLeg-thirdPart;\n                  }\n              }\n          }\n\n          .fourth-leg {\n              animation-name: moveRights-fourthLeg-firstPart;\n              animation-delay:0.005s;\n              * { animation-delay:0.005s; }\n              .second-part {\n                  animation-name: moveRights-fourthLeg-secondPart;\n                  .third-part {\n                      animation-name: moveRights-fourthLeg-thirdPart;\n                  }\n              }\n          }\n      }\n  }\n  .shell {\n      transform-origin: 50% 85.07%;\n      animation-name: move-shell;\n      animation-duration: ', 's;\n      animation-iteration-count: infinite;\n      pointer-events: all;\n      cursor: pointer;\n  }\n\n  &.paused {\n    .legs *, .shell {\n      animation-play-state: paused;\n      pointer-events: none;\n    }\n  }\n}\n\n.pincers {\n  .left-pincer {\n    transform: rotate(20deg);\n    transform-origin: 55.28% 54.88%;\n    .second-part {\n      transform: rotate(-20deg);\n      transform-origin: 62.03% 43.22%;\n      .third-part {\n        transform: rotate(-75deg);\n        transform-origin: 64.93% 32.28%;\n        .moving-pincer {\n          transform: rotate(5deg);\n          transform-origin: 68.85% 19.08%;\n        }\n      }\n    }\n  }\n  .right-pincer {\n    transform: rotate(-20deg);\n    transform-origin: 44.70% 54.88%;\n    .second-part {\n      transform: rotate(20deg);\n      transform-origin: 37.65% 42.20%;\n      .third-part {\n        transform: rotate(20deg);\n        transform-origin: 34.38% 29.77%;\n        .moving-pincer {\n          transform: rotate(5deg);\n          transform-origin: 29.90% 14.78%;\n        }\n      }\n    }\n  }\n}\n\n.mouth {\n  .outer-mouth {\n    .right-mouth {\n      transform-origin: 50% 45.01%;\n    }\n    .left-mouth {\n      transform-origin: 50% 45.01%;\n    }\n  }\n}\n\n@keyframes left-eye {\n  0% { transform: rotate(23deg); }\n  5% { transform: rotate(23deg); }\n  7% { transform: rotate(27deg); }\n  10% { transform: rotate(20deg); }\n  25% { transform: rotate(20deg); }\n  30% { transform: rotate(-10deg); }\n  45% { transform: rotate(-10deg); }\n  55% { transform: rotate(10deg); }\n  75% { transform: rotate(-10deg); }\n  80% { transform: rotate(-20deg); }\n  85% { transform: rotate(23deg); }\n  100% { transform: rotate(23deg); }\n}\n\n@keyframes right-eye {\n  0% { transform: rotate(-10deg); }\n  7% { transform: rotate(-15deg); }\n  10% { transform: rotate(10deg); }\n  14% { transform: rotate(29deg); }\n  29% { transform: rotate(2deg); }\n  33% { transform: rotate(-20deg); }\n  44% { transform: rotate(10deg); }\n  51% { transform: rotate(-20deg); }\n  73% { transform: rotate(-25deg); }\n  81% { transform: rotate(-4deg); }\n  86% { transform: rotate(-10deg); }\n  100% { transform: rotate(-10deg); }\n}\n\n.eyes {\n  * {\n    animation-iteration-count: infinite;\n    animation-direction: normal;\n  }\n  .left-eye {\n    transform: rotate(23deg);\n    transform-origin: 59.88% 28.34%;\n    animation-name: left-eye;\n    animation-duration: 9s;\n  }\n\n  .right-eye {\n    transform: rotate(-10deg);\n    transform-origin: 40.13% 28.34%;\n    animation-name: right-eye;\n    animation-duration: 8.5s;\n  }\n}\n\n// EATING ANIMATION\n@keyframes eating-right-pincer {\n  25% { transform: rotate(40deg); }\n  50% { transform: rotate(-20deg); }\n}\n\n@keyframes eating-right-pincer-secondPart {\n  25% { transform: rotate(-30deg); }\n  50% { transform: rotate(20deg); }\n  70% { transform: rotate(70deg); }\n  75% { transform: rotate(70deg); }\n}\n\n@keyframes eating-right-pincer-thirdPart {\n  25% { transform: rotate(-10deg); }\n  50% { transform: rotate(20deg); }\n  70% { transform: rotate(40deg); }\n  75% { transform: rotate(40deg); }\n}\n\n@keyframes eating-right-pincer-close {\n  17% { transform: rotate(-5deg); }\n  20% { transform: rotate(35deg); }\n  50% { transform: rotate(35deg); }\n  70% { transform: rotate(35deg); }\n  75% { transform: rotate(-5deg); }\n}\n\n@keyframes eating-left-pincer {\n  33.33% { transform: rotate(20deg); }\n  46.66% { transform: rotate(5deg); }\n  50% { transform: rotate(5deg); }\n  60% { transform: rotate(0deg); }\n  90% { transform: rotate(0deg); }\n}\n\n@keyframes eating-left-pincer-secondPart {\n  33.33% { transform: rotate(-20deg); }\n  46.66% { transform: rotate(-24deg); }\n  50% { transform: rotate(-24deg); }\n  60% { transform: rotate(-30deg); }\n  90% { transform: rotate(-30deg); }\n}\n\n@keyframes eating-left-pincer-thirdPart {\n  33.33% { transform: rotate(-75deg); }\n  46.66% { transform: rotate(-75deg); }\n  50% { transform: rotate(-75deg); }\n  60% { transform: rotate(-80deg); }\n  90% { transform: rotate(-80deg); }\n}\n\n@keyframes eating-left-pincer-close {\n  46.66% { transform: rotate(5deg); }\n  50% { transform: rotate(-25deg); }\n  90% { transform: rotate(-25deg); }\n}\n\n@keyframes eating-right-mouth {\n  10% { transform: rotate(-4deg) skewX(4deg); }\n  20% { transform: rotate(-2deg) skewX(2deg); }\n  35% { transform: rotate(-4deg) skewX(4deg); }\n  45% { transform: rotate(-2deg) skewX(2deg); }\n  60% { transform: rotate(-4deg) skewX(4deg); }\n  65% { transform: rotate(-2deg) skewX(2deg); }\n  70% { transform: rotate(-4deg) skewX(4deg); }\n  80% { transform: rotate(-2deg) skewX(2deg); }\n  90% { transform: rotate(-4deg) skewX(4deg); }\n}\n\n@keyframes eating-left-mouth {\n  12% { transform: rotate(10deg) skewX(-10deg); }\n  22% { transform: rotate(2deg) skewX(-2deg); }\n  62% { transform: rotate(10deg) skewX(-10deg); }\n  67% { transform: rotate(2deg) skewX(-2deg); }\n  92% { transform: rotate(10deg) skewX(-10deg); }\n}\n\n&.eating {\n  .pincers {\n    * { animation-timing-function: ease-in-out; }\n    .right-pincer {\n      animation-name: eating-right-pincer;\n      animation-duration: 2s;\n      animation-delay: 0.5s;\n      * {\n        animation-duration: 2s;\n        animation-delay: 0.5s;\n      }\n      .second-part {\n        animation-name: eating-right-pincer-secondPart;\n        .third-part {\n          animation-name: eating-right-pincer-thirdPart;\n          .moving-pincer {\n            animation-name: eating-right-pincer-close;\n            animation-timing-function: linear;\n          }\n        }\n      }\n    }\n\n    .left-pincer {\n      animation-name: eating-left-pincer;\n      animation-duration: 3s;\n      animation-delay: 0.5s;\n      * {\n        animation-duration: 3s;\n        animation-delay: 0.5s;\n      }\n      .second-part {\n        animation-name: eating-left-pincer-secondPart;\n        .third-part {\n          animation-name: eating-left-pincer-thirdPart;\n          .moving-pincer {\n            animation-name: eating-left-pincer-close;\n            animation-timing-function: linear;\n          }\n        }\n      }\n    }\n  }\n\n  .mouth {\n    .outer-mouth {\n      * {\n        animation-duration: 1s;\n        animation-delay: 2.5s;\n        animation-timing-function: ease-in-out;\n      }\n      .right-mouth { animation-name: eating-right-mouth; }\n      .left-mouth { animation-name: eating-left-mouth; }\n    }\n  }\n}\n\n//WAVING ANIMATION\n@keyframes waving-right-pincer {\n  /* 0% { transform: rotate(-20deg); } */\n  25% { transform: rotate(40deg); }\n  45% { transform: rotate(-40deg); }\n  65% { transform: rotate(50deg); }\n}\n\n@keyframes waving-right-pincer-secondPart {\n  25% { transform: rotate(0deg); }\n  90% { transform: rotate(0deg); }\n}\n\n@keyframes waving-right-pincer-thirdPart {\n  25% { transform: rotate(5deg); }\n  90% { transform: rotate(5deg); }\n}\n\n@keyframes waving-left-pincer {\n  25% { transform: rotate(-30deg); }\n  45% { transform: rotate(40deg); }\n  65% { transform: rotate(-50deg); }\n}\n\n@keyframes waving-left-pincer-secondPart {\n  25% { transform: rotate(5deg); }\n  80% { transform: rotate(5deg); }\n}\n\n@keyframes waving-left-pincer-thirdPart {\n  25% { transform: rotate(0deg); }\n  80% { transform: rotate(0deg); }\n}\n\n&.waving {\n  .pincers {\n    .right-pincer {\n      animation-name: waving-right-pincer;\n      animation-duration: 2.5s;\n      animation-delay: 0.5s;\n      animation-timing-function: ease-in-out;\n      * {\n      animation-duration: 2.5s;\n      animation-delay: 0.5s;\n      animation-timing-function: ease-in-out;\n      }\n      .second-part {\n        animation-name: waving-right-pincer-secondPart;\n        .third-part {\n          animation-name: waving-right-pincer-thirdPart;\n        }\n      }\n    }\n\n    .left-pincer {\n      animation-name: waving-left-pincer;\n      animation-duration: 2.5s;\n      animation-delay: 1s;\n      animation-timing-function: ease-in-out;\n      * {\n        animation-duration: 2.5s;\n        animation-delay: 1s;\n        animation-timing-function: ease-in-out;\n      }\n      .second-part {\n        animation-name: waving-left-pincer-secondPart;\n        .third-part {\n          animation-name: waving-left-pincer-thirdPart;\n        }\n      }\n    }\n  }\n}\n\n//SNAPPING ANIMATION\n@keyframes snapping-right-pincer {\n  10% { transform: rotate(-30deg); }\n  90% { transform: rotate(-30deg); }\n}\n\n@keyframes snapping-right-pincer-secondPart {\n  10% { transform: rotate(0deg); }\n  90% { transform: rotate(0deg); }\n}\n\n@keyframes snapping-right-pincer-thirdPart {\n  10% { transform: rotate(10deg); }\n  90% { transform: rotate(10deg); }\n}\n\n@keyframes snapping-right-pincer-close {\n  17.43% { transform: rotate(5deg); }\n  21.43% { transform: rotate(35deg); }\n  25.43% { transform: rotate(5deg); }\n  40.29% { transform: rotate(5deg); }\n  44.29% { transform: rotate(35deg); }\n  48.29% { transform: rotate(5deg); }\n  63.15% { transform: rotate(5deg); }\n  67.15% { transform: rotate(35deg); }\n  71.15% { transform: rotate(5deg); }\n  74.58% { transform: rotate(5deg); }\n  78.58% { transform: rotate(35deg); }\n  82.58% { transform: rotate(5deg); }\n}\n\n@keyframes snapping-left-pincer {\n  10% { transform: rotate(30deg); }\n  90% { transform: rotate(30deg); }\n}\n\n@keyframes snapping-left-pincer-secondPart {\n  10% { transform: rotate(0deg); }\n  90% { transform: rotate(0deg); }\n}\n\n@keyframes snapping-left-pincer-thirdPart {\n  10% { transform: rotate(-10deg); }\n  90% { transform: rotate(-10deg); }\n}\n\n@keyframes snapping-left-pincer-close {\n  28.86% { transform: rotate(-5deg); }\n  32.86% { transform: rotate(-35deg); }\n  35.72% { transform: rotate(-5deg); }\n  38.58% { transform: rotate(-35deg); }\n  42.58% { transform: rotate(-5deg); }\n  51.72% { transform: rotate(-5deg); }\n  55.72% { transform: rotate(-35deg); }\n  59.72% { transform: rotate(-5deg); }\n  63.15% { transform: rotate(-5deg); }\n  67.15% { transform: rotate(-35deg); }\n  71.15% { transform: rotate(-5deg); }\n  74.58% { transform: rotate(-5deg); }\n  78.58% { transform: rotate(-35deg); }\n  82.58% { transform: rotate(-5deg); }\n}\n\n&.snapping {\n  .pincers {\n    .right-pincer {\n      animation-name: snapping-right-pincer;\n      animation-duration: 3s;\n      animation-delay: 0.5s;\n      animation-timing-function: ease-in-out;\n      * {\n        animation-duration: 3s;\n        animation-delay: 0.5s;\n        animation-timing-function: ease-in-out;\n      }\n      .second-part {\n        animation-name: snapping-right-pincer-secondPart;\n        .third-part {\n          animation-name: snapping-right-pincer-thirdPart;\n          .moving-pincer {\n            animation-name: snapping-right-pincer-close;\n            animation-timing-function: linear;\n          }\n        }\n      }\n    }\n\n    .left-pincer {\n      animation-name: snapping-left-pincer;\n      animation-duration: 3s;\n      animation-delay: 0.5s;\n      animation-timing-function: ease-in-out;\n      * {\n        animation-duration: 3s;\n        animation-delay: 0.5s;\n        animation-timing-function: ease-in-out;\n      }\n      .second-part {\n        animation-name: snapping-left-pincer-secondPart;\n        .third-part {\n          animation-name: snapping-left-pincer-thirdPart;\n          .moving-pincer {\n            animation-name: snapping-left-pincer-close;\n            animation-timing-function: linear;\n          }\n        }\n      }\n    }\n  }\n}\n}\n']);



function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var crab_UnstyledCrab = function (_Component) {
  _inherits(UnstyledCrab, _Component);

  function UnstyledCrab(props) {
    _classCallCheck(this, UnstyledCrab);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      changePincerInterval: null
    };

    _this.componentDidMount = _this.componentDidMount.bind(_this);
    _this.componentWillUnmount = _this.componentWillUnmount.bind(_this);
    return _this;
  }

  UnstyledCrab.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.base.addEventListener('transitionend', function (e) {
      _this2.props.pauseWalking();
      setTimeout(_this2.props.walk, Math.max(Math.random * 4000, 1000));
    });
    this.base.addEventListener('click', this.props.addPoint);
    this.base.querySelector('.left-pincer').addEventListener('animationend', this.props.removePincerAction);
    this.setState({ changePincerInterval: setInterval(this.props.changePincerAction, 8000) });
  };

  UnstyledCrab.prototype.componentWillUnmount = function componentWillUnmount() {
    this.base.removeEventListener('transitionend', this.props.pauseWalking);
    this.base.querySelector('.left-pincer').removeEventListener('animationend', this.props.removePincerAction);
    clearInterval(this.state.changePincerInterval);
  };

  UnstyledCrab.prototype.render = function render() {
    return Object(preact_min["h"])(
      'div',
      { id: this.props.id, className: 'crab-wrapper \n      ' + this.props.className + '  ' + (this.props.paused ? 'paused' : '') + ' ' + (this.props.walking ? 'walking' : '') },
      Object(preact_min["h"])(crab_final_default.a, {
        'data-iteration': '0',
        className: '\n            crab\n            ' + (this.props.pincerAction || '') + '\n            ' + (this.props.walking ? 'walking' : '') + '\n            ' + (this.props.paused ? 'paused' : '') + '\n            ' + this.props.direction + '\n          ' })
    );
  };

  return UnstyledCrab;
}(preact_compat_es["Component"]);

var CrabSVG = Object(styled_components_es["a" /* default */])(crab_UnstyledCrab)(_templateObject, function (props) {
  return props.screenWidth * 0.12 * 0.6;
}, function (props) {
  return Math.max(props.screenWidth * 0.12, props.width);
});

var Crab = Object(styled_components_es["a" /* default */])(crab_UnstyledCrab)(_templateObject2, function (props) {
  return props.screenWidth * 0.12 * 0.6;
}, function (props) {
  return props.walkTime;
}, function (props) {
  return props.moveTo ? props.moveTo[0] + 'px, ' + props.moveTo[1] + 'px' : '0, 0';
}, function (props) {
  return Math.max(props.screenWidth * 0.12, props.width);
}, function (props) {
  return 1 / props.difficulty * 1.5;
}, function (props) {
  return props.direction === 'right' ? 'normal' : 'reverse';
}, function (props) {
  return props.direction === 'right' ? 'reverse' : 'normal';
}, function (props) {
  return 2 / props.difficulty * 1.25;
});

/* harmony default export */ var crab = (Crab);
// CONCATENATED MODULE: ./components/pleaseRotate.jsx
var pleaseRotate__templateObject = pleaseRotate__taggedTemplateLiteralLoose(['\n'], ['\n']);



function pleaseRotate__taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }




var _ref2 = Object(preact_min["h"])(
  'div',
  { id: 'pleaseRotate' },
  Object(preact_min["h"])(
    'h1',
    null,
    'Please Rotate Your Screen'
  )
);

var UnstyledPleaseRotate = function UnstyledPleaseRotate(_ref) {
  var className = _ref.className;
  return _ref2;
};

var PleaseRotate = Object(styled_components_es["a" /* default */])(UnstyledPleaseRotate)(pleaseRotate__templateObject);

/* harmony default export */ var pleaseRotate = (PleaseRotate);
// CONCATENATED MODULE: ./components/startGame.jsx
var startGame__templateObject = startGame__taggedTemplateLiteralLoose(['\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: space-around;\nmin-height: 100vh;\nmin-width: 100vw;\n\n.crab-wrapper {\n  width: 75%;\n  position: static;\n  .crab{\n    width: 100%;\n  }\n}\n\nbutton {\n  color: white;\n  font-weight: bold;\n  font-size: 2rem;\n  line-height: initial;\n  padding: 0.5rem 0.75rem;\n}\n'], ['\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: space-around;\nmin-height: 100vh;\nmin-width: 100vw;\n\n.crab-wrapper {\n  width: 75%;\n  position: static;\n  .crab{\n    width: 100%;\n  }\n}\n\nbutton {\n  color: white;\n  font-weight: bold;\n  font-size: 2rem;\n  line-height: initial;\n  padding: 0.5rem 0.75rem;\n}\n']);



function startGame__taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }






var startGame_UnstyledStartGame = function UnstyledStartGame(_ref) {
  var className = _ref.className,
      startGame = _ref.startGame,
      pincerAction = _ref.pincerAction,
      changePincerAction = _ref.changePincerAction,
      removePincerAction = _ref.removePincerAction,
      screenWidth = _ref.screenWidth,
      width = _ref.width;
  return Object(preact_min["h"])(
    'div',
    { className: className, id: 'startGame' },
    Object(preact_min["h"])(crab, {
      walking: true,
      direction: "right",
      pincerAction: pincerAction,
      changePincerAction: changePincerAction,
      removePincerAction: removePincerAction,
      screenWidth: screenWidth,
      width: width }),
    Object(preact_min["h"])(
      'button',
      { onClick: startGame },
      'Start Game'
    )
  );
};

var StartGame = Object(styled_components_es["a" /* default */])(startGame_UnstyledStartGame)(startGame__templateObject);

/* harmony default export */ var components_startGame = (StartGame);
// CONCATENATED MODULE: ./index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index_App; });


function index__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function index__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function index__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














var index__ref = Object(preact_min["h"])('div', { id: 'inch' });

var index__ref2 = Object(preact_min["h"])(pleaseRotate, null);

var _ref3 = Object(preact_min["h"])(react_fontawesome_index_es, { icon: faCompress_default.a });

var _ref4 = Object(preact_min["h"])(react_fontawesome_index_es, { icon: faExpand_default.a });

var _ref5 = Object(preact_min["h"])(
	'h2',
	null,
	'Crab State'
);

var index_App = function (_Component) {
	index__inherits(App, _Component);

	function App(props) {
		index__classCallCheck(this, App);

		var _this = index__possibleConstructorReturn(this, _Component.call(this, props));

		_this.state = {
			pincerActions: ['eating', 'waving', 'snapping'],
			currentPincerAction: 'eating',
			walking: false,
			walkTime: 0,
			direction: 'left',
			inch: null,
			difficulty: 1,
			paused: false,
			currentPos: [0, 0],
			fullscreen: false,
			gameInit: false,
			hidingSpots: [],
			rotate: false,
			points: 0
		};

		_this.componentDidMount = _this.componentDidMount.bind(_this);
		_this.initGame = _this.initGame.bind(_this);
		_this.enterFullscreen = _this.enterFullscreen.bind(_this);
		_this.removePincerAction = _this.removePincerAction.bind(_this);
		_this.walk = _this.walk.bind(_this);
		_this.pauseWalking = _this.pauseWalking.bind(_this);
		_this.changePincerAction = _this.changePincerAction.bind(_this);
		_this.pickSpot = _this.pickSpot.bind(_this);
		_this.setHidable = _this.setHidable.bind(_this);
		_this.setRotation = _this.setRotation.bind(_this);
		_this.startGame = _this.startGame.bind(_this);
		_this.addPoint = _this.addPoint.bind(_this);
		return _this;
	}

	App.prototype.componentDidMount = function componentDidMount() {
		document.title = 'Crab Trap';
		var rotate = false;
		this.setRotation();
		window.addEventListener('resize', this.setRotation);
		var inch = document.getElementById('inch').clientHeight;
		return this.setState({ inch: inch, screenWidth: screen.width });
	};

	App.prototype.setRotation = function setRotation() {
		if (screen.orientation.type.includes('portrait')) return this.setState({ rotate: true });
		return this.setState({ rotate: false });
	};

	App.prototype.initGame = function initGame() {
		var crab = document.getElementById('crab');
		var crabDimensions = [crab.clientWidth, crab.clientHeight];
		console.log(crabDimensions);
		var shellDimensions = crab.querySelector('.shell').getBoundingClientRect();
		var cols = Math.floor(screen.width / Math.max(shellDimensions.width * Math.round(5 - this.state.difficulty / 1.75), shellDimensions.width * 2));
		var rows = Math.floor(screen.height / Math.max(shellDimensions.height * Math.round(6 - this.state.difficulty / 1.75), shellDimensions.height * 4));

		var maxCrabs = 10;
		var minCrabs = 2;

		var numCrabs = this.state.difficulty;

		var crabsMoving = Math.max(Math.round(numCrabs * Math.random() * 0.9), Math.round(numCrabs / 2));

		var hidingSpots = [];
		for (var x = 0; x < cols; x++) {
			var colWidth = screen.width / cols;
			var colCenter = colWidth / 2 + colWidth * (x + 1) - colWidth;
			var colGroup = [];

			for (var i = 0; i < rows; i++) {
				var rowHeight = screen.height / rows;
				var rowCenter = rowHeight / 2 + rowHeight * (i + 1) - rowHeight;
				var spot = {
					coords: [colCenter, rowCenter]
				};
				colGroup.push(spot);
			}
			hidingSpots.push(colGroup);
		}
		setTimeout(this.walk, 3000);
		return this.setState({
			hidingSpots: this.setHidable(hidingSpots),
			hidingSpotWidth: shellDimensions.width,
			numCrabs: numCrabs,
			crabsMoving: crabsMoving,
			crabDimensions: crabDimensions,
			gameInit: true
		});
	};

	App.prototype.setHidable = function setHidable(spots) {
		var percentHidden = 0;
		var numCols = spots.length;
		var numRows = spots[0].length;
		var minPercent = Math.min(0.5 * Math.max(this.state.difficulty * 0.33, 1), 1);
		var maxPercent = Math.min(0.66 * Math.max(this.state.difficulty * 0.33, 1), 1);
		for (var i = 0; i < numCols; i++) {
			for (var x = 0; x < numRows; x++) {
				if (percentHidden + 1 / (numCols * numRows) >= maxPercent) return spots;
				var isHidden = Math.random() * this.state.difficulty > 0.66 ? true : false;
				spots[i][x].hideable = isHidden;
				if (isHidden) {
					percentHidden += 1 / (numCols * numRows);
				}
			}
		}
		if (percentHidden < minPercent) return this.setHidable(spots);
		return spots;
	};

	App.prototype.enterFullscreen = function enterFullscreen(e) {
		e.preventDefault();

		if (document.webkitIsFullScreen) {
			document.webkitExitFullscreen();
			return this.setState({ fullscreen: false });
		}

		var main = document.querySelector('main');
		main.webkitRequestFullscreen();

		return this.setState({ fullscreen: true });
	};

	App.prototype.removePincerAction = function removePincerAction() {
		this.setState({ currentPincerAction: null });
	};

	App.prototype.pickSpot = function pickSpot() {
		var hidingSpots = this.state.hidingSpots;

		var cols = hidingSpots.length;
		var rows = hidingSpots[0].length;
		var spot = hidingSpots[Math.floor(Math.random() * cols)][Math.floor(Math.random() * rows)];

		if (spot.hideable) return spot;
		return this.pickSpot();
	};

	App.prototype.walk = function walk() {
		var spot = this.pickSpot();
		var moveTo = [spot.coords[0] - this.state.crabDimensions[0] / 2, spot.coords[1] - this.state.crabDimensions[1] / 2];

		var walkTime = Math.pow(Math.pow(Math.abs(this.state.currentPos[0] - moveTo[0]), 2) + Math.pow(Math.abs(this.state.currentPos[1] - moveTo[1]), 2), 0.5) / (this.state.inch * this.state.difficulty);

		var direction = this.state.currentPos[0] <= moveTo[0] ? 'right' : 'left';

		if (moveTo[0] === this.state.currentPos[0] && moveTo[1] === this.state.currentPos[1]) return this.walk();
		console.log('walk called');
		return this.setState({
			walking: true,
			direction: direction,
			paused: false,
			moveTo: moveTo,
			walkTime: walkTime
		});
	};

	App.prototype.pauseWalking = function pauseWalking() {
		this.setState({ paused: true, currentPos: this.state.moveTo });
	};

	App.prototype.changePincerAction = function changePincerAction() {
		var currentPincerAction = this.state.pincerActions[Math.floor(Math.random() * this.state.pincerActions.length)];
		return this.setState({ currentPincerAction: currentPincerAction });
	};

	App.prototype.startGame = function startGame(e) {
		this.enterFullscreen(e);
		this.initGame(e);
	};

	App.prototype.addPoint = function addPoint(e) {
		var points = this.state.points + 1;
		if (Math.ceil(points / 10) > this.state.difficulty) {
			this.setState({ points: points, difficulty: Math.ceil(points / 10) });
			return this.initGame();
		}
		return this.setState({ points: points });
	};

	App.prototype.render = function render() {
		var _this2 = this;

		return Object(preact_min["h"])(
			'main',
			{ className: this.props.className },
			index__ref,
			Object(preact_min["h"])(CrabSVG, { id: 'crab', className: 'crab', width: this.state.inch, screenWidth: this.state.screenWidth }),
			this.state.rotate ? index__ref2 : null,
			!this.state.fullscreen && !this.state.rotate ? Object(preact_min["h"])(components_startGame, {
				startGame: this.startGame,
				pincerAction: this.state.currentPincerAction,
				changePincerAction: this.changePincerAction,
				screenWidth: this.state.screenWidth,
				width: this.state.inch,
				removePincerAction: this.removePincerAction }) : null,
			!this.state.rotate && this.state.fullscreen && this.state.gameInit ? Object(preact_min["h"])(
				'div',
				{ id: 'gameBoard' },
				Object(preact_min["h"])(
					'div',
					{ className: 'grid' },
					this.state.hidingSpots.map(function (col) {
						return Object(preact_min["h"])(
							'div',
							{ className: 'column' },
							col.map(function (row) {
								return Object(preact_min["h"])(
									'div',
									{ className: 'row' },
									row.hideable ? Object(preact_min["h"])('div', {
										onClick: function onClick(e) {
											e.stopPropagation();console.log('this ran');
										},
										className: 'hiding-spot',
										style: '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: ' + (_this2.state.hidingSpotWidth + 20) + 'px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\theight: ' + (_this2.state.hidingSpotWidth * 1.25 + 20) + 'px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t' }) : null
								);
							})
						);
					})
				),
				Object(preact_min["h"])(
					'div',
					{ className: 'buttons' },
					Object(preact_min["h"])(
						'button',
						{ onClick: this.enterFullscreen },
						this.state.fullscreen ? _ref3 : _ref4
					)
				),
				Object(preact_min["h"])(crab, {
					addPoint: this.addPoint,
					walk: this.walk,
					walking: this.state.walking,
					walkTime: this.state.walkTime,
					pincerAction: this.state.currentPincerAction,
					changePincerAction: this.changePincerAction,
					direction: this.state.direction,
					width: this.state.inch,
					difficulty: this.state.difficulty,
					moveTo: this.state.moveTo,
					currentPos: this.state.currentPos,
					paused: this.state.paused,
					pauseWalking: this.pauseWalking,
					inch: this.state.inch,
					screenWidth: this.state.screenWidth,
					removePincerAction: this.removePincerAction }),
				Object(preact_min["h"])(
					'div',
					{ 'class': 'state' },
					_ref5,
					Object(preact_min["h"])(
						'div',
						{ className: 'details' },
						Object(preact_min["h"])(
							'p',
							null,
							'Walking: ',
							this.state.walking && this.state.paused ? 'paused' : this.state.walking.toString()
						),
						Object(preact_min["h"])(
							'p',
							null,
							'Direction: ',
							this.state.direction
						),
						Object(preact_min["h"])(
							'p',
							null,
							'Pincer Action: ',
							this.state.currentPincerAction
						),
						Object(preact_min["h"])(
							'p',
							null,
							'Game Difficulty: ',
							this.state.difficulty
						),
						Object(preact_min["h"])(
							'p',
							null,
							'Move To: ',
							this.state.moveTo ? 'X(' + this.state.moveTo[0] + ') Y(' + this.state.moveTo[1] + ')' : null
						),
						Object(preact_min["h"])(
							'p',
							null,
							'Fullscreen: ',
							this.state.fullscreen.toString()
						),
						Object(preact_min["h"])(
							'p',
							null,
							'Game Init: ',
							this.state.gameInit.toString()
						),
						Object(preact_min["h"])(
							'p',
							null,
							'Rotation: ',
							this.state.rotate.toString()
						),
						Object(preact_min["h"])(
							'p',
							null,
							' Points: ',
							this.state.points
						)
					)
				)
			) : null
		);
	};

	return App;
}(preact_compat_es["Component"]);



/***/ }),

/***/ "K96Q":
/***/ (function(module, exports) {

module.exports = { prefix: 'fal', iconName: 'expand', icon: [448, 512, [], "f065", "M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H32v116c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zM300 32h124c13.3 0 24 10.7 24 24v124c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12V64H300c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12zm148 300v124c0 13.3-10.7 24-24 24H300c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h116V332c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12zM148 480H24c-13.3 0-24-10.7-24-24V332c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v116h116c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12z"] };

/***/ }),

/***/ "KSGD":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("Q4WQ")();
}

/***/ }),

/***/ "LpuX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.3.2
 * react-is.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


Object.defineProperty(exports, "__esModule", { value: !0 });var b = "function" === typeof Symbol && Symbol["for"],
    c = b ? Symbol["for"]("react.element") : 60103,
    d = b ? Symbol["for"]("react.portal") : 60106,
    e = b ? Symbol["for"]("react.fragment") : 60107,
    f = b ? Symbol["for"]("react.strict_mode") : 60108,
    g = b ? Symbol["for"]("react.provider") : 60109,
    h = b ? Symbol["for"]("react.context") : 60110,
    k = b ? Symbol["for"]("react.async_mode") : 60111,
    l = b ? Symbol["for"]("react.forward_ref") : 60112;
function m(a) {
  if ("object" === typeof a && null !== a) {
    var n = a.$$typeof;switch (n) {case c:
        switch (a = a.type, a) {case k:case e:case f:
            return a;default:
            switch (a = a && a.$$typeof, a) {case h:case l:case g:
                return a;default:
                return n;}}case d:
        return n;}
  }
}exports.typeOf = m;exports.AsyncMode = k;exports.ContextConsumer = h;exports.ContextProvider = g;exports.Element = c;exports.ForwardRef = l;exports.Fragment = e;exports.Portal = d;exports.StrictMode = f;
exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === k || a === f || "object" === typeof a && null !== a && (a.$$typeof === g || a.$$typeof === h || a.$$typeof === l);
};exports.isAsyncMode = function (a) {
  return m(a) === k;
};exports.isContextConsumer = function (a) {
  return m(a) === h;
};exports.isContextProvider = function (a) {
  return m(a) === g;
};exports.isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};exports.isForwardRef = function (a) {
  return m(a) === l;
};
exports.isFragment = function (a) {
  return m(a) === e;
};exports.isPortal = function (a) {
  return m(a) === d;
};exports.isStrictMode = function (a) {
  return m(a) === f;
};

/***/ }),

/***/ "Q4WQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__("e6+Q");
var invariant = __webpack_require__("cxPT");
var ReactPropTypesSecret = __webpack_require__("gt/O");

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),

/***/ "Ruo5":
/***/ (function(module, exports, __webpack_require__) {

/*
 *          __        ___
 *    _____/ /___  __/ (_)____
 *   / ___/ __/ / / / / / ___/
 *  (__  ) /_/ /_/ / / (__  )
 * /____/\__/\__, /_/_/____/
 *          /____/
 *
 * light - weight css preprocessor @licence MIT
 */
(function (factory) {
	/* eslint-disable */
	 true ? module['exports'] = factory(null) : typeof define === 'function' && define['amd'] ? define(factory(null)) : window['stylis'] = factory(null);
})( /** @param {*=} options */function factory(options) {
	/* eslint-disable */

	'use strict';

	/**
  * Notes
  *
  * The ['<method name>'] pattern is used to support closure compiler
  * the jsdoc signatures are also used to the same effect
  *
  * ----
  *
  * int + int + int === n4 [faster]
  *
  * vs
  *
  * int === n1 && int === n2 && int === n3
  *
  * ----
  *
  * switch (int) { case ints...} [faster]
  *
  * vs
  *
  * if (int == 1 && int === 2 ...)
  *
  * ----
  *
  * The (first*n1 + second*n2 + third*n3) format used in the property parser
  * is a simple way to hash the sequence of characters
  * taking into account the index they occur in
  * since any number of 3 character sequences could produce duplicates.
  *
  * On the other hand sequences that are directly tied to the index of the character
  * resolve a far more accurate measure, it's also faster
  * to evaluate one condition in a switch statement
  * than three in an if statement regardless of the added math.
  *
  * This allows the vendor prefixer to be both small and fast.
  */

	var nullptn = /^\0+/g; /* matches leading null characters */
	var formatptn = /[\0\r\f]/g; /* matches new line, null and formfeed characters */
	var colonptn = /: */g; /* splits animation rules */
	var cursorptn = /zoo|gra/; /* assert cursor varient */
	var transformptn = /([,: ])(transform)/g; /* vendor prefix transform, older webkit */
	var animationptn = /,+\s*(?![^(]*[)])/g; /* splits multiple shorthand notation animations */
	var propertiesptn = / +\s*(?![^(]*[)])/g; /* animation properties */
	var elementptn = / *[\0] */g; /* selector elements */
	var selectorptn = /,\r+?/g; /* splits selectors */
	var andptn = /([\t\r\n ])*\f?&/g; /* match & */
	var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g; /* matches :global(.*) */
	var invalidptn = /\W+/g; /* removes invalid characters from keyframes */
	var keyframeptn = /@(k\w+)\s*(\S*)\s*/; /* matches @keyframes $1 */
	var plcholdrptn = /::(place)/g; /* match ::placeholder varient */
	var readonlyptn = /:(read-only)/g; /* match :read-only varient */
	var beforeptn = /\s+(?=[{\];=:>])/g; /* matches \s before ] ; = : */
	var afterptn = /([[}=:>])\s+/g; /* matches \s after characters [ } = : */
	var tailptn = /(\{[^{]+?);(?=\})/g; /* matches tail semi-colons ;} */
	var whiteptn = /\s{2,}/g; /* matches repeating whitespace */
	var pseudoptn = /([^\(])(:+) */g; /* pseudo element */
	var writingptn = /[svh]\w+-[tblr]{2}/; /* match writing mode property values */
	var gradientptn = /([\w-]+t\()/g; /* match *gradient property */
	var supportsptn = /\(\s*(.*)\s*\)/g; /* match supports (groups) */
	var propertyptn = /([\s\S]*?);/g; /* match properties leading semicolon */
	var selfptn = /-self|flex-/g; /* match flex- and -self in align-self: flex-*; */
	var pseudofmt = /[^]*?(:[rp][el]a[\w-]+)[^]*/; /* extrats :readonly or :placholder from selector */
	var trimptn = /[ \t]+$/; /* match tail whitspace */
	var dimensionptn = /stretch|:\s*\w+\-(?:conte|avail)/; /* match max/min/fit-content, fill-available
                                                        /* vendors */
	var webkit = '-webkit-';
	var moz = '-moz-';
	var ms = '-ms-';

	/* character codes */
	var SEMICOLON = 59; /* ; */
	var CLOSEBRACES = 125; /* } */
	var OPENBRACES = 123; /* { */
	var OPENPARENTHESES = 40; /* ( */
	var CLOSEPARENTHESES = 41; /* ) */
	var OPENBRACKET = 91; /* [ */
	var CLOSEBRACKET = 93; /* ] */
	var NEWLINE = 10; /* \n */
	var CARRIAGE = 13; /* \r */
	var TAB = 9; /* \t */
	var AT = 64; /* @ */
	var SPACE = 32; /*   */
	var AND = 38; /* & */
	var DASH = 45; /* - */
	var UNDERSCORE = 95; /* _ */
	var STAR = 42; /* * */
	var COMMA = 44; /* , */
	var COLON = 58; /* : */
	var SINGLEQUOTE = 39; /* ' */
	var DOUBLEQUOTE = 34; /* " */
	var FOWARDSLASH = 47; /* / */
	var GREATERTHAN = 62; /* > */
	var PLUS = 43; /* + */
	var TILDE = 126; /* ~ */
	var NULL = 0; /* \0 */
	var FORMFEED = 12; /* \f */
	var VERTICALTAB = 11; /* \v */

	/* special identifiers */
	var KEYFRAME = 107; /* k */
	var MEDIA = 109; /* m */
	var SUPPORTS = 115; /* s */
	var PLACEHOLDER = 112; /* p */
	var READONLY = 111; /* o */
	var IMPORT = 169; /* <at>i */
	var CHARSET = 163; /* <at>c */
	var DOCUMENT = 100; /* <at>d */
	var PAGE = 112; /* <at>p */

	var column = 1; /* current column */
	var line = 1; /* current line numebr */
	var pattern = 0; /* :pattern */

	var cascade = 1; /* #id h1 h2 vs h1#id h2#id  */
	var prefix = 1; /* vendor prefix */
	var escape = 1; /* escape :global() pattern */
	var compress = 0; /* compress output */
	var semicolon = 0; /* no/semicolon option */
	var preserve = 0; /* preserve empty selectors */

	/* empty reference */
	var array = [];

	/* plugins */
	var plugins = [];
	var plugged = 0;
	var should = null;

	/* plugin context */
	var POSTS = -2;
	var PREPS = -1;
	var UNKWN = 0;
	var PROPS = 1;
	var BLCKS = 2;
	var ATRUL = 3;

	/* plugin newline context */
	var unkwn = 0;

	/* keyframe animation */
	var keyed = 1;
	var key = '';

	/* selector namespace */
	var nscopealt = '';
	var nscope = '';

	/**
  * Compile
  *
  * @param {Array<string>} parent
  * @param {Array<string>} current
  * @param {string} body
  * @param {number} id
  * @param {number} depth
  * @return {string}
  */
	function compile(parent, current, body, id, depth) {
		var bracket = 0; /* brackets [] */
		var comment = 0; /* comments /* // or /* */
		var parentheses = 0; /* functions () */
		var quote = 0; /* quotes '', "" */

		var first = 0; /* first character code */
		var second = 0; /* second character code */
		var code = 0; /* current character code */
		var tail = 0; /* previous character code */
		var trail = 0; /* character before previous code */
		var peak = 0; /* previous non-whitespace code */

		var counter = 0; /* count sequence termination */
		var context = 0; /* track current context */
		var atrule = 0; /* track @at-rule context */
		var pseudo = 0; /* track pseudo token index */
		var caret = 0; /* current character index */
		var format = 0; /* control character formating context */
		var insert = 0; /* auto semicolon insertion */
		var invert = 0; /* inverted selector pattern */
		var length = 0; /* generic length address */
		var eof = body.length; /* end of file(length) */
		var eol = eof - 1; /* end of file(characters) */

		var char = ''; /* current character */
		var chars = ''; /* current buffer of characters */
		var child = ''; /* next buffer of characters */
		var out = ''; /* compiled body */
		var children = ''; /* compiled children */
		var flat = ''; /* compiled leafs */
		var selector; /* generic selector address */
		var result; /* generic address */

		// ...build body
		while (caret < eof) {
			code = body.charCodeAt(caret);

			// eof varient
			if (caret === eol) {
				// last character + noop context, add synthetic padding for noop context to terminate
				if (comment + quote + parentheses + bracket !== 0) {
					if (comment !== 0) {
						code = comment === FOWARDSLASH ? NEWLINE : FOWARDSLASH;
					}

					quote = parentheses = bracket = 0;
					eof++;
					eol++;
				}
			}

			if (comment + quote + parentheses + bracket === 0) {
				// eof varient
				if (caret === eol) {
					if (format > 0) {
						chars = chars.replace(formatptn, '');
					}

					if (chars.trim().length > 0) {
						switch (code) {
							case SPACE:
							case TAB:
							case SEMICOLON:
							case CARRIAGE:
							case NEWLINE:
								{
									break;
								}
							default:
								{
									chars += body.charAt(caret);
								}
						}

						code = SEMICOLON;
					}
				}

				// auto semicolon insertion
				if (insert === 1) {
					switch (code) {
						// false flags
						case OPENBRACES:
						case CLOSEBRACES:
						case SEMICOLON:
						case DOUBLEQUOTE:
						case SINGLEQUOTE:
						case OPENPARENTHESES:
						case CLOSEPARENTHESES:
						case COMMA:
							{
								insert = 0;
							}
						// ignore
						case TAB:
						case CARRIAGE:
						case NEWLINE:
						case SPACE:
							{
								break;
							}
						// valid
						default:
							{
								insert = 0;
								length = caret;
								first = code;
								caret--;
								code = SEMICOLON;

								while (length < eof) {
									switch (body.charCodeAt(length++)) {
										case NEWLINE:
										case CARRIAGE:
										case SEMICOLON:
											{
												++caret;
												code = first;
												length = eof;
												break;
											}
										case COLON:
											{
												if (format > 0) {
													++caret;
													code = first;
												}
											}
										case OPENBRACES:
											{
												length = eof;
											}
									}
								}
							}
					}
				}

				// token varient
				switch (code) {
					case OPENBRACES:
						{
							chars = chars.trim();
							first = chars.charCodeAt(0);
							counter = 1;
							length = ++caret;

							while (caret < eof) {
								code = body.charCodeAt(caret);

								switch (code) {
									case OPENBRACES:
										{
											counter++;
											break;
										}
									case CLOSEBRACES:
										{
											counter--;
											break;
										}
								}

								if (counter === 0) {
									break;
								}

								caret++;
							}

							child = body.substring(length, caret);

							if (first === NULL) {
								first = (chars = chars.replace(nullptn, '').trim()).charCodeAt(0);
							}

							switch (first) {
								// @at-rule
								case AT:
									{
										if (format > 0) {
											chars = chars.replace(formatptn, '');
										}

										second = chars.charCodeAt(1);

										switch (second) {
											case DOCUMENT:
											case MEDIA:
											case SUPPORTS:
											case DASH:
												{
													selector = current;
													break;
												}
											default:
												{
													selector = array;
												}
										}

										child = compile(current, selector, child, second, depth + 1);
										length = child.length;

										// preserve empty @at-rule
										if (preserve > 0 && length === 0) {
											length = chars.length;
										}

										// execute plugins, @at-rule context
										if (plugged > 0) {
											selector = select(array, chars, invert);
											result = proxy(ATRUL, child, selector, current, line, column, length, second, depth, id);
											chars = selector.join('');

											if (result !== void 0) {
												if ((length = (child = result.trim()).length) === 0) {
													second = 0;
													child = '';
												}
											}
										}

										if (length > 0) {
											switch (second) {
												case SUPPORTS:
													{
														chars = chars.replace(supportsptn, supports);
													}
												case DOCUMENT:
												case MEDIA:
												case DASH:
													{
														child = chars + '{' + child + '}';
														break;
													}
												case KEYFRAME:
													{
														chars = chars.replace(keyframeptn, '$1 $2' + (keyed > 0 ? key : ''));
														child = chars + '{' + child + '}';

														if (prefix === 1 || prefix === 2 && vendor('@' + child, 3)) {
															child = '@' + webkit + child + '@' + child;
														} else {
															child = '@' + child;
														}
														break;
													}
												default:
													{
														child = chars + child;

														if (id === PAGE) {
															child = (out += child, '');
														}
													}
											}
										} else {
											child = '';
										}

										break;
									}
								// selector
								default:
									{
										child = compile(current, select(current, chars, invert), child, id, depth + 1);
									}
							}

							children += child;

							// reset
							context = 0;
							insert = 0;
							pseudo = 0;
							format = 0;
							invert = 0;
							atrule = 0;
							chars = '';
							child = '';
							code = body.charCodeAt(++caret);
							break;
						}
					case CLOSEBRACES:
					case SEMICOLON:
						{
							chars = (format > 0 ? chars.replace(formatptn, '') : chars).trim();

							if ((length = chars.length) > 1) {
								// monkey-patch missing colon
								if (pseudo === 0) {
									first = chars.charCodeAt(0);

									// first character is a letter or dash, buffer has a space character
									if (first === DASH || first > 96 && first < 123) {
										length = (chars = chars.replace(' ', ':')).length;
									}
								}

								// execute plugins, property context
								if (plugged > 0) {
									if ((result = proxy(PROPS, chars, current, parent, line, column, out.length, id, depth, id)) !== void 0) {
										if ((length = (chars = result.trim()).length) === 0) {
											chars = '\0\0';
										}
									}
								}

								first = chars.charCodeAt(0);
								second = chars.charCodeAt(1);

								switch (first + second) {
									case NULL:
										{
											break;
										}
									case IMPORT:
									case CHARSET:
										{
											flat += chars + body.charAt(caret);
											break;
										}
									default:
										{
											if (chars.charCodeAt(length - 1) === COLON) break;

											out += property(chars, first, second, chars.charCodeAt(2));
										}
								}
							}

							// reset
							context = 0;
							insert = 0;
							pseudo = 0;
							format = 0;
							invert = 0;
							chars = '';
							code = body.charCodeAt(++caret);
							break;
						}
				}
			}

			// parse characters
			switch (code) {
				case CARRIAGE:
				case NEWLINE:
					{
						// auto insert semicolon
						if (comment + quote + parentheses + bracket + semicolon === 0) {
							// valid non-whitespace characters that
							// may precede a newline
							switch (peak) {
								case CLOSEPARENTHESES:
								case SINGLEQUOTE:
								case DOUBLEQUOTE:
								case AT:
								case TILDE:
								case GREATERTHAN:
								case STAR:
								case PLUS:
								case FOWARDSLASH:
								case DASH:
								case COLON:
								case COMMA:
								case SEMICOLON:
								case OPENBRACES:
								case CLOSEBRACES:
									{
										break;
									}
								default:
									{
										// current buffer has a colon
										if (pseudo > 0) {
											insert = 1;
										}
									}
							}
						}

						// terminate line comment
						if (comment === FOWARDSLASH) {
							comment = 0;
						} else if (cascade + context === 0) {
							format = 1;
							chars += '\0';
						}

						// execute plugins, newline context
						if (plugged * unkwn > 0) {
							proxy(UNKWN, chars, current, parent, line, column, out.length, id, depth, id);
						}

						// next line, reset column position
						column = 1;
						line++;
						break;
					}
				case SEMICOLON:
				case CLOSEBRACES:
					{
						if (comment + quote + parentheses + bracket === 0) {
							column++;
							break;
						}
					}
				default:
					{
						// increment column position
						column++;

						// current character
						char = body.charAt(caret);

						// remove comments, escape functions, strings, attributes and prepare selectors
						switch (code) {
							case TAB:
							case SPACE:
								{
									if (quote + bracket + comment === 0) {
										switch (tail) {
											case COMMA:
											case COLON:
											case TAB:
											case SPACE:
												{
													char = '';
													break;
												}
											default:
												{
													if (code !== SPACE) {
														char = ' ';
													}
												}
										}
									}
									break;
								}
							// escape breaking control characters
							case NULL:
								{
									char = '\\0';
									break;
								}
							case FORMFEED:
								{
									char = '\\f';
									break;
								}
							case VERTICALTAB:
								{
									char = '\\v';
									break;
								}
							// &
							case AND:
								{
									// inverted selector pattern i.e html &
									if (quote + comment + bracket === 0 && cascade > 0) {
										invert = 1;
										format = 1;
										char = '\f' + char;
									}
									break;
								}
							// ::p<l>aceholder, l
							// :read-on<l>y, l
							case 108:
								{
									if (quote + comment + bracket + pattern === 0 && pseudo > 0) {
										switch (caret - pseudo) {
											// ::placeholder
											case 2:
												{
													if (tail === PLACEHOLDER && body.charCodeAt(caret - 3) === COLON) {
														pattern = tail;
													}
												}
											// :read-only
											case 8:
												{
													if (trail === READONLY) {
														pattern = trail;
													}
												}
										}
									}
									break;
								}
							// :<pattern>
							case COLON:
								{
									if (quote + comment + bracket === 0) {
										pseudo = caret;
									}
									break;
								}
							// selectors
							case COMMA:
								{
									if (comment + parentheses + quote + bracket === 0) {
										format = 1;
										char += '\r';
									}
									break;
								}
							// quotes
							case DOUBLEQUOTE:
								{
									if (comment === 0) {
										quote = quote === code ? 0 : quote === 0 ? code : quote;
									}
									break;
								}
							case SINGLEQUOTE:
								{
									if (comment === 0) {
										quote = quote === code ? 0 : quote === 0 ? code : quote;
									}
									break;
								}
							// attributes
							case OPENBRACKET:
								{
									if (quote + comment + parentheses === 0) {
										bracket++;
									}
									break;
								}
							case CLOSEBRACKET:
								{
									if (quote + comment + parentheses === 0) {
										bracket--;
									}
									break;
								}
							// functions
							case CLOSEPARENTHESES:
								{
									if (quote + comment + bracket === 0) {
										parentheses--;
									}
									break;
								}
							case OPENPARENTHESES:
								{
									if (quote + comment + bracket === 0) {
										if (context === 0) {
											switch (tail * 2 + trail * 3) {
												// :matches
												case 533:
													{
														break;
													}
												// :global, :not, :nth-child etc...
												default:
													{
														counter = 0;
														context = 1;
													}
											}
										}

										parentheses++;
									}
									break;
								}
							case AT:
								{
									if (comment + parentheses + quote + bracket + pseudo + atrule === 0) {
										atrule = 1;
									}
									break;
								}
							// block/line comments
							case STAR:
							case FOWARDSLASH:
								{
									if (quote + bracket + parentheses > 0) {
										break;
									}

									switch (comment) {
										// initialize line/block comment context
										case 0:
											{
												switch (code * 2 + body.charCodeAt(caret + 1) * 3) {
													// //
													case 235:
														{
															comment = FOWARDSLASH;
															break;
														}
													// /*
													case 220:
														{
															length = caret;
															comment = STAR;
															break;
														}
												}
												break;
											}
										// end block comment context
										case STAR:
											{
												if (code === FOWARDSLASH && tail === STAR) {
													// /*<!> ... */, !
													if (body.charCodeAt(length + 2) === 33) {
														out += body.substring(length, caret + 1);
													}
													char = '';
													comment = 0;
												}
											}
									}
								}
						}

						// ignore comment blocks
						if (comment === 0) {
							// aggressive isolation mode, divide each individual selector
							// including selectors in :not function but excluding selectors in :global function
							if (cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON) {
								switch (code) {
									case COMMA:
									case TILDE:
									case GREATERTHAN:
									case PLUS:
									case CLOSEPARENTHESES:
									case OPENPARENTHESES:
										{
											if (context === 0) {
												// outside of an isolated context i.e nth-child(<...>)
												switch (tail) {
													case TAB:
													case SPACE:
													case NEWLINE:
													case CARRIAGE:
														{
															char = char + '\0';
															break;
														}
													default:
														{
															char = '\0' + char + (code === COMMA ? '' : '\0');
														}
												}
												format = 1;
											} else {
												// within an isolated context, sleep untill it's terminated
												switch (code) {
													case OPENPARENTHESES:
														{
															context = ++counter;
															break;
														}
													case CLOSEPARENTHESES:
														{
															if ((context = --counter) === 0) {
																format = 1;
																char += '\0';
															}
															break;
														}
												}
											}
											break;
										}
									case TAB:
									case SPACE:
										{
											switch (tail) {
												case NULL:
												case OPENBRACES:
												case CLOSEBRACES:
												case SEMICOLON:
												case COMMA:
												case FORMFEED:
												case TAB:
												case SPACE:
												case NEWLINE:
												case CARRIAGE:
													{
														break;
													}
												default:
													{
														// ignore in isolated contexts
														if (context === 0) {
															format = 1;
															char += '\0';
														}
													}
											}
										}
								}
							}

							// concat buffer of characters
							chars += char;

							// previous non-whitespace character code
							if (code !== SPACE && code !== TAB) {
								peak = code;
							}
						}
					}
			}

			// tail character codes
			trail = tail;
			tail = code;

			// visit every character
			caret++;
		}

		length = out.length;

		// preserve empty selector
		if (preserve > 0) {
			if (length === 0 && children.length === 0 && current[0].length === 0 === false) {
				if (id !== MEDIA || current.length === 1 && (cascade > 0 ? nscopealt : nscope) === current[0]) {
					length = current.join(',').length + 2;
				}
			}
		}

		if (length > 0) {
			// cascade isolation mode?
			selector = cascade === 0 && id !== KEYFRAME ? isolate(current) : current;

			// execute plugins, block context
			if (plugged > 0) {
				result = proxy(BLCKS, out, selector, parent, line, column, length, id, depth, id);

				if (result !== void 0 && (out = result).length === 0) {
					return flat + out + children;
				}
			}

			out = selector.join(',') + '{' + out + '}';

			if (prefix * pattern !== 0) {
				if (prefix === 2 && !vendor(out, 2)) pattern = 0;

				switch (pattern) {
					// ::read-only
					case READONLY:
						{
							out = out.replace(readonlyptn, ':' + moz + '$1') + out;
							break;
						}
					// ::placeholder
					case PLACEHOLDER:
						{
							out = out.replace(plcholdrptn, '::' + webkit + 'input-$1') + out.replace(plcholdrptn, '::' + moz + '$1') + out.replace(plcholdrptn, ':' + ms + 'input-$1') + out;
							break;
						}
				}

				pattern = 0;
			}
		}

		return flat + out + children;
	}

	/**
  * Select
  *
  * @param {Array<string>} parent
  * @param {string} current
  * @param {number} invert
  * @return {Array<string>}
  */
	function select(parent, current, invert) {
		var selectors = current.trim().split(selectorptn);
		var out = selectors;

		var length = selectors.length;
		var l = parent.length;

		switch (l) {
			// 0-1 parent selectors
			case 0:
			case 1:
				{
					for (var i = 0, selector = l === 0 ? '' : parent[0] + ' '; i < length; ++i) {
						out[i] = scope(selector, out[i], invert, l).trim();
					}
					break;
				}
			// >2 parent selectors, nested
			default:
				{
					for (var i = 0, j = 0, out = []; i < length; ++i) {
						for (var k = 0; k < l; ++k) {
							out[j++] = scope(parent[k] + ' ', selectors[i], invert, l).trim();
						}
					}
				}
		}

		return out;
	}

	/**
  * Scope
  *
  * @param {string} parent
  * @param {string} current
  * @param {number} invert
  * @param {number} level
  * @return {string}
  */
	function scope(parent, current, invert, level) {
		var selector = current;
		var code = selector.charCodeAt(0);

		// trim leading whitespace
		if (code < 33) {
			code = (selector = selector.trim()).charCodeAt(0);
		}

		switch (code) {
			// &
			case AND:
				{
					switch (cascade + level) {
						case 0:
						case 1:
							{
								if (parent.trim().length === 0) {
									break;
								}
							}
						default:
							{
								return selector.replace(andptn, '$1' + parent.trim());
							}
					}
					break;
				}
			// :
			case COLON:
				{
					switch (selector.charCodeAt(1)) {
						// g in :global
						case 103:
							{
								if (escape > 0 && cascade > 0) {
									return selector.replace(escapeptn, '$1').replace(andptn, '$1' + nscope);
								}
								break;
							}
						default:
							{
								// :hover
								return parent.trim() + selector.replace(andptn, '$1' + parent.trim());
							}
					}
				}
			default:
				{
					// html &
					if (invert * cascade > 0 && selector.indexOf('\f') > 0) {
						return selector.replace(andptn, (parent.charCodeAt(0) === COLON ? '' : '$1') + parent.trim());
					}
				}
		}

		return parent + selector;
	}

	/**
  * Property
  *
  * @param {string} input
  * @param {number} first
  * @param {number} second
  * @param {number} third
  * @return {string}
  */
	function property(input, first, second, third) {
		var index = 0;
		var out = input + ';';
		var hash = first * 2 + second * 3 + third * 4;
		var cache;

		// animation: a, n, i characters
		if (hash === 944) {
			return animation(out);
		} else if (prefix === 0 || prefix === 2 && !vendor(out, 1)) {
			return out;
		}

		// vendor prefix
		switch (hash) {
			// text-decoration/text-size-adjust/text-shadow/text-align/text-transform: t, e, x
			case 1015:
				{
					// text-shadow/text-align/text-transform, a
					return out.charCodeAt(10) === 97 ? webkit + out + out : out;
				}
			// filter/fill f, i, l
			case 951:
				{
					// filter, t
					return out.charCodeAt(3) === 116 ? webkit + out + out : out;
				}
			// color/column, c, o, l
			case 963:
				{
					// column, n
					return out.charCodeAt(5) === 110 ? webkit + out + out : out;
				}
			// box-decoration-break, b, o, x
			case 1009:
				{
					if (out.charCodeAt(4) !== 100) {
						break;
					}
				}
			// mask, m, a, s
			// clip-path, c, l, i
			case 969:
			case 942:
				{
					return webkit + out + out;
				}
			// appearance: a, p, p
			case 978:
				{
					return webkit + out + moz + out + out;
				}
			// hyphens: h, y, p
			// user-select: u, s, e
			case 1019:
			case 983:
				{
					return webkit + out + moz + out + ms + out + out;
				}
			// background/backface-visibility, b, a, c
			case 883:
				{
					// backface-visibility, -
					return out.charCodeAt(8) === DASH ? webkit + out + out : out;
				}
			// flex: f, l, e
			case 932:
				{
					if (out.charCodeAt(4) === DASH) {
						switch (out.charCodeAt(5)) {
							// flex-grow, g
							case 103:
								{
									return webkit + 'box-' + out.replace('-grow', '') + webkit + out + ms + out.replace('grow', 'positive') + out;
								}
							// flex-shrink, s
							case 115:
								{
									return webkit + out + ms + out.replace('shrink', 'negative') + out;
								}
							// flex-basis, b
							case 98:
								{
									return webkit + out + ms + out.replace('basis', 'preferred-size') + out;
								}
						}
					}

					return webkit + out + ms + out + out;
				}
			// order: o, r, d
			case 964:
				{
					return webkit + out + ms + 'flex' + '-' + out + out;
				}
			// justify-items/justify-content, j, u, s
			case 1023:
				{
					// justify-content, c
					if (out.charCodeAt(8) !== 99) {
						break;
					}

					cache = out.substring(out.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
					return webkit + 'box-pack' + cache + webkit + out + ms + 'flex-pack' + cache + out;
				}
			// cursor, c, u, r
			case 1005:
				{
					return cursorptn.test(out) ? out.replace(colonptn, ':' + webkit) + out.replace(colonptn, ':' + moz) + out : out;
				}
			// writing-mode, w, r, i
			case 1000:
				{
					cache = out.substring(13).trim();
					index = cache.indexOf('-') + 1;

					switch (cache.charCodeAt(0) + cache.charCodeAt(index)) {
						// vertical-lr
						case 226:
							{
								cache = out.replace(writingptn, 'tb');
								break;
							}
						// vertical-rl
						case 232:
							{
								cache = out.replace(writingptn, 'tb-rl');
								break;
							}
						// horizontal-tb
						case 220:
							{
								cache = out.replace(writingptn, 'lr');
								break;
							}
						default:
							{
								return out;
							}
					}

					return webkit + out + ms + cache + out;
				}
			// position: sticky
			case 1017:
				{
					if (out.indexOf('sticky', 9) === -1) {
						return out;
					}
				}
			// display(flex/inline-flex/inline-box): d, i, s
			case 975:
				{
					index = (out = input).length - 10;
					cache = (out.charCodeAt(index) === 33 ? out.substring(0, index) : out).substring(input.indexOf(':', 7) + 1).trim();

					switch (hash = cache.charCodeAt(0) + (cache.charCodeAt(7) | 0)) {
						// inline-
						case 203:
							{
								// inline-box
								if (cache.charCodeAt(8) < 111) {
									break;
								}
							}
						// inline-box/sticky
						case 115:
							{
								out = out.replace(cache, webkit + cache) + ';' + out;
								break;
							}
						// inline-flex
						// flex
						case 207:
						case 102:
							{
								out = out.replace(cache, webkit + (hash > 102 ? 'inline-' : '') + 'box') + ';' + out.replace(cache, webkit + cache) + ';' + out.replace(cache, ms + cache + 'box') + ';' + out;
							}
					}

					return out + ';';
				}
			// align-items, align-center, align-self: a, l, i, -
			case 938:
				{
					if (out.charCodeAt(5) === DASH) {
						switch (out.charCodeAt(6)) {
							// align-items, i
							case 105:
								{
									cache = out.replace('-items', '');
									return webkit + out + webkit + 'box-' + cache + ms + 'flex-' + cache + out;
								}
							// align-self, s
							case 115:
								{
									return webkit + out + ms + 'flex-item-' + out.replace(selfptn, '') + out;
								}
							// align-content
							default:
								{
									return webkit + out + ms + 'flex-line-pack' + out.replace('align-content', '').replace(selfptn, '') + out;
								}
						}
					}
					break;
				}
			// min/max
			case 973:
			case 989:
				{
					// min-/max- height/width/block-size/inline-size
					if (out.charCodeAt(3) !== DASH || out.charCodeAt(4) === 122) {
						break;
					}
				}
			// height/width: min-content / width: max-content
			case 931:
			case 953:
				{
					if (dimensionptn.test(input) === true) {
						// stretch
						if ((cache = input.substring(input.indexOf(':') + 1)).charCodeAt(0) === 115) return property(input.replace('stretch', 'fill-available'), first, second, third).replace(':fill-available', ':stretch');else return out.replace(cache, webkit + cache) + out.replace(cache, moz + cache.replace('fill-', '')) + out;
					}
					break;
				}
			// transform, transition: t, r, a
			case 962:
				{
					out = webkit + out + (out.charCodeAt(5) === 102 ? ms + out : '') + out;

					// transitions
					if (second + third === 211 && out.charCodeAt(13) === 105 && out.indexOf('transform', 10) > 0) {
						return out.substring(0, out.indexOf(';', 27) + 1).replace(transformptn, '$1' + webkit + '$2') + out;
					}

					break;
				}
		}

		return out;
	}

	/**
  * Vendor
  *
  * @param {string} content
  * @param {number} context
  * @return {boolean}
  */
	function vendor(content, context) {
		var index = content.indexOf(context === 1 ? ':' : '{');
		var key = content.substring(0, context !== 3 ? index : 10);
		var value = content.substring(index + 1, content.length - 1);

		return should(context !== 2 ? key : key.replace(pseudofmt, '$1'), value, context);
	}

	/**
  * Supports
  *
  * @param {string} match
  * @param {string} group
  * @return {string}
  */
	function supports(match, group) {
		var out = property(group, group.charCodeAt(0), group.charCodeAt(1), group.charCodeAt(2));

		return out !== group + ';' ? out.replace(propertyptn, ' or ($1)').substring(4) : '(' + group + ')';
	}

	/**
  * Animation
  *
  * @param {string} input
  * @return {string}
  */
	function animation(input) {
		var length = input.length;
		var index = input.indexOf(':', 9) + 1;
		var declare = input.substring(0, index).trim();
		var out = input.substring(index, length - 1).trim();

		switch (input.charCodeAt(9) * keyed) {
			case 0:
				{
					break;
				}
			// animation-*, -
			case DASH:
				{
					// animation-name, n
					if (input.charCodeAt(10) !== 110) {
						break;
					}
				}
			// animation/animation-name
			default:
				{
					// split in case of multiple animations
					var list = out.split((out = '', animationptn));

					for (var i = 0, index = 0, length = list.length; i < length; index = 0, ++i) {
						var value = list[i];
						var items = value.split(propertiesptn);

						while (value = items[index]) {
							var peak = value.charCodeAt(0);

							if (keyed === 1 && (
							// letters
							peak > AT && peak < 90 || peak > 96 && peak < 123 || peak === UNDERSCORE ||
							// dash but not in sequence i.e --
							peak === DASH && value.charCodeAt(1) !== DASH)) {
								// not a number/function
								switch (isNaN(parseFloat(value)) + (value.indexOf('(') !== -1)) {
									case 1:
										{
											switch (value) {
												// not a valid reserved keyword
												case 'infinite':case 'alternate':case 'backwards':case 'running':
												case 'normal':case 'forwards':case 'both':case 'none':case 'linear':
												case 'ease':case 'ease-in':case 'ease-out':case 'ease-in-out':
												case 'paused':case 'reverse':case 'alternate-reverse':case 'inherit':
												case 'initial':case 'unset':case 'step-start':case 'step-end':
													{
														break;
													}
												default:
													{
														value += key;
													}
											}
										}
								}
							}

							items[index++] = value;
						}

						out += (i === 0 ? '' : ',') + items.join(' ');
					}
				}
		}

		out = declare + out + ';';

		if (prefix === 1 || prefix === 2 && vendor(out, 1)) return webkit + out + out;

		return out;
	}

	/**
  * Isolate
  *
  * @param {Array<string>} current
  */
	function isolate(current) {
		for (var i = 0, length = current.length, selector = Array(length), padding, element; i < length; ++i) {
			// split individual elements in a selector i.e h1 h2 === [h1, h2]
			var elements = current[i].split(elementptn);
			var out = '';

			for (var j = 0, size = 0, tail = 0, code = 0, l = elements.length; j < l; ++j) {
				// empty element
				if ((size = (element = elements[j]).length) === 0 && l > 1) {
					continue;
				}

				tail = out.charCodeAt(out.length - 1);
				code = element.charCodeAt(0);
				padding = '';

				if (j !== 0) {
					// determine if we need padding
					switch (tail) {
						case STAR:
						case TILDE:
						case GREATERTHAN:
						case PLUS:
						case SPACE:
						case OPENPARENTHESES:
							{
								break;
							}
						default:
							{
								padding = ' ';
							}
					}
				}

				switch (code) {
					case AND:
						{
							element = padding + nscopealt;
						}
					case TILDE:
					case GREATERTHAN:
					case PLUS:
					case SPACE:
					case CLOSEPARENTHESES:
					case OPENPARENTHESES:
						{
							break;
						}
					case OPENBRACKET:
						{
							element = padding + element + nscopealt;
							break;
						}
					case COLON:
						{
							switch (element.charCodeAt(1) * 2 + element.charCodeAt(2) * 3) {
								// :global
								case 530:
									{
										if (escape > 0) {
											element = padding + element.substring(8, size - 1);
											break;
										}
									}
								// :hover, :nth-child(), ...
								default:
									{
										if (j < 1 || elements[j - 1].length < 1) {
											element = padding + nscopealt + element;
										}
									}
							}
							break;
						}
					case COMMA:
						{
							padding = '';
						}
					default:
						{
							if (size > 1 && element.indexOf(':') > 0) {
								element = padding + element.replace(pseudoptn, '$1' + nscopealt + '$2');
							} else {
								element = padding + element + nscopealt;
							}
						}
				}

				out += element;
			}

			selector[i] = out.replace(formatptn, '').trim();
		}

		return selector;
	}

	/**
  * Proxy
  *
  * @param {number} context
  * @param {string} content
  * @param {Array<string>} selectors
  * @param {Array<string>} parents
  * @param {number} line
  * @param {number} column
  * @param {number} length
  * @param {number} id
  * @param {number} depth
  * @param {number} at
  * @return {(string|void|*)}
  */
	function proxy(context, content, selectors, parents, line, column, length, id, depth, at) {
		for (var i = 0, out = content, next; i < plugged; ++i) {
			switch (next = plugins[i].call(stylis, context, out, selectors, parents, line, column, length, id, depth, at)) {
				case void 0:
				case false:
				case true:
				case null:
					{
						break;
					}
				default:
					{
						out = next;
					}
			}
		}

		switch (out) {
			case void 0:
			case false:
			case true:
			case null:
			case content:
				{
					break;
				}
			default:
				{
					return out;
				}
		}
	}

	/**
  * Minify
  *
  * @param {(string|*)} output
  * @return {string}
  */
	function minify(output) {
		return output.replace(formatptn, '').replace(beforeptn, '').replace(afterptn, '$1').replace(tailptn, '$1').replace(whiteptn, ' ');
	}

	/**
  * Use
  *
  * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
  */
	function use(plugin) {
		switch (plugin) {
			case void 0:
			case null:
				{
					plugged = plugins.length = 0;
					break;
				}
			default:
				{
					switch (plugin.constructor) {
						case Array:
							{
								for (var i = 0, length = plugin.length; i < length; ++i) {
									use(plugin[i]);
								}
								break;
							}
						case Function:
							{
								plugins[plugged++] = plugin;
								break;
							}
						case Boolean:
							{
								unkwn = !!plugin | 0;
							}
					}
				}
		}

		return use;
	}

	/**
  * Set
  *
  * @param {*} options
  */
	function set(options) {
		for (var name in options) {
			var value = options[name];
			switch (name) {
				case 'keyframe':
					keyed = value | 0;break;
				case 'global':
					escape = value | 0;break;
				case 'cascade':
					cascade = value | 0;break;
				case 'compress':
					compress = value | 0;break;
				case 'semicolon':
					semicolon = value | 0;break;
				case 'preserve':
					preserve = value | 0;break;
				case 'prefix':
					should = null;

					if (!value) {
						prefix = 0;
					} else if (typeof value !== 'function') {
						prefix = 1;
					} else {
						prefix = 2;
						should = value;
					}
			}
		}

		return set;
	}

	/**
  * Stylis
  *
  * @param {string} selector
  * @param {string} input
  * @return {*}
  */
	function stylis(selector, input) {
		if (this !== void 0 && this.constructor === stylis) {
			return factory(selector);
		}

		// setup
		var ns = selector;
		var code = ns.charCodeAt(0);

		// trim leading whitespace
		if (code < 33) {
			code = (ns = ns.trim()).charCodeAt(0);
		}

		// keyframe/animation namespace
		if (keyed > 0) {
			key = ns.replace(invalidptn, code === OPENBRACKET ? '' : '-');
		}

		// reset, used to assert if a plugin is moneky-patching the return value
		code = 1;

		// cascade/isolate
		if (cascade === 1) {
			nscope = ns;
		} else {
			nscopealt = ns;
		}

		var selectors = [nscope];
		var result;

		// execute plugins, pre-process context
		if (plugged > 0) {
			result = proxy(PREPS, input, selectors, selectors, line, column, 0, 0, 0, 0);

			if (result !== void 0 && typeof result === 'string') {
				input = result;
			}
		}

		// build
		var output = compile(array, selectors, input, 0, 0);

		// execute plugins, post-process context
		if (plugged > 0) {
			result = proxy(POSTS, output, selectors, selectors, line, column, output.length, 0, 0, 0);

			// bypass minification
			if (result !== void 0 && typeof (output = result) !== 'string') {
				code = 0;
			}
		}

		// reset
		key = '';
		nscope = '';
		nscopealt = '';
		pattern = 0;
		line = 1;
		column = 1;

		return compress * code === 0 ? output : minify(output);
	}

	stylis['use'] = use;
	stylis['set'] = set;

	if (options !== void 0) {
		set(options);
	}

	return stylis;
});

/***/ }),

/***/ "VEsJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export css */
/* unused harmony export keyframes */
/* unused harmony export injectGlobal */
/* unused harmony export isStyledComponent */
/* unused harmony export consolidateStreamedStyles */
/* unused harmony export ThemeProvider */
/* unused harmony export withTheme */
/* unused harmony export ServerStyleSheet */
/* unused harmony export StyleSheetManager */
/* unused harmony export __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_is_plain_object__ = __webpack_require__("4OB8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_is_plain_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_is_plain_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stylis__ = __webpack_require__("Ruo5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stylis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_stylis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stylis_rule_sheet__ = __webpack_require__("IM/B");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stylis_rule_sheet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_stylis_rule_sheet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("AX2D");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_stream__ = __webpack_require__("97RM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_stream___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_stream__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_is__ = __webpack_require__("ncfW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_is___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_is__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hoist_non_react_statics__ = __webpack_require__("hYij");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hoist_non_react_statics__);









/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate$2(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

var hyphenate_1 = hyphenate$2;

var hyphenate = hyphenate_1;

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

var hyphenateStyleName_1 = hyphenateStyleName;

// 
var objToCss = function objToCss(obj, prevKey) {
  var css = Object.keys(obj).filter(function (key) {
    var chunk = obj[key];
    return chunk !== undefined && chunk !== null && chunk !== false && chunk !== '';
  }).map(function (key) {
    if (__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(obj[key])) return objToCss(obj[key], key);
    return hyphenateStyleName_1(key) + ': ' + obj[key] + ';';
  }).join(' ');
  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
};

var flatten = function flatten(chunks, executionContext) {
  return chunks.reduce(function (ruleSet, chunk) {
    /* Remove falsey values */
    if (chunk === undefined || chunk === null || chunk === false || chunk === '') {
      return ruleSet;
    }
    /* Flatten ruleSet */
    if (Array.isArray(chunk)) {
      return [].concat(ruleSet, flatten(chunk, executionContext));
    }

    /* Handle other components */
    if (chunk.hasOwnProperty('styledComponentId')) {
      // $FlowFixMe not sure how to make this pass
      return [].concat(ruleSet, ['.' + chunk.styledComponentId]);
    }

    /* Either execute or defer the function */
    if (typeof chunk === 'function') {
      return executionContext ? ruleSet.concat.apply(ruleSet, flatten([chunk(executionContext)], executionContext)) : ruleSet.concat(chunk);
    }

    /* Handle objects */
    return ruleSet.concat(
    // $FlowFixMe have to add %checks somehow to isPlainObject
    __WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(chunk) ? objToCss(chunk) : chunk.toString());
  }, []);
};

// 
// NOTE: This stylis instance is only used to split rules from SSR'd style tags
var stylisSplitter = new __WEBPACK_IMPORTED_MODULE_1_stylis___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});

var stylis = new __WEBPACK_IMPORTED_MODULE_1_stylis___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false // NOTE: This means "autocomplete missing semicolons"
});

// Wrap `insertRulePlugin to build a list of rules,
// and then make our own plugin to return the rules. This
// makes it easier to hook into the existing SSR architecture

var parsingRules = [];
// eslint-disable-next-line consistent-return
var returnRulesPlugin = function returnRulesPlugin(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};

var parseRulesPlugin = __WEBPACK_IMPORTED_MODULE_2_stylis_rule_sheet___default()(function (rule) {
  parsingRules.push(rule);
});

stylis.use([parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

var stringifyRules = function stringifyRules(rules, selector, prefix) {
  var flatCSS = rules.join('').replace(/^\s*\/\/.*$/gm, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  return stylis(prefix || !selector ? '' : selector, cssStr);
};

var splitByRules = function splitByRules(css) {
  return stylisSplitter('', css);
};

// 

function isStyledComponent(target) /* : %checks */{
  return typeof target === 'function' && typeof target.styledComponentId === 'string';
}

// 

/* This function is DEPRECATED and will be removed on the next major version release.
 * It was needed to rehydrate all style blocks prepended to chunks before React
 * tries to rehydrate its HTML stream. Since the master StyleSheet will now detect
 * the use of streamed style tags and will perform the rehydration earlier when needed
 * this function will not be needed anymore */
function consolidateStreamedStyles() {
  if (false) {
    // eslint-disable-next-line no-console
    console.warn('styled-components automatically does streaming SSR rehydration now.\n' + 'Calling consolidateStreamedStyles manually is no longer necessary and a noop now.\n' + '- Please remove the consolidateStreamedStyles call from your client.');
  }
}

// 
/* eslint-disable no-bitwise */

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */
var charsLength = 52;

/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};

/* input a number, usually a hash and convert it to base-52 */
var generateAlphabeticName = function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  /* get a char and divide by alphabet-length */
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
};

// 

var interleave = function interleave(strings, interpolations) {
  return interpolations.reduce(function (array, interp, i) {
    return array.concat(interp, strings[i + 1]);
  }, [strings[0]]);
};

// 
var css = function css(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  return flatten(interleave(strings, interpolations));
};

// 


var SC_ATTR = typeof process !== 'undefined' && process.env.SC_ATTR || 'data-styled-components';
var SC_STREAM_ATTR = 'data-styled-streamed';
var CONTEXT_KEY = '__styled-components-stylesheet__';

var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

var DISABLE_SPEEDY = typeof false === 'boolean' && false || "production" !== 'production';

// 
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

var extractComps = function extractComps(maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
};

// 
/* eslint-disable camelcase, no-undef */

var getNonce = function getNonce() {
  return  true ? __webpack_require__.nc : null;
};

// 
// Helper to call a given function, only once
var once = function once(cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb();
    }
  };
};

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// 
/* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

/* adds a new ID:name pairing to a names dictionary */
var addNameForId = function addNameForId(names, id, name) {
  if (name) {
    // eslint-disable-next-line no-param-reassign
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};

/* resets an ID entirely by overwriting it in the dictionary */
var resetIdNames = function resetIdNames(names, id) {
  // eslint-disable-next-line no-param-reassign
  names[id] = Object.create(null);
};

/* factory for a names dictionary checking the existance of an ID:name pairing */
var hasNameForId = function hasNameForId(names) {
  return function (id, name) {
    return names[id] !== undefined && names[id][name];
  };
};

/* stringifies names for the html/element output */
var stringifyNames = function stringifyNames(names) {
  var str = '';
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    str += Object.keys(names[id]).join(' ') + ' ';
  }
  return str.trim();
};

/* clones the nested names dictionary */
var cloneNames = function cloneNames(names) {
  var clone = Object.create(null);
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    clone[id] = _extends({}, names[id]);
  }
  return clone;
};

// 
/* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

/* retrieve a sheet for a given style tag */
var sheetForTag = function sheetForTag(tag) {
  // $FlowFixMe
  if (tag.sheet) return tag.sheet;

  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
  var size = document.styleSheets.length;
  for (var i = 0; i < size; i += 1) {
    var sheet = document.styleSheets[i];
    // $FlowFixMe
    if (sheet.ownerNode === tag) return sheet;
  }

  /* we should always be able to find a tag */
  throw new Error();
};

/* insert a rule safely and return whether it was actually injected */
var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
  /* abort early if cssRule string is falsy */
  if (!cssRule) return false;

  var maxIndex = sheet.cssRules.length;

  try {
    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
  } catch (err) {
    /* any error indicates an invalid rule */
    return false;
  }

  return true;
};

/* deletes `size` rules starting from `removalIndex` */
var deleteRules = function deleteRules(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;
  for (var i = removalIndex; i >= lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
};

// 
/* eslint-disable flowtype/object-type-delimiter */
/* eslint-disable react/prop-types */

/* this error is used for makeStyleTag */
var parentNodeUnmountedErr =  false ? '\nTrying to insert a new style tag, but the given Node is unmounted!\n- Are you using a custom target that isn\'t mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n'.trim() : '';

/* this error is used for tags */
var throwCloneTagErr = function throwCloneTagErr() {
  throw new Error( false ? '\nThe clone method cannot be used on the client!\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n'.trim() : '');
};

/* this marker separates component styles and is important for rehydration */
var makeTextMarker = function makeTextMarker(id) {
  return '\n/* sc-component-id: ' + id + ' */\n';
};

/* add up all numbers in array up until and including the index */
var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
  var totalUpToIndex = 0;
  for (var i = 0; i <= index; i += 1) {
    totalUpToIndex += sizes[i];
  }

  return totalUpToIndex;
};

/* create a new style tag after lastEl */
var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
  var el = document.createElement('style');
  el.setAttribute(SC_ATTR, '');

  var nonce = getNonce();
  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  /* Work around insertRule quirk in EdgeHTML */
  el.appendChild(document.createTextNode(''));

  if (target && !tagEl) {
    /* Append to target when no previous element was passed */
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new Error(parentNodeUnmountedErr);
    }

    /* Insert new style tag after the previous one */
    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }

  return el;
};

/* takes a css factory function and outputs an html styled tag factory */
var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
  return function (additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', additionalAttrs];

    var htmlAttr = attrs.filter(Boolean).join(' ');
    return '<style ' + htmlAttr + '>' + css() + '</style>';
  };
};

/* takes a css factory function and outputs an element factory */
var wrapAsElement = function wrapAsElement(css, names) {
  return function () {
    var _props;

    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props);

    var nonce = getNonce();
    if (nonce) {
      // $FlowFixMe
      props.nonce = nonce;
    }

    // eslint-disable-next-line react/no-danger
    return __WEBPACK_IMPORTED_MODULE_3_react__["default"].createElement('style', _extends({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
  };
};

var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
  return function () {
    return Object.keys(markers);
  };
};

/* speedy tags utilise insertRule */
var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];

  var extractImport = getImportRuleTag !== undefined;
  /* indicates whther getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    var marker = markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);
    return marker;
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);

    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }

    sizes[marker] += injectedRules; /* add up no of injected rules */
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker);
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var _sheetForTag = sheetForTag(el),
        cssRules = _sheetForTag.cssRules;

    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];
      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];
        if (rule !== undefined) {
          str += rule.cssText;
        }
      }
    }

    return str;
  };

  return {
    styleTag: el,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    css: css,
    toHTML: wrapAsHtmlTag(css, names),
    toElement: wrapAsElement(css, names),
    clone: throwCloneTagErr
  };
};

var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);

  var extractImport = getImportRuleTag !== undefined;
  var makeTextNode = function makeTextNode(id) {
    return document.createTextNode(makeTextMarker(id));
  };

  /* indicates whther getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    var marker = markers[id] = makeTextNode(id);
    el.appendChild(marker);
    names[id] = Object.create(null);
    return marker;
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;
      if (mayHaveImport && rule.indexOf('@import') !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? '' : ' ';
        marker.appendData('' + rule + separator);
      }
    }

    addNameForId(names, id, name);

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    /* create new empty text node and replace the current one */
    var newMarker = makeTextNode(id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += markers[id].data;
    }
    return str;
  };

  return {
    styleTag: el,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    css: css,
    toHTML: wrapAsHtmlTag(css, names),
    toElement: wrapAsElement(css, names),
    clone: throwCloneTagErr
  };
};

var makeServerTagInternal = function makeServerTagInternal(namesArg, markersArg) {
  var names = namesArg === undefined ? Object.create(null) : namesArg;
  var markers = markersArg === undefined ? Object.create(null) : markersArg;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    return markers[id] = [''];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(' ');
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    marker[0] = '';
    resetIdNames(names, id);
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      var cssForId = markers[id][0];
      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }
    return str;
  };

  var clone = function clone() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null);

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }

    return makeServerTagInternal(namesClone, markersClone);
  };

  var tag = {
    styleTag: null,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    css: css,
    toHTML: wrapAsHtmlTag(css, names),
    toElement: wrapAsElement(css, names),
    clone: clone
  };

  return tag;
};

var makeServerTag = function makeServerTag() {
  return makeServerTagInternal();
};

var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);
    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }

  return makeServerTag();
};

/* wraps a given tag so that rehydration is performed once when necessary */
var makeRehydrationTag = function makeRehydrationTag(tag, els, extracted, names, immediateRehydration) {
  /* rehydration function that adds all rules to the new tag */
  var rehydrate = once(function () {
    /* add all extracted components to the new tag */
    for (var i = 0; i < extracted.length; i += 1) {
      var _extracted$i = extracted[i],
          componentId = _extracted$i.componentId,
          cssFromDOM = _extracted$i.cssFromDOM;

      var cssRules = splitByRules(cssFromDOM);
      tag.insertRules(componentId, cssRules);
    }

    /* remove old HTMLStyleElements, since they have been rehydrated */
    for (var _i = 0; _i < els.length; _i += 1) {
      var el = els[_i];
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }
  });

  if (immediateRehydration) rehydrate();

  return _extends({}, tag, {
    /* add rehydration hook to insertion methods */
    insertMarker: function insertMarker(id) {
      rehydrate();
      return tag.insertMarker(id);
    },
    insertRules: function insertRules(id, cssRules, name) {
      rehydrate();
      return tag.insertRules(id, cssRules, name);
    }
  });
};

// 

/* determine the maximum number of components before tags are sharded */
var MAX_SIZE = void 0;
if (IS_BROWSER) {
  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
} else {
  /* for servers we do not need to shard at all */
  MAX_SIZE = -1;
}

var sheetRunningId = 0;
var master = void 0;

var StyleSheet = function () {
  /* a map from ids to tags */
  /* deferred rules for a given id */
  /* this is used for not reinjecting rules via hasNameForId() */
  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */
  /* a list of tags belonging to this StyleSheet */
  /* a tag for import rules */
  /* current capacity until a new tag must be created */
  /* children (aka clones) of this StyleSheet inheriting all and future injections */

  function StyleSheet() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, StyleSheet);

    this.getImportRuleTag = function () {
      var importRuleTag = _this.importRuleTag;

      if (importRuleTag !== undefined) {
        return importRuleTag;
      }

      var firstTag = _this.tags[0];
      var insertBefore = true;

      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };

    this.id = sheetRunningId += 1;
    this.sealed = false;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }

  /* rehydrate all SSR'd style tags */

  StyleSheet.prototype.rehydrate = function rehydrate() {
    if (!IS_BROWSER || this.forceServer) {
      return this;
    }

    var els = [];
    var names = [];
    var extracted = [];
    var isStreamed = false;

    /* retrieve all of our SSR style elements from the DOM */
    var nodes = document.querySelectorAll('style[' + SC_ATTR + ']');
    var nodesSize = nodes.length;

    /* abort rehydration if no previous style tags were found */
    if (nodesSize === 0) {
      return this;
    }

    for (var i = 0; i < nodesSize; i += 1) {
      // $FlowFixMe: We can trust that all elements in this query are style elements
      var el = nodes[i];

      /* check if style tag is a streamed tag */
      isStreamed = !!el.getAttribute(SC_STREAM_ATTR) || isStreamed;

      /* retrieve all component names */
      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(/\s+/);
      var elNamesSize = elNames.length;
      for (var j = 0; j < elNamesSize; j += 1) {
        var name = elNames[j];
        /* add rehydrated name to sheet to avoid readding styles */
        this.rehydratedNames[name] = true;
        names.push(name);
      }

      /* extract all components and their CSS */
      extracted = extracted.concat(extractComps(el.textContent));
      /* store original HTMLStyleElement */
      els.push(el);
    }

    /* abort rehydration if nothing was extracted */
    var extractedSize = extracted.length;
    if (extractedSize === 0) {
      return this;
    }

    /* create a tag to be used for rehydration */
    var tag = this.makeTag(null);
    var rehydrationTag = makeRehydrationTag(tag, els, extracted, names, isStreamed);

    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(rehydrationTag);

    /* retrieve all component ids */
    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = rehydrationTag;
    }

    return this;
  };

  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by injectGlobal, keyframes, and components outside of any
    * StyleSheetManager's context */

  /* reset the internal "master" instance */
  StyleSheet.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    master = new StyleSheet(undefined, forceServer).rehydrate();
  };

  /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */

  StyleSheet.prototype.clone = function clone() {
    var sheet = new StyleSheet(this.target, this.forceServer);
    /* add to clone array */
    this.clones.push(sheet);

    /* clone all tags */
    sheet.tags = this.tags.map(function (tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();

      /* reconstruct tagMap */
      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }

      return newTag;
    });

    /* clone other maps */
    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
    sheet.deferred = _extends({}, this.deferred);

    return sheet;
  };

  /* force StyleSheet to create a new tag on the next injection */

  StyleSheet.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;
    this.sealed = true;
  };

  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;

    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };

  /* get a tag for a given componentId, assign the componentId to one, or shard */
  StyleSheet.prototype.getTagForId = function getTagForId(id) {
    /* simply return a tag, when the componentId was already assigned one */
    var prev = this.tagMap[id];
    if (prev !== undefined && !this.sealed) {
      return prev;
    }

    var tag = this.tags[this.tags.length - 1];

    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
    this.capacity -= 1;
    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      this.sealed = false;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }

    return this.tagMap[id] = tag;
  };

  /* mainly for injectGlobal to check for its id */

  StyleSheet.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== undefined;
  };

  /* caching layer checking id+name to already have a corresponding tag and injected rules */

  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
    /* exception for rehydrated names which are checked separately */
    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
      return true;
    }

    var tag = this.tagMap[id];
    return tag !== undefined && tag.hasNameForId(id, name);
  };

  /* registers a componentId and registers it on its tag */

  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
    /* don't inject when the id is already registered */
    if (this.tagMap[id] !== undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }

    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };

  /* injects rules for a given id with a name that will need to be cached */

  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }

    /* add deferred rules for component */
    var injectRules = cssRules;
    var deferredRules = this.deferred[id];
    if (deferredRules !== undefined) {
      injectRules = deferredRules.concat(injectRules);
      delete this.deferred[id];
    }

    var tag = this.getTagForId(id);
    tag.insertRules(id, injectRules, name);
  };

  /* removes all rules for a given id, which doesn't remove its marker but resets it */

  StyleSheet.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }

    /* remove all rules from the tag */
    tag.removeRules(id);
    /* ignore possible rehydrated names */
    this.ignoreRehydratedNames[id] = true;
    /* delete possible deferred rules */
    delete this.deferred[id];
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    var id = this.id;

    return this.tags.map(function (tag, i) {
      var key = 'sc-' + id + '-' + i;
      return Object(__WEBPACK_IMPORTED_MODULE_3_react__["cloneElement"])(tag.toElement(), { key: key });
    });
  };

  createClass(StyleSheet, null, [{
    key: 'master',
    get: function get$$1() {
      return master || (master = new StyleSheet().rehydrate());
    }

    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

  }, {
    key: 'instance',
    get: function get$$1() {
      return StyleSheet.master;
    }
  }]);
  return StyleSheet;
}();

var _StyleSheetManager$ch;

// 
/* this error is used for makeStyleTag */
var targetPropErr =  false ? '\nThe StyleSheetManager expects a valid target or sheet prop!\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n'.trim() : '';

var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager() {
    classCallCheck(this, StyleSheetManager);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  StyleSheetManager.prototype.getChildContext = function getChildContext() {
    var _ref;

    return _ref = {}, _ref[CONTEXT_KEY] = this.sheetInstance, _ref;
  };

  StyleSheetManager.prototype.componentWillMount = function componentWillMount() {
    if (this.props.sheet) {
      this.sheetInstance = this.props.sheet;
    } else if (this.props.target) {
      this.sheetInstance = new StyleSheet(this.props.target);
    } else {
      throw new Error(targetPropErr);
    }
  };

  StyleSheetManager.prototype.render = function render() {
    /* eslint-disable react/prop-types */
    // Flow v0.43.1 will report an error accessing the `children` property,
    // but v0.47.0 will not. It is necessary to use a type cast instead of
    // a "fixme" comment to satisfy both Flow versions.
    return __WEBPACK_IMPORTED_MODULE_3_react__["default"].Children.only(this.props.children);
  };

  return StyleSheetManager;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

StyleSheetManager.childContextTypes = (_StyleSheetManager$ch = {}, _StyleSheetManager$ch[CONTEXT_KEY] = __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.instanceOf(StyleSheet), __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.instanceOf(ServerStyleSheet)]).isRequired, _StyleSheetManager$ch);

 false ? StyleSheetManager.propTypes = {
  sheet: PropTypes.oneOfType([PropTypes.instanceOf(StyleSheet), PropTypes.instanceOf(ServerStyleSheet)]),
  target: PropTypes.shape({
    appendChild: PropTypes.func.isRequired
  })
} : void 0;

// 
/* eslint-disable no-underscore-dangle */
/* this error is used for makeStyleTag */
var sheetClosedErr =  false ? '\nCan\'t collect styles once you\'ve consumed a ServerStyleSheet\'s styles!\nServerStyleSheet is a one off instance for each server-side render cycle.\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n'.trim() : '';

var streamBrowserErr =  false ? 'Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.' : '';

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    /* The master sheet might be reset, so keep a reference here */
    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.closed = false;
  }

  ServerStyleSheet.prototype.complete = function complete() {
    if (!this.closed) {
      /* Remove closed StyleSheets from the master sheet */
      var index = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index, 1);
      this.closed = true;
    }
  };

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.closed) {
      throw new Error(sheetClosedErr);
    }

    return __WEBPACK_IMPORTED_MODULE_3_react__["default"].createElement(StyleSheetManager, { sheet: this.instance }, children);
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    this.complete();
    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    this.complete();
    return this.instance.toReactElements();
  };

  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;

    if (!true || IS_BROWSER) {
      throw new Error(streamBrowserErr);
    }

    /* the tag index keeps track of which tags have already been emitted */
    var instance = this.instance;

    var instanceTagIndex = 0;

    var streamAttr = SC_STREAM_ATTR + '="true"';
    var ourStream = new __WEBPACK_IMPORTED_MODULE_4_stream___default.a.Readable();
    // $FlowFixMe
    ourStream._read = function () {};

    readableStream.on('data', function (chunk) {
      var tags = instance.tags;

      var html = '';

      /* retrieve html for each new style tag */
      for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
        var tag = tags[instanceTagIndex];
        html += tag.toHTML(streamAttr);
      }

      /* force our StyleSheets to emit entirely new tags */
      instance.sealAllTags();
      /* prepend style html to chunk */
      ourStream.push(html + chunk);
    });

    readableStream.on('end', function () {
      _this.complete();
      ourStream.push(null);
    });

    readableStream.on('error', function (err) {
      _this.complete();
      ourStream.emit('error', err);
    });

    return ourStream;
  };

  return ServerStyleSheet;
}();

// 

var LIMIT = 200;

var createWarnTooManyClasses = function createWarnTooManyClasses(displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs({\n' + '    style: ({ background }) => ({\n' + '      background,\n' + '    }),\n' + '  })`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
};

// 
/* eslint-disable max-len */
/**
 * Trying to avoid the unknown-prop errors on styled components by filtering by
 * React's attribute whitelist.
 *
 * To regenerate this regex:
 *
 * 1. `npm i -g regexgen` (https://github.com/devongovett/regexgen)
 * 2. Run `regexgen` with the list of space-separated words below as input
 * 3. Surround the emitted regex with this: `/^(GENERATED_REGEX)$/` -- this will ensure a full string match
 *    and no false positives from partials
 **/
/*
children dangerouslySetInnerHTML key ref autoFocus defaultValue valueLink defaultChecked checkedLink innerHTML suppressContentEditableWarning onFocusIn onFocusOut className onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown onKeyPress onKeyUp onFocus onBlur onChange onInput onInvalid onSubmit onReset onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onAnimationStart onAnimationEnd onAnimationIteration onTransitionEnd onCopyCapture onCutCapture onPasteCapture onCompositionEndCapture onCompositionStartCapture onCompositionUpdateCapture onKeyDownCapture onKeyPressCapture onKeyUpCapture onFocusCapture onBlurCapture onChangeCapture onInputCapture onSubmitCapture onResetCapture onClickCapture onContextMenuCapture onDoubleClickCapture onDragCapture onDragEndCapture onDragEnterCapture onDragExitCapture onDragLeaveCapture onDragOverCapture onDragStartCapture onDropCapture onMouseDownCapture onMouseEnterCapture onMouseLeaveCapture onMouseMoveCapture onMouseOutCapture onMouseOverCapture onMouseUpCapture onSelectCapture onTouchCancelCapture onTouchEndCapture onTouchMoveCapture onTouchStartCapture onScrollCapture onWheelCapture onAbortCapture onCanPlayCapture onCanPlayThroughCapture onDurationChangeCapture onEmptiedCapture onEncryptedCapture onEndedCapture onErrorCapture onLoadedDataCapture onLoadedMetadataCapture onLoadStartCapture onPauseCapture onPlayCapture onPlayingCapture onProgressCapture onRateChangeCapture onSeekedCapture onSeekingCapture onStalledCapture onSuspendCapture onTimeUpdateCapture onVolumeChangeCapture onWaitingCapture onLoadCapture onAnimationStartCapture onAnimationEndCapture onAnimationIterationCapture onTransitionEndCapture accept acceptCharset accessKey action allowFullScreen allowTransparency alt as async autoComplete autoPlay capture cellPadding cellSpacing charSet challenge checked cite classID className cols colSpan content contentEditable contextMenu controlsList controls coords crossOrigin data dateTime default defer dir disabled download draggable encType form formAction formEncType formMethod formNoValidate formTarget frameBorder headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media mediaGroup method min minLength multiple muted name nonce noValidate open optimum pattern placeholder playsInline poster preload profile radioGroup readOnly referrerPolicy rel required reversed role rows rowSpan sandbox scope scoped scrolling seamless selected shape size sizes span spellCheck src srcDoc srcLang srcSet start step style summary tabIndex target title type useMap value width wmode wrap about datatype inlist prefix property resource typeof vocab autoCapitalize autoCorrect autoSave color itemProp itemScope itemType itemID itemRef results security unselectable accentHeight accumulate additive alignmentBaseline allowReorder alphabetic amplitude arabicForm ascent attributeName attributeType autoReverse azimuth baseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight clip clipPath clipRule clipPathUnits colorInterpolation colorInterpolationFilters colorProfile colorRendering contentScriptType contentStyleType cursor cx cy d decelerate descent diffuseConstant direction display divisor dominantBaseline dur dx dy edgeMode elevation enableBackground end exponent externalResourcesRequired fill fillOpacity fillRule filter filterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fx fy g1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical glyphRef gradientTransform gradientUnits hanging horizAdvX horizOriginX ideographic imageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength kerning keyPoints keySplines keyTimes lengthAdjust letterSpacing lightingColor limitingConeAngle local markerEnd markerMid markerStart markerHeight markerUnits markerWidth mask maskContentUnits maskUnits mathematical mode numOctaves offset opacity operator order orient orientation origin overflow overlinePosition overlineThickness paintOrder panose1 pathLength patternContentUnits patternTransform patternUnits pointerEvents points pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits r radius refX refY renderingIntent repeatCount repeatDur requiredExtensions requiredFeatures restart result rotate rx ry scale seed shapeRendering slope spacing specularConstant specularExponent speed spreadMethod startOffset stdDeviation stemh stemv stitchTiles stopColor stopOpacity strikethroughPosition strikethroughThickness string stroke strokeDasharray strokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity strokeWidth surfaceScale systemLanguage tableValues targetX targetY textAnchor textDecoration textRendering textLength to transform u1 u2 underlinePosition underlineThickness unicode unicodeBidi unicodeRange unitsPerEm vAlphabetic vHanging vIdeographic vMathematical values vectorEffect version vertAdvY vertOriginX vertOriginY viewBox viewTarget visibility widths wordSpacing writingMode x xHeight x1 x2 xChannelSelector xlinkActuate xlinkArcrole xlinkHref xlinkRole xlinkShow xlinkTitle xlinkType xmlBase xmlns xmlnsXlink xmlLang xmlSpace y y1 y2 yChannelSelector z zoomAndPan
*/
/* eslint-enable max-len */

var ATTRIBUTE_REGEX = /^((?:s(?:uppressContentEditableWarn|croll|pac)|(?:shape|image|text)Render|(?:letter|word)Spac|vHang|hang)ing|(?:on(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur|Invalid)Captur|alignmentBaselin|(?:limitingConeAng|xlink(?:(?:Arcr|R)o|Tit)|s(?:urfaceSca|ty|ca)|unselectab|baseProfi|fontSty|(?:focus|dragg)ab|multip|profi|tit)l|d(?:ominantBaselin|efaultValu)|a(?:uto(?:Capitaliz|Revers|Sav)|dditiv)|(?:(?:formNoValid|xlinkActu|noValid|accumul|rot)a|autoComple|decelera)t|(?:(?:attribute|item)T|datat)yp|(?:attribute|glyph)Nam|playsInlin|(?:formE|e)ncTyp|(?:writing|input|edge)Mod|(?:xlinkTy|itemSco|keyTy|slo)p|(?:amplitu|mo)d|(?:xmlSpa|non)c|fillRul|(?:dateTi|na)m|r(?:esourc|ol)|xmlBas|wmod)e|(?:glyphOrientationHorizont|loc)al|(?:externalResourcesRequir|select|revers|mut)ed|c(?:o(?:lorInterpolationFilter|ord)s|o(?:lor(?:Interpolation)?|nt(?:rols|ent))|(?:ontentS(?:cript|tyle)Typ|o(?:ntentEditab|lorProfi)l|l(?:assNam|ipRul)|a(?:lcMod|ptur)|it)e|olorRendering|l(?:ipPathUnits|assID)|(?:ontrolsLis|apHeigh)t|h(?:eckedLink|a(?:llenge|rSet)|ildren|ecked)|ell(?:Spac|Padd)ing|o(?:ntextMenu|ls)|(?:rossOrigi|olSpa)n|lip(?:Path)?|ursor|[xy])|glyphOrientationVertical|d(?:angerouslySetInnerHTML|efaultChecked|ownload|isabled|isplay|[xy])|(?:s(?:trikethroughThickn|eaml)es|(?:und|ov)erlineThicknes|r(?:equiredExtension|adiu)|(?:requiredFeatur|tableValu|stitchTil|numOctav|filterR)e|key(?:(?:Splin|Tim)e|Param)|autoFocu|header|bia)s|(?:(?:st(?:rikethroughPosi|dDevia)|(?:und|ov)erlinePosi|(?:textDecor|elev)a|orienta)tio|(?:strokeLinejo|orig)i|formActio|zoomAndPa|onFocusI|directio|(?:vers|act)io|rowSpa|begi|ico)n|o(?:n(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur|Invalid)|rient)|p(?:reserveA(?:spectRatio|lpha)|ointsAt[X-Z]|anose1)|(?:patternContent|ma(?:sk(?:Content)?|rker)|primitive|gradient|pattern|filter)Units|(?:gradientT|patternT|t)ransform|(?:(?:allowTranspar|baseFrequ)enc|re(?:ferrerPolic|adOnl)|(?:(?:st(?:roke|op)O|floodO|fillO|o)pac|integr|secur)it|visibilit|fontFamil|accessKe|propert|summar)y|(?:strokeMiterlimi|(?:specularConsta|repeatCou|fontVaria)n|(?:(?:specularE|e)xpon|renderingInt|asc)en|d(?:iffuseConsta|esce)n|(?:fontSizeAdju|lengthAdju|manife)s|baselineShif|vectorEffec|(?:(?:mar(?:ker|gin)|x)H|accentH|fontW)eigh|a(?:utoCorrec|bou)|markerStar|onFocusOu|intercep|restar|forma|inlis|heigh|lis)t|(?:(?:st(?:rokeDasho|artO)|o)ffs|acceptChars|formTarg|viewTarg|srcS)et|(?:(?:enableBackgrou|markerE)n|s(?:p(?:readMetho|ee)|ee)|formMetho|m(?:arkerMi|etho)|preloa|kin)d|k(?:ernel(?:UnitLength|Matrix)|[1-4])|(?:[xy]ChannelSelect|lightingCol|textAnch|floodCol|stopCol|operat|htmlF)or|(?:allowFullScre|hidd)en|strokeDasharray|systemLanguage|(?:strokeLineca|itemPro|useMa|wra|loo)p|v(?:Mathematical|ert(?:Origin[XY]|AdvY)|alues|ocab)|(?:pointerEve|keyPoi)nts|unicodeRange|(?:(?:allowReord|placehold|frameBord|paintOrd|post|ord)e|repeatDu|d(?:efe|u))r|mathematical|(?:vI|i)deographic|h(?:oriz(?:Origin|Adv)X|ttpEquiv)|u(?:nicodeBidi|[12])|(?:fontStretc|hig)h|(?:(?:mar(?:ker|gin)W|strokeW)id|azimu)th|vAlphabetic|mediaGroup|spellCheck|(?:unitsPerE|optimu|fro)m|r(?:adioGroup|e(?:sults|f[XY]|l)|ows|[xy])|(?:xmlnsXl|valueL)ink|a(?:rabicForm|l(?:phabetic|t)|sync)|pathLength|(?:text|m(?:in|ax))Length|innerHTML|xlinkShow|(?:xlinkHr|glyphR)ef|r(?:e(?:quired|sult|f))?|o(?:verflow|pen)|(?:tabInde|(?:sand|b)bo|viewBo)x|(?:(?:href|xml|src)La|kerni)ng|f(?:o(?:ntSize|rm)|il(?:ter|l))|autoPlay|unicode|p(?:attern|oints)|t(?:arget[XY]|o)|i(?:temRef|n2|s)|divisor|d(?:efault|ata|ir)?|srcDoc|s(?:coped|te(?:m[hv]|p)|pan)|(?:width|size)s|(?:stri|la)ng|prefix|itemID|s(?:t(?:roke|art)|hape|cope|rc)|a(?:ccept|s)|t(?:arget|ype)|typeof|width|value|x(?:mlns)?|label|m(?:edia|a(?:sk|x)|in)|size|href|k(?:ey)?|end|low|x[12]|i[dn]|y[12]|g[12]|by|f[xy]|[yz])$/;

/* From DOMProperty */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));

var validAttr = function validAttr(name) {
  return ATTRIBUTE_REGEX.test(name) || isCustomAttribute(name.toLowerCase());
};

// 

function isTag(target) /* : %checks */{
  return typeof target === 'string';
}

// 

/* eslint-disable no-undef */
function getComponentName(target) {
  return target.displayName || target.name || 'Component';
}

// 

var determineTheme = function determineTheme(props, fallbackTheme, defaultProps) {
  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types */
  var isDefaultTheme = defaultProps && props.theme === defaultProps.theme;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme;
  /* eslint-enable */

  return theme;
};

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 
/**
 * Creates a broadcast that can be listened to, i.e. simple event emitter
 *
 * @see https://github.com/ReactTraining/react-broadcast
 */

var createBroadcast = function createBroadcast(initialState) {
  var listeners = {};
  var id = 0;
  var state = initialState;

  function publish(nextState) {
    state = nextState;

    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (var key in listeners) {
      var listener = listeners[key];
      if (listener === undefined) {
        // eslint-disable-next-line no-continue
        continue;
      }

      listener(state);
    }
  }

  function subscribe(listener) {
    var currentId = id;
    listeners[currentId] = listener;
    id += 1;
    listener(state);
    return currentId;
  }

  function unsubscribe(unsubID) {
    listeners[unsubID] = undefined;
  }

  return { publish: publish, subscribe: subscribe, unsubscribe: unsubscribe };
};

var _ThemeProvider$childC;
var _ThemeProvider$contex;

// 
/* globals React$Element */
// NOTE: DO NOT CHANGE, changing this is a semver major change!
var CHANNEL = '__styled-components__';
var CHANNEL_NEXT = CHANNEL + 'next__';

var CONTEXT_CHANNEL_SHAPE = __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.shape({
  getTheme: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  subscribe: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  unsubscribe: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func
});

var warnChannelDeprecated = void 0;
if (false) {
  warnChannelDeprecated = once(function () {
    // eslint-disable-next-line no-console
    console.error('Warning: Usage of `context.' + CHANNEL + '` as a function is deprecated. It will be replaced with the object on `.context.' + CHANNEL_NEXT + '` in a future version.');
  });
}

var isFunction = function isFunction(test) {
  return typeof test === 'function';
};

/**
 * Provide a theme to an entire react component tree via context and event listeners (have to do
 * both context and event emitter as pure components block context updates)
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider() {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.unsubscribeToOuterId = -1;

    _this.getTheme = _this.getTheme.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
    // with the outer theme
    var outerContext = this.context[CHANNEL_NEXT];
    if (outerContext !== undefined) {
      this.unsubscribeToOuterId = outerContext.subscribe(function (theme) {
        _this2.outerTheme = theme;

        if (_this2.broadcast !== undefined) {
          _this2.publish(_this2.props.theme);
        }
      });
    }

    this.broadcast = createBroadcast(this.getTheme());
  };

  ThemeProvider.prototype.getChildContext = function getChildContext() {
    var _this3 = this,
        _babelHelpers$extends;

    return _extends({}, this.context, (_babelHelpers$extends = {}, _babelHelpers$extends[CHANNEL_NEXT] = {
      getTheme: this.getTheme,
      subscribe: this.broadcast.subscribe,
      unsubscribe: this.broadcast.unsubscribe
    }, _babelHelpers$extends[CHANNEL] = function (subscriber) {
      if (false) {
        warnChannelDeprecated();
      }

      // Patch the old `subscribe` provide via `CHANNEL` for older clients.
      var unsubscribeId = _this3.broadcast.subscribe(subscriber);
      return function () {
        return _this3.broadcast.unsubscribe(unsubscribeId);
      };
    }, _babelHelpers$extends));
  };

  ThemeProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.theme !== nextProps.theme) {
      this.publish(nextProps.theme);
    }
  };

  ThemeProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.unsubscribeToOuterId !== -1) {
      this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeToOuterId);
    }
  };

  // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation


  ThemeProvider.prototype.getTheme = function getTheme(passedTheme) {
    var theme = passedTheme || this.props.theme;
    if (isFunction(theme)) {
      var mergedTheme = theme(this.outerTheme);
      if (false) {
        throw new Error(process.env.NODE_ENV !== 'production' ? '[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!' : '');
      }
      return mergedTheme;
    }
    if (!__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(theme)) {
      throw new Error( false ? '[ThemeProvider] Please make your theme prop a plain object' : '');
    }
    return _extends({}, this.outerTheme, theme);
  };

  ThemeProvider.prototype.publish = function publish(theme) {
    this.broadcast.publish(this.getTheme(theme));
  };

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) {
      return null;
    }
    return __WEBPACK_IMPORTED_MODULE_3_react__["default"].Children.only(this.props.children);
  };

  return ThemeProvider;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

ThemeProvider.childContextTypes = (_ThemeProvider$childC = {}, _ThemeProvider$childC[CHANNEL] = __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func, _ThemeProvider$childC[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$childC);
ThemeProvider.contextTypes = (_ThemeProvider$contex = {}, _ThemeProvider$contex[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$contex);

// 

// HACK for generating all static styles without needing to allocate
// an empty execution context every single time...
var STATIC_EXECUTION_CONTEXT = {};

var _StyledComponent = function _StyledComponent(ComponentStyle, constructWithOptions) {
  var identifiers = {};

  /* We depend on components having unique IDs */
  var generateId = function generateId(_displayName, parentComponentId) {
    var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

    var componentId = void 0;

    /**
     * only fall back to hashing the component injection order if
     * a proper displayName isn't provided by the babel plugin
     */
    if (!_displayName) {
      var nr = (identifiers[displayName] || 0) + 1;
      identifiers[displayName] = nr;

      componentId = displayName + '-' + ComponentStyle.generateName(displayName + nr);
    } else {
      componentId = displayName + '-' + ComponentStyle.generateName(displayName);
    }

    return parentComponentId !== undefined ? parentComponentId + '-' + componentId : componentId;
  };

  var BaseStyledComponent = function (_Component) {
    inherits(BaseStyledComponent, _Component);

    function BaseStyledComponent() {
      var _temp, _this, _ret;

      classCallCheck(this, BaseStyledComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.attrs = {}, _this.state = {
        theme: null,
        generatedClassName: ''
      }, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
    }

    BaseStyledComponent.prototype.unsubscribeFromContext = function unsubscribeFromContext() {
      if (this.unsubscribeId !== -1) {
        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
      }
    };

    BaseStyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props) {
      var attrs = this.constructor.attrs;

      var context = _extends({}, props, { theme: theme });
      if (attrs === undefined) {
        return context;
      }

      this.attrs = Object.keys(attrs).reduce(function (acc, key) {
        var attr = attrs[key];
        // eslint-disable-next-line no-param-reassign
        acc[key] = typeof attr === 'function' ? attr(context) : attr;
        return acc;
      }, {});

      return _extends({}, context, this.attrs);
    };

    BaseStyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
      var _constructor = this.constructor,
          attrs = _constructor.attrs,
          componentStyle = _constructor.componentStyle,
          warnTooManyClasses = _constructor.warnTooManyClasses;

      var styleSheet = this.context[CONTEXT_KEY] || StyleSheet.master;

      // staticaly styled-components don't need to build an execution context object,
      // and shouldn't be increasing the number of class names
      if (componentStyle.isStatic && attrs === undefined) {
        return componentStyle.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, styleSheet);
      } else {
        var executionContext = this.buildExecutionContext(theme, props);
        var className = componentStyle.generateAndInjectStyles(executionContext, styleSheet);

        if (false) {
          warnTooManyClasses(className);
        }

        return className;
      }
    };

    BaseStyledComponent.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var componentStyle = this.constructor.componentStyle;

      var styledContext = this.context[CHANNEL_NEXT];

      // If this is a staticaly-styled component, we don't need to the theme
      // to generate or build styles.
      if (componentStyle.isStatic) {
        var generatedClassName = this.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, this.props);
        this.setState({ generatedClassName: generatedClassName });
        // If there is a theme in the context, subscribe to the event emitter. This
        // is necessary due to pure components blocking context updates, this circumvents
        // that by updating when an event is emitted
      } else if (styledContext !== undefined) {
        var subscribe = styledContext.subscribe;

        this.unsubscribeId = subscribe(function (nextTheme) {
          // This will be called once immediately
          var theme = determineTheme(_this2.props, nextTheme, _this2.constructor.defaultProps);
          var generatedClassName = _this2.generateAndInjectStyles(theme, _this2.props);

          _this2.setState({ theme: theme, generatedClassName: generatedClassName });
        });
      } else {
        // eslint-disable-next-line react/prop-types
        var theme = this.props.theme || {};
        var _generatedClassName = this.generateAndInjectStyles(theme, this.props);
        this.setState({ theme: theme, generatedClassName: _generatedClassName });
      }
    };

    BaseStyledComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      // If this is a statically-styled component, we don't need to listen to
      // props changes to update styles
      var componentStyle = this.constructor.componentStyle;

      if (componentStyle.isStatic) {
        return;
      }

      this.setState(function (oldState) {
        var theme = determineTheme(nextProps, oldState.theme, _this3.constructor.defaultProps);
        var generatedClassName = _this3.generateAndInjectStyles(theme, nextProps);

        return { theme: theme, generatedClassName: generatedClassName };
      });
    };

    BaseStyledComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      this.unsubscribeFromContext();
    };

    BaseStyledComponent.prototype.render = function render() {
      var _this4 = this;

      // eslint-disable-next-line react/prop-types
      var innerRef = this.props.innerRef;
      var generatedClassName = this.state.generatedClassName;
      var _constructor2 = this.constructor,
          styledComponentId = _constructor2.styledComponentId,
          target = _constructor2.target;

      var isTargetTag = isTag(target);

      var className = [
      // eslint-disable-next-line react/prop-types
      this.props.className, styledComponentId, this.attrs.className, generatedClassName].filter(Boolean).join(' ');

      var baseProps = _extends({}, this.attrs, {
        className: className
      });

      if (isStyledComponent(target)) {
        baseProps.innerRef = innerRef;
      } else {
        baseProps.ref = innerRef;
      }

      var propsForElement = Object.keys(this.props).reduce(function (acc, propName) {
        // Don't pass through non HTML tags through to HTML elements
        // always omit innerRef
        if (propName !== 'innerRef' && propName !== 'className' && (!isTargetTag || validAttr(propName))) {
          // eslint-disable-next-line no-param-reassign
          acc[propName] = _this4.props[propName];
        }

        return acc;
      }, baseProps);

      return Object(__WEBPACK_IMPORTED_MODULE_3_react__["createElement"])(target, propsForElement);
    };

    return BaseStyledComponent;
  }(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

  var createStyledComponent = function createStyledComponent(target, options, rules) {
    var _StyledComponent$cont;

    var _options$displayName = options.displayName,
        displayName = _options$displayName === undefined ? isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')' : _options$displayName,
        _options$componentId = options.componentId,
        componentId = _options$componentId === undefined ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
        _options$ParentCompon = options.ParentComponent,
        ParentComponent = _options$ParentCompon === undefined ? BaseStyledComponent : _options$ParentCompon,
        extendingRules = options.rules,
        attrs = options.attrs;

    var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : componentId;

    var componentStyle = new ComponentStyle(extendingRules === undefined ? rules : extendingRules.concat(rules), attrs, styledComponentId);

    var StyledComponent = function (_ParentComponent) {
      inherits(StyledComponent, _ParentComponent);

      function StyledComponent() {
        classCallCheck(this, StyledComponent);
        return possibleConstructorReturn(this, _ParentComponent.apply(this, arguments));
      }

      StyledComponent.withComponent = function withComponent(tag) {
        var previousComponentId = options.componentId,
            optionsToCopy = objectWithoutProperties(options, ['componentId']);

        var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

        var newOptions = _extends({}, optionsToCopy, {
          componentId: newComponentId,
          ParentComponent: StyledComponent
        });

        return createStyledComponent(tag, newOptions, rules);
      };

      createClass(StyledComponent, null, [{
        key: 'extend',
        get: function get$$1() {
          var rulesFromOptions = options.rules,
              parentComponentId = options.componentId,
              optionsToCopy = objectWithoutProperties(options, ['rules', 'componentId']);

          var newRules = rulesFromOptions === undefined ? rules : rulesFromOptions.concat(rules);

          var newOptions = _extends({}, optionsToCopy, {
            rules: newRules,
            parentComponentId: parentComponentId,
            ParentComponent: StyledComponent
          });

          return constructWithOptions(createStyledComponent, target, newOptions);
        }
      }]);
      return StyledComponent;
    }(ParentComponent);

    StyledComponent.contextTypes = (_StyledComponent$cont = {}, _StyledComponent$cont[CHANNEL] = __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func, _StyledComponent$cont[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _StyledComponent$cont[CONTEXT_KEY] = __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.instanceOf(StyleSheet), __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.instanceOf(ServerStyleSheet)]), _StyledComponent$cont);
    StyledComponent.displayName = displayName;
    StyledComponent.styledComponentId = styledComponentId;
    StyledComponent.attrs = attrs;
    StyledComponent.componentStyle = componentStyle;
    StyledComponent.target = target;

    if (false) {
      StyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
    }

    return StyledComponent;
  };

  return createStyledComponent;
};

// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash(str) {
  var l = str.length | 0,
      h = l | 0,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;

    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);

    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;

    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;

  return h >>> 0;
}

// 
var areStylesCacheable = IS_BROWSER;

var isStaticRules = function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule)) {
      return false;
    } else if (typeof rule === 'function' && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  if (attrs !== undefined) {
    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (var key in attrs) {
      var value = attrs[key];
      if (typeof value === 'function') {
        return false;
      }
    }
  }

  return true;
};

var isHRMEnabled = typeof module !== 'undefined' && module.hot && "production" !== 'production';

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */
var _ComponentStyle = function _ComponentStyle(nameGenerator, flatten, stringifyRules) {
  /* combines hashStr (murmurhash) and nameGenerator for convenience */
  var generateRuleHash = function generateRuleHash(str) {
    return nameGenerator(murmurhash(str));
  };

  var ComponentStyle = function () {
    function ComponentStyle(rules, attrs, componentId) {
      classCallCheck(this, ComponentStyle);

      this.rules = rules;
      this.isStatic = !isHRMEnabled && isStaticRules(rules, attrs);
      this.componentId = componentId;

      if (!StyleSheet.master.hasId(componentId)) {
        var placeholder =  false ? ['.' + componentId + ' {}'] : [];

        StyleSheet.master.deferredInject(componentId, placeholder);
      }
    }

    /*
     * Flattens a rule set into valid CSS
     * Hashes it, wraps the whole chunk in a .hash1234 {}
     * Returns the hash to be injected on render()
     * */

    ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
      var isStatic = this.isStatic,
          componentId = this.componentId,
          lastClassName = this.lastClassName;

      if (areStylesCacheable && isStatic && lastClassName !== undefined && styleSheet.hasNameForId(componentId, lastClassName)) {
        return lastClassName;
      }

      var flatCSS = flatten(this.rules, executionContext);
      var name = generateRuleHash(this.componentId + flatCSS.join(''));

      if (!styleSheet.hasNameForId(componentId, name)) {
        var css = stringifyRules(flatCSS, '.' + name);
        styleSheet.inject(this.componentId, css, name);
      }

      this.lastClassName = name;
      return name;
    };

    ComponentStyle.generateName = function generateName(str) {
      return generateRuleHash(str);
    };

    return ComponentStyle;
  }();

  return ComponentStyle;
};

// 
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 
var _styled = function _styled(styledComponent, constructWithOptions) {
  var styled = function styled(tag) {
    return constructWithOptions(styledComponent, tag);
  };

  // Shorthands for all valid HTML Elements
  domElements.forEach(function (domElement) {
    styled[domElement] = styled(domElement);
  });

  return styled;
};

// 
var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

var _keyframes = function _keyframes(nameGenerator, stringifyRules, css) {
  return function () {
    var styleSheet = StyleSheet.master;
    var rules = css.apply(undefined, arguments);
    var name = nameGenerator(murmurhash(replaceWhitespace(JSON.stringify(rules))));
    var id = 'sc-keyframes-' + name;

    if (!styleSheet.hasNameForId(id, name)) {
      styleSheet.inject(id, stringifyRules(rules, name, '@keyframes'), name);
    }

    return name;
  };
};

// 
var _injectGlobal = function _injectGlobal(stringifyRules, css) {
  var injectGlobal = function injectGlobal() {
    var styleSheet = StyleSheet.master;
    var rules = css.apply(undefined, arguments);
    var hash = murmurhash(JSON.stringify(rules));
    var id = 'sc-global-' + hash;

    if (!styleSheet.hasId(id)) {
      styleSheet.inject(id, stringifyRules(rules));
    }
  };

  return injectGlobal;
};

// 
var _constructWithOptions = function _constructWithOptions(css) {
  var constructWithOptions = function constructWithOptions(componentConstructor, tag) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!Object(__WEBPACK_IMPORTED_MODULE_6_react_is__["isValidElementType"])(tag)) {
      throw new Error( false ? 'Cannot create styled-component for component: ' + String(tag) : '');
    }

    /* This is callable directly as a template function */
    // $FlowFixMe: Not typed to avoid destructuring arguments
    var templateFunction = function templateFunction() {
      return componentConstructor(tag, options, css.apply(undefined, arguments));
    };

    /* If config methods are called, wrap up a new template function and merge options */
    templateFunction.withConfig = function (config) {
      return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
    };
    templateFunction.attrs = function (attrs) {
      return constructWithOptions(componentConstructor, tag, _extends({}, options, {
        attrs: _extends({}, options.attrs || {}, attrs)
      }));
    };

    return templateFunction;
  };

  return constructWithOptions;
};

// 
/* globals ReactClass */

var wrapWithTheme = function wrapWithTheme(Component$$1) {
  var _WithTheme$contextTyp;

  var componentName = Component$$1.displayName || Component$$1.name || 'Component';
  var isStatelessFunctionalComponent = typeof Component$$1 === 'function' && !(Component$$1.prototype && 'isReactComponent' in Component$$1.prototype);

  // NOTE: We can't pass a ref to a stateless functional component
  var shouldSetInnerRef = isStyledComponent(Component$$1) || isStatelessFunctionalComponent;

  var WithTheme = function (_React$Component) {
    inherits(WithTheme, _React$Component);

    function WithTheme() {
      var _temp, _this, _ret;

      classCallCheck(this, WithTheme);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
    }

    // NOTE: This is so that isStyledComponent passes for the innerRef unwrapping


    WithTheme.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var defaultProps = this.constructor.defaultProps;

      var styledContext = this.context[CHANNEL_NEXT];
      var themeProp = determineTheme(this.props, undefined, defaultProps);
      if (styledContext === undefined && themeProp === undefined && "production" !== 'production') {
        // eslint-disable-next-line no-console
        console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps');
      } else if (styledContext === undefined && themeProp !== undefined) {
        this.setState({ theme: themeProp });
      } else {
        var subscribe = styledContext.subscribe;

        this.unsubscribeId = subscribe(function (nextTheme) {
          var theme = determineTheme(_this2.props, nextTheme, defaultProps);
          _this2.setState({ theme: theme });
        });
      }
    };

    WithTheme.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var defaultProps = this.constructor.defaultProps;

      this.setState(function (oldState) {
        var theme = determineTheme(nextProps, oldState.theme, defaultProps);

        return { theme: theme };
      });
    };

    WithTheme.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.unsubscribeId !== -1) {
        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
      }
    };

    WithTheme.prototype.render = function render() {
      var props = _extends({
        theme: this.state.theme
      }, this.props);

      if (!shouldSetInnerRef) {
        props.ref = props.innerRef;
        delete props.innerRef;
      }

      return __WEBPACK_IMPORTED_MODULE_3_react__["default"].createElement(Component$$1, props);
    };

    return WithTheme;
  }(__WEBPACK_IMPORTED_MODULE_3_react__["default"].Component);

  WithTheme.displayName = 'WithTheme(' + componentName + ')';
  WithTheme.styledComponentId = 'withTheme';
  WithTheme.contextTypes = (_WithTheme$contextTyp = {}, _WithTheme$contextTyp[CHANNEL] = __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func, _WithTheme$contextTyp[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _WithTheme$contextTyp);

  return __WEBPACK_IMPORTED_MODULE_7_hoist_non_react_statics___default()(WithTheme, Component$$1);
};

// 

/* eslint-disable */
var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
  StyleSheet: StyleSheet
};

// 

/* Import singletons */
/* Import singleton constructors */
/* Import components */
/* Import Higher Order Components */
/* Warning if you've imported this file on React Native */
if (false) {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}

/* Warning if there are several instances of styled-components */
if (false) {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes you application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

/* Instantiate singletons */
var ComponentStyle = _ComponentStyle(generateAlphabeticName, flatten, stringifyRules);
var constructWithOptions = _constructWithOptions(css);
var StyledComponent = _StyledComponent(ComponentStyle, constructWithOptions);

/* Instantiate exported singletons */
var keyframes = _keyframes(generateAlphabeticName, stringifyRules, css);
var injectGlobal = _injectGlobal(stringifyRules, css);
var styled = _styled(StyledComponent, constructWithOptions);


/* harmony default export */ __webpack_exports__["a"] = (styled);
//# sourceMappingURL=styled-components.es.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("f1Eh")(module)))

/***/ }),

/***/ "cxPT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "cz0o":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};

/***/ }),

/***/ "e6+Q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "f1Eh":
/***/ (function(module, exports) {

module.exports = function (originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ "gt/O":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "hYij":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
(function (global, factory) {
     true ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.hoistNonReactStatics = factory();
})(this, function () {
    'use strict';

    var REACT_STATICS = {
        childContextTypes: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromProps: true,
        mixins: true,
        propTypes: true,
        type: true
    };

    var KNOWN_STATICS = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        callee: true,
        arguments: true,
        arity: true
    };

    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

    return function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
        if (typeof sourceComponent !== 'string') {
            // don't hoist over string (html) components

            if (objectPrototype) {
                var inheritedComponent = getPrototypeOf(sourceComponent);
                if (inheritedComponent && inheritedComponent !== objectPrototype) {
                    hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
                }
            }

            var keys = getOwnPropertyNames(sourceComponent);

            if (getOwnPropertySymbols) {
                keys = keys.concat(getOwnPropertySymbols(sourceComponent));
            }

            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                    var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                    try {
                        // Avoid failures from read-only properties
                        defineProperty(targetComponent, key, descriptor);
                    } catch (e) {}
                }
            }

            return targetComponent;
        }

        return targetComponent;
    };
});

/***/ }),

/***/ "kxo5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ncfW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("LpuX");
} else {
  module.exports = require('./cjs/react-is.development.js');
}

/***/ }),

/***/ "v93/":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("AX2D");

function CrabFinal (props) {
    return React.createElement("svg",props,[React.createElement("rect",{"className":"Artboard1","x":"0","y":"0","width":"96","height":"46.919","style":{"fill":"none"},"key":0}),React.createElement("g",{"key":1},[React.createElement("g",{"className":"shell","key":0},[React.createElement("path",{"className":"outer-shell","d":"M21.691,22.312l10.307,-11.733l32,0l10.311,11.733l-12.476,17.6l-27.669,0l-12.473,-17.6Z","style":{"fill":"url(#_Linear2)","stroke":"#8d4a00","strokeWidth":"0.3px"},"key":0}),React.createElement("path",{"className":"inner-shell","d":"M28.081,21.652l7.744,-9.223l24.347,0l7.747,9.223l-6.087,18.26l-27.668,0l-6.083,-18.26Z","style":{"fill":"url(#_Radial3)","stroke":"#8d4a00","strokeWidth":"0.3px"},"key":1})]),React.createElement("g",{"className":"nose","key":1},[React.createElement("path",{"d":"M49.515,14.493l-3.03,0l-1.34,-2.208l2.855,0.003l1.631,-0.002l1.224,-0.001l-1.34,2.208Z","style":{"fill":"url(#_Linear4)"},"key":0}),React.createElement("path",{"d":"M49.515,14.493l-3.03,0l-1.34,-2.208l2.855,0.003l1.631,-0.002l1.224,-0.001l-1.34,2.208Zm0.117,-1.91l-1.632,0.001l-2.328,-0.002l0.98,1.615l2.696,0l0.98,-1.615l-0.696,0.001Z","style":{"fill":"#8d4a00"},"key":1}),React.createElement("g",{"key":2},[React.createElement("ellipse",{"cx":"47.178","cy":"13.389","rx":"0.28","ry":"0.342","style":{"fill":"#8d4a00"},"key":0}),React.createElement("ellipse",{"cx":"48.822","cy":"13.389","rx":"0.28","ry":"0.342","style":{"fill":"#8d4a00"},"key":1})])]),React.createElement("g",{"className":"mouth","key":2},[React.createElement("g",{"className":"inner-mouth","key":0},[React.createElement("path",{"className":"right-mouth","d":"M48,21.109l0,-3.623l-1.958,-1.614l-1.959,1.614l1.721,3.625","style":{"fill":"url(#_Linear5)"},"key":0}),React.createElement("path",{"className":"left-mouth","d":"M48,21.109l0,-3.623l1.958,-1.614l1.959,1.614l-1.721,3.625","style":{"fill":"url(#_Linear6)"},"key":1})]),React.createElement("g",{"className":"outer-mouth","key":1},[React.createElement("path",{"className":"right-mouth","serifClass":"right-mouth","d":"M48,21.109l0,-3.623l-1.958,-1.614l-1.959,1.614l1.721,3.625","style":{"fill":"url(#_Linear7)","stroke":"#8d4a00","strokeWidth":"0.3px","strokeLinecap":"round"},"key":0}),React.createElement("path",{"className":"left-mouth","serifClass":"left-mouth","d":"M48,21.109l0,-3.623l1.958,-1.614l1.959,1.614l-1.721,3.625","style":{"fill":"url(#_Linear8)","stroke":"#8d4a00","strokeWidth":"0.3px","strokeLinecap":"round"},"key":1})])]),React.createElement("g",{"className":"eyes","key":3},[React.createElement("g",{"className":"right-eye","key":0},[React.createElement("path",{"d":"M38.107,13.29l-0.011,-3.693c-0.442,-0.206 -0.757,-0.732 -0.759,-1.348c-0.002,-0.797 0.522,-1.446 1.169,-1.448c0.648,-0.001 1.175,0.644 1.178,1.442c0.001,0.616 -0.311,1.143 -0.752,1.352l0.011,3.697","style":{"fill":"url(#_Linear9)","stroke":"#8d4a00","strokeWidth":"0.3px","strokeLinecap":"round"},"key":0}),React.createElement("path",{"d":"M38.389,6.752c-0.335,0.024 -0.592,0.244 -0.574,0.491c0.019,0.246 0.305,0.426 0.64,0.401c0.334,-0.024 0.591,-0.244 0.573,-0.49c-0.018,-0.247 -0.304,-0.427 -0.639,-0.402Z","style":{"fill":"#8d4a00"},"key":1})]),React.createElement("g",{"className":"left-eye","key":1},[React.createElement("path",{"d":"M57.893,13.28l0.011,-3.693c0.442,-0.207 0.757,-0.732 0.759,-1.348c0.002,-0.797 -0.522,-1.446 -1.169,-1.448c-0.648,-0.002 -1.175,0.644 -1.178,1.441c-0.001,0.616 0.311,1.144 0.752,1.352l-0.011,3.697","style":{"fill":"url(#_Linear10)","stroke":"#8d4a00","strokeWidth":"0.3px","strokeLinecap":"round"},"key":0}),React.createElement("path",{"d":"M57.611,6.741c0.335,0.025 0.592,0.245 0.574,0.491c-0.019,0.247 -0.305,0.427 -0.64,0.402c-0.334,-0.025 -0.591,-0.245 -0.573,-0.491c0.018,-0.246 0.304,-0.426 0.639,-0.402Z","style":{"fill":"#8d4a00"},"key":1})])]),React.createElement("g",{"className":"legs","key":4},[React.createElement("g",{"className":"right-legs","key":0},[React.createElement("g",{"className":"fourth-leg","key":0},[React.createElement("clipPath",{"id":"_clip11","key":0},React.createElement("path",{"className":"begin-leg","d":"M43.195,39.869l0.445,-0.706c0,0 -0.262,-2.842 -9.869,-6.269c0.249,0.161 0.405,0.445 0.386,0.756c-0.03,0.463 -0.437,0.813 -0.909,0.782c-0.041,-0.003 -0.081,-0.008 -0.12,-0.017l-0.001,0.002c0,0 9.435,5.962 10.068,5.452Z"})),React.createElement("g",{"clipPath":"url(#_clip11)","key":1},React.createElement("use",{"xlinkHref":"#_Image12","x":"34.662","y":"37.562","width":"10.513px","height":"7.006px","transform":"matrix(0.955711,-1.27326e-17,1.1667e-17,0.875727,-1.91847e-15,3.41061e-15)"})),React.createElement("path",{"d":"M43.195,39.869l0.445,-0.706c0,0 -0.262,-2.842 -9.869,-6.269c0.249,0.161 0.405,0.445 0.386,0.756c-0.03,0.463 -0.437,0.813 -0.909,0.782c-0.041,-0.003 -0.081,-0.008 -0.12,-0.017l-0.001,0.002c0,0 9.435,5.962 10.068,5.452Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":2}),React.createElement("circle",{"className":"first-joint","cx":"43.208","cy":"38.434","r":"1.479","style":{"fill":"#ffd175","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":3}),React.createElement("g",{"className":"second-part","key":4},[React.createElement("clipPath",{"id":"_clip13","key":0},React.createElement("path",{"className":"mid-leg","d":"M33.07,32.777c-5.03,-0.041 -10.8,5.383 -10.8,5.383l0.937,1.066c9.651,-4.281 9.858,-4.798 9.863,-4.818c-0.381,-0.094 -0.659,-0.436 -0.649,-0.836c0.009,-0.387 0.284,-0.706 0.649,-0.795Z"})),React.createElement("g",{"clipPath":"url(#_clip13)","key":1},React.createElement("use",{"xlinkHref":"#_Image14","x":"22.684","y":"35.577","width":"10.8px","height":"6.449px","transform":"matrix(0.981784,0,0,0.921306,-1.91847e-15,3.41061e-15)"})),React.createElement("path",{"d":"M33.07,32.777c-5.03,-0.041 -10.8,5.383 -10.8,5.383l0.937,1.066c9.651,-4.281 9.858,-4.798 9.863,-4.818c-0.381,-0.094 -0.659,-0.436 -0.649,-0.836c0.009,-0.387 0.284,-0.706 0.649,-0.795Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":2}),React.createElement("clipPath",{"id":"_clip15","key":3},React.createElement("path",{"className":"second-joint","d":"M33.417,32.506c0.613,0.079 1.048,0.631 0.972,1.231c-0.077,0.601 -0.637,1.024 -1.249,0.944c-0.613,-0.08 -1.048,-0.632 -0.972,-1.232c0.077,-0.6 0.636,-1.023 1.249,-0.943Z"})),React.createElement("g",{"clipPath":"url(#_clip15)","key":4},React.createElement("use",{"xlinkHref":"#_Image16","x":"43.108","y":"44.421","width":"2.238px","height":"2.195px","transform":"matrix(0.746017,0,0,0.73155,-1.91847e-15,0)"})),React.createElement("path",{"d":"M33.417,32.506c0.613,0.079 1.048,0.631 0.972,1.231c-0.077,0.601 -0.637,1.024 -1.249,0.944c-0.613,-0.08 -1.048,-0.632 -0.972,-1.232c0.077,-0.6 0.636,-1.023 1.249,-0.943Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":5}),React.createElement("g",{"className":"third-part","key":6},[React.createElement("path",{"className":"end-leg","d":"M23.308,39.078c0,0 2.061,2.04 1.325,3.542c-0.585,1.195 -2.016,1.375 -2.922,0.504c-1.195,-1.148 0.176,-4.648 0.176,-4.648","style":{"fill":"url(#_Linear17)","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":0}),React.createElement("clipPath",{"id":"_clip18","key":1},React.createElement("path",{"className":"third-joint","d":"M22.27,37.992c0.406,-0.217 0.917,-0.069 1.14,0.33c0.222,0.399 0.073,0.899 -0.334,1.116c-0.407,0.217 -0.918,0.069 -1.141,-0.33c-0.222,-0.399 -0.072,-0.899 0.335,-1.116Z"})),React.createElement("g",{"clipPath":"url(#_clip18)","key":2},React.createElement("use",{"xlinkHref":"#_Image19","x":"25.98","y":"46.043","width":"1.681px","height":"1.646px","transform":"matrix(0.840349,0,0,0.822968,1.49214e-15,6.82121e-15)"})),React.createElement("path",{"d":"M22.27,37.992c0.406,-0.217 0.917,-0.069 1.14,0.33c0.222,0.399 0.073,0.899 -0.334,1.116c-0.407,0.217 -0.918,0.069 -1.141,-0.33c-0.222,-0.399 -0.072,-0.899 0.335,-1.116Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":3})])])]),React.createElement("g",{"className":"third-leg","key":1},[React.createElement("clipPath",{"id":"_clip20","key":0},React.createElement("path",{"className":"begin-leg","serifClass":"begin-leg","d":"M42.461,37.25l0.221,-1.397c0,0 -0.285,-3.095 -10.745,-6.827c0.27,0.176 0.441,0.485 0.419,0.824c-0.031,0.503 -0.475,0.885 -0.989,0.851c-0.045,-0.003 -0.088,-0.009 -0.131,-0.018l-0.001,0.002c0,0 10.537,7.12 11.226,6.565Z"})),React.createElement("g",{"clipPath":"url(#_clip20)","key":1},React.createElement("use",{"xlinkHref":"#_Image21","x":"32.744","y":"31.646","width":"11.447px","height":"8.255px","transform":"matrix(0.953925,-1.27088e-17,1.22196e-17,0.917204,-1.55609e-14,1.7053e-15)"})),React.createElement("path",{"d":"M42.461,37.25l0.221,-1.397c0,0 -0.285,-3.095 -10.745,-6.827c0.27,0.176 0.441,0.485 0.419,0.824c-0.031,0.503 -0.475,0.885 -0.989,0.851c-0.045,-0.003 -0.088,-0.009 -0.131,-0.018l-0.001,0.002c0,0 10.537,7.12 11.226,6.565Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":2}),React.createElement("circle",{"className":"first-joint","serifClass":"first-joint","cx":"42.675","cy":"35.598","r":"1.672","style":{"fill":"#ffd175","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":3}),React.createElement("g",{"className":"second-part","serifClass":"second-part","key":4},[React.createElement("clipPath",{"id":"_clip22","key":0},React.createElement("path",{"className":"mid-leg","serifClass":"mid-leg","d":"M31.173,28.899c-5.477,-0.045 -11.759,5.861 -11.759,5.861l1.02,1.161c10.508,-4.661 10.734,-5.225 10.739,-5.246c-0.414,-0.103 -0.717,-0.475 -0.707,-0.911c0.01,-0.421 0.309,-0.768 0.707,-0.865Z"})),React.createElement("g",{"clipPath":"url(#_clip22)","key":1},React.createElement("use",{"xlinkHref":"#_Image23","x":"19.811","y":"32.923","width":"11.759px","height":"7.022px","transform":"matrix(0.979949,0,2.92361e-18,0.877785,-1.55609e-14,-1.7053e-15)"})),React.createElement("path",{"d":"M31.173,28.899c-5.477,-0.045 -11.759,5.861 -11.759,5.861l1.02,1.161c10.508,-4.661 10.734,-5.225 10.739,-5.246c-0.414,-0.103 -0.717,-0.475 -0.707,-0.911c0.01,-0.421 0.309,-0.768 0.707,-0.865Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":2}),React.createElement("clipPath",{"id":"_clip24","key":3},React.createElement("path",{"className":"second-joint","serifClass":"second-joint","d":"M31.584,28.608c0.664,0.105 1.122,0.718 1.02,1.37c-0.101,0.651 -0.722,1.094 -1.387,0.989c-0.665,-0.104 -1.122,-0.718 -1.021,-1.369c0.101,-0.651 0.723,-1.095 1.388,-0.99Z"})),React.createElement("g",{"clipPath":"url(#_clip24)","key":4},React.createElement("use",{"xlinkHref":"#_Image25","x":"37.162","y":"35.886","width":"2.436px","height":"2.39px","transform":"matrix(0.812165,2.16404e-17,2.123e-17,0.796763,6.39488e-16,0)"})),React.createElement("path",{"d":"M31.584,28.608c0.664,0.105 1.122,0.718 1.02,1.37c-0.101,0.651 -0.722,1.094 -1.387,0.989c-0.665,-0.104 -1.122,-0.718 -1.021,-1.369c0.101,-0.651 0.723,-1.095 1.388,-0.99Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":5}),React.createElement("g",{"className":"third-part","serifClass":"third-part","key":6},[React.createElement("clipPath",{"id":"_clip26","key":0},React.createElement("path",{"className":"end-leg","serifClass":"end-leg","d":"M19.015,35.626c-0.08,-0.225 0.237,-0.721 0.237,-0.721c0,0 -4.307,4.504 -1.27,11.495c-0.497,-7.664 2.269,-10.223 2.269,-10.223l-0.033,-0.033c-0.026,0.01 -0.053,0.02 -0.08,0.029c-0.462,0.143 -0.965,-0.103 -1.123,-0.547Z"})),React.createElement("g",{"clipPath":"url(#_clip26)","key":1},React.createElement("use",{"xlinkHref":"#_Image27","x":"20.158","y":"36.44","width":"3.353px","height":"11.495px","transform":"matrix(0.838256,0,0,0.957892,-1.91847e-15,0)"})),React.createElement("path",{"d":"M19.015,35.626c-0.08,-0.225 0.237,-0.721 0.237,-0.721c0,0 -4.307,4.504 -1.27,11.495c-0.497,-7.664 2.269,-10.223 2.269,-10.223l-0.033,-0.033c-0.026,0.01 -0.053,0.02 -0.08,0.029c-0.462,0.143 -0.965,-0.103 -1.123,-0.547Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":2}),React.createElement("clipPath",{"id":"_clip28","key":3},React.createElement("path",{"className":"third-joint","serifClass":"third-joint","d":"M19.283,34.666c0.395,-0.31 0.971,-0.248 1.285,0.138c0.314,0.386 0.248,0.95 -0.147,1.26c-0.396,0.309 -0.972,0.247 -1.286,-0.139c-0.314,-0.385 -0.247,-0.95 0.148,-1.259Z"})),React.createElement("g",{"clipPath":"url(#_clip28)","key":4},React.createElement("use",{"xlinkHref":"#_Image29","x":"20.704","y":"38.463","width":"1.829px","height":"1.792px","transform":"matrix(0.914646,0,0,0.896143,-1.91847e-15,0)"})),React.createElement("path",{"d":"M19.283,34.666c0.395,-0.31 0.971,-0.248 1.285,0.138c0.314,0.386 0.248,0.95 -0.147,1.26c-0.396,0.309 -0.972,0.247 -1.286,-0.139c-0.314,-0.385 -0.247,-0.95 0.148,-1.259Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":5})])])]),React.createElement("g",{"className":"second-leg","key":2},[React.createElement("clipPath",{"id":"_clip30","key":0},React.createElement("path",{"className":"begin-leg","serifClass":"begin-leg","d":"M41.564,32.534l0,-0.767c0,0 -0.319,-3.409 -12.021,-7.52c0.302,0.195 0.493,0.534 0.469,0.908c-0.036,0.555 -0.532,0.975 -1.108,0.937c-0.05,-0.003 -0.098,-0.01 -0.146,-0.019l-0.001,0.002c0,0 12.248,8.766 13.02,8.154c0,0 0.014,0.187 0.078,-0.806c0.04,-0.628 -0.782,-0.551 -0.291,-0.889Z"})),React.createElement("g",{"clipPath":"url(#_clip30)","key":1},React.createElement("use",{"xlinkHref":"#_Image31","x":"30.735","y":"26.64","width":"13.099px","height":"10.012px","transform":"matrix(0.935646,-2.49306e-17,0,0.910199,1.1724e-14,8.52651e-16)"})),React.createElement("path",{"d":"M41.564,32.534l0,-0.767c0,0 -0.319,-3.409 -12.021,-7.52c0.302,0.195 0.493,0.534 0.469,0.908c-0.036,0.555 -0.532,0.975 -1.108,0.937c-0.05,-0.003 -0.098,-0.01 -0.146,-0.019l-0.001,0.002c0,0 12.248,8.766 13.02,8.154c0,0 0.014,0.187 0.078,-0.806c0.04,-0.628 -0.782,-0.551 -0.291,-0.889Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":2}),React.createElement("circle",{"className":"first-joint","serifClass":"first-joint","cx":"42.211","cy":"32.327","r":"1.923","style":{"fill":"#ffd175","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":3}),React.createElement("g",{"className":"second-part","serifClass":"second-part","key":4},[React.createElement("clipPath",{"id":"_clip32","key":0},React.createElement("path",{"className":"mid-leg","serifClass":"mid-leg","d":"M28.688,24.108c-6.128,-0.05 -13.156,6.456 -13.156,6.456l1.141,1.279c11.757,-5.135 12.009,-5.756 12.015,-5.779c-0.464,-0.113 -0.803,-0.524 -0.791,-1.003c0.011,-0.464 0.346,-0.847 0.791,-0.953Z"})),React.createElement("g",{"clipPath":"url(#_clip32)","key":1},React.createElement("use",{"xlinkHref":"#_Image33","x":"16.528","y":"24.935","width":"13.156px","height":"7.735px","transform":"matrix(0.939726,0,0,0.966839,2.53664e-14,0)"})),React.createElement("path",{"d":"M28.688,24.108c-6.128,-0.05 -13.156,6.456 -13.156,6.456l1.141,1.279c11.757,-5.135 12.009,-5.756 12.015,-5.779c-0.464,-0.113 -0.803,-0.524 -0.791,-1.003c0.011,-0.464 0.346,-0.847 0.791,-0.953Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":2}),React.createElement("clipPath",{"id":"_clip34","key":3},React.createElement("path",{"className":"second-joint","serifClass":"second-joint","d":"M29.121,23.784c0.745,0.105 1.27,0.774 1.171,1.493c-0.098,0.719 -0.784,1.218 -1.529,1.112c-0.745,-0.105 -1.27,-0.774 -1.172,-1.493c0.099,-0.719 0.784,-1.218 1.53,-1.112Z"})),React.createElement("g",{"clipPath":"url(#_clip34)","key":4},React.createElement("use",{"xlinkHref":"#_Image35","x":"30.366","y":"27.073","width":"2.725px","height":"2.634px","transform":"matrix(0.908249,0,0,0.877988,-1.06581e-16,8.52651e-16)"})),React.createElement("path",{"d":"M29.121,23.784c0.745,0.105 1.27,0.774 1.171,1.493c-0.098,0.719 -0.784,1.218 -1.529,1.112c-0.745,-0.105 -1.27,-0.774 -1.172,-1.493c0.099,-0.719 0.784,-1.218 1.53,-1.112Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":5}),React.createElement("g",{"className":"third-part","serifClass":"third-part","key":6},[React.createElement("clipPath",{"id":"_clip36","key":0},React.createElement("path",{"className":"end-leg","serifClass":"end-leg","d":"M15.086,31.518c-0.089,-0.252 0.266,-0.806 0.266,-0.806c0,0 -4.817,5.037 -1.421,12.856c-0.556,-8.572 2.538,-11.434 2.538,-11.434l-0.037,-0.037c-0.029,0.012 -0.059,0.023 -0.09,0.032c-0.516,0.16 -1.079,-0.114 -1.256,-0.611Z"})),React.createElement("g",{"clipPath":"url(#_clip36)","key":1},React.createElement("use",{"xlinkHref":"#_Image37","x":"13.566","y":"31.056","width":"3.75px","height":"12.856px","transform":"matrix(0.937523,0,2.635e-17,0.988917,-1.91847e-15,-3.41061e-15)"})),React.createElement("path",{"d":"M15.086,31.518c-0.089,-0.252 0.266,-0.806 0.266,-0.806c0,0 -4.817,5.037 -1.421,12.856c-0.556,-8.572 2.538,-11.434 2.538,-11.434l-0.037,-0.037c-0.029,0.012 -0.059,0.023 -0.09,0.032c-0.516,0.16 -1.079,-0.114 -1.256,-0.611Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":2}),React.createElement("clipPath",{"id":"_clip38","key":3},React.createElement("path",{"className":"third-joint","serifClass":"third-joint","d":"M15.397,30.453c0.447,-0.337 1.09,-0.263 1.435,0.166c0.345,0.428 0.262,1.049 -0.185,1.386c-0.447,0.338 -1.09,0.264 -1.435,-0.165c-0.345,-0.428 -0.262,-1.049 0.185,-1.387Z"})),React.createElement("g",{"clipPath":"url(#_clip38)","key":4},React.createElement("use",{"xlinkHref":"#_Image39","x":"21.994","y":"30.627","width":"2.046px","height":"1.975px","transform":"matrix(0.681967,3.63425e-17,1.05242e-16,0.987435,-1.91847e-15,0)"})),React.createElement("path",{"d":"M15.397,30.453c0.447,-0.337 1.09,-0.263 1.435,0.166c0.345,0.428 0.262,1.049 -0.185,1.386c-0.447,0.338 -1.09,0.264 -1.435,-0.165c-0.345,-0.428 -0.262,-1.049 0.185,-1.387Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":5})])])]),React.createElement("g",{"className":"first-leg","key":3},[React.createElement("clipPath",{"id":"_clip40","key":0},React.createElement("path",{"className":"begin-leg","serifClass":"begin-leg","d":"M40.347,27.987l0,-0.865c0,0 -0.363,-3.839 -13.687,-8.47c0.345,0.219 0.562,0.602 0.535,1.022c-0.041,0.626 -0.606,1.099 -1.261,1.056c-0.057,-0.003 -0.112,-0.011 -0.167,-0.022l0,0.003c0,0 14.342,10.482 15.22,9.792c0,0 -0.381,-0.397 -0.308,-1.515c0.045,-0.707 -0.891,-0.62 -0.332,-1.001Z"})),React.createElement("g",{"clipPath":"url(#_clip40)","key":1},React.createElement("use",{"xlinkHref":"#_Image41","x":"27.085","y":"18.835","width":"15.221px","height":"11.883px","transform":"matrix(0.951305,0,0,0.990287,-1.55609e-14,-1.06581e-15)"})),React.createElement("path",{"d":"M40.347,27.987l0,-0.865c0,0 -0.363,-3.839 -13.687,-8.47c0.345,0.219 0.562,0.602 0.535,1.022c-0.041,0.626 -0.606,1.099 -1.261,1.056c-0.057,-0.003 -0.112,-0.011 -0.167,-0.022l0,0.003c0,0 14.342,10.482 15.22,9.792c0,0 -0.381,-0.397 -0.308,-1.515c0.045,-0.707 -0.891,-0.62 -0.332,-1.001Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":2}),React.createElement("circle",{"className":"first-joint","serifClass":"first-joint","cx":"41.644","cy":"28.781","r":"2.077","style":{"fill":"#ffd175","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":3}),React.createElement("circle",{"className":"first-joint","serifClass":"first-joint","cx":"41.644","cy":"28.781","r":"2.077","style":{"fill":"#ffd175","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":4}),React.createElement("g",{"className":"second-part","serifClass":"second-part","key":5},[React.createElement("clipPath",{"id":"_clip42","key":0},React.createElement("path",{"className":"mid-leg","serifClass":"mid-leg","d":"M25.688,18.496c-6.978,-0.057 -14.979,7.271 -14.979,7.271l1.3,1.441c13.384,-5.784 13.672,-6.483 13.678,-6.51c-0.528,-0.127 -0.913,-0.589 -0.9,-1.129c0.013,-0.523 0.394,-0.954 0.901,-1.073Z"})),React.createElement("g",{"clipPath":"url(#_clip42)","key":1},React.createElement("use",{"xlinkHref":"#_Image43","x":"10.724","y":"19.105","width":"14.979px","height":"8.713px","transform":"matrix(0.998578,-3.32593e-18,-6.44874e-18,0.968085,1.1724e-14,4.26326e-16)"})),React.createElement("path",{"d":"M25.688,18.496c-6.978,-0.057 -14.979,7.271 -14.979,7.271l1.3,1.441c13.384,-5.784 13.672,-6.483 13.678,-6.51c-0.528,-0.127 -0.913,-0.589 -0.9,-1.129c0.013,-0.523 0.394,-0.954 0.901,-1.073Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":2}),React.createElement("clipPath",{"id":"_clip44","key":3},React.createElement("path",{"className":"second-joint","serifClass":"second-joint","d":"M26.017,18.117c0.857,0.027 1.534,0.714 1.511,1.531c-0.022,0.817 -0.736,1.458 -1.592,1.431c-0.857,-0.028 -1.534,-0.715 -1.511,-1.532c0.022,-0.817 0.736,-1.458 1.592,-1.43Z"})),React.createElement("g",{"clipPath":"url(#_clip44)","key":4},React.createElement("use",{"xlinkHref":"#_Image45","x":"31.465","y":"18.338","width":"3.105px","height":"2.964px","transform":"matrix(0.776234,0,3.29032e-18,0.987886,1.49214e-15,2.13163e-16)"})),React.createElement("path",{"d":"M26.017,18.117c0.857,0.027 1.534,0.714 1.511,1.531c-0.022,0.817 -0.736,1.458 -1.592,1.431c-0.857,-0.028 -1.534,-0.715 -1.511,-1.532c0.022,-0.817 0.736,-1.458 1.592,-1.43Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":5}),React.createElement("g",{"className":"third-part","serifClass":"third-part","key":6},[React.createElement("clipPath",{"id":"_clip46","key":0},React.createElement("path",{"className":"end-leg","serifClass":"end-leg","d":"M10.197,26.844c-0.102,-0.287 0.303,-0.919 0.303,-0.919c0,0 -5.497,5.748 -1.622,14.67c-0.634,-9.782 2.896,-13.048 2.896,-13.048l-0.041,-0.042c-0.034,0.014 -0.068,0.026 -0.103,0.037c-0.589,0.182 -1.231,-0.13 -1.433,-0.698Z"})),React.createElement("g",{"clipPath":"url(#_clip46)","key":1},React.createElement("use",{"xlinkHref":"#_Image47","x":"8.757","y":"26.506","width":"4.28px","height":"14.671px","transform":"matrix(0.855903,0,0,0.978058,1.1724e-14,5.11591e-15)"})),React.createElement("path",{"d":"M10.197,26.844c-0.102,-0.287 0.303,-0.919 0.303,-0.919c0,0 -5.497,5.748 -1.622,14.67c-0.634,-9.782 2.896,-13.048 2.896,-13.048l-0.041,-0.042c-0.034,0.014 -0.068,0.026 -0.103,0.037c-0.589,0.182 -1.231,-0.13 -1.433,-0.698Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":2}),React.createElement("clipPath",{"id":"_clip48","key":3},React.createElement("path",{"className":"third-joint","serifClass":"third-joint","d":"M10.51,25.684c0.489,-0.408 1.224,-0.365 1.641,0.095c0.417,0.46 0.36,1.164 -0.128,1.572c-0.488,0.407 -1.223,0.365 -1.641,-0.095c-0.417,-0.46 -0.36,-1.165 0.128,-1.572Z"})),React.createElement("g",{"clipPath":"url(#_clip48)","key":4},React.createElement("use",{"xlinkHref":"#_Image49","x":"13.027","y":"34.22","width":"2.327px","height":"2.227px","transform":"matrix(0.775592,0,0,0.742369,-1.91847e-15,6.82121e-15)"})),React.createElement("path",{"d":"M10.51,25.684c0.489,-0.408 1.224,-0.365 1.641,0.095c0.417,0.46 0.36,1.164 -0.128,1.572c-0.488,0.407 -1.223,0.365 -1.641,-0.095c-0.417,-0.46 -0.36,-1.165 0.128,-1.572Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":5})])])])]),React.createElement("g",{"className":"left-legs","key":1},[React.createElement("g",{"className":"fourth-leg","serifClass":"fourth-leg","key":0},[React.createElement("clipPath",{"id":"_clip50","key":0},React.createElement("path",{"className":"begin-leg","serifClass":"begin-leg","d":"M52.977,39.869l-0.445,-0.706c0,0 0.263,-2.842 9.869,-6.269c-0.249,0.161 -0.405,0.445 -0.385,0.756c0.029,0.463 0.436,0.813 0.909,0.782c0.041,-0.003 0.081,-0.008 0.12,-0.017l0,0.002c0,0 -9.434,5.962 -10.068,5.452Z"})),React.createElement("g",{"clipPath":"url(#_clip50)","key":1},React.createElement("use",{"xlinkHref":"#_Image51","x":"54.967","y":"37.562","width":"10.513px","height":"7.006px","transform":"matrix(0.955711,1.27326e-17,-1.1667e-17,0.875727,-1.06581e-15,3.41061e-15)"})),React.createElement("path",{"d":"M52.977,39.869l-0.445,-0.706c0,0 0.263,-2.842 9.869,-6.269c-0.249,0.161 -0.405,0.445 -0.385,0.756c0.029,0.463 0.436,0.813 0.909,0.782c0.041,-0.003 0.081,-0.008 0.12,-0.017l0,0.002c0,0 -9.434,5.962 -10.068,5.452Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":2}),React.createElement("circle",{"className":"first-joint","serifClass":"first-joint","cx":"52.964","cy":"38.434","r":"1.479","style":{"fill":"#ffd175","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":3}),React.createElement("g",{"className":"second-part","serifClass":"second-part","key":4},[React.createElement("clipPath",{"id":"_clip52","key":0},React.createElement("path",{"className":"mid-leg","serifClass":"mid-leg","d":"M63.102,32.777c5.031,-0.041 10.8,5.383 10.8,5.383l-0.937,1.066c-9.651,-4.281 -9.858,-4.798 -9.862,-4.818c0.38,-0.094 0.658,-0.436 0.649,-0.836c-0.01,-0.387 -0.284,-0.706 -0.65,-0.795Z"})),React.createElement("g",{"clipPath":"url(#_clip52)","key":1},React.createElement("use",{"xlinkHref":"#_Image53","x":"64.273","y":"35.577","width":"10.8px","height":"6.449px","transform":"matrix(0.981784,0,3.06857e-18,0.921306,-1.91847e-15,3.41061e-15)"})),React.createElement("path",{"d":"M63.102,32.777c5.031,-0.041 10.8,5.383 10.8,5.383l-0.937,1.066c-9.651,-4.281 -9.858,-4.798 -9.862,-4.818c0.38,-0.094 0.658,-0.436 0.649,-0.836c-0.01,-0.387 -0.284,-0.706 -0.65,-0.795Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":2}),React.createElement("clipPath",{"id":"_clip54","key":3},React.createElement("path",{"className":"second-joint","serifClass":"second-joint","d":"M62.753,32.506c-0.613,0.079 -1.048,0.631 -0.972,1.231c0.077,0.601 0.636,1.024 1.249,0.944c0.613,-0.08 1.048,-0.632 0.972,-1.232c-0.077,-0.6 -0.637,-1.023 -1.249,-0.943Z"})),React.createElement("g",{"clipPath":"url(#_clip54)","key":4},React.createElement("use",{"xlinkHref":"#_Image55","x":"82.803","y":"44.421","width":"2.238px","height":"2.195px","transform":"matrix(0.746017,0,0,0.73155,-1.91847e-15,3.41061e-15)"})),React.createElement("path",{"d":"M62.753,32.506c-0.613,0.079 -1.048,0.631 -0.972,1.231c0.077,0.601 0.636,1.024 1.249,0.944c0.613,-0.08 1.048,-0.632 0.972,-1.232c-0.077,-0.6 -0.637,-1.023 -1.249,-0.943Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":5}),React.createElement("g",{"className":"third-part","serifClass":"third-part","key":6},[React.createElement("path",{"className":"end-leg","serifClass":"end-leg","d":"M72.864,39.078c0,0 -2.061,2.04 -1.325,3.542c0.585,1.195 2.016,1.375 2.923,0.504c1.194,-1.148 -0.177,-4.648 -0.177,-4.648","style":{"fill":"url(#_Linear56)","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":0}),React.createElement("clipPath",{"id":"_clip57","key":1},React.createElement("path",{"className":"third-joint","serifClass":"third-joint","d":"M73.903,37.992c-0.407,-0.217 -0.918,-0.069 -1.141,0.33c-0.222,0.399 -0.072,0.899 0.335,1.116c0.406,0.217 0.917,0.069 1.14,-0.33c0.222,-0.399 0.073,-0.899 -0.334,-1.116Z"})),React.createElement("g",{"clipPath":"url(#_clip57)","key":2},React.createElement("use",{"xlinkHref":"#_Image58","x":"86.463","y":"46.043","width":"1.681px","height":"1.646px","transform":"matrix(0.840349,0,0,0.822968,-1.55609e-14,0)"})),React.createElement("path",{"d":"M73.903,37.992c-0.407,-0.217 -0.918,-0.069 -1.141,0.33c-0.222,0.399 -0.072,0.899 0.335,1.116c0.406,0.217 0.917,0.069 1.14,-0.33c0.222,-0.399 0.073,-0.899 -0.334,-1.116Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":3})])])]),React.createElement("g",{"className":"third-leg","serifClass":"third-leg","key":1},[React.createElement("clipPath",{"id":"_clip59","key":0},React.createElement("path",{"className":"begin-leg","serifClass":"begin-leg","d":"M53.711,37.25l-0.221,-1.397c0,0 0.285,-3.095 10.745,-6.827c-0.27,0.176 -0.441,0.485 -0.419,0.824c0.032,0.503 0.475,0.885 0.99,0.851c0.044,-0.003 0.088,-0.009 0.13,-0.018l0.001,0.002c0,0 -10.536,7.12 -11.226,6.565Z"})),React.createElement("g",{"clipPath":"url(#_clip59)","key":1},React.createElement("use",{"xlinkHref":"#_Image60","x":"56.073","y":"31.646","width":"11.447px","height":"8.255px","transform":"matrix(0.953925,1.27088e-17,-1.22196e-17,0.917204,-2.13163e-16,0)"})),React.createElement("path",{"d":"M53.711,37.25l-0.221,-1.397c0,0 0.285,-3.095 10.745,-6.827c-0.27,0.176 -0.441,0.485 -0.419,0.824c0.032,0.503 0.475,0.885 0.99,0.851c0.044,-0.003 0.088,-0.009 0.13,-0.018l0.001,0.002c0,0 -10.536,7.12 -11.226,6.565Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":2}),React.createElement("circle",{"className":"first-joint","serifClass":"first-joint","cx":"53.498","cy":"35.601","r":"1.672","style":{"fill":"#ffd175","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":3}),React.createElement("g",{"className":"second-part","serifClass":"second-part","key":4},[React.createElement("clipPath",{"id":"_clip61","key":0},React.createElement("path",{"className":"mid-leg","serifClass":"mid-leg","d":"M64.999,28.899c5.477,-0.045 11.759,5.861 11.759,5.861l-1.02,1.161c-10.508,-4.661 -10.734,-5.225 -10.739,-5.246c0.415,-0.103 0.717,-0.475 0.707,-0.911c-0.01,-0.421 -0.309,-0.768 -0.707,-0.865Z"})),React.createElement("g",{"clipPath":"url(#_clip61)","key":1},React.createElement("use",{"xlinkHref":"#_Image62","x":"66.329","y":"32.923","width":"11.759px","height":"7.022px","transform":"matrix(0.979949,0,-2.92361e-18,0.877785,-1.06581e-15,-3.41061e-15)"})),React.createElement("path",{"d":"M64.999,28.899c5.477,-0.045 11.759,5.861 11.759,5.861l-1.02,1.161c-10.508,-4.661 -10.734,-5.225 -10.739,-5.246c0.415,-0.103 0.717,-0.475 0.707,-0.911c-0.01,-0.421 -0.309,-0.768 -0.707,-0.865Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":2}),React.createElement("clipPath",{"id":"_clip63","key":3},React.createElement("path",{"className":"second-joint","serifClass":"second-joint","d":"M64.585,28.608c-0.664,0.105 -1.122,0.719 -1.02,1.37c0.101,0.651 0.723,1.095 1.387,0.99c0.665,-0.105 1.122,-0.719 1.021,-1.37c-0.101,-0.651 -0.723,-1.095 -1.388,-0.99Z"})),React.createElement("g",{"clipPath":"url(#_clip63)","key":4},React.createElement("use",{"xlinkHref":"#_Image64","x":"78.248","y":"35.886","width":"2.436px","height":"2.39px","transform":"matrix(0.812165,0,-2.123e-17,0.796763,-2.92033e-14,3.41061e-15)"})),React.createElement("path",{"d":"M64.585,28.608c-0.664,0.105 -1.122,0.719 -1.02,1.37c0.101,0.651 0.723,1.095 1.387,0.99c0.665,-0.105 1.122,-0.719 1.021,-1.37c-0.101,-0.651 -0.723,-1.095 -1.388,-0.99Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":5}),React.createElement("g",{"className":"third-part","serifClass":"third-part","key":6},[React.createElement("clipPath",{"id":"_clip65","key":0},React.createElement("path",{"className":"end-leg","serifClass":"end-leg","d":"M77.157,35.626c0.08,-0.225 -0.237,-0.721 -0.237,-0.721c0,0 4.307,4.504 1.271,11.495c0.496,-7.664 -2.27,-10.223 -2.27,-10.223l0.033,-0.033c0.026,0.01 0.053,0.02 0.081,0.029c0.461,0.143 0.964,-0.103 1.122,-0.547Z"})),React.createElement("g",{"clipPath":"url(#_clip65)","key":1},React.createElement("use",{"xlinkHref":"#_Image66","x":"90.571","y":"36.44","width":"3.353px","height":"11.495px","transform":"matrix(0.838256,0,-2.55234e-17,0.957892,-2.13163e-16,3.41061e-15)"})),React.createElement("path",{"d":"M77.157,35.626c0.08,-0.225 -0.237,-0.721 -0.237,-0.721c0,0 4.307,4.504 1.271,11.495c0.496,-7.664 -2.27,-10.223 -2.27,-10.223l0.033,-0.033c0.026,0.01 0.053,0.02 0.081,0.029c0.461,0.143 0.964,-0.103 1.122,-0.547Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":2}),React.createElement("clipPath",{"id":"_clip67","key":3},React.createElement("path",{"className":"third-joint","serifClass":"third-joint","d":"M76.89,34.666c-0.396,-0.31 -0.972,-0.248 -1.286,0.138c-0.314,0.386 -0.247,0.95 0.148,1.26c0.395,0.309 0.971,0.247 1.285,-0.139c0.314,-0.385 0.248,-0.95 -0.147,-1.259Z"})),React.createElement("g",{"clipPath":"url(#_clip67)","key":4},React.createElement("use",{"xlinkHref":"#_Image68","x":"82.443","y":"38.463","width":"1.829px","height":"1.792px","transform":"matrix(0.914646,-4.87421e-17,0,0.896143,-1.55609e-14,0)"})),React.createElement("path",{"d":"M76.89,34.666c-0.396,-0.31 -0.972,-0.248 -1.286,0.138c-0.314,0.386 -0.247,0.95 0.148,1.26c0.395,0.309 0.971,0.247 1.285,-0.139c0.314,-0.385 0.248,-0.95 -0.147,-1.259Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":5})])])]),React.createElement("g",{"className":"second-leg","serifClass":"second-leg","key":2},[React.createElement("clipPath",{"id":"_clip69","key":0},React.createElement("path",{"className":"begin-leg","serifClass":"begin-leg","d":"M54.608,32.534l0,-0.767c0,0 0.319,-3.409 12.022,-7.52c-0.303,0.195 -0.493,0.534 -0.469,0.908c0.035,0.555 0.531,0.975 1.107,0.937c0.05,-0.003 0.098,-0.01 0.146,-0.019l0.001,0.002c0,0 -12.248,8.766 -13.02,8.154c0,0 -0.014,0.187 -0.078,-0.806c-0.04,-0.628 0.782,-0.551 0.291,-0.889Z"})),React.createElement("g",{"clipPath":"url(#_clip69)","key":1},React.createElement("use",{"xlinkHref":"#_Image70","x":"58.052","y":"26.64","width":"13.099px","height":"10.012px","transform":"matrix(0.935646,2.49306e-17,0,0.910199,0,-8.52651e-16)"})),React.createElement("path",{"d":"M54.608,32.534l0,-0.767c0,0 0.319,-3.409 12.022,-7.52c-0.303,0.195 -0.493,0.534 -0.469,0.908c0.035,0.555 0.531,0.975 1.107,0.937c0.05,-0.003 0.098,-0.01 0.146,-0.019l0.001,0.002c0,0 -12.248,8.766 -13.02,8.154c0,0 -0.014,0.187 -0.078,-0.806c-0.04,-0.628 0.782,-0.551 0.291,-0.889Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":2}),React.createElement("circle",{"className":"first-joint","serifClass":"first-joint","cx":"53.961","cy":"32.327","r":"1.923","style":{"fill":"#ffd175","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":3}),React.createElement("g",{"className":"second-part","serifClass":"second-part","key":4},[React.createElement("clipPath",{"id":"_clip71","key":0},React.createElement("path",{"className":"mid-leg","serifClass":"mid-leg","d":"M67.484,24.108c6.128,-0.05 13.156,6.456 13.156,6.456l-1.141,1.279c-11.756,-5.135 -12.009,-5.756 -12.014,-5.779c0.463,-0.113 0.802,-0.524 0.79,-1.003c-0.011,-0.464 -0.346,-0.847 -0.791,-0.953Z"})),React.createElement("g",{"clipPath":"url(#_clip71)","key":1},React.createElement("use",{"xlinkHref":"#_Image72","x":"71.813","y":"24.935","width":"13.156px","height":"7.735px","transform":"matrix(0.939726,3.12992e-18,0,0.966839,0,-1.7053e-15)"})),React.createElement("path",{"d":"M67.484,24.108c6.128,-0.05 13.156,6.456 13.156,6.456l-1.141,1.279c-11.756,-5.135 -12.009,-5.756 -12.014,-5.779c0.463,-0.113 0.802,-0.524 0.79,-1.003c-0.011,-0.464 -0.346,-0.847 -0.791,-0.953Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":2}),React.createElement("clipPath",{"id":"_clip73","key":3},React.createElement("path",{"className":"second-joint","serifClass":"second-joint","d":"M67.054,23.781c-0.745,0.105 -1.27,0.775 -1.172,1.494c0.099,0.719 0.784,1.217 1.53,1.112c0.745,-0.105 1.27,-0.775 1.171,-1.494c-0.099,-0.719 -0.784,-1.217 -1.529,-1.112Z"})),React.createElement("g",{"clipPath":"url(#_clip73)","key":4},React.createElement("use",{"xlinkHref":"#_Image74","x":"72.525","y":"27.07","width":"2.725px","height":"2.634px","transform":"matrix(0.908249,0,0,0.877988,1.1724e-14,-3.41061e-15)"})),React.createElement("path",{"d":"M67.054,23.781c-0.745,0.105 -1.27,0.775 -1.172,1.494c0.099,0.719 0.784,1.217 1.53,1.112c0.745,-0.105 1.27,-0.775 1.171,-1.494c-0.099,-0.719 -0.784,-1.217 -1.529,-1.112Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":5}),React.createElement("g",{"className":"third-part","serifClass":"third-part","key":6},[React.createElement("clipPath",{"id":"_clip75","key":0},React.createElement("path",{"className":"end-leg","serifClass":"end-leg","d":"M81.061,31.51c0.087,-0.245 -0.259,-0.784 -0.259,-0.784c0,0 4.688,4.902 1.383,12.511c0.541,-8.342 -2.47,-11.127 -2.47,-11.127l0.036,-0.036c0.028,0.011 0.058,0.022 0.088,0.031c0.502,0.156 1.05,-0.111 1.222,-0.595Z"})),React.createElement("g",{"clipPath":"url(#_clip75)","key":1},React.createElement("use",{"xlinkHref":"#_Image76","x":"87.367","y":"31.925","width":"3.65px","height":"12.512px","transform":"matrix(0.912418,0,0,0.962435,1.49214e-15,0)"})),React.createElement("path",{"d":"M81.061,31.51c0.087,-0.245 -0.259,-0.784 -0.259,-0.784c0,0 4.688,4.902 1.383,12.511c0.541,-8.342 -2.47,-11.127 -2.47,-11.127l0.036,-0.036c0.028,0.011 0.058,0.022 0.088,0.031c0.502,0.156 1.05,-0.111 1.222,-0.595Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":2}),React.createElement("clipPath",{"id":"_clip77","key":3},React.createElement("path",{"className":"third-joint","serifClass":"third-joint","d":"M80.775,30.453c-0.447,-0.337 -1.09,-0.263 -1.435,0.166c-0.345,0.428 -0.262,1.049 0.185,1.386c0.447,0.338 1.09,0.264 1.435,-0.165c0.345,-0.428 0.262,-1.049 -0.185,-1.387Z"})),React.createElement("g",{"clipPath":"url(#_clip77)","key":4},React.createElement("use",{"xlinkHref":"#_Image78","x":"116.028","y":"30.627","width":"2.046px","height":"1.975px","transform":"matrix(0.681967,0,0,0.987435,-1.55609e-14,-6.82121e-15)"})),React.createElement("path",{"d":"M80.775,30.453c-0.447,-0.337 -1.09,-0.263 -1.435,0.166c-0.345,0.428 -0.262,1.049 0.185,1.386c0.447,0.338 1.09,0.264 1.435,-0.165c0.345,-0.428 0.262,-1.049 -0.185,-1.387Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":5})])])]),React.createElement("g",{"className":"first-leg","serifClass":"first-leg","key":3},[React.createElement("clipPath",{"id":"_clip79","key":0},React.createElement("path",{"className":"begin-leg","serifClass":"begin-leg","d":"M55.825,27.987l0,-0.865c0,0 0.363,-3.839 13.687,-8.47c-0.345,0.219 -0.562,0.602 -0.534,1.022c0.04,0.626 0.605,1.099 1.261,1.056c0.056,-0.003 0.112,-0.011 0.166,-0.022l0.001,0.003c0,0 -14.343,10.482 -15.221,9.792c0,0 0.381,-0.397 0.309,-1.515c-0.046,-0.707 0.89,-0.62 0.331,-1.001Z"})),React.createElement("g",{"clipPath":"url(#_clip79)","key":1},React.createElement("use",{"xlinkHref":"#_Image80","x":"58.01","y":"18.835","width":"15.221px","height":"11.883px","transform":"matrix(0.951305,0,1.31933e-17,0.990287,-1.91847e-15,1.06581e-16)"})),React.createElement("path",{"d":"M55.825,27.987l0,-0.865c0,0 0.363,-3.839 13.687,-8.47c-0.345,0.219 -0.562,0.602 -0.534,1.022c0.04,0.626 0.605,1.099 1.261,1.056c0.056,-0.003 0.112,-0.011 0.166,-0.022l0.001,0.003c0,0 -14.343,10.482 -15.221,9.792c0,0 0.381,-0.397 0.309,-1.515c-0.046,-0.707 0.89,-0.62 0.331,-1.001Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":2}),React.createElement("circle",{"className":"first-joint","serifClass":"first-joint","cx":"54.528","cy":"28.781","r":"2.077","style":{"fill":"#ffd175","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":3}),React.createElement("g",{"className":"second-part","serifClass":"second-part","key":4},[React.createElement("clipPath",{"id":"_clip81","key":0},React.createElement("path",{"className":"mid-leg","serifClass":"mid-leg","d":"M70.485,18.496c6.977,-0.057 14.978,7.271 14.978,7.271l-1.299,1.441c-13.385,-5.784 -13.673,-6.483 -13.679,-6.51c0.528,-0.127 0.914,-0.589 0.9,-1.129c-0.012,-0.523 -0.394,-0.954 -0.9,-1.073Z"})),React.createElement("g",{"clipPath":"url(#_clip81)","key":1},React.createElement("use",{"xlinkHref":"#_Image82","x":"70.585","y":"19.105","width":"14.979px","height":"8.713px","transform":"matrix(0.998578,3.32593e-18,3.22437e-18,0.968085,1.49214e-15,4.26326e-16)"})),React.createElement("path",{"d":"M70.485,18.496c6.977,-0.057 14.978,7.271 14.978,7.271l-1.299,1.441c-13.385,-5.784 -13.673,-6.483 -13.679,-6.51c0.528,-0.127 0.914,-0.589 0.9,-1.129c-0.012,-0.523 -0.394,-0.954 -0.9,-1.073Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":2}),React.createElement("clipPath",{"id":"_clip83","key":3},React.createElement("path",{"className":"second-joint","serifClass":"second-joint","d":"M70.165,18.12c-0.857,0.028 -1.534,0.714 -1.512,1.532c0.023,0.817 0.736,1.458 1.593,1.43c0.856,-0.028 1.534,-0.714 1.511,-1.531c-0.022,-0.818 -0.736,-1.459 -1.592,-1.431Z"})),React.createElement("g",{"clipPath":"url(#_clip83)","key":4},React.createElement("use",{"xlinkHref":"#_Image84","x":"88.443","y":"18.342","width":"3.105px","height":"2.964px","transform":"matrix(0.776234,-5.17076e-18,-3.29032e-18,0.987886,-1.55609e-14,6.39488e-16)"})),React.createElement("path",{"d":"M70.165,18.12c-0.857,0.028 -1.534,0.714 -1.512,1.532c0.023,0.817 0.736,1.458 1.593,1.43c0.856,-0.028 1.534,-0.714 1.511,-1.531c-0.022,-0.818 -0.736,-1.459 -1.592,-1.431Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":5}),React.createElement("g",{"className":"third-part","serifClass":"third-part","key":6},[React.createElement("clipPath",{"id":"_clip85","key":0},React.createElement("path",{"className":"end-leg","serifClass":"end-leg","d":"M85.939,26.837c0.098,-0.278 -0.294,-0.889 -0.294,-0.889c0,0 5.318,5.561 1.569,14.192c0.614,-9.463 -2.801,-12.622 -2.801,-12.622l0.04,-0.041c0.032,0.013 0.065,0.025 0.099,0.036c0.57,0.176 1.192,-0.127 1.387,-0.676Z"})),React.createElement("g",{"clipPath":"url(#_clip85)","key":1},React.createElement("use",{"xlinkHref":"#_Image86","x":"101.947","y":"27.424","width":"4.14px","height":"14.193px","transform":"matrix(0.828008,0,0,0.946182,1.49214e-15,0)"})),React.createElement("path",{"d":"M85.939,26.837c0.098,-0.278 -0.294,-0.889 -0.294,-0.889c0,0 5.318,5.561 1.569,14.192c0.614,-9.463 -2.801,-12.622 -2.801,-12.622l0.04,-0.041c0.032,0.013 0.065,0.025 0.099,0.036c0.57,0.176 1.192,-0.127 1.387,-0.676Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":2}),React.createElement("clipPath",{"id":"_clip87","key":3},React.createElement("path",{"className":"third-joint","serifClass":"third-joint","d":"M85.662,25.684c-0.488,-0.408 -1.223,-0.365 -1.641,0.095c-0.417,0.46 -0.36,1.164 0.128,1.572c0.489,0.407 1.224,0.365 1.641,-0.095c0.417,-0.46 0.36,-1.165 -0.128,-1.572Z"})),React.createElement("g",{"clipPath":"url(#_clip87)","key":4},React.createElement("use",{"xlinkHref":"#_Image88","x":"107.972","y":"34.22","width":"2.327px","height":"2.227px","transform":"matrix(0.775592,4.13318e-17,-7.91227e-17,0.742369,1.1724e-14,6.82121e-15)"})),React.createElement("path",{"d":"M85.662,25.684c-0.488,-0.408 -1.223,-0.365 -1.641,0.095c-0.417,0.46 -0.36,1.164 0.128,1.572c0.489,0.407 1.224,0.365 1.641,-0.095c0.417,-0.46 0.36,-1.165 -0.128,-1.572Z","style":{"fill":"none","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":5})])])])])]),React.createElement("g",{"className":"pincers","key":5},[React.createElement("g",{"className":"left-pincer","key":0},[React.createElement("path",{"className":"begin-pincer","d":"M53.794,22.972c0,0 0.726,-2.697 4.934,-3.706c0.016,-0.004 2.308,1.837 2.308,1.837c0,0 -0.3,2.491 -5.054,5.449c-0.011,0.008 -2.188,-3.58 -2.188,-3.58Z","style":{"fill":"url(#_Linear89)","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":0}),React.createElement("circle",{"className":"first-joint","serifClass":"first-joint","cx":"53.168","cy":"25.752","r":"2.995","style":{"fill":"#ffd175","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":1}),React.createElement("g",{"className":"second-part","serifClass":"second-part","key":2},[React.createElement("path",{"className":"mid-pincer","d":"M63.623,15.681c0,0 0.026,3.849 -2.517,5.178c-0.014,0.007 -2.782,-1.079 -2.782,-1.079c0,0 0.344,-3.685 3.083,-4.694c0.017,-0.006 2.216,0.595 2.216,0.595Z","style":{"fill":"url(#_Linear90)","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":0}),React.createElement("circle",{"className":"second-joint","serifClass":"second-joint","cx":"59.639","cy":"20.28","r":"1.628","style":{"fill":"url(#_Linear91)","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":1}),React.createElement("g",{"className":"third-part","serifClass":"third-part","key":2},[React.createElement("g",{"className":"end-pincer","key":0},[React.createElement("g",{"className":"bottom-pincer","key":0},[React.createElement("path",{"d":"M64.058,15.161c0,0 3.15,-3.778 3.225,-5.703c0.024,-0.613 -2.914,-0.607 -3.517,-1.853c-0.342,-0.705 0.387,-1.07 0.116,-1.507c-0.259,-0.416 -0.626,-0.537 -0.776,-0.839c-0.304,-0.614 0.058,-0.961 -0.097,-1.075c-0.154,-0.113 -0.692,0.209 -0.918,0.667c-0.226,0.458 -0.4,1.539 -0.446,2.867c-0.047,1.329 -0.333,4.174 -0.485,5.017c-0.152,0.843 -0.157,1.632 0.144,1.862c0.017,0.014 2.754,0.564 2.754,0.564Z","style":{"fill":"url(#_Linear92)","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":0}),React.createElement("path",{"d":"M64.058,15.16c0,0 3.15,-3.777 3.225,-5.702c0.024,-0.613 -2.914,-0.607 -3.517,-1.853c-0.342,-0.705 0.387,-1.07 0.116,-1.507c-0.259,-0.416 -0.626,-0.537 -0.776,-0.839c-0.304,-0.614 0.058,-0.961 -0.097,-1.075c-0.154,-0.113 -0.692,0.209 -0.918,0.667c-0.226,0.458 -0.4,1.539 -0.446,2.867c-0.047,1.329 -0.333,4.174 -0.485,5.017c-0.152,0.843 -0.157,1.632 0.144,1.862c0.017,0.014 2.754,0.563 2.754,0.563Z","style":{"fill":"url(#_Linear93)","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":1})]),React.createElement("g",{"className":"moving-pincer","key":1},[React.createElement("path",{"className":"top-pincer","d":"M66.078,3.928c0.018,-0.164 1.73,-0.31 2.063,1.867c0.334,2.178 -0.844,3.449 -0.844,3.449c0,0 -2.242,-0.672 -2.242,-0.672c0,0 0.41,-0.51 0.364,-1.044c-0.027,-0.318 0.141,-1.027 0.263,-1.131c0.147,-0.124 0.671,0.067 0.802,-0.169c0.131,-0.235 -0.046,-0.816 0.012,-1.021c0.059,-0.206 0.253,-0.452 0.129,-0.725c-0.125,-0.273 -0.565,-0.39 -0.547,-0.554Z","style":{"fill":"url(#_Linear94)","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":0}),React.createElement("path",{"className":"claw-joint","d":"M67.411,8.681c0.149,0.673 -0.274,1.341 -0.944,1.491c-0.67,0.149 -1.335,-0.276 -1.484,-0.949c-0.148,-0.673 0.275,-1.341 0.945,-1.491c0.67,-0.149 1.335,0.276 1.483,0.949Z","style":{"fill":"url(#_Linear95)","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":1})])]),React.createElement("ellipse",{"className":"third-joint","serifClass":"third-joint","cx":"62.429","cy":"15.144","rx":"1.613","ry":"1.536","style":{"fill":"url(#_Linear96)","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":1})])])]),React.createElement("g",{"className":"right-pincer","key":1},[React.createElement("path",{"className":"begin-pincer","serifClass":"begin-pincer","d":"M42.876,22.856c0,0 -0.824,-3.061 -5.598,-4.206c-0.018,-0.005 -2.618,2.085 -2.618,2.085c0,0 0.34,2.826 5.733,6.183c0.014,0.008 2.483,-4.062 2.483,-4.062Z","style":{"fill":"url(#_Linear97)","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":0}),React.createElement("circle",{"className":"first-joint","serifClass":"first-joint","cx":"43.004","cy":"25.748","r":"2.995","style":{"fill":"#ffd175","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":1}),React.createElement("g",{"className":"second-part","serifClass":"second-part","key":2},[React.createElement("path",{"className":"mid-pincer","serifClass":"mid-pincer","d":"M31.724,14.583c0,0 -0.029,4.367 2.856,5.875c0.016,0.008 3.156,-1.225 3.156,-1.225c0,0 -0.39,-4.181 -3.498,-5.325c-0.019,-0.008 -2.514,0.675 -2.514,0.675Z","style":{"fill":"url(#_Linear98)","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":0}),React.createElement("circle",{"className":"second-joint","serifClass":"second-joint","cx":"36.245","cy":"19.8","r":"1.848","style":{"fill":"url(#_Linear99)","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":1}),React.createElement("g",{"className":"third-part","serifClass":"third-part","key":2},[React.createElement("g",{"className":"end-pincer","serifClass":"end-pincer","key":0},[React.createElement("g",{"className":"bottom-pincer","serifClass":"bottom-pincer","key":0},[React.createElement("path",{"d":"M31.231,13.992c0,0 -3.575,-4.287 -3.66,-6.47c-0.027,-0.697 3.307,-0.689 3.991,-2.102c0.388,-0.801 -0.439,-1.216 -0.132,-1.71c0.294,-0.473 0.711,-0.61 0.88,-0.953c0.345,-0.697 -0.065,-1.091 0.11,-1.22c0.176,-0.128 0.786,0.237 1.042,0.757c0.257,0.52 0.454,1.747 0.507,3.254c0.053,1.507 0.377,4.735 0.55,5.692c0.172,0.956 0.178,1.851 -0.163,2.113c-0.02,0.015 -3.125,0.639 -3.125,0.639Z","style":{"fill":"url(#_Linear100)","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":0}),React.createElement("path",{"d":"M31.23,13.992c0,0 -3.574,-4.287 -3.659,-6.47c-0.027,-0.697 3.307,-0.689 3.991,-2.102c0.388,-0.801 -0.439,-1.216 -0.132,-1.71c0.294,-0.473 0.711,-0.61 0.88,-0.953c0.345,-0.697 -0.065,-1.091 0.11,-1.22c0.176,-0.128 0.786,0.237 1.042,0.757c0.257,0.52 0.454,1.747 0.507,3.254c0.053,1.507 0.377,4.735 0.55,5.692c0.172,0.956 0.178,1.851 -0.163,2.113c-0.02,0.015 -3.126,0.639 -3.126,0.639Z","style":{"fill":"url(#_Linear101)","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":1})]),React.createElement("g",{"className":"moving-pincer","serifClass":"moving-pincer","key":1},[React.createElement("path",{"className":"top-pincer","serifClass":"top-pincer","d":"M28.938,1.247c-0.02,-0.187 -1.963,-0.352 -2.341,2.119c-0.378,2.47 0.958,3.912 0.958,3.912c0,0 2.544,-0.762 2.544,-0.762c0,0 -0.465,-0.579 -0.413,-1.185c0.031,-0.36 -0.16,-1.165 -0.299,-1.283c-0.166,-0.141 -0.76,0.076 -0.909,-0.191c-0.149,-0.267 0.052,-0.926 -0.014,-1.159c-0.066,-0.233 -0.287,-0.513 -0.146,-0.823c0.141,-0.31 0.641,-0.442 0.62,-0.628Z","style":{"fill":"url(#_Linear102)","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":0}),React.createElement("path",{"className":"claw-joint","serifClass":"claw-joint","d":"M27.419,6.631c-0.169,0.764 0.311,1.522 1.072,1.692c0.76,0.17 1.514,-0.313 1.683,-1.077c0.168,-0.764 -0.312,-1.522 -1.072,-1.691c-0.76,-0.17 -1.515,0.312 -1.683,1.076Z","style":{"fill":"url(#_Linear103)","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":1})])]),React.createElement("ellipse",{"className":"third-joint","serifClass":"third-joint","cx":"33.101","cy":"13.968","rx":"1.83","ry":"1.743","style":{"fill":"url(#_Linear104)","stroke":"#8d4a00","strokeWidth":"0.15px","strokeLinecap":"round"},"key":1})])])])]),React.createElement("g",{"className":"chest","key":6},[React.createElement("path",{"d":"M43.123,39.912l3.587,0l0.944,-2.641l-2.737,0.002l-1.565,-0.001l-1.173,-0.001l0.944,2.641Z","style":{"fill":"url(#_Linear105)","stroke":"#8d4a00","strokeWidth":"0.15px"},"key":0}),React.createElement("path",{"d":"M42.619,37.271l4.1,0l1.079,-3.02l-3.129,0.003l-1.789,-0.002l-1.341,-0.001l1.08,3.02Z","style":{"fill":"url(#_Linear106)","stroke":"#8d4a00","strokeWidth":"0.15px"},"key":1}),React.createElement("path",{"d":"M42.112,34.251l4.607,0l1.212,-3.393l-3.516,0.003l-2.009,-0.002l-1.507,-0.001l1.213,3.393Z","style":{"fill":"url(#_Linear107)","stroke":"#8d4a00","strokeWidth":"0.15px"},"key":2}),React.createElement("path",{"d":"M41.594,30.858l5.072,0l1.335,-3.736l-3.871,0.004l-2.212,-0.002l-1.659,-0.002l1.335,3.736Z","style":{"fill":"url(#_Radial108)","stroke":"#8d4a00","strokeWidth":"0.15px"},"key":3}),React.createElement("path",{"d":"M42.933,22.751l10.139,0l2.669,4.371l-7.739,-0.004l-4.422,0.003l-3.317,0.001l2.67,-4.371Z","style":{"fill":"url(#_Radial109)","stroke":"#8d4a00","strokeWidth":"0.15px"},"key":4}),React.createElement("path",{"d":"M52.877,39.912l-3.587,0l-0.944,-2.641l2.737,0.002l1.565,-0.001l1.173,-0.001l-0.944,2.641Z","style":{"fill":"url(#_Linear110)","stroke":"#8d4a00","strokeWidth":"0.15px"},"key":5}),React.createElement("path",{"d":"M53.381,37.271l-4.1,0l-1.079,-3.02l3.129,0.003l1.789,-0.002l1.341,-0.001l-1.08,3.02Z","style":{"fill":"url(#_Linear111)","stroke":"#8d4a00","strokeWidth":"0.15px"},"key":6}),React.createElement("path",{"d":"M53.888,34.251l-4.607,0l-1.212,-3.393l3.516,0.003l2.009,-0.002l1.507,-0.001l-1.213,3.393Z","style":{"fill":"url(#_Linear112)","stroke":"#8d4a00","strokeWidth":"0.15px"},"key":7}),React.createElement("path",{"d":"M54.406,30.858l-5.072,0l-1.335,-3.736l3.871,0.004l2.212,-0.002l1.659,-0.002l-1.335,3.736Z","style":{"fill":"url(#_Radial113)","stroke":"#8d4a00","strokeWidth":"0.15px"},"key":8})]),React.createElement("g",{"className":"tail","key":7},[React.createElement("path",{"d":"M46.398,29.071l3.204,0l0.843,4.334l-2.445,-0.005l-1.397,0.003l-1.048,0.002l0.843,-4.334Z","style":{"fill":"#ffd175","stroke":"#8d4a00","strokeWidth":"0.22px"},"key":0}),React.createElement("path",{"d":"M45.554,33.398l4.892,0l1.287,6.514l-3.733,-0.007l-2.133,0.004l-1.6,0.003l1.287,-6.514Z","style":{"fill":"#ffd175","stroke":"#8d4a00","strokeWidth":"0.22px"},"key":1}),React.createElement("path",{"d":"M46.952,26.171l2.096,0l0.551,2.9l-1.599,-0.003l-0.914,0.002l-0.685,0.001l0.551,-2.9Z","style":{"fill":"#ffd175","stroke":"#8d4a00","strokeWidth":"0.22px"},"key":2})])]),React.createElement("defs",{"key":2},[React.createElement("linearGradient",{"id":"_Linear2","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(1.76817e-15,-28.8764,28.8764,1.76817e-15,47.5396,39.7173)","key":0},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ff8e00","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"0.54","style":{"stopColor":"#ff8200","stopOpacity":"1"},"key":1}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ff5700","stopOpacity":"1"},"key":2})]),React.createElement("radialGradient",{"id":"_Radial3","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(18.6632,0,0,18.6632,47.895,26.5687)","key":1},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ff8e00","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"0.52","style":{"stopColor":"#ff9e1b","stopOpacity":"1"},"key":1}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":2})]),React.createElement("linearGradient",{"id":"_Linear4","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(1.18111e-16,-1.92889,1.92889,1.18111e-16,47.7,14.4304)","key":2},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"0.54","style":{"stopColor":"#ffb75c","stopOpacity":"1"},"key":1}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ff5700","stopOpacity":"1"},"key":2})]),React.createElement("linearGradient",{"id":"_Linear5","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(3.0694e-16,-5.01271,5.01271,3.0694e-16,50.1318,21.0006)","key":3},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ffd175","stopOpacity":"0"},"key":0}),React.createElement("stop",{"offset":"0.52","style":{"stopColor":"#ab6e1f","stopOpacity":"0.733333"},"key":1}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#8d4a00","stopOpacity":"1"},"key":2})]),React.createElement("linearGradient",{"id":"_Linear6","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(3.0694e-16,-5.01271,5.01271,3.0694e-16,50.1318,21.0006)","key":4},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ffd175","stopOpacity":"0"},"key":0}),React.createElement("stop",{"offset":"0.52","style":{"stopColor":"#ab6e1f","stopOpacity":"0.733333"},"key":1}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#8d4a00","stopOpacity":"1"},"key":2})]),React.createElement("linearGradient",{"id":"_Linear7","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(3.0694e-16,-5.01271,5.01271,3.0694e-16,50.1318,21.0006)","key":5},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ffd175","stopOpacity":"0"},"key":0}),React.createElement("stop",{"offset":"0.46","style":{"stopColor":"#ffd175","stopOpacity":"0.780392"},"key":1}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":2})]),React.createElement("linearGradient",{"id":"_Linear8","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(3.0694e-16,-5.01271,5.01271,3.0694e-16,50.1318,21.0006)","key":6},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ffd175","stopOpacity":"0"},"key":0}),React.createElement("stop",{"offset":"0.46","style":{"stopColor":"#ffd175","stopOpacity":"0.780392"},"key":1}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":2})]),React.createElement("linearGradient",{"id":"_Linear9","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-0.0360205,5.77202,-5.77202,-0.0360205,38.5314,7.50579)","key":7},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#fff","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"0.42","style":{"stopColor":"#ffc858","stopOpacity":"1"},"key":1}),React.createElement("stop",{"offset":"0.92","style":{"stopColor":"#ffb828","stopOpacity":"1"},"key":2}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ffb828","stopOpacity":"0"},"key":3})]),React.createElement("linearGradient",{"id":"_Linear10","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(0.0360205,5.77202,5.77202,-0.0360205,57.4686,7.49533)","key":8},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#fff","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"0.42","style":{"stopColor":"#ffc858","stopOpacity":"1"},"key":1}),React.createElement("stop",{"offset":"0.92","style":{"stopColor":"#ffb828","stopOpacity":"1"},"key":2}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ffb828","stopOpacity":"0"},"key":3})]),React.createElement("image",{"id":"_Image12","width":"11px","height":"8px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAICAYAAAAvOAWIAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAkElEQVQYlYXLywqCQACF4T8YBxppvLZJ7Q3qBXrO3iwc2znaruhC4dYWYpRUnt2B75+0202L2cPxxNgE6xUkC6gPkBdwvvzBegZqClEIaQK2BlPA9fYFAwgBWoNSXbRMoawgN3B/DPDrCfC8z8hWsDPQNAPcz3HA98F1IY4gy6C0P/B7FARdNI9HcD8pIZQ8AUveIQS/dn3HAAAAAElFTkSuQmCC","key":9}),React.createElement("image",{"id":"_Image14","width":"11px","height":"7px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAHCAYAAADebrddAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAfklEQVQYlYXPzQqCUBiE4fd4vs9DeSxF+kEjLKKoFG+lRdD9X4ktpBaKOtt5YBjTfmiZS+yheiKTaL+D+w2KHJJkBJ9PcL10eL0C58DaHq4eHdxuwHtwIVj7rwVVaGooj5BlEEUQKgTBYFB4vyBNYbkAVTBm9IJwKEBkEv3yBTsMB6TuhdY1AAAAAElFTkSuQmCC","key":10}),React.createElement("image",{"id":"_Image16","width":"3px","height":"3px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAKUlEQVQImWP8Xyrzn+HHTwaGHz8YWBi0NBkYfvxgYPjxk4GFQUsDzgEANScO4bgyDOsAAAAASUVORK5CYII=","key":11}),React.createElement("linearGradient",{"id":"_Linear17","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-2.13091,0.22351,0.22351,2.13091,23.614,40.6316)","key":12},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"0.52","style":{"stopColor":"#ffb459","stopOpacity":"1"},"key":1}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ff5700","stopOpacity":"1"},"key":2})]),React.createElement("image",{"id":"_Image19","width":"2px","height":"2px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGklEQVQImWP8nyPyn0FaioGFwcqCgUFaigEALOIDYP8d0aAAAAAASUVORK5CYII=","key":13}),React.createElement("image",{"id":"_Image21","width":"12px","height":"9px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJCAYAAAAGuM1UAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAoklEQVQYlY3NS07CAABAwWn5tLVCW7QEQhC5kOf0PkZt+IggLvQOBBekrCD17ScvOD4/HW0+eXnlcNBU2/yRuwHTCesNb1UDiCOie3q3lCUPU1ZrVh9XAAQBSUIUneCwZDZjuWS3vwDqwpA0JY7JMkZD9t9UC35+L4C6Vut0SmLynPGI7Rfv1RVw/rfJ+twkFDmTcQOo63QoCtJU+C9Q1+36A91AH0vbhanLAAAAAElFTkSuQmCC","key":14}),React.createElement("image",{"id":"_Image23","width":"12px","height":"8px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAhElEQVQYlY2OwQqCQBRFzzivmUZRR6SMQgocFBfRNvqR/v9LbFEIkkyd9Tv3PDU9mfiXPiA/j1IHQw/tCeo6IjR7CB0cD+A9ZCkYsyKEDi5naHZQFrB1sBHQGuAjWAvjMGfJc7AGRCBJFnvC4/7OVtWcRWtQavVT4XYFt8zGEMriKxvjBQCwB82gwH0+AAAAAElFTkSuQmCC","key":15}),React.createElement("image",{"id":"_Image25","width":"3px","height":"3px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAH0lEQVQImWP8Xyb3n+H7dwaG798ZWBi0NBggnB+oHAA0iw7WH8QwGgAAAABJRU5ErkJggg==","key":16}),React.createElement("image",{"id":"_Image27","width":"4px","height":"12px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAMCAYAAABFohwTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAZUlEQVQImU3MsQ3CUAwE0BdLEdhZADZANFSIURiKsWAAejZgBIQERb6S7+6ezjf8rj72u9HlzPEgMKokEwTIYuphSqoaVAsrtBDRNdogviGLWuC5bsx3j34Qjxm2mx6W/9dwur3/JpoLo7oi6z4AAAAASUVORK5CYII=","key":17}),React.createElement("image",{"id":"_Image29","width":"2px","height":"2px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGklEQVQImWP8nyX0n0FVhYGFwdSYgUFVmQEALXkDec6cs7oAAAAASUVORK5CYII=","key":18}),React.createElement("image",{"id":"_Image31","width":"14px","height":"11px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALCAYAAABPhbxiAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAtElEQVQokZXQTU7CYBSG0dNCSykFBARtcF2u080YoyJE/JvoUKd10H6RAdb6zM9N7htVV5eV1zcetjy/6FrfumQ6YbWs4f2G948OME2ZJeRDTqacrdg/cXvH51cLhCgiy0hTRjnzGeU5j3uub6iqX2AojslzBgOKEYs5Zclux2bbAkO9HkVRHxiPOV1wsa5xM+BxGEoSJn2GWT3g8mfAdhj+PzLg3/DwwMGAcWcYagb8P2z6BpVtJx3clqFHAAAAAElFTkSuQmCC","key":19}),React.createElement("image",{"id":"_Image33","width":"14px","height":"8px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAICAYAAADJEc7MAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAfklEQVQYlZXPOw6DMBCE4R+ILWVpvE6HnZaHFNGinCT3PwkpDEJWBIGptvk0O8X8YeZsHh76DmLD7TxoIQZQBZE/0CsMHYSQbhGwBspyB+oC4i9Yk0N1MPQQG/Ae5A7WZiCHzqWG57Khll2wwfe0vVQLGANVdTg9wfF1Caz5AlwECSeeglGCAAAAAElFTkSuQmCC","key":20}),React.createElement("image",{"id":"_Image35","width":"3px","height":"3px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAIElEQVQImWP8Xyr7n+HHDwaG7z8YWBi0NBgwOT9+MgAANNgO3Xmh1g0AAAAASUVORK5CYII=","key":21}),React.createElement("image",{"id":"_Image37","width":"4px","height":"13px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAANCAYAAACO/s+2AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAaUlEQVQImV3NsQ3CQBBE0eeVE+8FuAOXgIQsWqEoGsMpqRMaoAICCGy4E+H80fzp3hcP42FynplPApNMSgEBSpLZgrJBhL7f2h/4hmHYQalCvKIV4h6yCnHbJ/+gTpZowrM7XtdoHhb4ABe4DNSlC/WzAAAAAElFTkSuQmCC","key":22}),React.createElement("image",{"id":"_Image39","width":"3px","height":"2px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAIklEQVQImWP8H8P6n0FdjYFBQ5WBiUFdlYFBTYWBQU2VAQBIeAPeElofaAAAAABJRU5ErkJggg==","key":23}),React.createElement("image",{"id":"_Image41","width":"16px","height":"12px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAqElEQVQokZ3QvQ6CMBhG4VOhSCgJPyp4jV6o12AEFXTRTSdGHAoJAmLxHTucfE9Fvd/VPF9wf8C5gCxnzmyUAscB5UEUwjaB7KSDRgEAKSEIwHXB9yGO4XqDwxGqyiAAIIQOSKmvCQPYrOFSTrLswYtl8cGKI0gTyMdZw0C7Pms1zvoe6LO8LqvQH/0z0GX5CpZdVgpZbhiYYM0LwIC1mB1o17D+DzR7A+Y6KUBR6UwaAAAAAElFTkSuQmCC","key":24}),React.createElement("image",{"id":"_Image43","width":"15px","height":"9px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAJCAYAAADtj3ZXAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAoUlEQVQokZXQSw6CMBSF4R8p1NCCPHxAwYHy0DUY9+H+V4KDhjQag3BGd/Ll3BxvfDGyJr4P9wHODWIxkhJuPTQ17AuI9QKsFAwd1AaKHGINcguBmMFJAn3rkFa2XQjYbAB+4DyDrgVT2VsrCMMPNMXh4wGuFzAlZJl9V4Z2oC/kcFVaVJ0gTUFFrsnzZucQPB+Q7iCKXNMf5HBtIAxWoSlvCZkJgtIdlW0AAAAASUVORK5CYII=","key":25}),React.createElement("image",{"id":"_Image45","width":"4px","height":"3px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAALElEQVQImT3IwQ0AEAAEwZUoQwGoT/X2El485jPlrHZQnsrskMD+MSCCAeUCKxwU5uvAFu4AAAAASUVORK5CYII=","key":26}),React.createElement("image",{"id":"_Image47","width":"5px","height":"15px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAPCAYAAAAs9AWDAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAcUlEQVQYlW3Ouw2AMAxF0YtTODMAE0SRWIA9YCcGYRBgCApqxoCCKD9RuDl6z3bzTKyozngH3kHXIsCItcQBBOixSpyA/CUTGBPQmKL6YVUNqAFj8pQIKbmnpGqORRVgk+rI3QzLJdW+I3sp7Sv/zPAFFzUN2Hv0q1sAAAAASUVORK5CYII=","key":27}),React.createElement("image",{"id":"_Image49","width":"3px","height":"3px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAKklEQVQImWP8H8X8n0FakoFBSoqBhUFZkYFBSpKBQUqSgYVBCcqREGcAAHUvBBzYCEuBAAAAAElFTkSuQmCC","key":28}),React.createElement("image",{"id":"_Image51","width":"11px","height":"8px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAICAYAAAAvOAWIAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAfklEQVQYlYXPOw6DMBCE4R9pofAa8bCTKmA6MEoToZwl9z8JKawIKQkw1RSftDvZ+mLlLBcPcUQOUdvAPEF3A+d2cF1BnCB04B0YAyJfuLQwRxj6hFRBNpKaMXCPEPr0nyrk+c9BYXnAEODqwdq/aMPPBaxCURxuTbhtTtEnb7rlCCpEK09BAAAAAElFTkSuQmCC","key":29}),React.createElement("image",{"id":"_Image53","width":"11px","height":"7px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAHCAYAAADebrddAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAlElEQVQYlYXNXwvBUBjH8e/Zzs6O2daaWkSkRZIbufA299ZkiIQUcc39XJxWS/5867n7/HpEkc0L8hU8nvxLMptC2ofLFTZbuN1/4MAHrwaNGHpdg3d7OBw/YCFASnNaQxRBpw2TsRnk6wquZtvmi3YhDKHVhNEQTmdYLN9wmWWZgasg8CFJYJB+wWVCgFLgOFD3eAF9hBtuHluN7gAAAABJRU5ErkJggg==","key":30}),React.createElement("image",{"id":"_Image55","width":"3px","height":"3px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAKElEQVQImWP8n8r7n4GDg4GBg52BhUFLk4GBg52BgYODgYVBSwPOAQBrZgN8wxqGbwAAAABJRU5ErkJggg==","key":31}),React.createElement("linearGradient",{"id":"_Linear56","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(2.13091,0.22351,-0.22351,2.13091,72.5582,40.6316)","key":32},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"0.52","style":{"stopColor":"#ffb459","stopOpacity":"1"},"key":1}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ff5700","stopOpacity":"1"},"key":2})]),React.createElement("image",{"id":"_Image58","width":"2px","height":"2px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGklEQVQImWP83673n+HpMwYWBisLBoanzxgARkoGwfVvBf0AAAAASUVORK5CYII=","key":33}),React.createElement("image",{"id":"_Image60","width":"12px","height":"9px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJCAYAAAAGuM1UAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAk0lEQVQYlZXQW2rCYBRF4S/xN5goUWNt8NZ4i6QtDqLQOXT+I0kfigrSGrpez1qwOVH7pdVFr8f5nd1W6JTfGg47ypI8fxAc9xwPLBeMcwYDouiX4GVNXbNaMJ2QpsTx9XwLymeaE+sVRUGW/my/I5iMeW2oNsxmDDPC30uDzw/mT4xG9PudPwi2FUnSKV6I/yPDN3tICNcS1fY7AAAAAElFTkSuQmCC","key":34}),React.createElement("image",{"id":"_Image62","width":"12px","height":"8px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAmElEQVQYlY3OzQqCQABF4TM6jiWYIYoSERES9QjRs/mcoRgUUWTtC1e2MGNC+jlwlx9cUadJTV7wb5L1ChZzOBwhy+F2/wHCALwBRBEkMzidodhCefkApAQpwbbBdSEMYDqB8gq7fYPfQJtpNlMWOA74PoxHsHze3WRQVRpoMwxQCiwL+j0YehDHr7td0CYE3bvhF6Cn3X0A/cYf5TPAbc0AAAAASUVORK5CYII=","key":35}),React.createElement("image",{"id":"_Image64","width":"3px","height":"3px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAIUlEQVQImWP8n8Lzn4GTk4GBk5OBhUFLk4GBkwPG0YBzAGwLA4e5dYogAAAAAElFTkSuQmCC","key":36}),React.createElement("image",{"id":"_Image66","width":"4px","height":"12px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAMCAYAAABFohwTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAZElEQVQImVXMMQ4BYRSF0TMvEvM/i7E6q7AsFKKhEYXeLIKM4jFGe3Lv142Xzeh643jiMTwDtEY2WBSsGi1BQWbhH2SS7QMREwZe83DgXLcKB/a/Ti1283DgAPplQbfeDrh/O2/6qhGwU1S58wAAAABJRU5ErkJggg==","key":37}),React.createElement("image",{"id":"_Image68","width":"2px","height":"2px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGklEQVQImWP832/2n+H2HQYWBlMjBgYBfgYAQegFBu1Yr00AAAAASUVORK5CYII=","key":38}),React.createElement("image",{"id":"_Image70","width":"14px","height":"11px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALCAYAAABPhbxiAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAnElEQVQokZXPWw6CMBRF0V1oAxTwASipIgqixjgD4zyc/0jwg/hIKgr7+660R7R3WoZWrGFfw8ogB4EshUPTwTSBKPwDQw2nI5QbWGQQR+B5IEQPFAIuZ9iWkC9hEoPvg+O8TmzY1FBVYHKYTSEIwHWtszcs1h0yBpI56ACU6l0hvw1Hqe67P5LcrtbwIUl2pTV8GNR6FHg27pmPHgMPCej56MDMAAAAAElFTkSuQmCC","key":39}),React.createElement("image",{"id":"_Image72","width":"14px","height":"8px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAICAYAAADJEc7MAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAj0lEQVQYlY3QMRKDIBCF4T8KxJgKS+FWuWeuI6YN2kW8gSmAgmR03Jkttnjf7O5lez42/AxuhM/C2RIYA1qD7cFP4F6nAEFzBSWhbSNgDEwTDCMs4SAIUFUUQJcAn4DwD4hiKoBbBGwPfobBQVh3ggXQgFIRyD94pw3WdSf4C0gJ9/QDG084Duaq69gZ6DRfMAkofjzRk+cAAAAASUVORK5CYII=","key":40}),React.createElement("image",{"id":"_Image74","width":"3px","height":"3px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAJ0lEQVQImWP8n8L7n4GTg4GBg4OBhUFLgwHB0dZkYOBgZ2Dg4GAAAGujA4ArnLL7AAAAAElFTkSuQmCC","key":41}),React.createElement("image",{"id":"_Image76","width":"4px","height":"13px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAANCAYAAACO/s+2AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAaUlEQVQImV3NsQ3CMBCG0RcrTc4DMAbTMQWLQRRFokDMQAcFJTKFnQBpn777ryuXQzHNjBOP5z2BnImAXYUIcoBWRK3+IIK+bzAMKyaUdThXuP0OJ5y+O3kDrThvT654LZi6/fGNcfn0AUPFE88TH4jTAAAAAElFTkSuQmCC","key":42}),React.createElement("image",{"id":"_Image78","width":"3px","height":"2px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAI0lEQVQImWP8vzrgP8ON2wwMN28xsDCoqTIw/PvPwMDwnwEAk+YJrBbsA0AAAAAASUVORK5CYII=","key":43}),React.createElement("image",{"id":"_Image80","width":"16px","height":"12px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAnUlEQVQokaXPSw7CIBhF4YO1aQkq1ajgqw9bjCsw7sT9r6QOGgdEYlH/MffLQfQPer4518G5Bmug0Eyjh9aAa+Gwh9USlII0jQCkhOsFyhNs1rCYQ5aBEAAjgOugqWBnodCQ55Ak3pMwYA10LRz93ND5wEjuZ8C10NRDrtYg33PDgNkOf43IDQP3W3RuGKjK6NwwMFM/DV83+WsNPAFVbgsQDFkVtAAAAABJRU5ErkJggg==","key":44}),React.createElement("image",{"id":"_Image82","width":"15px","height":"9px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAJCAYAAADtj3ZXAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAvklEQVQokZXOy0oCYQCG4cffcTRmJvAUJGpE19J1dlvlcZGOHaBAcOFCbDGKbqbs278PX2X/9Lj3uuB5xG7nP4s83HPT5W7IYsnLmO32wjjLaFxxndHtMBywzBlN2Gz+iEOgHlOLaDROyKBfIOMp63VJfFwIxDFRRL1OltJpF0i+YjLl67skLkPSlHaLfo/8jdmcj8+S+BwJ4YDEpAmtA7J6Zzb/JT6uUqFWOz1JEppNercXxOdIFFGtFk+SxA9hfiuLauhPBAAAAABJRU5ErkJggg==","key":45}),React.createElement("image",{"id":"_Image84","width":"4px","height":"3px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAK0lEQVQImWP8n8r7n4GVlQGGWRi0NCEcNlYGBhYWBhYGbagAKwsDAwsrAwCOuwN4CAFnPAAAAABJRU5ErkJggg==","key":46}),React.createElement("image",{"id":"_Image86","width":"5px","height":"15px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAPCAYAAAAs9AWDAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAdElEQVQYlW2OsQ2AMAwEL0mR1CzCAqzFFGzDCoQBkCI2gAHoKFAoAtggim9O92+bPLWZZYU0l+x7bwEIQQLNBb0Eqj+TAp37gXrCOQ1lwgKLmAGCxwKDmP4xIwD+bcb3sWImYNPHrKm7Axj17v1S/NYVLPUTw7QWnJ1wVw0AAAAASUVORK5CYII=","key":47}),React.createElement("image",{"id":"_Image88","width":"3px","height":"3px","xlinkHref":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAALElEQVQImQXBAQ3AIBAEsC4h2bmAIGI2UclPBrTPWd9Rxf41c5CXRDM6CYkL3tIHJZR1+VwAAAAASUVORK5CYII=","key":48}),React.createElement("linearGradient",{"id":"_Linear89","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(2.94821,3.54417,-3.54417,2.94821,55.2814,20.8969)","key":49},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ff5700","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"0.45","style":{"stopColor":"#ffb75c","stopOpacity":"1"},"key":1}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":2})]),React.createElement("linearGradient",{"id":"_Linear90","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-3.21113,-1.89009,1.89009,-3.21113,62.4925,19.0881)","key":50},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"0.55","style":{"stopColor":"#ffb75c","stopOpacity":"1"},"key":1}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ff5700","stopOpacity":"1"},"key":2})]),React.createElement("linearGradient",{"id":"_Linear91","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(2.70157,1.66831,-1.66831,2.70157,58.2264,19.5211)","key":51},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ff5700","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"0.46","style":{"stopColor":"#ffb65b","stopOpacity":"1"},"key":1}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":2})]),React.createElement("linearGradient",{"id":"_Linear92","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(4.39154,1.7048,-1.7048,4.39154,62.2971,9.52442)","key":52},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ff5700","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"0.48","style":{"stopColor":"#ffb55a","stopOpacity":"1"},"key":1}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":2})]),React.createElement("linearGradient",{"id":"_Linear93","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-0.00284411,2.17026,-2.17026,-0.00284411,62.6515,5.33563)","key":53},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#000","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"0.53","style":{"stopColor":"#000","stopOpacity":"0.270588"},"key":1}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#000","stopOpacity":"0"},"key":2})]),React.createElement("linearGradient",{"id":"_Linear94","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(0.0868906,-2.33894,2.33894,0.0868906,66.9448,7.01232)","key":54},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ff5700","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"0.49","style":{"stopColor":"#bd4100","stopOpacity":"1"},"key":1}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#000","stopOpacity":"1"},"key":2})]),React.createElement("linearGradient",{"id":"_Linear95","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(0.149062,2.35934,-2.35934,0.149062,66.1536,7.78992)","key":55},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ff5700","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":1})]),React.createElement("linearGradient",{"id":"_Linear96","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-2.70052,-1.16505,1.16505,-2.70052,63.7806,15.7387)","key":56},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"0.52","style":{"stopColor":"#ffb459","stopOpacity":"1"},"key":1}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ff5700","stopOpacity":"1"},"key":2})]),React.createElement("linearGradient",{"id":"_Linear97","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-3.3452,4.02142,4.02142,3.3452,41.1888,20.5008)","key":57},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ff5700","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"0.45","style":{"stopColor":"#ffb75c","stopOpacity":"1"},"key":1}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":2})]),React.createElement("linearGradient",{"id":"_Linear98","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(3.64353,-2.14461,-2.14461,-3.64353,33.0067,18.4484)","key":58},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"0.55","style":{"stopColor":"#ffb75c","stopOpacity":"1"},"key":1}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ff5700","stopOpacity":"1"},"key":2})]),React.createElement("linearGradient",{"id":"_Linear99","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-3.06535,1.89296,1.89296,3.06535,37.8478,18.9389)","key":59},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ff5700","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"0.46","style":{"stopColor":"#ffb65b","stopOpacity":"1"},"key":1}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":2})]),React.createElement("linearGradient",{"id":"_Linear100","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-4.98289,1.93436,1.93436,4.98289,33.2285,7.5969)","key":60},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ff5700","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"0.48","style":{"stopColor":"#ffb55a","stopOpacity":"1"},"key":1}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":2})]),React.createElement("linearGradient",{"id":"_Linear101","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(0.00322708,2.4625,2.4625,-0.00322708,32.8263,2.84406)","key":61},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#000","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"0.53","style":{"stopColor":"#000","stopOpacity":"0.270588"},"key":1}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#000","stopOpacity":"0"},"key":2})]),React.createElement("linearGradient",{"id":"_Linear102","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-0.098591,-2.65389,-2.65389,0.098591,27.9549,4.74652)","key":62},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ff5700","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"0.49","style":{"stopColor":"#bd4100","stopOpacity":"1"},"key":1}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#000","stopOpacity":"1"},"key":2})]),React.createElement("linearGradient",{"id":"_Linear103","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-0.169134,2.67704,2.67704,0.169134,28.8458,5.62014)","key":63},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ff5700","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":1})]),React.createElement("linearGradient",{"id":"_Linear104","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(3.06416,-1.32193,-1.32193,-3.06416,31.568,14.6428)","key":64},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"0.52","style":{"stopColor":"#ffb459","stopOpacity":"1"},"key":1}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ff5700","stopOpacity":"1"},"key":2})]),React.createElement("linearGradient",{"id":"_Linear105","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-1.94117,2.37725e-16,-2.37725e-16,-1.94117,44.6387,38.5913)","key":65},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ffb828","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":1})]),React.createElement("linearGradient",{"id":"_Linear106","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-2.53168,3.10041e-16,-3.10041e-16,-2.53168,45.0946,35.7606)","key":66},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ffb828","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":1})]),React.createElement("linearGradient",{"id":"_Linear107","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(3.55662,1.97215e-31,0,3.55662,42.09,32.5542)","key":67},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ffb828","stopOpacity":"1"},"key":1})]),React.createElement("radialGradient",{"id":"_Radial108","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(5.41374,0,0,5.41374,46.436,29.131)","key":68},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ffb828","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":1})]),React.createElement("radialGradient",{"id":"_Radial109","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(6.65021,0,0,6.65021,48.0022,27.0581)","key":69},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ffb828","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":1})]),React.createElement("linearGradient",{"id":"_Linear110","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(1.94117,2.37725e-16,2.37725e-16,-1.94117,51.3613,38.5913)","key":70},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ffb828","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":1})]),React.createElement("linearGradient",{"id":"_Linear111","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(2.53168,3.10041e-16,3.10041e-16,-2.53168,50.9054,35.7606)","key":71},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ffb828","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":1})]),React.createElement("linearGradient",{"id":"_Linear112","x1":"0","y1":"0","x2":"1","y2":"0","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-3.55662,1.97215e-31,0,3.55662,53.91,32.5542)","key":72},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ffb828","stopOpacity":"1"},"key":1})]),React.createElement("radialGradient",{"id":"_Radial113","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(5.41374,0,0,5.41374,49.564,29.131)","key":73},[React.createElement("stop",{"offset":"0","style":{"stopColor":"#ffb828","stopOpacity":"1"},"key":0}),React.createElement("stop",{"offset":"1","style":{"stopColor":"#ffd175","stopOpacity":"1"},"key":1})])])]);
}

CrabFinal.displayName = "CrabFinal";

CrabFinal.defaultProps = {"viewBox":"0 0 96 47","version":"1.1","xmlSpace":"preserve","xmlnsSerif":"http://www.serif.com/","style":{"fillRule":"evenodd","clipRule":"evenodd","strokeLinecap":"square","strokeMiterlimit":"1.5"}};

module.exports = CrabFinal;

CrabFinal.default = CrabFinal;


/***/ }),

/***/ "y5jJ":
/***/ (function(module, exports) {

module.exports = { prefix: 'fal', iconName: 'walking', icon: [320, 512, [], "f554", "M305.5 247.3l-19.6-21.1-8.7-28.5c-7.9-26.1-23.3-47.8-43.2-62.8 19.3-13.4 32-35.7 32-60.9 0-40.8-33.2-74-74-74s-74 33.2-74 74c0 15.7 4.9 30.3 13.3 42.3-14.7 3.8-28.4 9.8-45.3 17.4l-8.6 3.8c-24 10.5-43.4 30.1-54.9 55.2l-11.8 28c-7.3 17.2-5.7 35.7 4.2 50.7C24.6 286 41.2 295 58.4 295c12.5 0 24-4.7 32.9-12.9.2 1.4.4 2.7.6 4.1l-14.2 38.9-16.3 44.6L14 422.1c-18.7 20.4-18.7 52.4 0 72.9 9.6 10.5 23.2 16.6 37.2 16.6 14 0 27.6-6 37.2-16.6l46.7-51.2c9.6-10.6 17-22.9 22-36.5l8.7-23.9 10.6 10.7c.5.5.8 1.3.9 1.9l15.6 74.2C198 494.5 219 512 242.8 512c4 0 8.1-.5 12.1-1.5 27.4-6.9 44-34.6 38-62.9l-15.6-74.1c-2.8-13.2-7.8-25.6-14.7-36.7 1.8.2 3.6.3 5.5.3 20.3 0 38.9-12.6 47.4-32.2 8.6-19.5 4.7-41.6-10-57.6zM192 32c23.2 0 42 18.8 42 42s-18.8 42-42 42-42-18.8-42-42 18.8-42 42-42zm-65 364.3c-3.5 9.7-8.8 18.4-15.6 25.9l-46.7 51.2c-3.7 4.1-8.6 6.2-13.6 6.2-4.9 0-9.8-2.1-13.6-6.2-7.5-8.2-7.5-21.5 0-29.7l46.7-51.2c3.1-3.4 5.5-7.4 7.1-11.8l16.3-44.6.1.1 1 1.2 29 29.3-10.7 29.6zm141.1-91.1c-4.4 0-9-1.8-13-6.2l-23.5-25.3c-5-5.4-8.8-12.1-11-19.4-11.4-37.5-11.5-39.9-17.5-48.5l-20.9 91.7 43 43.4c10.4 10.6 17.7 24.2 20.8 39.3l15.6 74.1c2.4 11.3-4 22.6-14.4 25.2-1.5.4-3 .5-4.4.5-9.4 0-16.7-7.6-18.6-16.3l-15.6-74.2c-1.4-6.9-4.7-13-9.5-17.8L136 307.8c-11.6-13.8-15.7-31.2-11.9-47.7l15.8-69.3c-9 3.2-18.1 7.3-35.4 15-8 3.5-14.5 10-18.3 18.4L75 250.8c-3.7 8.7-10.1 12.3-16.6 12.3-12.5 0-25.2-13.4-18.2-29.9L51.7 206c8.3-18.2 21.9-31.9 38.6-39.2 34.2-15.1 48.7-22.8 76.6-22.8 36.3 0 68.3 25.3 79.8 63l10.3 33.9c.3 1 .8 2 1.6 2.8L282 269c14.1 15.3.9 36.2-13.9 36.2z"] };

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map