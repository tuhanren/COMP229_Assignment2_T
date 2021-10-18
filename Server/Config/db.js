"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seceret = exports.HostName = exports.RemoteURI = exports.LocalURI = void 0;
exports.LocalURI = "mongodb://localhost/contactlist";
exports.RemoteURI = process.env.RemoteURI;
exports.HostName = (process.env.RemoteURI) ? "remotehost" : "localhost";
exports.Seceret = "somesecert";
//# sourceMappingURL=db.js.map