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
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var User_1 = require("../entity/User");
var UserController = /** @class */ (function () {
    function UserController() {
        this.userRepository = typeorm_1.getRepository(User_1.User);
    }
    UserController.prototype.all = function (request, response, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.userRepository.find()];
            });
        });
    };
    UserController.prototype.one = function (request, response, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.userRepository.findOne(request.params.id)];
            });
        });
    };
    UserController.prototype.save = function (request, response, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.userRepository.save(request.body)];
            });
        });
    };
    UserController.prototype.remove = function (request, response, next) {
        return __awaiter(this, void 0, void 0, function () {
            var userToRemove;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne(request.params.id)];
                    case 1:
                        userToRemove = _a.sent();
                        return [4 /*yield*/, this.userRepository.remove(userToRemove)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvdmluaWNpdXMvRG9jdW1lbnRvcy90eXBlU2NyaXB0L2dldE1lc3RyZXMvZ2V0TWVzdHJlcy5BcGkvc3JjL2NvbnRyb2xsZXIvVXNlckNvbnRyb2xsZXIudHMiLCJzb3VyY2VzIjpbIi9ob21lL3ZpbmljaXVzL0RvY3VtZW50b3MvdHlwZVNjcmlwdC9nZXRNZXN0cmVzL2dldE1lc3RyZXMuQXBpL3NyYy9jb250cm9sbGVyL1VzZXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBc0M7QUFFdEMsdUNBQW9DO0FBRXBDO0lBQUE7UUFFWSxtQkFBYyxHQUFHLHVCQUFhLENBQUMsV0FBSSxDQUFDLENBQUM7SUFtQmpELENBQUM7SUFqQlMsNEJBQUcsR0FBVCxVQUFVLE9BQWdCLEVBQUUsUUFBa0IsRUFBRSxJQUFrQjs7O2dCQUM5RCxzQkFBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxFQUFDOzs7S0FDckM7SUFFSyw0QkFBRyxHQUFULFVBQVUsT0FBZ0IsRUFBRSxRQUFrQixFQUFFLElBQWtCOzs7Z0JBQzlELHNCQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUM7OztLQUN6RDtJQUVLLDZCQUFJLEdBQVYsVUFBVyxPQUFnQixFQUFFLFFBQWtCLEVBQUUsSUFBa0I7OztnQkFDL0Qsc0JBQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDOzs7S0FDakQ7SUFFSywrQkFBTSxHQUFaLFVBQWEsT0FBZ0IsRUFBRSxRQUFrQixFQUFFLElBQWtCOzs7Ozs0QkFDOUMscUJBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBQTs7d0JBQW5FLFlBQVksR0FBRyxTQUFvRDt3QkFDdkUscUJBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUE7O3dCQUE5QyxTQUE4QyxDQUFDOzs7OztLQUNsRDtJQUVMLHFCQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2V0UmVwb3NpdG9yeX0gZnJvbSBcInR5cGVvcm1cIjtcbmltcG9ydCB7TmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZX0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uL2VudGl0eS9Vc2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyQ29udHJvbGxlciB7XG5cbiAgICBwcml2YXRlIHVzZXJSZXBvc2l0b3J5ID0gZ2V0UmVwb3NpdG9yeShVc2VyKTtcblxuICAgIGFzeW5jIGFsbChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS5maW5kKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgb25lKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJSZXBvc2l0b3J5LmZpbmRPbmUocmVxdWVzdC5wYXJhbXMuaWQpO1xuICAgIH1cblxuICAgIGFzeW5jIHNhdmUocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlclJlcG9zaXRvcnkuc2F2ZShyZXF1ZXN0LmJvZHkpO1xuICAgIH1cblxuICAgIGFzeW5jIHJlbW92ZShyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICAgICAgICBsZXQgdXNlclRvUmVtb3ZlID0gYXdhaXQgdGhpcy51c2VyUmVwb3NpdG9yeS5maW5kT25lKHJlcXVlc3QucGFyYW1zLmlkKTtcbiAgICAgICAgYXdhaXQgdGhpcy51c2VyUmVwb3NpdG9yeS5yZW1vdmUodXNlclRvUmVtb3ZlKTtcbiAgICB9XG5cbn0iXX0=