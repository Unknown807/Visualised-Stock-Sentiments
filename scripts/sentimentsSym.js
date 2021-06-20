(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
// Easier to see data which has sentiments close to 0 (and thus not that visible on the bar graph)
Object.defineProperty(exports, "__esModule", { value: true });
exports.sentimentsSym = void 0;
exports.sentimentsSym = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    description: "Bar chart for stock sentiments",
    height: "container",
    width: "container",
    data: {
        values: []
    },
    transform: [
        {
            calculate: "{'Bullish': '🐮', 'Bearish': '🐻'}[datum.sentiment]",
            as: "emoji"
        },
    ],
    mark: {
        type: "text",
        baseline: "middle"
    },
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
        tooltip: [
            {
                field: "no_of_comments",
                type: "quantitative",
                title: "Comments"
            },
            {
                field: "sentiment_score",
                type: "quantitative",
                title: "Sentiment"
            }
        ],
        text: {
            field: "emoji",
            type: "nominal"
        },
        size: {
            value: 20
        }
    },
};

},{}]},{},[1]);
