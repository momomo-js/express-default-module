"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("@mo/express");
const core_1 = require("@mo/core");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookies = require("cookie-parser");
const session = require("express-session");
const CORS = require("cors");
const helmet = require("helmet");
class ExpressDefaultPluginPackage {
    constructor() {
        this.sessionOption = {
            secret: 'NEXTION_DEFAULT_SESSION',
            cookie: {
                maxAge: 60000 * 20
            },
            resave: true,
            saveUninitialized: true
        };
        this.corsOption = null;
        this.helmetOption = null;
        this.cors = CORS(this.corsOption);
        this.helmet = helmet(this.helmetOption);
        this.logger = logger(process.env.NODE_ENV === 'production' ? 'common' : 'dev');
        this.bodyParser = bodyParser.json();
        this.bodyParserUrl = bodyParser.urlencoded({ extended: false });
        this.cookies = cookies();
        this.session = session(this.sessionOption);
    }
}
__decorate([
    core_1.Plugin(express_1.ExpressMiddleware),
    __metadata("design:type", Function)
], ExpressDefaultPluginPackage.prototype, "cors", void 0);
__decorate([
    core_1.Plugin(express_1.ExpressMiddleware),
    __metadata("design:type", Function)
], ExpressDefaultPluginPackage.prototype, "helmet", void 0);
__decorate([
    core_1.Plugin(express_1.ExpressMiddleware),
    __metadata("design:type", Function)
], ExpressDefaultPluginPackage.prototype, "logger", void 0);
__decorate([
    core_1.Plugin(express_1.ExpressMiddleware),
    __metadata("design:type", Object)
], ExpressDefaultPluginPackage.prototype, "bodyParser", void 0);
__decorate([
    core_1.Plugin(express_1.ExpressMiddleware),
    __metadata("design:type", Object)
], ExpressDefaultPluginPackage.prototype, "bodyParserUrl", void 0);
__decorate([
    core_1.Plugin(express_1.ExpressMiddleware),
    __metadata("design:type", Object)
], ExpressDefaultPluginPackage.prototype, "cookies", void 0);
__decorate([
    core_1.Plugin(express_1.ExpressMiddleware),
    __metadata("design:type", Object)
], ExpressDefaultPluginPackage.prototype, "session", void 0);
exports.ExpressDefaultPluginPackage = ExpressDefaultPluginPackage;
//# sourceMappingURL=index.js.map