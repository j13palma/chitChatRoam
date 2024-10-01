"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-avatar@1.1.0_@types+react-dom@18.2.14_@types+react@18.2.29_react-dom@18.2.0_react@18.2.0__react@18.2.0";
exports.ids = ["vendor-chunks/@radix-ui+react-avatar@1.1.0_@types+react-dom@18.2.14_@types+react@18.2.29_react-dom@18.2.0_react@18.2.0__react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-avatar@1.1.0_@types+react-dom@18.2.14_@types+react@18.2.29_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-avatar/dist/index.mjs":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-avatar@1.1.0_@types+react-dom@18.2.14_@types+react@18.2.29_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-avatar/dist/index.mjs ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Avatar: () => (/* binding */ Avatar),\n/* harmony export */   AvatarFallback: () => (/* binding */ AvatarFallback),\n/* harmony export */   AvatarImage: () => (/* binding */ AvatarImage),\n/* harmony export */   Fallback: () => (/* binding */ Fallback),\n/* harmony export */   Image: () => (/* binding */ Image),\n/* harmony export */   Root: () => (/* binding */ Root),\n/* harmony export */   createAvatarScope: () => (/* binding */ createAvatarScope)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.0.0_@babel+core@7.23.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-context */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-context@1.1.0_@types+react@18.2.29_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-use-callback-ref */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.0_@types+react@18.2.29_react@18.2.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/react-use-layout-effect */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.0_@types+react@18.2.29_react@18.2.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-primitive */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-primitive@2.0.0_@types+react-dom@18.2.14_@types+react@18.2.29_react-dom@18.2._wpaigpcunpdw6whq4loblxctua/node_modules/@radix-ui/react-primitive/dist/index.mjs\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/.pnpm/next@14.0.0_@babel+core@7.23.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n\"use client\";\n\n// packages/react/avatar/src/Avatar.tsx\n\n\n\n\n\n\nvar AVATAR_NAME = \"Avatar\";\nvar [createAvatarContext, createAvatarScope] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.createContextScope)(AVATAR_NAME);\nvar [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);\nvar Avatar = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(\n  (props, forwardedRef) => {\n    const { __scopeAvatar, ...avatarProps } = props;\n    const [imageLoadingStatus, setImageLoadingStatus] = react__WEBPACK_IMPORTED_MODULE_0__.useState(\"idle\");\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\n      AvatarProvider,\n      {\n        scope: __scopeAvatar,\n        imageLoadingStatus,\n        onImageLoadingStatusChange: setImageLoadingStatus,\n        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__.Primitive.span, { ...avatarProps, ref: forwardedRef })\n      }\n    );\n  }\n);\nAvatar.displayName = AVATAR_NAME;\nvar IMAGE_NAME = \"AvatarImage\";\nvar AvatarImage = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(\n  (props, forwardedRef) => {\n    const { __scopeAvatar, src, onLoadingStatusChange = () => {\n    }, ...imageProps } = props;\n    const context = useAvatarContext(IMAGE_NAME, __scopeAvatar);\n    const imageLoadingStatus = useImageLoadingStatus(src);\n    const handleLoadingStatusChange = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_4__.useCallbackRef)((status) => {\n      onLoadingStatusChange(status);\n      context.onImageLoadingStatusChange(status);\n    });\n    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_5__.useLayoutEffect)(() => {\n      if (imageLoadingStatus !== \"idle\") {\n        handleLoadingStatusChange(imageLoadingStatus);\n      }\n    }, [imageLoadingStatus, handleLoadingStatusChange]);\n    return imageLoadingStatus === \"loaded\" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__.Primitive.img, { ...imageProps, ref: forwardedRef, src }) : null;\n  }\n);\nAvatarImage.displayName = IMAGE_NAME;\nvar FALLBACK_NAME = \"AvatarFallback\";\nvar AvatarFallback = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(\n  (props, forwardedRef) => {\n    const { __scopeAvatar, delayMs, ...fallbackProps } = props;\n    const context = useAvatarContext(FALLBACK_NAME, __scopeAvatar);\n    const [canRender, setCanRender] = react__WEBPACK_IMPORTED_MODULE_0__.useState(delayMs === void 0);\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {\n      if (delayMs !== void 0) {\n        const timerId = window.setTimeout(() => setCanRender(true), delayMs);\n        return () => window.clearTimeout(timerId);\n      }\n    }, [delayMs]);\n    return canRender && context.imageLoadingStatus !== \"loaded\" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__.Primitive.span, { ...fallbackProps, ref: forwardedRef }) : null;\n  }\n);\nAvatarFallback.displayName = FALLBACK_NAME;\nfunction useImageLoadingStatus(src) {\n  const [loadingStatus, setLoadingStatus] = react__WEBPACK_IMPORTED_MODULE_0__.useState(\"idle\");\n  (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_5__.useLayoutEffect)(() => {\n    if (!src) {\n      setLoadingStatus(\"error\");\n      return;\n    }\n    let isMounted = true;\n    const image = new window.Image();\n    const updateStatus = (status) => () => {\n      if (!isMounted) return;\n      setLoadingStatus(status);\n    };\n    setLoadingStatus(\"loading\");\n    image.onload = updateStatus(\"loaded\");\n    image.onerror = updateStatus(\"error\");\n    image.src = src;\n    return () => {\n      isMounted = false;\n    };\n  }, [src]);\n  return loadingStatus;\n}\nvar Root = Avatar;\nvar Image = AvatarImage;\nvar Fallback = AvatarFallback;\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LWF2YXRhckAxLjEuMF9AdHlwZXMrcmVhY3QtZG9tQDE4LjIuMTRfQHR5cGVzK3JlYWN0QDE4LjIuMjlfcmVhY3QtZG9tQDE4LjIuMF9yZWFjdEAxOC4yLjBfX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LWF2YXRhci9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDK0I7QUFDOEI7QUFDSztBQUNFO0FBQ2Q7QUFDZDtBQUN4QztBQUNBLCtDQUErQywyRUFBa0I7QUFDakU7QUFDQSxhQUFhLDZDQUFnQjtBQUM3QjtBQUNBLFlBQVksZ0NBQWdDO0FBQzVDLHdEQUF3RCwyQ0FBYztBQUN0RSwyQkFBMkIsc0RBQUc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxzREFBRyxDQUFDLGdFQUFTLFNBQVMsbUNBQW1DO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw2Q0FBZ0I7QUFDbEM7QUFDQSxZQUFZO0FBQ1osS0FBSyxrQkFBa0I7QUFDdkI7QUFDQTtBQUNBLHNDQUFzQyxnRkFBYztBQUNwRDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksa0ZBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDZEQUE2RCxzREFBRyxDQUFDLGdFQUFTLFFBQVEsdUNBQXVDO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZDQUFnQjtBQUNyQztBQUNBLFlBQVksMkNBQTJDO0FBQ3ZEO0FBQ0Esc0NBQXNDLDJDQUFjO0FBQ3BELElBQUksNENBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsa0ZBQWtGLHNEQUFHLENBQUMsZ0VBQVMsU0FBUyxxQ0FBcUM7QUFDN0k7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsMkNBQWM7QUFDMUQsRUFBRSxrRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByYWRpeC11aStyZWFjdC1hdmF0YXJAMS4xLjBfQHR5cGVzK3JlYWN0LWRvbUAxOC4yLjE0X0B0eXBlcytyZWFjdEAxOC4yLjI5X3JlYWN0LWRvbUAxOC4yLjBfcmVhY3RAMTguMi4wX19yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1hdmF0YXIvZGlzdC9pbmRleC5tanM/ZjZjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuLy8gcGFja2FnZXMvcmVhY3QvYXZhdGFyL3NyYy9BdmF0YXIudHN4XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHRTY29wZSB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtY29udGV4dFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2tSZWYgfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXVzZS1jYWxsYmFjay1yZWZcIjtcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtdXNlLWxheW91dC1lZmZlY3RcIjtcbmltcG9ydCB7IFByaW1pdGl2ZSB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtcHJpbWl0aXZlXCI7XG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbnZhciBBVkFUQVJfTkFNRSA9IFwiQXZhdGFyXCI7XG52YXIgW2NyZWF0ZUF2YXRhckNvbnRleHQsIGNyZWF0ZUF2YXRhclNjb3BlXSA9IGNyZWF0ZUNvbnRleHRTY29wZShBVkFUQVJfTkFNRSk7XG52YXIgW0F2YXRhclByb3ZpZGVyLCB1c2VBdmF0YXJDb250ZXh0XSA9IGNyZWF0ZUF2YXRhckNvbnRleHQoQVZBVEFSX05BTUUpO1xudmFyIEF2YXRhciA9IFJlYWN0LmZvcndhcmRSZWYoXG4gIChwcm9wcywgZm9yd2FyZGVkUmVmKSA9PiB7XG4gICAgY29uc3QgeyBfX3Njb3BlQXZhdGFyLCAuLi5hdmF0YXJQcm9wcyB9ID0gcHJvcHM7XG4gICAgY29uc3QgW2ltYWdlTG9hZGluZ1N0YXR1cywgc2V0SW1hZ2VMb2FkaW5nU3RhdHVzXSA9IFJlYWN0LnVzZVN0YXRlKFwiaWRsZVwiKTtcbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChcbiAgICAgIEF2YXRhclByb3ZpZGVyLFxuICAgICAge1xuICAgICAgICBzY29wZTogX19zY29wZUF2YXRhcixcbiAgICAgICAgaW1hZ2VMb2FkaW5nU3RhdHVzLFxuICAgICAgICBvbkltYWdlTG9hZGluZ1N0YXR1c0NoYW5nZTogc2V0SW1hZ2VMb2FkaW5nU3RhdHVzLFxuICAgICAgICBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIGpzeChQcmltaXRpdmUuc3BhbiwgeyAuLi5hdmF0YXJQcm9wcywgcmVmOiBmb3J3YXJkZWRSZWYgfSlcbiAgICAgIH1cbiAgICApO1xuICB9XG4pO1xuQXZhdGFyLmRpc3BsYXlOYW1lID0gQVZBVEFSX05BTUU7XG52YXIgSU1BR0VfTkFNRSA9IFwiQXZhdGFySW1hZ2VcIjtcbnZhciBBdmF0YXJJbWFnZSA9IFJlYWN0LmZvcndhcmRSZWYoXG4gIChwcm9wcywgZm9yd2FyZGVkUmVmKSA9PiB7XG4gICAgY29uc3QgeyBfX3Njb3BlQXZhdGFyLCBzcmMsIG9uTG9hZGluZ1N0YXR1c0NoYW5nZSA9ICgpID0+IHtcbiAgICB9LCAuLi5pbWFnZVByb3BzIH0gPSBwcm9wcztcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQXZhdGFyQ29udGV4dChJTUFHRV9OQU1FLCBfX3Njb3BlQXZhdGFyKTtcbiAgICBjb25zdCBpbWFnZUxvYWRpbmdTdGF0dXMgPSB1c2VJbWFnZUxvYWRpbmdTdGF0dXMoc3JjKTtcbiAgICBjb25zdCBoYW5kbGVMb2FkaW5nU3RhdHVzQ2hhbmdlID0gdXNlQ2FsbGJhY2tSZWYoKHN0YXR1cykgPT4ge1xuICAgICAgb25Mb2FkaW5nU3RhdHVzQ2hhbmdlKHN0YXR1cyk7XG4gICAgICBjb250ZXh0Lm9uSW1hZ2VMb2FkaW5nU3RhdHVzQ2hhbmdlKHN0YXR1cyk7XG4gICAgfSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChpbWFnZUxvYWRpbmdTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gICAgICAgIGhhbmRsZUxvYWRpbmdTdGF0dXNDaGFuZ2UoaW1hZ2VMb2FkaW5nU3RhdHVzKTtcbiAgICAgIH1cbiAgICB9LCBbaW1hZ2VMb2FkaW5nU3RhdHVzLCBoYW5kbGVMb2FkaW5nU3RhdHVzQ2hhbmdlXSk7XG4gICAgcmV0dXJuIGltYWdlTG9hZGluZ1N0YXR1cyA9PT0gXCJsb2FkZWRcIiA/IC8qIEBfX1BVUkVfXyAqLyBqc3goUHJpbWl0aXZlLmltZywgeyAuLi5pbWFnZVByb3BzLCByZWY6IGZvcndhcmRlZFJlZiwgc3JjIH0pIDogbnVsbDtcbiAgfVxuKTtcbkF2YXRhckltYWdlLmRpc3BsYXlOYW1lID0gSU1BR0VfTkFNRTtcbnZhciBGQUxMQkFDS19OQU1FID0gXCJBdmF0YXJGYWxsYmFja1wiO1xudmFyIEF2YXRhckZhbGxiYWNrID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKHByb3BzLCBmb3J3YXJkZWRSZWYpID0+IHtcbiAgICBjb25zdCB7IF9fc2NvcGVBdmF0YXIsIGRlbGF5TXMsIC4uLmZhbGxiYWNrUHJvcHMgfSA9IHByb3BzO1xuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VBdmF0YXJDb250ZXh0KEZBTExCQUNLX05BTUUsIF9fc2NvcGVBdmF0YXIpO1xuICAgIGNvbnN0IFtjYW5SZW5kZXIsIHNldENhblJlbmRlcl0gPSBSZWFjdC51c2VTdGF0ZShkZWxheU1zID09PSB2b2lkIDApO1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoZGVsYXlNcyAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnN0IHRpbWVySWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBzZXRDYW5SZW5kZXIodHJ1ZSksIGRlbGF5TXMpO1xuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LmNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgIH1cbiAgICB9LCBbZGVsYXlNc10pO1xuICAgIHJldHVybiBjYW5SZW5kZXIgJiYgY29udGV4dC5pbWFnZUxvYWRpbmdTdGF0dXMgIT09IFwibG9hZGVkXCIgPyAvKiBAX19QVVJFX18gKi8ganN4KFByaW1pdGl2ZS5zcGFuLCB7IC4uLmZhbGxiYWNrUHJvcHMsIHJlZjogZm9yd2FyZGVkUmVmIH0pIDogbnVsbDtcbiAgfVxuKTtcbkF2YXRhckZhbGxiYWNrLmRpc3BsYXlOYW1lID0gRkFMTEJBQ0tfTkFNRTtcbmZ1bmN0aW9uIHVzZUltYWdlTG9hZGluZ1N0YXR1cyhzcmMpIHtcbiAgY29uc3QgW2xvYWRpbmdTdGF0dXMsIHNldExvYWRpbmdTdGF0dXNdID0gUmVhY3QudXNlU3RhdGUoXCJpZGxlXCIpO1xuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc3JjKSB7XG4gICAgICBzZXRMb2FkaW5nU3RhdHVzKFwiZXJyb3JcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBpc01vdW50ZWQgPSB0cnVlO1xuICAgIGNvbnN0IGltYWdlID0gbmV3IHdpbmRvdy5JbWFnZSgpO1xuICAgIGNvbnN0IHVwZGF0ZVN0YXR1cyA9IChzdGF0dXMpID0+ICgpID0+IHtcbiAgICAgIGlmICghaXNNb3VudGVkKSByZXR1cm47XG4gICAgICBzZXRMb2FkaW5nU3RhdHVzKHN0YXR1cyk7XG4gICAgfTtcbiAgICBzZXRMb2FkaW5nU3RhdHVzKFwibG9hZGluZ1wiKTtcbiAgICBpbWFnZS5vbmxvYWQgPSB1cGRhdGVTdGF0dXMoXCJsb2FkZWRcIik7XG4gICAgaW1hZ2Uub25lcnJvciA9IHVwZGF0ZVN0YXR1cyhcImVycm9yXCIpO1xuICAgIGltYWdlLnNyYyA9IHNyYztcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaXNNb3VudGVkID0gZmFsc2U7XG4gICAgfTtcbiAgfSwgW3NyY10pO1xuICByZXR1cm4gbG9hZGluZ1N0YXR1cztcbn1cbnZhciBSb290ID0gQXZhdGFyO1xudmFyIEltYWdlID0gQXZhdGFySW1hZ2U7XG52YXIgRmFsbGJhY2sgPSBBdmF0YXJGYWxsYmFjaztcbmV4cG9ydCB7XG4gIEF2YXRhcixcbiAgQXZhdGFyRmFsbGJhY2ssXG4gIEF2YXRhckltYWdlLFxuICBGYWxsYmFjayxcbiAgSW1hZ2UsXG4gIFJvb3QsXG4gIGNyZWF0ZUF2YXRhclNjb3BlXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-avatar@1.1.0_@types+react-dom@18.2.14_@types+react@18.2.29_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-avatar/dist/index.mjs\n");

/***/ })

};
;