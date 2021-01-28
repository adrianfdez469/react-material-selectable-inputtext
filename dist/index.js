Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@material-ui/core');
var AddIcon = require('@material-ui/icons/Add');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var AddIcon__default = /*#__PURE__*/_interopDefaultLegacy(AddIcon);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

// constants
var ITEM_HEIGHT = 48;
// helpers 
var escapeRegExp = function (string) { return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); };
var InputTextSelect = function (props) {
    // constants
    var onAdd = props.onAdd, optionsList = props.optionsList, excludedOptions = props.excludedOptions, textFieldProps = props.textFieldProps;
    // hooks
    var _a = React.useState(null), inputData = _a[0], setInputData = _a[1];
    var _b = React.useState(false), open = _b[0], setOpen = _b[1];
    var _c = React.useState(false), menuFocused = _c[0], setMenuFocused = _c[1];
    var textFieldRef = React.useRef(null);
    var anchorRef = React.useRef(null);
    // handlers
    var changeInputHandler = function (event) {
        if (event.target.value === '') {
            setInputData(null);
        }
        else {
            if (!open) {
                setOpen(true);
            }
            setInputData({ id: null, text: event.target.value });
        }
    };
    var selectMenuItemHandler = function (lang) {
        var _a;
        setInputData(lang);
        (_a = textFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        setOpen(false);
        setMenuFocused(false);
    };
    var addHandler = function () {
        if (inputData) {
            // Search for a item that already exist on the full posibles items array
            var index = optionsList.findIndex(function (optList) { return optList.text.toLowerCase().trim() === inputData.text.toLowerCase().trim(); });
            if (index > -1) {
                onAdd(optionsList[index]);
            }
            else {
                onAdd(inputData);
            }
        }
        setInputData(null);
        setOpen(false);
    };
    var onPressKeyHandler = function (event) {
        if (event.key === 'Enter') {
            addHandler();
        }
        else if (event.key === 'ArrowDown') {
            setMenuFocused(true);
        }
    };
    var onMenuPressKeyHandler = function (event) {
        var _a;
        if (event.key === 'ArrowUp') {
            event.stopPropagation();
            setMenuFocused(false);
            (_a = textFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    };
    // helpers
    var menuItems = optionsList
        .filter(function (optList) {
        return excludedOptions.findIndex(function (selectedPL) { return optList.text.toLowerCase().trim() === selectedPL.text.toLowerCase().trim(); }) === -1;
    })
        .filter(function (optList) {
        if (!inputData)
            return false;
        var find = inputData.text.toLowerCase().trim();
        return !optList.text.toLowerCase().trim().search(escapeRegExp(find));
    })
        .map(function (optList, index) {
        if (index === 0) {
            return (React.createElement(core.MenuItem, { autoFocus: menuFocused, key: optList.id, onKeyDown: function (event) { return onMenuPressKeyHandler(event); }, onClick: function () { return selectMenuItemHandler(optList); } }, optList.text));
        }
        return (React.createElement(core.MenuItem, { key: optList.id, onClick: function () { return selectMenuItemHandler(optList); } }, optList.text));
    });
    return (React.createElement("div", null,
        React.createElement(core.TextField, __assign({ value: inputData && inputData.text ? inputData.text : '', onChange: function (event) { return changeInputHandler(event); }, ref: anchorRef, onFocus: function () {
                setTimeout(function () {
                    textFieldRef.current.selectionStart = 0;
                    textFieldRef.current.selectionEnd = 9999999;
                }, 0);
            }, inputRef: textFieldRef, onKeyUp: function (event) {
                onPressKeyHandler(event);
            }, InputProps: {
                endAdornment: (React.createElement(core.InputAdornment, { position: "end" },
                    React.createElement(core.IconButton, { "aria-label": "toggle password visibility", onClick: addHandler, onMouseDown: function (event) {
                            event.preventDefault();
                        } },
                        React.createElement(AddIcon__default['default'], null)))),
            } }, textFieldProps)),
        React.createElement(core.Popper, { open: open, anchorEl: anchorRef.current, role: undefined, transition: true, disablePortal: true, style: { zIndex: 999 } }, function (_a) {
            var TransitionProps = _a.TransitionProps, placement = _a.placement;
            return (React.createElement(core.Grow, __assign({}, TransitionProps, { style: { transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' } }),
                React.createElement(core.Paper, { style: {
                        width: menuItems.length > 0 ? anchorRef.current.offsetWidth : 0,
                        maxHeight: ITEM_HEIGHT * 4.5,
                        overflow: 'auto',
                    } },
                    React.createElement(core.ClickAwayListener, { onClickAway: function () { } },
                        React.createElement(core.MenuList, { id: "menu-list-grow" }, menuItems)))));
        })));
};

exports.default = InputTextSelect;
//# sourceMappingURL=index.js.map
