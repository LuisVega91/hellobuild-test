(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages */ "./app/pages/index.ts");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "../../../node_modules/@apollo/client/index.js");
/* harmony import */ var _services_queries_apollo_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/queries/apollo-config */ "./app/services/queries/apollo-config.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\GitHub\\pruebas\\hellobuild\\apps\\front\\src\\app\\app.tsx";





function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
    client: _services_queries_apollo_config__WEBPACK_IMPORTED_MODULE_3__["apolloClient"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["BrowserRouter"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Switch"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
          exact: true,
          path: "/",
          component: _pages__WEBPACK_IMPORTED_MODULE_1__["Home"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
          exact: true,
          path: "/login",
          component: _pages__WEBPACK_IMPORTED_MODULE_1__["Login"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
          exact: true,
          path: "/register",
          component: _pages__WEBPACK_IMPORTED_MODULE_1__["Register"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
          exact: true,
          path: "/profile",
          component: _pages__WEBPACK_IMPORTED_MODULE_1__["Profile"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./app/components/Navigation/index.tsx":
/*!*********************************************!*\
  !*** ./app/components/Navigation/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\GitHub\\pruebas\\hellobuild\\apps\\front\\src\\app\\components\\Navigation\\index.tsx";




const Navigation = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("nav", {
    className: "font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "mb-2 sm:mb-0 inner",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/home",
        className: "text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold",
        children: "HelloBuild"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        className: "text-xs text-grey-dark",
        children: "Technical Test Luis Vega"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "sm:mb-0 self-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/",
        className: "text-md no-underline text-black hover:text-blue-dark ml-2 px-1",
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/login",
        className: "text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1",
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/register",
        className: "text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1",
        children: "SigIn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/profile",
        className: "text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1",
        children: "Profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation); // <nav>
//             <Link to='/'>Home</Link>
//             <Link to='/login'>Login</Link>
//             <Link to='/register'>Register</Link>
//             <Link to='/profile'>Profile</Link>
//         </nav>

/***/ }),

/***/ "./app/components/Page/index.tsx":
/*!***************************************!*\
  !*** ./app/components/Page/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navigation */ "./app/components/Navigation/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\GitHub\\pruebas\\hellobuild\\apps\\front\\src\\app\\components\\Page\\index.tsx";




const Page = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }, undefined), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 13
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./app/pages/index.ts":
/*!****************************!*\
  !*** ./app/pages/index.ts ***!
  \****************************/
/*! exports provided: Home, Profile, Login, Register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _private_Profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/Profile */ "./app/pages/private/Profile.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return _private_Profile__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _public_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/Login */ "./app/pages/public/Login.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _public_Login__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _public_Register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/Register */ "./app/pages/public/Register.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return _public_Register__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _public_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public/Home */ "./app/pages/public/Home.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return _public_Home__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./app/pages/private/Profile.tsx":
/*!***************************************!*\
  !*** ./app/pages/private/Profile.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_svg_pull_request_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/svg/pull-request.svg */ "./assets/svg/pull-request.svg");
/* harmony import */ var _assets_svg_repository_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/svg/repository.svg */ "./assets/svg/repository.svg");
/* harmony import */ var _assets_svg_project_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/svg/project.svg */ "./assets/svg/project.svg");
/* harmony import */ var _assets_svg_followers_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/svg/followers.svg */ "./assets/svg/followers.svg");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\GitHub\\pruebas\\hellobuild\\apps\\front\\src\\app\\pages\\private\\Profile.tsx";







const Profile = ({
  viewer
}) => {
  var _viewer$pullRequests, _viewer$repositories, _viewer$projects, _viewer$followers;

  console.log(viewer);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "flex flex-row flex-wrap p-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "mx-auto w-2/3",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "md:w-1/3 w-full",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
              href: viewer === null || viewer === void 0 ? void 0 : viewer.url,
              target: "_blank",
              rel: "noreferrer",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
                className: "rounded-lg shadow-lg antialiased bg-card-img",
                src: viewer === null || viewer === void 0 ? void 0 : viewer.avatarUrl,
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "md:w-2/3 w-full px-3 flex flex-row flex-wrap",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                className: "text-2xl text-white leading-tight",
                children: viewer === null || viewer === void 0 ? void 0 : viewer.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
                href: viewer === null || viewer === void 0 ? void 0 : viewer.url,
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                  className: "text-normal text-gray-300 hover:text-gray-400 cursor-pointer",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
                    className: "border-b border-dashed border-gray-500 pb-1",
                    children: viewer === null || viewer === void 0 ? void 0 : viewer.login
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 30,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
                href: viewer === null || viewer === void 0 ? void 0 : viewer.url,
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                  className: "text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("strong", {
                    children: "email: "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 21
                  }, undefined), " ", viewer === null || viewer === void 0 ? void 0 : viewer.email]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "flex w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "flex-1 m-5 relative rounded bg-gray-200 shadow",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "bg-green-500 pl-10 pr-10 pt-8 pb-8 ml-3 absolute top-0 -mt-4 -mr-4 rounded text-white fill-current shadow",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
            src: _assets_svg_pull_request_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
            alt: "svgPullRequest",
            className: "w-6 h-6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "float-right top-0 right-0 m-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "text-right text-sm",
            children: "Pull Request"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "text-right text-3xl",
            children: viewer === null || viewer === void 0 ? void 0 : (_viewer$pullRequests = viewer.pullRequests) === null || _viewer$pullRequests === void 0 ? void 0 : _viewer$pullRequests.totalCount
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "flex-1 m-5 relative rounded bg-gray-200 shadow",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "bg-yellow-500 pl-10 pr-10 pt-8 pb-8 ml-3 absolute top-0 -mt-4 -mr-4 rounded text-white fill-current shadow",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
            src: _assets_svg_repository_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
            alt: "svgRepository",
            className: "w-6 h-6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "float-right top-0 right-0 m-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "text-right text-sm",
            children: "Repositories"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "text-right text-3xl",
            children: viewer === null || viewer === void 0 ? void 0 : (_viewer$repositories = viewer.repositories) === null || _viewer$repositories === void 0 ? void 0 : _viewer$repositories.totalCount
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "flex-1 m-5 relative rounded bg-gray-200 shadow",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "bg-blue-500 pl-10 pr-10 pt-8 pb-8 ml-3 absolute top-0 -mt-4 -mr-4 rounded text-white fill-current shadow",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
            src: _assets_svg_project_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
            alt: "svgProject",
            className: "w-6 h-6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "float-right top-0 right-0 m-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "text-right text-sm",
            children: "Projects"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "text-right text-3xl",
            children: viewer === null || viewer === void 0 ? void 0 : (_viewer$projects = viewer.projects) === null || _viewer$projects === void 0 ? void 0 : _viewer$projects.totalCount
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "flex-1 m-5 relative rounded bg-gray-200 shadow",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "bg-red-500 pl-10 pr-10 pt-8 pb-8 ml-3 absolute top-0 -mt-4 -mr-4 rounded text-white fill-current shadow",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
            src: _assets_svg_followers_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
            alt: "svgFollowers",
            className: "w-6 h-6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "float-right top-0 right-0 m-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "text-right text-sm",
            children: "Followers"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "text-right text-3xl",
            children: viewer === null || viewer === void 0 ? void 0 : (_viewer$followers = viewer.followers) === null || _viewer$followers === void 0 ? void 0 : _viewer$followers.totalCount
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./app/pages/public/Home.tsx":
/*!***********************************!*\
  !*** ./app/pages/public/Home.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_svg_link_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/svg/link.svg */ "./assets/svg/link.svg");
