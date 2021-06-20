(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
/* I could use one json structure for the spec and change it dynamically when the user changes
the chart. However, having a separate file to define each structure is a lot easier and significantly more
readable.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsBar = void 0;
exports.commentsBar = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    description: "Bar chart for total number of comments for stock sentiment",
    height: "container",
    width: "container",
    data: {
        values: []
    },
    mark: "bar",
    encoding: {
        x: {
            field: "ticker",
            type: "nominal",
            sort: {
                field: "no_of_comments",
                order: "descending"
            }
        },
        y: {
            field: "no_of_comments",
            type: "quantitative"
        },
        tooltip: [
            {
                field: "sentiment_score",
                type: "quantitative",
                title: "Sentiment"
            }
        ],
        color: {
            field: "sentiment",
            scale: {
                range: ["#D73A52", "#32A852"]
            }
        }
    },
};

},{}]},{},[1]);
