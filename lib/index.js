'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _expandMore = require('material-ui/svg-icons/navigation/expand-more');

var _expandMore2 = _interopRequireDefault(_expandMore);

var _expandLess = require('material-ui/svg-icons/navigation/expand-less');

var _expandLess2 = _interopRequireDefault(_expandLess);

var _filterFrames = require('material-ui/svg-icons/image/filter-frames');

var _filterFrames2 = _interopRequireDefault(_filterFrames);

var _colors = require('material-ui/styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PluginComponent = function (_Component) {
	_inherits(PluginComponent, _Component);

	function PluginComponent() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, PluginComponent);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PluginComponent.__proto__ || Object.getPrototypeOf(PluginComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = { hidden: false }, _this.onToggle = function () {
			_this.setState({ hidden: !_this.state.hidden });
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(PluginComponent, [{
		key: 'render',
		value: function render() {
			var children = this.props.children;

			return _react2.default.createElement(
				_MuiThemeProvider2.default,
				{ muiTheme: (0, _getMuiTheme2.default)() },
				_react2.default.createElement(
					_Paper2.default,
					null,
					_react2.default.createElement(
						'div',
						{ className: 'ory-plugins-layout-spoiler-toggle', onClick: this.onoggle },
						this.state.hidden ? _react2.default.createElement(_expandMore2.default, { color: _colors.white, size: 32 }) : _react2.default.createElement(_expandLess2.default, { color: _colors.white, size: 32 }),
						'title',
						_react2.default.createElement(
							'div',
							{ className: 'ory-editor-layout-spoiler-title' },
							'Title'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'ory-plugins-layout-spoiler-content', style: { display: this.state.hidden ? 'none' : 'block' } },
						children
					)
				)
			);
		}
	}]);

	return PluginComponent;
}(_react.Component);

exports.default = function (_ref2) {
	var defaultPlugin = _ref2.defaultPlugin;
	return {
		Component: PluginComponent,
		name: 'ory/editor/core/layout/spoiler',
		version: '0.0.1',

		text: 'Hidden Text',
		IconComponent: _react2.default.createElement(_filterFrames2.default, null),

		createInitialChildren: function createInitialChildren() {
			return {
				id: (0, _uuid2.default)(),
				rows: [{
					id: (0, _uuid2.default)(),
					cells: [{
						content: { plugin: defaultPlugin, state: defaultPlugin.createInitialState() },
						id: (0, _uuid2.default)()
					}]
				}]
			};
		}
	};
};