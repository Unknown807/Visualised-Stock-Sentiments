(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sentimentsBubble = void 0;
exports.sentimentsBubble = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    description: "Bar chart for stock sentiments",
    height: "container",
    width: "container",
    data: {
        values: []
    },
    mark: "point",
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
            field: "sentiment_score",
            type: "quantitative"
        },
        size: {
            field: "no_of_comments",
            type: "quantitative"
        },
        tooltip: [
            {
                field: "no_of_comments",
                type: "quantitative",
                title: "Comments"
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
