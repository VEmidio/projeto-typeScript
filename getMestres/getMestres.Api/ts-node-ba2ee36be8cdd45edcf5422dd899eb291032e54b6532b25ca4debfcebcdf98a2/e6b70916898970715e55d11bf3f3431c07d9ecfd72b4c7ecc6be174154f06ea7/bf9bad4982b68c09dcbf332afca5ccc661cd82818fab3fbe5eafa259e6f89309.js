"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var express = require("express");
var bodyParser = require("body-parser");
var routes_1 = require("./routes");
var config_1 = require("./configuration/config");
// create express app
var app = express();
app.use(bodyParser.json());
// register express routes from defined application routes
routes_1.Routes.forEach(function (route) {
    app[route.method](route.route, function (req, res, next) {
        var result = (new route.controller)[route.action](req, res, next);
        if (result instanceof Promise) {
            result.then(function (result) { return result !== null && result !== undefined ? res.send(result) : undefined; });
        }
        else if (result !== null && result !== undefined) {
            res.json(result);
        }
    });
});
app.listen(config_1.default.port, '0.0.0.0', function () { return __awaiter(_this, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Api incialize in port " + config_1.default.port);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, typeorm_1.createConnection()];
            case 2:
                _a.sent();
                console.log('Database connected');
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error('Databbase not connected', error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvdmluaWNpdXMvRG9jdW1lbnRvcy90eXBlU2NyaXB0L2dldE1lc3RyZXMvZ2V0TWVzdHJlcy5BcGkvc3JjL2luZGV4LnRzIiwic291cmNlcyI6WyIvaG9tZS92aW5pY2l1cy9Eb2N1bWVudG9zL3R5cGVTY3JpcHQvZ2V0TWVzdHJlcy9nZXRNZXN0cmVzLkFwaS9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBcUNBOztBQXJDQSw0QkFBMEI7QUFDMUIsbUNBQXlDO0FBQ3pDLGlDQUFtQztBQUNuQyx3Q0FBMEM7QUFFMUMsbUNBQWdDO0FBQ2hDLGlEQUE0QztBQUl4QyxxQkFBcUI7QUFDckIsSUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUUzQiwwREFBMEQ7QUFDMUQsZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7SUFDZixHQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsVUFBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWM7UUFDaEYsSUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFLLEtBQUssQ0FBQyxVQUFrQixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0UsSUFBSSxNQUFNLFlBQVksT0FBTyxFQUFFO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBdEUsQ0FBc0UsQ0FBQyxDQUFDO1NBRWpHO2FBQU0sSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDaEQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwQjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUM7QUFHUCxHQUFHLENBQUMsTUFBTSxDQUFDLGdCQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRTs7Ozs7Z0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQXlCLGdCQUFNLENBQUMsSUFBTSxDQUFDLENBQUE7Ozs7Z0JBRS9DLHFCQUFNLDBCQUFnQixFQUFFLEVBQUE7O2dCQUF4QixTQUF3QixDQUFBO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7Ozs7Z0JBRWpDLE9BQU8sQ0FBQyxLQUFLLENBQUMseUJBQXlCLEVBQUUsT0FBSyxDQUFDLENBQUE7Ozs7O0tBRXRELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7Y3JlYXRlQ29ubmVjdGlvbn0gZnJvbSBcInR5cGVvcm1cIjtcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XG5pbXBvcnQge1JlcXVlc3QsIFJlc3BvbnNlfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHtSb3V0ZXN9IGZyb20gXCIuL3JvdXRlc1wiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9jb25maWd1cmF0aW9uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgcG9zaXggfSBmcm9tIFwicGF0aFwiO1xuXG5cbiAgICAvLyBjcmVhdGUgZXhwcmVzcyBhcHBcbiAgICBjb25zdCBhcHAgPSBleHByZXNzKCk7XG4gICAgYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5cbiAgICAvLyByZWdpc3RlciBleHByZXNzIHJvdXRlcyBmcm9tIGRlZmluZWQgYXBwbGljYXRpb24gcm91dGVzXG4gICAgUm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xuICAgICAgICAoYXBwIGFzIGFueSlbcm91dGUubWV0aG9kXShyb3V0ZS5yb3V0ZSwgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IChuZXcgKHJvdXRlLmNvbnRyb2xsZXIgYXMgYW55KSlbcm91dGUuYWN0aW9uXShyZXEsIHJlcywgbmV4dCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC50aGVuKHJlc3VsdCA9PiByZXN1bHQgIT09IG51bGwgJiYgcmVzdWx0ICE9PSB1bmRlZmluZWQgPyByZXMuc2VuZChyZXN1bHQpIDogdW5kZWZpbmVkKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgIT09IG51bGwgJiYgcmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXMuanNvbihyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuXG5hcHAubGlzdGVuKGNvbmZpZy5wb3J0LCAnMC4wLjAuMCcsIGFzeW5jKCk9PiB7XG4gICAgY29uc29sZS5sb2coYEFwaSBpbmNpYWxpemUgaW4gcG9ydCAke2NvbmZpZy5wb3J0fWApXG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgY3JlYXRlQ29ubmVjdGlvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKCdEYXRhYmFzZSBjb25uZWN0ZWQnKVxuICAgIH0gY2F0Y2ggKGVycm9yICkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdEYXRhYmJhc2Ugbm90IGNvbm5lY3RlZCcsIGVycm9yKVxuICAgIH1cbn0pXG4iXX0=