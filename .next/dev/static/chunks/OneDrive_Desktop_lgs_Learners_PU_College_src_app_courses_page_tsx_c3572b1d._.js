(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/lgs/Learners_PU_College/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/lgs/Learners_PU_College/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/lgs/Learners_PU_College/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/lgs/Learners_PU_College/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/lgs/Learners_PU_College/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$animejs$2f$lib$2f$anime$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/lgs/Learners_PU_College/node_modules/animejs/lib/anime.es.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const Courses = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(101);
    if ($[0] !== "beef35a8dcdd56171de0967f67c58ad3b9d17c7c306659286f8f247867499c1d") {
        for(let $i = 0; $i < 101; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "beef35a8dcdd56171de0967f67c58ad3b9d17c7c306659286f8f247867499c1d";
    }
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedCourse, setSelectedCourse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_temp2, t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = (course)=>{
            setSelectedCourse(course);
            setModalOpen(true);
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const openAdmissionForm = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ()=>{
            setModalOpen(false);
            setSelectedCourse(null);
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const closeAdmissionModal = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = (e)=>{
            e.preventDefault();
            alert("Application submitted successfully! We will contact you soon.");
            closeAdmissionModal();
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleSubmit = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "pt-24 pb-12 bg-gradient-to-br from-blue-50 to-blue-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-display text-5xl font-bold text-blue-900 mb-6",
                            children: "Courses & Admissions"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 62,
                            columnNumber: 171
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-gray-600 max-w-3xl mx-auto",
                            children: "Explore our comprehensive range of courses designed to excel in competitive examinations and build strong foundations for your academic journey."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 62,
                            columnNumber: 267
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 62,
                    columnNumber: 142
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                lineNumber: 62,
                columnNumber: 86
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-display text-4xl font-bold text-blue-900 mb-4",
                    children: "Math Foundation Course"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 69,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "Build a strong mathematical foundation essential for all competitive examinations and advanced studies."
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 69,
                    columnNumber: 139
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-96",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/resources/iit-jee-study.jpg",
                alt: "Math Foundation Course",
                fill: true,
                className: "rounded-2xl shadow-2xl object-cover"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                lineNumber: 76,
                columnNumber: 48
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-display text-2xl font-semibold text-blue-900 mb-4",
            children: "Course Highlights"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-5 h-5 text-orange-500 mr-3",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fillRule: "evenodd",
                        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                        clipRule: "evenodd"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                        lineNumber: 90,
                        columnNumber: 131
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 90,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-700",
                    children: "Comprehensive coverage of mathematical concepts"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 90,
                    columnNumber: 321
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-5 h-5 text-orange-500 mr-3",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fillRule: "evenodd",
                        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                        clipRule: "evenodd"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                        lineNumber: 97,
                        columnNumber: 131
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 97,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-700",
                    children: "Problem-solving techniques and shortcuts"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 97,
                    columnNumber: 321
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-5 h-5 text-orange-500 mr-3",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fillRule: "evenodd",
                        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                        clipRule: "evenodd"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                        lineNumber: 104,
                        columnNumber: 132
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 104,
                    columnNumber: 46
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-700",
                    children: "Regular assessments and progress tracking"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 104,
                    columnNumber: 322
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 104,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-blue-50 p-6 rounded-2xl",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        t8,
                        t9,
                        t10,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5 text-orange-500 mr-3",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fillRule: "evenodd",
                                        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                        clipRule: "evenodd"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 220
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 134
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-700",
                                    children: "Individual attention and doubt clearing"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 410
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 111,
                            columnNumber: 99
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 111,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 111,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-50 p-4 rounded-lg text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-2xl font-bold text-blue-900",
                    children: "6 Months"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 118,
                    columnNumber: 66
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-gray-600",
                    children: "Duration"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 118,
                    columnNumber: 130
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-20 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    t5,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-2 gap-12 items-center",
                        children: [
                            t6,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    t11,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-4",
                                        children: [
                                            t12,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gray-50 p-4 rounded-lg text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-blue-900",
                                                        children: "₹45,000"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 303
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: "Course Fee"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 366
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                lineNumber: 125,
                                                columnNumber: 248
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 200
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>openAdmissionForm("math-foundation"),
                                        className: "w-full bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300",
                                        children: "Apply Now"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 433
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                lineNumber: 125,
                                columnNumber: 168
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                        lineNumber: 125,
                        columnNumber: 107
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                lineNumber: 125,
                columnNumber: 47
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-display text-4xl font-bold text-blue-900 mb-4",
                    children: "Complete Course Catalog"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 132,
                    columnNumber: 46
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "Choose from our comprehensive range of courses designed for various competitive examinations."
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 132,
                    columnNumber: 141
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 relative w-full h-48",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/resources/neet-prep.jpg",
                alt: "NEET Course",
                fill: true,
                className: "object-cover rounded-lg"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                lineNumber: 139,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 flex items-center justify-between mb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-display text-xl font-semibold text-blue-900",
                    children: "NEET Preparation"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 146,
                    columnNumber: 72
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium",
                    children: "Medical"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 146,
                    columnNumber: 158
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600 text-sm",
            children: "Comprehensive preparation for medical entrance examinations with expert faculty and advanced lab facilities."
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500",
                            children: "Duration:"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 160,
                            columnNumber: 64
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium text-gray-700 block",
                            children: "2 Years"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 160,
                            columnNumber: 112
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 160,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500",
                            children: "Success Rate:"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 160,
                            columnNumber: 187
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium text-orange-500 block",
                            children: "92%"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 160,
                            columnNumber: 239
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 160,
                    columnNumber: 182
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 160,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    let t19;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "course-card bg-white rounded-2xl p-6 shadow-lg",
            children: [
                t15,
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        t17,
                        t18,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t pt-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-bold text-blue-900",
                                        children: "₹1,50,000"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 204
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>openAdmissionForm("neet"),
                                        className: "bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors",
                                        children: "Apply Now"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 270
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                lineNumber: 167,
                                columnNumber: 153
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 167,
                            columnNumber: 122
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 167,
                    columnNumber: 85
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t19;
    } else {
        t19 = $[20];
    }
    let t20;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 relative w-full h-48",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/resources/iit-jee-study.jpg",
                alt: "IIT-JEE Course",
                fill: true,
                className: "object-cover rounded-lg"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                lineNumber: 174,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 174,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    let t21;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 flex items-center justify-between mb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-display text-xl font-semibold text-blue-900",
                    children: "IIT-JEE Preparation"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 181,
                    columnNumber: 72
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium",
                    children: "Engineering"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 181,
                    columnNumber: 161
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t21;
    } else {
        t21 = $[22];
    }
    let t22;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600 text-sm",
            children: "Rigorous training for engineering entrance exams with focus on problem-solving and analytical skills."
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 188,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t22;
    } else {
        t22 = $[23];
    }
    let t23;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500",
                            children: "Duration:"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 195,
                            columnNumber: 64
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium text-gray-700 block",
                            children: "2 Years"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 195,
                            columnNumber: 112
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 195,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500",
                            children: "Success Rate:"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 195,
                            columnNumber: 187
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium text-orange-500 block",
                            children: "89%"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 195,
                            columnNumber: 239
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 195,
                    columnNumber: 182
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t23;
    } else {
        t23 = $[24];
    }
    let t24;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "course-card bg-white rounded-2xl p-6 shadow-lg",
            children: [
                t20,
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        t22,
                        t23,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t pt-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-bold text-blue-900",
                                        children: "₹1,75,000"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 202,
                                        columnNumber: 204
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>openAdmissionForm("iit-jee"),
                                        className: "bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors",
                                        children: "Apply Now"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 202,
                                        columnNumber: 270
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                lineNumber: 202,
                                columnNumber: 153
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 202,
                            columnNumber: 122
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 202,
                    columnNumber: 85
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t24;
    } else {
        t24 = $[25];
    }
    let t25;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 relative w-full h-48",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/resources/sat-classroom.jpg",
                alt: "CET Course",
                fill: true,
                className: "object-cover rounded-lg"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                lineNumber: 209,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t25;
    } else {
        t25 = $[26];
    }
    let t26;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 flex items-center justify-between mb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-display text-xl font-semibold text-blue-900",
                    children: "CET Preparation"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 216,
                    columnNumber: 72
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium",
                    children: "State Level"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 216,
                    columnNumber: 157
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t26;
    } else {
        t26 = $[27];
    }
    let t27;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600 text-sm",
            children: "Specialized coaching for Common Entrance Test with state-specific curriculum and pattern."
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t27;
    } else {
        t27 = $[28];
    }
    let t28;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500",
                            children: "Duration:"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 230,
                            columnNumber: 64
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium text-gray-700 block",
                            children: "1-2 Years"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 230,
                            columnNumber: 112
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 230,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500",
                            children: "Success Rate:"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 230,
                            columnNumber: 189
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium text-orange-500 block",
                            children: "94%"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 230,
                            columnNumber: 241
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 230,
                    columnNumber: 184
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t28;
    } else {
        t28 = $[29];
    }
    let t29;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "course-card bg-white rounded-2xl p-6 shadow-lg",
            children: [
                t25,
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        t27,
                        t28,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t pt-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-bold text-blue-900",
                                        children: "₹1,25,000"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 204
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>openAdmissionForm("cet"),
                                        className: "bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors",
                                        children: "Apply Now"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 270
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                lineNumber: 237,
                                columnNumber: 153
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 237,
                            columnNumber: 122
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 237,
                    columnNumber: 85
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 237,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t29;
    } else {
        t29 = $[30];
    }
    let t30;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 relative w-full h-48",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/resources/sat-classroom.jpg",
                alt: "SAT Course",
                fill: true,
                className: "object-cover rounded-lg"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                lineNumber: 244,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t30;
    } else {
        t30 = $[31];
    }
    let t31;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 flex items-center justify-between mb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-display text-xl font-semibold text-blue-900",
                    children: "SAT Preparation"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 251,
                    columnNumber: 72
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium",
                    children: "International"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 251,
                    columnNumber: 157
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 251,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t31;
    } else {
        t31 = $[32];
    }
    let t32;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600 text-sm",
            children: "Global standard test preparation for undergraduate admissions in international universities."
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 258,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = t32;
    } else {
        t32 = $[33];
    }
    let t33;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500",
                            children: "Duration:"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 265,
                            columnNumber: 64
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium text-gray-700 block",
                            children: "6-12 Months"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 265,
                            columnNumber: 112
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 265,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500",
                            children: "Success Rate:"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 265,
                            columnNumber: 191
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium text-orange-500 block",
                            children: "96%"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 265,
                            columnNumber: 243
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 265,
                    columnNumber: 186
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 265,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t33;
    } else {
        t33 = $[34];
    }
    let t34;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "course-card bg-white rounded-2xl p-6 shadow-lg",
            children: [
                t30,
                t31,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        t32,
                        t33,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t pt-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-bold text-blue-900",
                                        children: "₹80,000"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 204
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>openAdmissionForm("sat"),
                                        className: "bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors",
                                        children: "Apply Now"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 268
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                lineNumber: 272,
                                columnNumber: 153
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 272,
                            columnNumber: 122
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 272,
                    columnNumber: 85
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 272,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t34;
    } else {
        t34 = $[35];
    }
    let t35;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 relative w-full h-48",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/resources/science-lab.jpg",
                alt: "Foundation Course",
                fill: true,
                className: "object-cover rounded-lg"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                lineNumber: 279,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 279,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = t35;
    } else {
        t35 = $[36];
    }
    let t36;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 flex items-center justify-between mb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-display text-xl font-semibold text-blue-900",
                    children: "Foundation Course"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 286,
                    columnNumber: 72
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium",
                    children: "Class 8-10"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 286,
                    columnNumber: 159
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 286,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t36;
    } else {
        t36 = $[37];
    }
    let t37;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600 text-sm",
            children: "Early preparation program for students from classes 8-10 to build strong conceptual foundations."
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 293,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t37;
    } else {
        t37 = $[38];
    }
    let t38;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500",
                            children: "Duration:"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 300,
                            columnNumber: 64
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium text-gray-700 block",
                            children: "1-3 Years"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 300,
                            columnNumber: 112
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 300,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500",
                            children: "Success Rate:"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 300,
                            columnNumber: 189
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium text-orange-500 block",
                            children: "98%"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 300,
                            columnNumber: 241
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 300,
                    columnNumber: 184
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 300,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = t38;
    } else {
        t38 = $[39];
    }
    let t39;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "course-card bg-white rounded-2xl p-6 shadow-lg",
            children: [
                t35,
                t36,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        t37,
                        t38,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t pt-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-bold text-blue-900",
                                        children: "₹95,000"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 307,
                                        columnNumber: 204
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>openAdmissionForm("foundation"),
                                        className: "bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors",
                                        children: "Apply Now"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 307,
                                        columnNumber: 268
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                lineNumber: 307,
                                columnNumber: 153
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 307,
                            columnNumber: 122
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 307,
                    columnNumber: 85
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 307,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t39;
    } else {
        t39 = $[40];
    }
    let t40;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 relative w-full h-48",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/resources/library-students.jpg",
                alt: "Crash Course",
                fill: true,
                className: "object-cover rounded-lg"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                lineNumber: 314,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 314,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t40;
    } else {
        t40 = $[41];
    }
    let t41;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 flex items-center justify-between mb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-display text-xl font-semibold text-blue-900",
                    children: "Crash Course"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 321,
                    columnNumber: 72
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium",
                    children: "Intensive"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 321,
                    columnNumber: 154
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 321,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = t41;
    } else {
        t41 = $[42];
    }
    let t42;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600 text-sm",
            children: "Intensive revision program for last-minute preparation and quick concept review."
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 328,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = t42;
    } else {
        t42 = $[43];
    }
    let t43;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500",
                            children: "Duration:"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 335,
                            columnNumber: 64
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium text-gray-700 block",
                            children: "3 Months"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 335,
                            columnNumber: 112
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 335,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500",
                            children: "Success Rate:"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 335,
                            columnNumber: 188
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium text-orange-500 block",
                            children: "85%"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 335,
                            columnNumber: 240
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 335,
                    columnNumber: 183
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 335,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t43;
    } else {
        t43 = $[44];
    }
    let t44;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-20 bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    t14,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: [
                            t19,
                            t24,
                            t29,
                            t34,
                            t39,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "course-card bg-white rounded-2xl p-6 shadow-lg",
                                children: [
                                    t40,
                                    t41,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            t42,
                                            t43,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-t pt-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg font-bold text-blue-900",
                                                            children: "₹35,000"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 386
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>openAdmissionForm("crash"),
                                                            className: "bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors",
                                                            children: "Apply Now"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 450
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 335
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                lineNumber: 342,
                                                columnNumber: 304
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 342,
                                        columnNumber: 267
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                lineNumber: 342,
                                columnNumber: 193
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                        lineNumber: 342,
                        columnNumber: 110
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                lineNumber: 342,
                columnNumber: 49
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 342,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = t44;
    } else {
        t44 = $[45];
    }
    let t45;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-display text-4xl font-bold text-blue-900 mb-4",
                    children: "Admission Process"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 349,
                    columnNumber: 46
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "Simple and transparent admission process to help you get started on your academic journey."
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 349,
                    columnNumber: 135
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 349,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[46] = t45;
    } else {
        t45 = $[46];
    }
    let t46;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "step-indicator bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold relative after:content-[''] after:absolute after:top-1/2 after:left-full after:w-full after:h-0.5 after:bg-gray-200 after:hidden md:after:block last:after:hidden",
                    children: "1"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 356,
                    columnNumber: 40
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-display text-lg font-semibold text-blue-900 mb-2",
                    children: "Online Application"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 356,
                    columnNumber: 353
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 text-sm",
                    children: "Fill out the online application form with basic details and course preferences."
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 356,
                    columnNumber: 446
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 356,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = t46;
    } else {
        t46 = $[47];
    }
    let t47;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "step-indicator bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold relative after:content-[''] after:absolute after:top-1/2 after:left-full after:w-full after:h-0.5 after:bg-gray-200 after:hidden md:after:block last:after:hidden",
                    children: "2"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 363,
                    columnNumber: 40
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-display text-lg font-semibold text-blue-900 mb-2",
                    children: "Entrance Test"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 363,
                    columnNumber: 353
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 text-sm",
                    children: "Appear for our aptitude test to assess your current knowledge and learning potential."
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 363,
                    columnNumber: 441
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 363,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = t47;
    } else {
        t47 = $[48];
    }
    let t48;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "step-indicator bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold relative after:content-[''] after:absolute after:top-1/2 after:left-full after:w-full after:h-0.5 after:bg-gray-200 after:hidden md:after:block last:after:hidden",
                    children: "3"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 370,
                    columnNumber: 40
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-display text-lg font-semibold text-blue-900 mb-2",
                    children: "Counseling"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 370,
                    columnNumber: 353
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 text-sm",
                    children: "Personal counseling session to discuss course selection and career goals."
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 370,
                    columnNumber: 438
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 370,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = t48;
    } else {
        t48 = $[49];
    }
    let t49;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-4 gap-8 mb-12",
            children: [
                t46,
                t47,
                t48,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "step-indicator bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold",
                            children: "4"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 377,
                            columnNumber: 104
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-display text-lg font-semibold text-blue-900 mb-2",
                            children: "Admission"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 377,
                            columnNumber: 255
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-sm",
                            children: "Complete the admission formalities and begin your journey with us."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 377,
                            columnNumber: 339
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 377,
                    columnNumber: 75
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 377,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = t49;
    } else {
        t49 = $[50];
    }
    let t50;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-display text-2xl font-semibold text-blue-900 mb-6 text-center",
            children: "Eligibility Criteria"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = t50;
    } else {
        t50 = $[51];
    }
    let t51;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold text-lg text-blue-900 mb-3",
            children: "Academic Requirements"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 391,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[52] = t51;
    } else {
        t51 = $[52];
    }
    let t52;
    let t53;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t51,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2 text-gray-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Minimum 60% in previous examination"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 399,
                            columnNumber: 61
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Science stream (Physics, Chemistry, Mathematics/Biology)"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 399,
                            columnNumber: 107
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Valid transfer certificate from previous institution"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 399,
                            columnNumber: 174
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Age limit: 14-18 years for regular courses"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 399,
                            columnNumber: 237
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 399,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 399,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold text-lg text-blue-900 mb-3",
            children: "Required Documents"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 400,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[53] = t52;
        $[54] = t53;
    } else {
        t52 = $[53];
        t53 = $[54];
    }
    let t54;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-20 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    t45,
                    t49,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-50 rounded-2xl p-8",
                        children: [
                            t50,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-8",
                                children: [
                                    t52,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            t53,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 text-gray-600",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "• Birth certificate or Aadhar card"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                        lineNumber: 409,
                                                        columnNumber: 260
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "• Previous academic mark sheets"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                        lineNumber: 409,
                                                        columnNumber: 303
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "• Passport size photographs (4 copies)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                        lineNumber: 409,
                                                        columnNumber: 343
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "• Parent/guardian ID proof"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                        lineNumber: 409,
                                                        columnNumber: 390
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                lineNumber: 409,
                                                columnNumber: 220
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 409,
                                        columnNumber: 210
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                lineNumber: 409,
                                columnNumber: 162
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                        lineNumber: 409,
                        columnNumber: 113
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                lineNumber: 409,
                columnNumber: 47
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 409,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[55] = t54;
    } else {
        t54 = $[55];
    }
    let t55;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-display text-4xl font-bold text-blue-900 mb-4",
                    children: "Rules & Regulations"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 416,
                    columnNumber: 46
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "Clear guidelines to ensure a productive and disciplined learning environment for all students."
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 416,
                    columnNumber: 141
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 416,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = t55;
    } else {
        t55 = $[56];
    }
    let t56;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-semibold text-lg text-blue-900 mb-3",
            children: "Attendance Policy"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 423,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[57] = t56;
    } else {
        t56 = $[57];
    }
    let t57;
    let t58;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t56,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2 text-gray-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Minimum 85% attendance required"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 431,
                            columnNumber: 61
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Leave application must be submitted in advance"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 431,
                            columnNumber: 103
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Medical leave requires proper documentation"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 431,
                            columnNumber: 160
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Regular attendance monitoring and reporting"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 431,
                            columnNumber: 214
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 431,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 431,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-semibold text-lg text-blue-900 mb-3",
            children: "Academic Integrity"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 432,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[58] = t57;
        $[59] = t58;
    } else {
        t57 = $[58];
        t58 = $[59];
    }
    let t59;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t57,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t58,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2 text-gray-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "• Zero tolerance for plagiarism and cheating"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                    lineNumber: 441,
                                    columnNumber: 93
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "• Original work submission mandatory"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                    lineNumber: 441,
                                    columnNumber: 146
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "• Fair assessment practices"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                    lineNumber: 441,
                                    columnNumber: 191
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "• Ethical conduct in all examinations"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                    lineNumber: 441,
                                    columnNumber: 227
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 441,
                            columnNumber: 53
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 441,
                    columnNumber: 43
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 441,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[60] = t59;
    } else {
        t59 = $[60];
    }
    let t60;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-semibold text-lg text-blue-900 mb-3",
            children: "Code of Conduct"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 448,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[61] = t60;
    } else {
        t60 = $[61];
    }
    let t61;
    let t62;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t60,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2 text-gray-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Respectful behavior towards faculty and peers"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 456,
                            columnNumber: 61
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Proper uniform and dress code"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 456,
                            columnNumber: 117
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• No use of mobile phones during classes"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 456,
                            columnNumber: 157
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Maintain discipline in school premises"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 456,
                            columnNumber: 206
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 456,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 456,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-semibold text-lg text-blue-900 mb-3",
            children: "Fee Regulations"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 457,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[62] = t61;
        $[63] = t62;
    } else {
        t61 = $[62];
        t62 = $[63];
    }
    let t63;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-2 gap-8",
            children: [
                t59,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        t61,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                t62,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-gray-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Fee payment within due dates"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                            lineNumber: 466,
                                            columnNumber: 141
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Late payment charges applicable"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                            lineNumber: 466,
                                            columnNumber: 180
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Refund policy as per institution norms"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                            lineNumber: 466,
                                            columnNumber: 222
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Installment options available for eligible students"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                            lineNumber: 466,
                                            columnNumber: 271
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                    lineNumber: 466,
                                    columnNumber: 101
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 466,
                            columnNumber: 91
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 466,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 466,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[64] = t63;
    } else {
        t63 = $[64];
    }
    let t64;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-20 bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    t55,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl p-8 shadow-lg",
                        children: [
                            t63,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 p-6 bg-blue-50 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-lg text-blue-900 mb-3",
                                        children: "Disciplinary Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 473,
                                        columnNumber: 215
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mb-3",
                                        children: "Any violation of school rules and regulations may result in disciplinary action including warning, suspension, or expulsion depending on the severity of the offense. Parents will be notified immediately in case of any serious disciplinary issues."
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 473,
                                        columnNumber: 297
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: "The school reserves the right to modify rules and regulations as necessary for the smooth functioning of the institution and the welfare of all students."
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 473,
                                        columnNumber: 581
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                lineNumber: 473,
                                columnNumber: 167
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                        lineNumber: 473,
                        columnNumber: 110
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                lineNumber: 473,
                columnNumber: 49
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 473,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[65] = t64;
    } else {
        t64 = $[65];
    }
    let t65;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-display text-4xl font-bold text-blue-900 mb-4",
                    children: "Scholarship Programs"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 480,
                    columnNumber: 46
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "Merit-based and need-based scholarships to support deserving students in their academic journey."
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 480,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 480,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[66] = t65;
    } else {
        t65 = $[66];
    }
    let t66;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-8 h-8",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 487,
                            columnNumber: 219
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                        lineNumber: 487,
                        columnNumber: 154
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 487,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-display text-xl font-semibold text-blue-900 mb-2",
                    children: "Merit Scholarship"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 487,
                    columnNumber: 588
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 487,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[67] = t66;
    } else {
        t66 = $[67];
    }
    let t67;
    if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600 text-sm",
            children: "Awarded to students with exceptional academic performance and competitive exam scores."
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 494,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[68] = t67;
    } else {
        t67 = $[68];
    }
    let t68;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-600 text-sm",
                    children: "Scholarship:"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 501,
                    columnNumber: 49
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-orange-500",
                    children: "50-100%"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 501,
                    columnNumber: 108
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 501,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[69] = t68;
    } else {
        t68 = $[69];
    }
    let t69;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t68,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-600 text-sm",
                            children: "Eligibility:"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 508,
                            columnNumber: 81
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-gray-700",
                            children: "95%+ Marks"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 508,
                            columnNumber: 140
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 508,
                    columnNumber: 43
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 508,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[70] = t69;
    } else {
        t69 = $[70];
    }
    let t70;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t70 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "scholarship-card rounded-2xl p-6 border border-gray-100",
            children: [
                t66,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        t67,
                        t69,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3 border-t",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "text-xs text-gray-600 space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• Based on entrance test performance"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 515,
                                        columnNumber: 205
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• Academic record consideration"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 515,
                                        columnNumber: 250
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• Personal interview assessment"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 515,
                                        columnNumber: 290
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                lineNumber: 515,
                                columnNumber: 157
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 515,
                            columnNumber: 126
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 515,
                    columnNumber: 89
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 515,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[71] = t70;
    } else {
        t70 = $[71];
    }
    let t71;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-8 h-8",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 522,
                            columnNumber: 220
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                        lineNumber: 522,
                        columnNumber: 155
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 522,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-display text-xl font-semibold text-blue-900 mb-2",
                    children: "Need-Based Scholarship"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 522,
                    columnNumber: 392
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 522,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[72] = t71;
    } else {
        t71 = $[72];
    }
    let t72;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600 text-sm",
            children: "Financial assistance for deserving students from economically weaker backgrounds."
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 529,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[73] = t72;
    } else {
        t72 = $[73];
    }
    let t73;
    if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-600 text-sm",
                    children: "Scholarship:"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 536,
                    columnNumber: 49
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-orange-500",
                    children: "25-75%"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 536,
                    columnNumber: 108
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 536,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[74] = t73;
    } else {
        t73 = $[74];
    }
    let t74;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t73,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-600 text-sm",
                            children: "Eligibility:"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 543,
                            columnNumber: 81
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-gray-700",
                            children: "Income < \u20B95L"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 543,
                            columnNumber: 140
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 543,
                    columnNumber: 43
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 543,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[75] = t74;
    } else {
        t74 = $[75];
    }
    let t75;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "scholarship-card rounded-2xl p-6 border border-gray-100",
            children: [
                t71,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        t72,
                        t74,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3 border-t",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "text-xs text-gray-600 space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• Family income verification"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 550,
                                        columnNumber: 205
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• Academic performance review"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 550,
                                        columnNumber: 242
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• Personal circumstances assessment"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 550,
                                        columnNumber: 280
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                lineNumber: 550,
                                columnNumber: 157
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 550,
                            columnNumber: 126
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 550,
                    columnNumber: 89
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 550,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[76] = t75;
    } else {
        t75 = $[76];
    }
    let t76;
    if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-8 h-8",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 557,
                            columnNumber: 221
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                        lineNumber: 557,
                        columnNumber: 156
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 557,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-display text-xl font-semibold text-blue-900 mb-2",
                    children: "Sports Scholarship"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 557,
                    columnNumber: 739
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 557,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[77] = t76;
    } else {
        t76 = $[77];
    }
    let t77;
    if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600 text-sm",
            children: "Recognition and support for students with exceptional athletic achievements and potential."
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 564,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[78] = t77;
    } else {
        t77 = $[78];
    }
    let t78;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-600 text-sm",
                    children: "Scholarship:"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 571,
                    columnNumber: 49
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-orange-500",
                    children: "30-60%"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 571,
                    columnNumber: 108
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 571,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[79] = t78;
    } else {
        t78 = $[79];
    }
    let t79;
    if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t78,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-600 text-sm",
                            children: "Eligibility:"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 578,
                            columnNumber: 81
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-gray-700",
                            children: "State/National Level"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 578,
                            columnNumber: 140
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 578,
                    columnNumber: 43
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 578,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[80] = t79;
    } else {
        t79 = $[80];
    }
    let t80;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t80 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: [
                t70,
                t75,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "scholarship-card rounded-2xl p-6 border border-gray-100",
                    children: [
                        t76,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                t77,
                                t79,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-3 border-t",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "text-xs text-gray-600 space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Sports achievement certificates"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                lineNumber: 585,
                                                columnNumber: 273
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Physical fitness assessment"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                lineNumber: 585,
                                                columnNumber: 315
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "• Academic performance review"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                lineNumber: 585,
                                                columnNumber: 353
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 585,
                                        columnNumber: 225
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                    lineNumber: 585,
                                    columnNumber: 194
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 585,
                            columnNumber: 157
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 585,
                    columnNumber: 79
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 585,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[81] = t80;
    } else {
        t80 = $[81];
    }
    let t81;
    if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
        t81 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-display text-2xl font-semibold text-blue-900 mb-4",
            children: "How to Apply for Scholarships"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 592,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[82] = t81;
    } else {
        t81 = $[82];
    }
    let t82;
    if ($[83] === Symbol.for("react.memo_cache_sentinel")) {
        t82 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold",
                    children: "1"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 599,
                    columnNumber: 40
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "font-semibold text-blue-900 mb-2",
                    children: "Submit Application"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 599,
                    columnNumber: 174
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 text-sm",
                    children: "Fill scholarship application form with required documents"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 599,
                    columnNumber: 246
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 599,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[83] = t82;
    } else {
        t82 = $[83];
    }
    let t83;
    if ($[84] === Symbol.for("react.memo_cache_sentinel")) {
        t83 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold",
                    children: "2"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 606,
                    columnNumber: 40
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "font-semibold text-blue-900 mb-2",
                    children: "Document Verification"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 606,
                    columnNumber: 174
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 text-sm",
                    children: "Our team will verify your documents and eligibility"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 606,
                    columnNumber: 249
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 606,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[84] = t83;
    } else {
        t83 = $[84];
    }
    let t84;
    if ($[85] === Symbol.for("react.memo_cache_sentinel")) {
        t84 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-20 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    t65,
                    t80,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto",
                            children: [
                                t81,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-3 gap-6",
                                    children: [
                                        t82,
                                        t83,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold",
                                                    children: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                    lineNumber: 613,
                                                    columnNumber: 297
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold text-blue-900 mb-2",
                                                    children: "Scholarship Award"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                    lineNumber: 613,
                                                    columnNumber: 431
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 text-sm",
                                                    children: "Successful candidates will be notified and awarded"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                    lineNumber: 613,
                                                    columnNumber: 502
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                            lineNumber: 613,
                                            columnNumber: 268
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                    lineNumber: 613,
                                    columnNumber: 215
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/connect",
                                    className: "inline-block mt-6 bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300",
                                    children: "Apply for Scholarship"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                    lineNumber: 613,
                                    columnNumber: 605
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 613,
                            columnNumber: 148
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                        lineNumber: 613,
                        columnNumber: 113
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                lineNumber: 613,
                columnNumber: 47
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 613,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[85] = t84;
    } else {
        t84 = $[85];
    }
    let t85;
    if ($[86] === Symbol.for("react.memo_cache_sentinel")) {
        t85 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-display text-4xl font-bold text-blue-900 mb-4",
                    children: "Recommended Book List"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 620,
                    columnNumber: 46
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "Curated list of essential books and study materials for comprehensive exam preparation."
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 620,
                    columnNumber: 139
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 620,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[86] = t85;
    } else {
        t85 = $[86];
    }
    let t86;
    if ($[87] === Symbol.for("react.memo_cache_sentinel")) {
        t86 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-display text-lg font-semibold text-blue-900 mb-4",
            children: "Physics"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 627,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[87] = t86;
    } else {
        t86 = $[87];
    }
    let t87;
    if ($[88] === Symbol.for("react.memo_cache_sentinel")) {
        t87 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl p-6 shadow-lg",
            children: [
                t86,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2 text-sm text-gray-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "\u2022 NCERT Physics (Class 11 & 12)"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 634,
                            columnNumber: 116
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Concepts of Physics - H.C. Verma"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 634,
                            columnNumber: 165
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Fundamentals of Physics - Halliday"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 634,
                            columnNumber: 208
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Problems in General Physics - Irodov"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 634,
                            columnNumber: 253
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Understanding Physics - D.C. Pandey"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 634,
                            columnNumber: 300
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 634,
                    columnNumber: 68
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 634,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[88] = t87;
    } else {
        t87 = $[88];
    }
    let t88;
    if ($[89] === Symbol.for("react.memo_cache_sentinel")) {
        t88 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-display text-lg font-semibold text-blue-900 mb-4",
            children: "Chemistry"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 641,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[89] = t88;
    } else {
        t88 = $[89];
    }
    let t89;
    if ($[90] === Symbol.for("react.memo_cache_sentinel")) {
        t89 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl p-6 shadow-lg",
            children: [
                t88,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2 text-sm text-gray-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "\u2022 NCERT Chemistry (Class 11 & 12)"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 648,
                            columnNumber: 116
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "\u2022 Organic Chemistry - Morrison & Boyd"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 648,
                            columnNumber: 167
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Physical Chemistry - O.P. Tandon"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 648,
                            columnNumber: 222
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Inorganic Chemistry - J.D. Lee"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 648,
                            columnNumber: 265
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Modern Approach to Chemical Calculations - R.C. Mukherjee"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 648,
                            columnNumber: 306
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 648,
                    columnNumber: 68
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 648,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[90] = t89;
    } else {
        t89 = $[90];
    }
    let t90;
    if ($[91] === Symbol.for("react.memo_cache_sentinel")) {
        t90 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-display text-lg font-semibold text-blue-900 mb-4",
            children: "Mathematics"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 655,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[91] = t90;
    } else {
        t90 = $[91];
    }
    let t91;
    if ($[92] === Symbol.for("react.memo_cache_sentinel")) {
        t91 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl p-6 shadow-lg",
            children: [
                t90,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2 text-sm text-gray-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "\u2022 NCERT Mathematics (Class 11 & 12)"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 662,
                            columnNumber: 116
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Mathematics - R.D. Sharma"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 662,
                            columnNumber: 169
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Problems in Calculus - I.A. Maron"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 662,
                            columnNumber: 205
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Coordinate Geometry - S.L. Loney"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 662,
                            columnNumber: 249
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "\u2022 Higher Algebra - Hall & Knight"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 662,
                            columnNumber: 292
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 662,
                    columnNumber: 68
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 662,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[92] = t91;
    } else {
        t91 = $[92];
    }
    let t92;
    if ($[93] === Symbol.for("react.memo_cache_sentinel")) {
        t92 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-display text-lg font-semibold text-blue-900 mb-4",
            children: "Biology"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 669,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[93] = t92;
    } else {
        t92 = $[93];
    }
    let t93;
    if ($[94] === Symbol.for("react.memo_cache_sentinel")) {
        t93 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
            children: [
                t87,
                t89,
                t91,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl p-6 shadow-lg",
                    children: [
                        t92,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2 text-sm text-gray-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "\u2022 NCERT Biology (Class 11 & 12)"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                    lineNumber: 676,
                                    columnNumber: 189
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "\u2022 Trueman's Biology - Tiwari & Tyagi"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                    lineNumber: 676,
                                    columnNumber: 238
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "• Objective Biology - Dinesh"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                    lineNumber: 676,
                                    columnNumber: 292
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "• Pradeep's Biology"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                    lineNumber: 676,
                                    columnNumber: 329
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "\u2022 Biology - Campbell & Reece"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                    lineNumber: 676,
                                    columnNumber: 357
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 676,
                            columnNumber: 141
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 676,
                    columnNumber: 84
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 676,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[94] = t93;
    } else {
        t93 = $[94];
    }
    let t94;
    if ($[95] === Symbol.for("react.memo_cache_sentinel")) {
        t94 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-20 bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    t85,
                    t93,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-4",
                                children: "All study materials and books are provided by the institution as part of the course package."
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                lineNumber: 683,
                                columnNumber: 150
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: _temp3,
                                className: "bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300",
                                children: "Download Complete Book List"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                lineNumber: 683,
                                columnNumber: 280
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                        lineNumber: 683,
                        columnNumber: 115
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                lineNumber: 683,
                columnNumber: 49
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 683,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[95] = t94;
    } else {
        t94 = $[95];
    }
    let t95;
    if ($[96] !== modalOpen || $[97] !== selectedCourse) {
        t95 = modalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-2xl font-bold text-blue-900",
                                    children: "Admission Application"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                    lineNumber: 690,
                                    columnNumber: 281
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: closeAdmissionModal,
                                    className: "text-gray-500 hover:text-gray-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                            lineNumber: 690,
                                            columnNumber: 532
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                        lineNumber: 690,
                                        columnNumber: 453
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                    lineNumber: 690,
                                    columnNumber: 369
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 690,
                            columnNumber: 225
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "First Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 747
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "firstName",
                                                    required: true,
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 831
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                            lineNumber: 690,
                                            columnNumber: 742
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Last Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 1017
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "lastName",
                                                    required: true,
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 1100
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                            lineNumber: 690,
                                            columnNumber: 1012
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                    lineNumber: 690,
                                    columnNumber: 699
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Email *"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 1334
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    name: "email",
                                                    required: true,
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 1413
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                            lineNumber: 690,
                                            columnNumber: 1329
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Phone *"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 1596
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    name: "phone",
                                                    required: true,
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 1675
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                            lineNumber: 690,
                                            columnNumber: 1591
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                    lineNumber: 690,
                                    columnNumber: 1286
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Course Preference *"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                            lineNumber: 690,
                                            columnNumber: 1862
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            name: "course",
                                            defaultValue: selectedCourse || "",
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "neet",
                                                    children: "NEET Preparation"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 2132
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "iit-jee",
                                                    children: "IIT-JEE Preparation"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 2178
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "cet",
                                                    children: "CET Preparation"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 2230
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "sat",
                                                    children: "SAT Preparation"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 2274
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "foundation",
                                                    children: "Foundation Course"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 2318
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "crash",
                                                    children: "Crash Course"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 2371
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "math-foundation",
                                                    children: "Math Foundation"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 2414
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                            lineNumber: 690,
                                            columnNumber: 1953
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                    lineNumber: 690,
                                    columnNumber: 1857
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Current Grade/Class"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                            lineNumber: 690,
                                            columnNumber: 2490
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "grade",
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                            lineNumber: 690,
                                            columnNumber: 2581
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                    lineNumber: 690,
                                    columnNumber: 2485
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Message (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                            lineNumber: 690,
                                            columnNumber: 2747
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "message",
                                            rows: 3,
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                            lineNumber: 690,
                                            columnNumber: 2837
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                    lineNumber: 690,
                                    columnNumber: 2742
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: closeAdmissionModal,
                                            className: "mr-4 px-6 py-2 text-gray-600 hover:text-gray-800 font-medium",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                            lineNumber: 690,
                                            columnNumber: 3039
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "px-6 py-2 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors",
                                            children: "Submit Application"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                            lineNumber: 690,
                                            columnNumber: 3179
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                                    lineNumber: 690,
                                    columnNumber: 3000
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                            lineNumber: 690,
                            columnNumber: 647
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                    lineNumber: 690,
                    columnNumber: 204
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
                lineNumber: 690,
                columnNumber: 120
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 690,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0));
        $[96] = modalOpen;
        $[97] = selectedCourse;
        $[98] = t95;
    } else {
        t95 = $[98];
    }
    let t96;
    if ($[99] !== t95) {
        t96 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white",
            children: [
                t4,
                t13,
                t44,
                t54,
                t64,
                t84,
                t94,
                t95
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/lgs/Learners_PU_College/src/app/courses/page.tsx",
            lineNumber: 699,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[99] = t95;
        $[100] = t96;
    } else {
        t96 = $[100];
    }
    return t96;
};
_s(Courses, "8ut9JSSmE+aQSS2i7EzJLumDcRo=");
_c = Courses;
const __TURBOPACK__default__export__ = Courses;
function _temp(card, index) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$lgs$2f$Learners_PU_College$2f$node_modules$2f$animejs$2f$lib$2f$anime$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        targets: card,
        translateY: [
            50,
            0
        ],
        opacity: [
            0,
            1
        ],
        duration: 600,
        delay: index * 100,
        easing: "easeOutQuart"
    });
}
function _temp2() {
    const cards = document.querySelectorAll(".course-card, .scholarship-card");
    cards.forEach(_temp);
}
function _temp3() {
    return alert("Book list downloaded successfully!");
}
var _c;
__turbopack_context__.k.register(_c, "Courses");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_lgs_Learners_PU_College_src_app_courses_page_tsx_c3572b1d._.js.map