/* harmony import */ var _assets_svg_star_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/svg/star.svg */ "./assets/svg/star.svg");
/* harmony import */ var _pages___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/ */ "./app/pages/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var _repostore_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../repostore.slice */ "./app/repostore.slice.ts");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Page */ "./app/components/Page/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\GitHub\\pruebas\\hellobuild\\apps\\front\\src\\app\\pages\\public\\Home.tsx";









const Home = () => {
  var _queryResult$viewer, _queryResult$viewer$r, _repoFiltered;

  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [repoToSearch, setRepoToSearch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const queryResult = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_repostore_slice__WEBPACK_IMPORTED_MODULE_5__["selectAllRepostore"])[0];
  const repositores = queryResult === null || queryResult === void 0 ? void 0 : (_queryResult$viewer = queryResult.viewer) === null || _queryResult$viewer === void 0 ? void 0 : (_queryResult$viewer$r = _queryResult$viewer.repositories) === null || _queryResult$viewer$r === void 0 ? void 0 : _queryResult$viewer$r.nodes;
  console.log(repositores);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_repostore_slice__WEBPACK_IMPORTED_MODULE_5__["fetchRepostore"])());
  }, [dispatch]);

  const repoFiltered = () => {
    if (repoToSearch) return repositores === null || repositores === void 0 ? void 0 : repositores.filter(element => {
      var _element$name;

      return element === null || element === void 0 ? void 0 : (_element$name = element.name) === null || _element$name === void 0 ? void 0 : _element$name.includes(repoToSearch);
    });
    return repositores;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Page__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_pages___WEBPACK_IMPORTED_MODULE_3__["Profile"], {
      viewer: queryResult.viewer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "box pt-6",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "box-wrapper",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: " bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
            className: "outline-none focus:outline-none",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("svg", {
              className: " w-5 text-gray-600 h-5 cursor-pointer",
              fill: "none",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("path", {
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
            onChange: e => setRepoToSearch(e.target.value),
            type: "search",
            name: "",
            id: "",
            placeholder: "search for repos",
            "x-model": "q",
            className: "w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "overflow-x-auto",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("table", {
        className: "min-w-max w-full table-auto",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tr", {
            className: "bg-gray-200 text-gray-600 uppercase text-sm leading-normal",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
              className: "py-3 px-6 text-left",
              children: "name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
              className: "py-3 px-6 text-left",
              children: "nameWithOwner"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
              className: "py-3 px-6 text-center",
              children: "stargazerCount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
              className: "py-3 px-6 text-center",
              children: "description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tbody", {
          className: "text-gray-600 text-sm font-light",
          children: (_repoFiltered = repoFiltered()) === null || _repoFiltered === void 0 ? void 0 : _repoFiltered.map(repo => {
            var _repo$owner, _repo$owner2;

            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tr", {
              className: "border-b border-gray-200 hover:bg-gray-100",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                className: "py-3 px-6 text-left whitespace-nowrap",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "flex items-center",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                    className: "mr-2",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                      href: repo.url,
                      target: "_blank",
                      rel: "noreferrer",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                        src: _assets_svg_link_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
                        alt: repo.name,
                        className: "w-6 h-6 transform hover:scale-125"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 92,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 91,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                    className: "font-medium",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                      href: repo.url,
                      target: "_blank",
                      rel: "noreferrer",
                      children: repo.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                className: "py-3 px-6 text-left",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "flex items-center",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                    className: "mr-2",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                      className: "w-6 h-6 rounded-full",
                      src: repo === null || repo === void 0 ? void 0 : (_repo$owner = repo.owner) === null || _repo$owner === void 0 ? void 0 : _repo$owner.avatarUrl,
                      alt: "client-img"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 109,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                    children: repo === null || repo === void 0 ? void 0 : (_repo$owner2 = repo.owner) === null || _repo$owner2 === void 0 ? void 0 : _repo$owner2.login
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                className: "py-3 px-6 text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "flex items-center justify-center",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                    src: _assets_svg_star_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
                    alt: repo.name,
                    className: "w-6 h-6"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                    className: "bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs",
                    children: repo.stargazerCount
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                className: "py-3 px-6 text-center",
                children: repo.description || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                  className: "text-gray-300 ",
                  children: "No Description"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 17
              }, undefined)]
            }, repo.id, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./app/pages/public/Login.tsx":
/*!************************************!*\
  !*** ./app/pages/public/Login.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_github_login_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-github-login-button */ "../../../node_modules/react-github-login-button/es/index.js");
/* harmony import */ var react_github_login_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_github_login_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Page */ "./app/components/Page/index.tsx");
/* harmony import */ var _services_auth_authService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/authService */ "./app/services/auth/authService.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\GitHub\\pruebas\\hellobuild\\apps\\front\\src\\app\\pages\\public\\Login.tsx";






const Login = () => {
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["useHistory"])();

  const handdleClick = async () => {
    const res = await Object(_services_auth_authService__WEBPACK_IMPORTED_MODULE_3__["default"])();
    await localStorage.setItem('token', res.credential.accessToken);
    history.push('/');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "flex flex-col h-screen bg-gray-100",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "grid place-items-center mx-2 my-20 sm:my-auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "w-11/12 w-100 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg text-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
            className: "font-semibold text-3xl lg:text-4xl text-gray-800",
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_github_login_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
            className: "m-auto",
            label: "Login with GitHub",
            type: "light",
            onClick: handdleClick
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./app/pages/public/Register.tsx":
/*!***************************************!*\
  !*** ./app/pages/public/Register.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_github_login_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-github-login-button */ "../../../node_modules/react-github-login-button/es/index.js");
/* harmony import */ var react_github_login_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_github_login_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "../../../node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Page */ "./app/components/Page/index.tsx");
/* harmony import */ var _services_auth_authService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/authService */ "./app/services/auth/authService.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\GitHub\\pruebas\\hellobuild\\apps\\front\\src\\app\\pages\\public\\Register.tsx";






const Register = () => {
  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();

  const handdleClick = async () => {
    const res = await Object(_services_auth_authService__WEBPACK_IMPORTED_MODULE_3__["default"])();
    console.log(res);
    history.push('/');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "flex flex-col h-screen bg-gray-100",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "grid place-items-center mx-2 my-20 sm:my-auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "w-11/12 w-100 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg text-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
            className: "font-semibold text-3xl lg:text-4xl text-gray-800",
            children: "SignIn"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_github_login_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
            className: "m-auto",
            label: "SignIn with GitHub",
            type: "light",
            onClick: handdleClick
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ }),

/***/ "./app/repostore.slice.ts":
/*!********************************!*\
  !*** ./app/repostore.slice.ts ***!
  \********************************/
/*! exports provided: REPOSTORE_FEATURE_KEY, repostoreAdapter, fetchRepostore, initialRepostoreState, repostoreSlice, repostoreReducer, repostoreActions, getRepostoreState, selectAllRepostore, selectRepostoreEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPOSTORE_FEATURE_KEY", function() { return REPOSTORE_FEATURE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repostoreAdapter", function() { return repostoreAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRepostore", function() { return fetchRepostore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialRepostoreState", function() { return initialRepostoreState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repostoreSlice", function() { return repostoreSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repostoreReducer", function() { return repostoreReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repostoreActions", function() { return repostoreActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRepostoreState", function() { return getRepostoreState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllRepostore", function() { return selectAllRepostore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRepostoreEntities", function() { return selectRepostoreEntities; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "../../../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _services_queries_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/queries/queries */ "./app/services/queries/queries.ts");
/* harmony import */ var _services_queries_apollo_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/queries/apollo-config */ "./app/services/queries/apollo-config.ts");



const REPOSTORE_FEATURE_KEY = 'repostore';
const repostoreAdapter = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])();
/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchRepostore())
 * }, [dispatch]);
 * ```
 */

const fetchRepostore = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('repostore/fetchStatus', async (_, thunkAPI) => {
  return await _services_queries_apollo_config__WEBPACK_IMPORTED_MODULE_2__["apolloClient"].query({
    query: _services_queries_queries__WEBPACK_IMPORTED_MODULE_1__["REPOSITORY_QUERY"]
  });
});
const initialRepostoreState = repostoreAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: null
});
const repostoreSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: REPOSTORE_FEATURE_KEY,
  initialState: initialRepostoreState,
  reducers: {
    add: repostoreAdapter.addOne,
    remove: repostoreAdapter.removeOne // ...

  },
  extraReducers: builder => {
    builder.addCase(fetchRepostore.pending, state => {
      state.loadingStatus = 'loading';
    }).addCase(fetchRepostore.fulfilled, (state, action) => {
      repostoreAdapter.setAll(state, action.payload);
      state.loadingStatus = 'loaded';
    }).addCase(fetchRepostore.rejected, (state, action) => {
      state.loadingStatus = 'error';
      state.error = action.error.message;
    });
  }
});
/*
 * Export reducer for store configuration.
 */

const repostoreReducer = repostoreSlice.reducer;
/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(repostoreActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */

const repostoreActions = repostoreSlice.actions;
/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllRepostore);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */

const {
  selectAll,
  selectEntities
} = repostoreAdapter.getSelectors();
const getRepostoreState = rootState => rootState[REPOSTORE_FEATURE_KEY];
const selectAllRepostore = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getRepostoreState, selectAll);
const selectRepostoreEntities = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getRepostoreState, selectEntities);

/***/ }),

/***/ "./app/services/auth/authService.ts":
/*!******************************************!*\
  !*** ./app/services/auth/authService.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase-config */ "./app/services/auth/firebase-config.ts");


const gitHubAuth = () => {
  return _firebase_config__WEBPACK_IMPORTED_MODULE_0__["default"].auth().signInWithPopup(new _firebase_config__WEBPACK_IMPORTED_MODULE_0__["default"].auth.GithubAuthProvider());
};

/* harmony default export */ __webpack_exports__["default"] = (gitHubAuth);

/***/ }),

/***/ "./app/services/auth/firebase-config.ts":
/*!**********************************************!*\
  !*** ./app/services/auth/firebase-config.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "../../../node_modules/firebase/dist/index.esm.js");

const firebaseConfig = {
  apiKey: "AIzaSyBd60-uwes3-qQCx3XI0KjN4AXl0NsVp1s",
  authDomain: "technicaltests-b3a1a.firebaseapp.com",
  projectId: "technicaltests-b3a1a",
  storageBucket: "technicaltests-b3a1a.appspot.com",
  messagingSenderId: "4308301183",
  appId: "1:4308301183:web:2df1c3e5cc99d55ee2964a",
  measurementId: "G-X3ZFQLSDJR"
}; // Initialize Firebase

firebase__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
firebase__WEBPACK_IMPORTED_MODULE_0__["default"].analytics();
/* harmony default export */ __webpack_exports__["default"] = (firebase__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./app/services/queries/apollo-config.ts":
/*!***********************************************!*\
  !*** ./app/services/queries/apollo-config.ts ***!
  \***********************************************/
/*! exports provided: apolloClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apolloClient", function() { return apolloClient; });
/* harmony import */ var C_GitHub_pruebas_hellobuild_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! C:/GitHub/pruebas/hellobuild/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "../../../node_modules/@apollo/client/index.js");
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/link/context */ "../../../node_modules/@apollo/client/link/context/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_GitHub_pruebas_hellobuild_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import ApolloClient from "apollo-boost";
// const graphql = new ApolloClient({
//   uri: "https://api.github.com/graphql",
//   headers: {
//     Authorization: "bearer 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"
//   }
// });
// export default graphql;


const httpLink = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["createHttpLink"])({
  uri: 'https://api.github.com/graphql'
});
const authLink = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__["setContext"])((_, {
  headers
}) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token'); // return the headers to the context so httpLink can read them

  return {
    headers: _objectSpread(_objectSpread({}, headers), {}, {
      authorization: token ? `Bearer ${token}` : ''
    })
  };
});
const apolloClient = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
  link: authLink.concat(httpLink),
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]()
});

/***/ }),

/***/ "./app/services/queries/queries.ts":
/*!*****************************************!*\
  !*** ./app/services/queries/queries.ts ***!
  \*****************************************/
/*! exports provided: REPOSITORY_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPOSITORY_QUERY", function() { return REPOSITORY_QUERY; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "../../../node_modules/apollo-boost/lib/bundle.esm.js");
let _ = t => t,
    _t;


const REPOSITORY_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(_t || (_t = _`
  {
    viewer {
      login
      name
      email
      url
      avatarUrl
      projects {
        totalCount
      }
      followers {
        totalCount
      }
      pullRequests {
        totalCount
      }
      repositories(last: 100) {
        totalCount
        nodes {
          id
          name
          nameWithOwner
          url
          stargazerCount
          description
          owner {
            avatarUrl
            login
          }
        }
      }
    }
  }
