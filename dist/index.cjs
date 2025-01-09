"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  useEscClose: () => useEscClose,
  useOutsideClick: () => useOutsideClick
});
module.exports = __toCommonJS(index_exports);
var React = __toESM(require("react"), 1);
function useEscClose(value, callback) {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (value && event.key === "Escape") {
        callback();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [value, callback]);
}
function useOutsideClick(ref, func, hasBackdrop) {
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      const isOutside = ref.current && ref.current.contains && !ref.current.contains(target);
      if (isOutside) {
        func();
        if (hasBackdrop === false) {
          event.preventDefault();
        }
      }
    };
    if (hasBackdrop || hasBackdrop === void 0) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.addEventListener("touchend", handleClickOutside);
    }
    return () => {
      if (hasBackdrop || hasBackdrop === void 0) {
        document.removeEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("touchend", handleClickOutside);
      }
    };
  }, []);
}
