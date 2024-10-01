"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@protobufjs+inquire@1.1.0";
exports.ids = ["vendor-chunks/@protobufjs+inquire@1.1.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@protobufjs+inquire@1.1.0/node_modules/@protobufjs/inquire/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@protobufjs+inquire@1.1.0/node_modules/@protobufjs/inquire/index.js ***!
  \************************************************************************************************/
/***/ ((module) => {

eval("\r\nmodule.exports = inquire;\r\n\r\n/**\r\n * Requires a module only if available.\r\n * @memberof util\r\n * @param {string} moduleName Module to require\r\n * @returns {?Object} Required module if available and not empty, otherwise `null`\r\n */\r\nfunction inquire(moduleName) {\r\n    try {\r\n        var mod = eval(\"quire\".replace(/^/,\"re\"))(moduleName); // eslint-disable-line no-eval\r\n        if (mod && (mod.length || Object.keys(mod).length))\r\n            return mod;\r\n    } catch (e) {} // eslint-disable-line no-empty\r\n    return null;\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHByb3RvYnVmanMraW5xdWlyZUAxLjEuMC9ub2RlX21vZHVsZXMvQHByb3RvYnVmanMvaW5xdWlyZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0EsTUFBTSxhQUFhO0FBQ25CO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvLnBucG0vQHByb3RvYnVmanMraW5xdWlyZUAxLjEuMC9ub2RlX21vZHVsZXMvQHByb3RvYnVmanMvaW5xdWlyZS9pbmRleC5qcz83YTZlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGlucXVpcmU7XHJcblxyXG4vKipcclxuICogUmVxdWlyZXMgYSBtb2R1bGUgb25seSBpZiBhdmFpbGFibGUuXHJcbiAqIEBtZW1iZXJvZiB1dGlsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGVOYW1lIE1vZHVsZSB0byByZXF1aXJlXHJcbiAqIEByZXR1cm5zIHs/T2JqZWN0fSBSZXF1aXJlZCBtb2R1bGUgaWYgYXZhaWxhYmxlIGFuZCBub3QgZW1wdHksIG90aGVyd2lzZSBgbnVsbGBcclxuICovXHJcbmZ1bmN0aW9uIGlucXVpcmUobW9kdWxlTmFtZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB2YXIgbW9kID0gZXZhbChcInF1aXJlXCIucmVwbGFjZSgvXi8sXCJyZVwiKSkobW9kdWxlTmFtZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXZhbFxyXG4gICAgICAgIGlmIChtb2QgJiYgKG1vZC5sZW5ndGggfHwgT2JqZWN0LmtleXMobW9kKS5sZW5ndGgpKVxyXG4gICAgICAgICAgICByZXR1cm4gbW9kO1xyXG4gICAgfSBjYXRjaCAoZSkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@protobufjs+inquire@1.1.0/node_modules/@protobufjs/inquire/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@protobufjs+inquire@1.1.0/node_modules/@protobufjs/inquire/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@protobufjs+inquire@1.1.0/node_modules/@protobufjs/inquire/index.js ***!
  \************************************************************************************************/
/***/ ((module) => {

eval("\nmodule.exports = inquire;\n/**\r\n * Requires a module only if available.\r\n * @memberof util\r\n * @param {string} moduleName Module to require\r\n * @returns {?Object} Required module if available and not empty, otherwise `null`\r\n */ function inquire(moduleName) {\n    try {\n        var mod = eval(\"quire\".replace(/^/, \"re\"))(moduleName); // eslint-disable-line no-eval\n        if (mod && (mod.length || Object.keys(mod).length)) return mod;\n    } catch (e) {} // eslint-disable-line no-empty\n    return null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHByb3RvYnVmanMraW5xdWlyZUAxLjEuMC9ub2RlX21vZHVsZXMvQHByb3RvYnVmanMvaW5xdWlyZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSxPQUFPQyxPQUFPLEdBQUdDO0FBRWpCOzs7OztDQUtDLEdBQ0QsU0FBU0EsUUFBUUMsVUFBVTtJQUN2QixJQUFJO1FBQ0EsSUFBSUMsTUFBTUMsS0FBSyxRQUFRQyxPQUFPLENBQUMsS0FBSSxPQUFPSCxhQUFhLDhCQUE4QjtRQUNyRixJQUFJQyxPQUFRQSxDQUFBQSxJQUFJRyxNQUFNLElBQUlDLE9BQU9DLElBQUksQ0FBQ0wsS0FBS0csTUFBTSxHQUM3QyxPQUFPSDtJQUNmLEVBQUUsT0FBT00sR0FBRyxDQUFDLEVBQUUsK0JBQStCO0lBQzlDLE9BQU87QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy8ucG5wbS9AcHJvdG9idWZqcytpbnF1aXJlQDEuMS4wL25vZGVfbW9kdWxlcy9AcHJvdG9idWZqcy9pbnF1aXJlL2luZGV4LmpzPzMzNDgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbm1vZHVsZS5leHBvcnRzID0gaW5xdWlyZTtcclxuXHJcbi8qKlxyXG4gKiBSZXF1aXJlcyBhIG1vZHVsZSBvbmx5IGlmIGF2YWlsYWJsZS5cclxuICogQG1lbWJlcm9mIHV0aWxcclxuICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZU5hbWUgTW9kdWxlIHRvIHJlcXVpcmVcclxuICogQHJldHVybnMgez9PYmplY3R9IFJlcXVpcmVkIG1vZHVsZSBpZiBhdmFpbGFibGUgYW5kIG5vdCBlbXB0eSwgb3RoZXJ3aXNlIGBudWxsYFxyXG4gKi9cclxuZnVuY3Rpb24gaW5xdWlyZShtb2R1bGVOYW1lKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciBtb2QgPSBldmFsKFwicXVpcmVcIi5yZXBsYWNlKC9eLyxcInJlXCIpKShtb2R1bGVOYW1lKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1ldmFsXHJcbiAgICAgICAgaWYgKG1vZCAmJiAobW9kLmxlbmd0aCB8fCBPYmplY3Qua2V5cyhtb2QpLmxlbmd0aCkpXHJcbiAgICAgICAgICAgIHJldHVybiBtb2Q7XHJcbiAgICB9IGNhdGNoIChlKSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWVtcHR5XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImlucXVpcmUiLCJtb2R1bGVOYW1lIiwibW9kIiwiZXZhbCIsInJlcGxhY2UiLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@protobufjs+inquire@1.1.0/node_modules/@protobufjs/inquire/index.js\n");

/***/ })

};
;