`));

/***/ }),

/***/ "./assets/svg/followers.svg":
/*!**********************************!*\
  !*** ./assets/svg/followers.svg ***!
  \**********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgFollowers(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    "data-view-component": "true",
    height: 16,
    width: 16,
    className: "octicon octicon-people text-icon-tertiary",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgFollowers);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgZGF0YS12aWV3LWNvbXBvbmVudD0idHJ1ZSIgaGVpZ2h0PSIxNiIgd2lkdGg9IjE2IiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLXBlb3BsZSB0ZXh0LWljb24tdGVydGlhcnkiPg0KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjUgMy41YTIgMiAwIDEwMCA0IDIgMiAwIDAwMC00ek0yIDUuNWEzLjUgMy41IDAgMTE1Ljg5OCAyLjU0OSA1LjUwNyA1LjUwNyAwIDAxMy4wMzQgNC4wODQuNzUuNzUgMCAxMS0xLjQ4Mi4yMzUgNC4wMDEgNC4wMDEgMCAwMC03LjkgMCAuNzUuNzUgMCAwMS0xLjQ4Mi0uMjM2QTUuNTA3IDUuNTA3IDAgMDEzLjEwMiA4LjA1IDMuNDkgMy40OSAwIDAxMiA1LjV6TTExIDRhLjc1Ljc1IDAgMTAwIDEuNSAxLjUgMS41IDAgMDEuNjY2IDIuODQ0Ljc1Ljc1IDAgMDAtLjQxNi42NzJ2LjM1MmEuNzUuNzUgMCAwMC41NzQuNzNjMS4yLjI4OSAyLjE2MiAxLjIgMi41MjIgMi4zNzJhLjc1Ljc1IDAgMTAxLjQzNC0uNDQgNS4wMSA1LjAxIDAgMDAtMi41Ni0zLjAxMkEzIDMgMCAwMDExIDR6Ij48L3BhdGg+DQo8L3N2Zz4NCg==");


/***/ }),

/***/ "./assets/svg/link.svg":
/*!*****************************!*\
  !*** ./assets/svg/link.svg ***!
  \*****************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgLink(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    id: "Layer_1",
    enableBackground: "new 0 0 512.001 512.001",
    height: 512,
    viewBox: "0 0 512.001 512.001",
    width: 512,
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "m124.216         512.001c-32.708.001-63.596-12.96-87.427-36.79-24.953-24.954-37.987-57.649-36.703-92.064         1.327-35.543         17.384-69.686         46.436-98.738l52.308-52.521c7.794-7.827         20.457-7.853         28.284-.058         7.826         7.794         7.853         20.458.058         28.284l-52.336         52.551c-42.411         42.411-46.413         97.61-9.761         134.262         36.653         36.655         91.852         32.652         134.232-9.732l71.887-71.887c21.789-21.788 33.805-46.667         34.748-71.945.865-23.17-8.019-45.291-25.015-62.287-5.695-5.694-11.996-10.526-18.729-14.361-9.598-5.467-12.947-17.68-7.48-27.277         5.468-9.598         17.681-12.946         27.277-7.48         9.838         5.604         18.995         12.614         27.217         20.835         24.953         24.953         37.987         57.648         36.703         92.063-1.327         35.543-17.384         69.687-46.436         98.738l-71.887         71.887c-29.053         29.052-63.195         45.108-98.738         46.436-1.548.055-3.097.084-4.638.084zm133.068-189.436c5.467-9.598         2.117-21.811-7.48-27.277-6.733-3.835-13.035-8.667-18.729-14.36-36.652-36.653-32.65-91.852         9.732-134.234l71.887-71.886c42.383-42.381         97.581-46.384         134.232-9.732         36.652         36.652         32.65         91.851-9.761         134.262l-52.336         52.551c-7.795         7.826-7.769         20.49.058         28.284         7.826         7.795         20.489         7.767         28.284-.058l52.308-52.522c29.052-29.052         45.108-63.195         46.436-98.737         1.284-34.415-11.75-67.111-36.703-92.064-24.954-24.954-57.666-37.986-92.064-36.704-35.543         1.327-69.686         17.384-98.737         46.436l-71.888         71.886c-29.052         29.052-45.108         63.195-46.436         98.737-1.284         34.415 11.75         67.111         36.703         92.065         8.221         8.22         17.378         15.229         27.217         20.834         3.124         1.779         6.524         2.625         9.88         2.625         6.953-.001         13.709-3.633         17.397-10.106z"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgLink);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyANCiAgICBpZD0iTGF5ZXJfMSINCiAgICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIuMDAxIDUxMi4wMDEiIA0KICAgIGhlaWdodD0iNTEyIiANCiAgICB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiANCiAgICB3aWR0aD0iNTEyIiANCiAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICAgIDxwYXRoIA0KICAgICAgICBkPSJtMTI0LjIxNg0KICAgICAgICA1MTIuMDAxYy0zMi43MDguMDAxLTYzLjU5Ni0xMi45Ni04Ny40MjctMzYuNzktMjQuOTUzLTI0Ljk1NC0zNy45ODctNTcuNjQ5LTM2LjcwMy05Mi4wNjQNCiAgICAgICAgMS4zMjctMzUuNTQzDQogICAgICAgIDE3LjM4NC02OS42ODYNCiAgICAgICAgNDYuNDM2LTk4LjczOGw1Mi4zMDgtNTIuNTIxYzcuNzk0LTcuODI3DQogICAgICAgIDIwLjQ1Ny03Ljg1Mw0KICAgICAgICAyOC4yODQtLjA1OA0KICAgICAgICA3LjgyNg0KICAgICAgICA3Ljc5NA0KICAgICAgICA3Ljg1Mw0KICAgICAgICAyMC40NTguMDU4DQogICAgICAgIDI4LjI4NGwtNTIuMzM2DQogICAgICAgIDUyLjU1MWMtNDIuNDExDQogICAgICAgIDQyLjQxMS00Ni40MTMNCiAgICAgICAgOTcuNjEtOS43NjENCiAgICAgICAgMTM0LjI2Mg0KICAgICAgICAzNi42NTMNCiAgICAgICAgMzYuNjU1DQogICAgICAgIDkxLjg1Mg0KICAgICAgICAzMi42NTINCiAgICAgICAgMTM0LjIzMi05LjczMmw3MS44ODctNzEuODg3YzIxLjc4OS0yMS43ODggMzMuODA1LTQ2LjY2Nw0KICAgICAgICAzNC43NDgtNzEuOTQ1Ljg2NS0yMy4xNy04LjAxOS00NS4yOTEtMjUuMDE1LTYyLjI4Ny01LjY5NS01LjY5NC0xMS45OTYtMTAuNTI2LTE4LjcyOS0xNC4zNjEtOS41OTgtNS40NjctMTIuOTQ3LTE3LjY4LTcuNDgtMjcuMjc3DQogICAgICAgIDUuNDY4LTkuNTk4DQogICAgICAgIDE3LjY4MS0xMi45NDYNCiAgICAgICAgMjcuMjc3LTcuNDgNCiAgICAgICAgOS44MzgNCiAgICAgICAgNS42MDQNCiAgICAgICAgMTguOTk1DQogICAgICAgIDEyLjYxNA0KICAgICAgICAyNy4yMTcNCiAgICAgICAgMjAuODM1DQogICAgICAgIDI0Ljk1Mw0KICAgICAgICAyNC45NTMNCiAgICAgICAgMzcuOTg3DQogICAgICAgIDU3LjY0OA0KICAgICAgICAzNi43MDMNCiAgICAgICAgOTIuMDYzLTEuMzI3DQogICAgICAgIDM1LjU0My0xNy4zODQNCiAgICAgICAgNjkuNjg3LTQ2LjQzNg0KICAgICAgICA5OC43MzhsLTcxLjg4Nw0KICAgICAgICA3MS44ODdjLTI5LjA1Mw0KICAgICAgICAyOS4wNTItNjMuMTk1DQogICAgICAgIDQ1LjEwOC05OC43MzgNCiAgICAgICAgNDYuNDM2LTEuNTQ4LjA1NS0zLjA5Ny4wODQtNC42MzguMDg0em0xMzMuMDY4LTE4OS40MzZjNS40NjctOS41OTgNCiAgICAgICAgMi4xMTctMjEuODExLTcuNDgtMjcuMjc3LTYuNzMzLTMuODM1LTEzLjAzNS04LjY2Ny0xOC43MjktMTQuMzYtMzYuNjUyLTM2LjY1My0zMi42NS05MS44NTINCiAgICAgICAgOS43MzItMTM0LjIzNGw3MS44ODctNzEuODg2YzQyLjM4My00Mi4zODENCiAgICAgICAgOTcuNTgxLTQ2LjM4NA0KICAgICAgICAxMzQuMjMyLTkuNzMyDQogICAgICAgIDM2LjY1Mg0KICAgICAgICAzNi42NTINCiAgICAgICAgMzIuNjUNCiAgICAgICAgOTEuODUxLTkuNzYxDQogICAgICAgIDEzNC4yNjJsLTUyLjMzNg0KICAgICAgICA1Mi41NTFjLTcuNzk1DQogICAgICAgIDcuODI2LTcuNzY5DQogICAgICAgIDIwLjQ5LjA1OA0KICAgICAgICAyOC4yODQNCiAgICAgICAgNy44MjYNCiAgICAgICAgNy43OTUNCiAgICAgICAgMjAuNDg5DQogICAgICAgIDcuNzY3DQogICAgICAgIDI4LjI4NC0uMDU4bDUyLjMwOC01Mi41MjJjMjkuMDUyLTI5LjA1Mg0KICAgICAgICA0NS4xMDgtNjMuMTk1DQogICAgICAgIDQ2LjQzNi05OC43MzcNCiAgICAgICAgMS4yODQtMzQuNDE1LTExLjc1LTY3LjExMS0zNi43MDMtOTIuMDY0LTI0Ljk1NC0yNC45NTQtNTcuNjY2LTM3Ljk4Ni05Mi4wNjQtMzYuNzA0LTM1LjU0Mw0KICAgICAgICAxLjMyNy02OS42ODYNCiAgICAgICAgMTcuMzg0LTk4LjczNw0KICAgICAgICA0Ni40MzZsLTcxLjg4OA0KICAgICAgICA3MS44ODZjLTI5LjA1Mg0KICAgICAgICAyOS4wNTItNDUuMTA4DQogICAgICAgIDYzLjE5NS00Ni40MzYNCiAgICAgICAgOTguNzM3LTEuMjg0DQogICAgICAgIDM0LjQxNSAxMS43NQ0KICAgICAgICA2Ny4xMTENCiAgICAgICAgMzYuNzAzDQogICAgICAgIDkyLjA2NQ0KICAgICAgICA4LjIyMQ0KICAgICAgICA4LjIyDQogICAgICAgIDE3LjM3OA0KICAgICAgICAxNS4yMjkNCiAgICAgICAgMjcuMjE3DQogICAgICAgIDIwLjgzNA0KICAgICAgICAzLjEyNA0KICAgICAgICAxLjc3OQ0KICAgICAgICA2LjUyNA0KICAgICAgICAyLjYyNQ0KICAgICAgICA5Ljg4DQogICAgICAgIDIuNjI1DQogICAgICAgIDYuOTUzLS4wMDENCiAgICAgICAgMTMuNzA5LTMuNjMzDQogICAgICAgIDE3LjM5Ny0xMC4xMDZ6Ii8+DQo8L3N2Zz4=");


/***/ }),

/***/ "./assets/svg/project.svg":
/*!********************************!*\
  !*** ./assets/svg/project.svg ***!
  \********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgProject(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    viewBox: "0 0 16 16",
    "data-view-component": "true",
    height: 16,
    width: 16,
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgProject);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyAgdmlld0JveD0iMCAwIDE2IDE2IiB2ZXJzaW9uPSIxLjEiIGRhdGEtdmlldy1jb21wb25lbnQ9InRydWUiIGhlaWdodD0iMTYiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIg0KICAgIGQ9Ik0xLjc1IDBBMS43NSAxLjc1IDAgMDAwIDEuNzV2MTIuNUMwIDE1LjIxNi43ODQgMTYgMS43NSAxNmgxMi41QTEuNzUgMS43NSAwIDAwMTYgMTQuMjVWMS43NUExLjc1IDEuNzUgMCAwMDE0LjI1IDBIMS43NXpNMS41IDEuNzVhLjI1LjI1IDAgMDEuMjUtLjI1aDEyLjVhLjI1LjI1IDAgMDEuMjUuMjV2MTIuNWEuMjUuMjUgMCAwMS0uMjUuMjVIMS43NWEuMjUuMjUgMCAwMS0uMjUtLjI1VjEuNzV6TTExLjc1IDNhLjc1Ljc1IDAgMDAtLjc1Ljc1djcuNWEuNzUuNzUgMCAwMDEuNSAwdi03LjVhLjc1Ljc1IDAgMDAtLjc1LS43NXptLTguMjUuNzVhLjc1Ljc1IDAgMDExLjUgMHY1LjVhLjc1Ljc1IDAgMDEtMS41IDB2LTUuNXpNOCAzYS43NS43NSAwIDAwLS43NS43NXYzLjVhLjc1Ljc1IDAgMDAxLjUgMHYtMy41QS43NS43NSAwIDAwOCAzeiI+DQogIDwvcGF0aD4NCjwvc3ZnPg0K");


/***/ }),

/***/ "./assets/svg/pull-request.svg":
/*!*************************************!*\
  !*** ./assets/svg/pull-request.svg ***!
  \*************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgPullRequest(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1200.000000pt",
    height: "1600.000000pt",
    viewBox: "0 0 1200.000000 1600.000000",
    preserveAspectRatio: "xMidYMid meet",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    transform: "translate(0.000000,1600.000000) scale(0.100000,-0.100000)",
    fill: "#000000",
    stroke: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M5500 14505 c-1431 -1431 -1495 -1494 -1497 -1463 -20 259 -47 407 -108 594 -266 812 -1034 1364 -1896 1364 -366 0 -756 -112 -1064 -305 -851 -534 -1174 -1631 -746 -2530 163 -342 396 -611 710 -820 l101 -67 0 -3272 0 -3271 -90 -58 c-586 -378 -934 -1043 -907 -1732 21 -508 207 -951 553 -1315 268 -281 645 -491 1019 -569 171 -35 285 -44 489 -38 321 9 560 68 838 208 808 405 1241 1307 1053 2196 -76 362 -262 705 -527 974 -99 100 -255 227 -357 290 l-71 44 0 3272 0 3272 98 63 c500 328 826 863 891 1460 6 54 11 120 11 147 l0 50 1500 -1497 1500 -1497 0 997 0 998 533 0 c329 0 556 -4 593 -11 417 -73 790 -446 863 -863 8 -41 11 -1059 11 -3232 l0 -3172 -101 -67 c-767 -511 -1086 -1448 -787 -2314 146 -424 436 -790 822 -1036 355 -226 829 -337 1257 -295 961 95 1704 838 1799 1799 72 730 -278 1450 -902 1856 l-88 56 0 3193 c0 2175 -3 3227 -11 3302 -63 651 -395 1310 -929 1845 -498 499 -1082 809 -1720 915 -90 15 -196 18 -722 21 l-618 4 -2 1000 -3 999 -1495 -1495z m-3339 -520 c422 -74 750 -402 824 -824 72 -411 -140 -837 -518 -1041 -596 -322 -1334 44 -1452 719 -116 659 487 1262 1146 1146z m0 -10000 c481 -84 839 -505 839 -985 0 -607 -568 -1089 -1161 -985 -609 106 -982 726 -784 1304 156 459 637 748 1106 666z m8000 0 c423 -74 750 -401 824 -824 93 -531 -280 -1051 -824 -1146 -659 -116 -1262 487 -1146 1146 95 544 615 917 1146 824z"
  }))));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgPullRequest);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMTIwMC4wMDAwMDBwdCIgaGVpZ2h0PSIxNjAwLjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgMTIwMC4wMDAwMDAgMTYwMC4wMDAwMDAiCiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KCjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDE2MDAuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNNTUwMCAxNDUwNSBjLTE0MzEgLTE0MzEgLTE0OTUgLTE0OTQgLTE0OTcgLTE0NjMgLTIwIDI1OSAtNDcgNDA3Ci0xMDggNTk0IC0yNjYgODEyIC0xMDM0IDEzNjQgLTE4OTYgMTM2NCAtMzY2IDAgLTc1NiAtMTEyIC0xMDY0IC0zMDUgLTg1MQotNTM0IC0xMTc0IC0xNjMxIC03NDYgLTI1MzAgMTYzIC0zNDIgMzk2IC02MTEgNzEwIC04MjAgbDEwMSAtNjcgMCAtMzI3MiAwCi0zMjcxIC05MCAtNTggYy01ODYgLTM3OCAtOTM0IC0xMDQzIC05MDcgLTE3MzIgMjEgLTUwOCAyMDcgLTk1MSA1NTMgLTEzMTUKMjY4IC0yODEgNjQ1IC00OTEgMTAxOSAtNTY5IDE3MSAtMzUgMjg1IC00NCA0ODkgLTM4IDMyMSA5IDU2MCA2OCA4MzggMjA4CjgwOCA0MDUgMTI0MSAxMzA3IDEwNTMgMjE5NiAtNzYgMzYyIC0yNjIgNzA1IC01MjcgOTc0IC05OSAxMDAgLTI1NSAyMjcgLTM1NwoyOTAgbC03MSA0NCAwIDMyNzIgMCAzMjcyIDk4IDYzIGM1MDAgMzI4IDgyNiA4NjMgODkxIDE0NjAgNiA1NCAxMSAxMjAgMTEKMTQ3IGwwIDUwIDE1MDAgLTE0OTcgMTUwMCAtMTQ5NyAwIDk5NyAwIDk5OCA1MzMgMCBjMzI5IDAgNTU2IC00IDU5MyAtMTEgNDE3Ci03MyA3OTAgLTQ0NiA4NjMgLTg2MyA4IC00MSAxMSAtMTA1OSAxMSAtMzIzMiBsMCAtMzE3MiAtMTAxIC02NyBjLTc2NyAtNTExCi0xMDg2IC0xNDQ4IC03ODcgLTIzMTQgMTQ2IC00MjQgNDM2IC03OTAgODIyIC0xMDM2IDM1NSAtMjI2IDgyOSAtMzM3IDEyNTcKLTI5NSA5NjEgOTUgMTcwNCA4MzggMTc5OSAxNzk5IDcyIDczMCAtMjc4IDE0NTAgLTkwMiAxODU2IGwtODggNTYgMCAzMTkzIGMwCjIxNzUgLTMgMzIyNyAtMTEgMzMwMiAtNjMgNjUxIC0zOTUgMTMxMCAtOTI5IDE4NDUgLTQ5OCA0OTkgLTEwODIgODA5IC0xNzIwCjkxNSAtOTAgMTUgLTE5NiAxOCAtNzIyIDIxIGwtNjE4IDQgLTIgMTAwMCAtMyA5OTkgLTE0OTUgLTE0OTV6IG0tMzMzOSAtNTIwCmM0MjIgLTc0IDc1MCAtNDAyIDgyNCAtODI0IDcyIC00MTEgLTE0MCAtODM3IC01MTggLTEwNDEgLTU5NiAtMzIyIC0xMzM0IDQ0Ci0xNDUyIDcxOSAtMTE2IDY1OSA0ODcgMTI2MiAxMTQ2IDExNDZ6IG0wIC0xMDAwMCBjNDgxIC04NCA4MzkgLTUwNSA4MzkgLTk4NQowIC02MDcgLTU2OCAtMTA4OSAtMTE2MSAtOTg1IC02MDkgMTA2IC05ODIgNzI2IC03ODQgMTMwNCAxNTYgNDU5IDYzNyA3NDgKMTEwNiA2NjZ6IG04MDAwIDAgYzQyMyAtNzQgNzUwIC00MDEgODI0IC04MjQgOTMgLTUzMSAtMjgwIC0xMDUxIC04MjQgLTExNDYKLTY1OSAtMTE2IC0xMjYyIDQ4NyAtMTE0NiAxMTQ2IDk1IDU0NCA2MTUgOTE3IDExNDYgODI0eiIvPgo8L2c+Cjwvc3ZnPgo=");


/***/ }),

/***/ "./assets/svg/repository.svg":
/*!***********************************!*\
  !*** ./assets/svg/repository.svg ***!
  \***********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgRepository(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "512.000000pt",
    height: "512.000000pt",
    viewBox: "0 0 512.000000 512.000000",
    preserveAspectRatio: "xMidYMid meet",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
    fill: "#000000",
    stroke: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M1125 4674 c-171 -41 -336 -174 -414 -334 -76 -155 -72 -61 -69 -1658 3 -1326 4 -1431 21 -1485 64 -216 204 -386 392 -477 151 -74 149 -74 638 -78 l437 -3 0 215 0 215 -417 3 -418 3 -51 27 c-234 123 -232 454 4 570 l67 33 197 3 198 4 0 209 0 209 -215 0 -215 0 0 1070 0 1070 1385 0 1385 0 0 -1070 0 -1070 -105 0 -105 0 0 -210 0 -210 105 0 105 0 0 -320 0 -320 -317 -2 -318 -3 -3 -212 -2 -213 441 0 c321 0 453 3 483 12 53 16 118 81 134 134 9 32 12 456 12 1888 0 1647 -2 1851 -16 1884 -19 47 -58 88 -106 113 -36 18 -81 19 -1605 18 -1332 -1 -1577 -3 -1628 -15z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M1490 3840 l0 -210 215 0 215 0 0 210 0 210 -215 0 -215 0 0 -210z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M1490 3200 l0 -210 215 0 215 0 0 210 0 210 -215 0 -215 0 0 -210z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M2355 2036 c-231 -288 -421 -529 -423 -535 -3 -8 89 -11 312 -11 l316 0 0 -640 0 -640 213 2 212 3 3 638 2 637 315 0 c173 0 315 3 315 6 0 5 -803 1016 -839 1057 -4 4 -196 -229 -426 -517z"
  }))));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgRepository);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iNTEyLjAwMDAwMHB0IiBoZWlnaHQ9IjUxMi4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDUxMi4wMDAwMDAgNTEyLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgoKPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsNTEyLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIKZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIj4KPHBhdGggZD0iTTExMjUgNDY3NCBjLTE3MSAtNDEgLTMzNiAtMTc0IC00MTQgLTMzNCAtNzYgLTE1NSAtNzIgLTYxIC02OQotMTY1OCAzIC0xMzI2IDQgLTE0MzEgMjEgLTE0ODUgNjQgLTIxNiAyMDQgLTM4NiAzOTIgLTQ3NyAxNTEgLTc0IDE0OSAtNzQKNjM4IC03OCBsNDM3IC0zIDAgMjE1IDAgMjE1IC00MTcgMyAtNDE4IDMgLTUxIDI3IGMtMjM0IDEyMyAtMjMyIDQ1NCA0IDU3MApsNjcgMzMgMTk3IDMgMTk4IDQgMCAyMDkgMCAyMDkgLTIxNSAwIC0yMTUgMCAwIDEwNzAgMCAxMDcwIDEzODUgMCAxMzg1IDAgMAotMTA3MCAwIC0xMDcwIC0xMDUgMCAtMTA1IDAgMCAtMjEwIDAgLTIxMCAxMDUgMCAxMDUgMCAwIC0zMjAgMCAtMzIwIC0zMTcgLTIKLTMxOCAtMyAtMyAtMjEyIC0yIC0yMTMgNDQxIDAgYzMyMSAwIDQ1MyAzIDQ4MyAxMiA1MyAxNiAxMTggODEgMTM0IDEzNCA5IDMyCjEyIDQ1NiAxMiAxODg4IDAgMTY0NyAtMiAxODUxIC0xNiAxODg0IC0xOSA0NyAtNTggODggLTEwNiAxMTMgLTM2IDE4IC04MSAxOQotMTYwNSAxOCAtMTMzMiAtMSAtMTU3NyAtMyAtMTYyOCAtMTV6Ii8+CjxwYXRoIGQ9Ik0xNDkwIDM4NDAgbDAgLTIxMCAyMTUgMCAyMTUgMCAwIDIxMCAwIDIxMCAtMjE1IDAgLTIxNSAwIDAgLTIxMHoiLz4KPHBhdGggZD0iTTE0OTAgMzIwMCBsMCAtMjEwIDIxNSAwIDIxNSAwIDAgMjEwIDAgMjEwIC0yMTUgMCAtMjE1IDAgMCAtMjEweiIvPgo8cGF0aCBkPSJNMjM1NSAyMDM2IGMtMjMxIC0yODggLTQyMSAtNTI5IC00MjMgLTUzNSAtMyAtOCA4OSAtMTEgMzEyIC0xMQpsMzE2IDAgMCAtNjQwIDAgLTY0MCAyMTMgMiAyMTIgMyAzIDYzOCAyIDYzNyAzMTUgMCBjMTczIDAgMzE1IDMgMzE1IDYgMCA1Ci04MDMgMTAxNiAtODM5IDEwNTcgLTQgNCAtMTk2IC0yMjkgLTQyNiAtNTE3eiIvPgo8L2c+Cjwvc3ZnPgo=");


/***/ }),

/***/ "./assets/svg/star.svg":
/*!*****************************!*\
  !*** ./assets/svg/star.svg ***!
  \*****************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgStar(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    height: "511pt",
    viewBox: "0 -10 511.98685 511",
    width: "511pt",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0",
    fill: "#ffc107"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgStar);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMXB0IiB2aWV3Qm94PSIwIC0xMCA1MTEuOTg2ODUgNTExIiB3aWR0aD0iNTExcHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxwYXRoDQogICAgZD0ibTUxMC42NTIzNDQgMTg1LjkwMjM0NGMtMy4zNTE1NjMtMTAuMzY3MTg4LTEyLjU0Njg3NS0xNy43MzA0NjktMjMuNDI1NzgyLTE4LjcxMDkzOGwtMTQ3Ljc3MzQzNy0xMy40MTc5NjgtNTguNDMzNTk0LTEzNi43Njk1MzJjLTQuMzA4NTkzLTEwLjAyMzQzNy0xNC4xMjEwOTMtMTYuNTExNzE4LTI1LjAyMzQzNy0xNi41MTE3MThzLTIwLjcxNDg0NCA2LjQ4ODI4MS0yNS4wMjM0MzggMTYuNTM1MTU2bC01OC40MzM1OTQgMTM2Ljc0NjA5NC0xNDcuNzk2ODc0IDEzLjQxNzk2OGMtMTAuODU5Mzc2IDEuMDAzOTA2LTIwLjAzMTI1IDguMzQzNzUtMjMuNDAyMzQ0IDE4LjcxMDkzOC0zLjM3MTA5NCAxMC4zNjcxODctLjI1NzgxMyAyMS43MzgyODEgNy45NTcwMzEgMjguOTA2MjVsMTExLjY5OTIxOSA5Ny45NjA5MzctMzIuOTM3NSAxNDUuMDg5ODQ0Yy0yLjQxMDE1NiAxMC42Njc5NjkgMS43MzA0NjggMjEuNjk1MzEzIDEwLjU4MjAzMSAyOC4wOTM3NSA0Ljc1NzgxMyAzLjQzNzUgMTAuMzI0MjE5IDUuMTg3NSAxNS45Mzc1IDUuMTg3NSA0LjgzOTg0NCAwIDkuNjQwNjI1LTEuMzA0Njg3IDEzLjk0OTIxOS0zLjg4MjgxM2wxMjcuNDY4NzUtNzYuMTgzNTkzIDEyNy40MjE4NzUgNzYuMTgzNTkzYzkuMzI0MjE5IDUuNjA5Mzc2IDIxLjA3ODEyNSA1LjA5NzY1NyAyOS45MTAxNTYtMS4zMDQ2ODcgOC44NTU0NjktNi40MTc5NjkgMTIuOTkyMTg3LTE3LjQ0OTIxOSAxMC41ODIwMzEtMjguMDkzNzVsLTMyLjkzNzUtMTQ1LjA4OTg0NCAxMTEuNjk5MjE5LTk3Ljk0MTQwNmM4LjIxNDg0NC03LjE4NzUgMTEuMzUxNTYzLTE4LjUzOTA2MyA3Ljk4MDQ2OS0yOC45MjU3ODF6bTAgMCINCiAgICBmaWxsPSIjZmZjMTA3IiAvPg0KPC9zdmc+DQo=");


/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app */ "./app/app.tsx");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "../../../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var _app_repostore_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/repostore.slice */ "./app/repostore.slice.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\GitHub\\pruebas\\hellobuild\\apps\\front\\src\\main.tsx";







const store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__["configureStore"])({
  reducer: {
    [_app_repostore_slice__WEBPACK_IMPORTED_MODULE_5__["REPOSTORE_FEATURE_KEY"]]: _app_repostore_slice__WEBPACK_IMPORTED_MODULE_5__["repostoreReducer"]
  },
  // Additional middleware can be passed to this array
  middleware: [...Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__["getDefaultMiddleware"])()],
  devTools: "development" !== 'production',
  // Optional Redux store enhancers
  enhancers: []
});
react_dom__WEBPACK_IMPORTED_MODULE_1__["render"]( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
  store: store,
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["StrictMode"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_app_app__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 24,
  columnNumber: 3
}, undefined), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\GitHub\pruebas\hellobuild\apps\front\src\main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map