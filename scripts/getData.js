"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getSentiments() {
    return __awaiter(this, void 0, void 0, function* () {
        return fetch("https://dashboard.nbshare.io/api/v1/apps/reddit")
            .then(res => res.json())
            .then(res => {
            return res;
        });
    });
}
function saveSentiments() {
    return __awaiter(this, void 0, void 0, function* () {
        getSentiments()
            .then(data => {
            localStorage.setItem("data", JSON.stringify(data));
        })
            .catch((error) => {
            alert(`Error fetching new data: ${error}`);
        });
    });
}
function refreshSentiments() {
    saveSentiments();
}
function useSentiments() {
    const data = localStorage.getItem("data");
    if (data !== null) {
        return JSON.parse(data);
    }
    else {
        alert("Error reading saved data, have you tried refreshing?");
        return null;
    }
}
