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
var typeorm_1 = require("typeorm");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "firstName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "lastName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], User.prototype, "age", void 0);
    User = __decorate([
        typeorm_1.Entity()
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvdmluaWNpdXMvRG9jdW1lbnRvcy90eXBlU2NyaXB0L2dldE1lc3RyZXMvZ2V0TWVzdHJlcy5BcGkvc3JjL2VudGl0eS9Vc2VyLnRzIiwic291cmNlcyI6WyIvaG9tZS92aW5pY2l1cy9Eb2N1bWVudG9zL3R5cGVTY3JpcHQvZ2V0TWVzdHJlcy9nZXRNZXN0cmVzLkFwaS9zcmMvZW50aXR5L1VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBK0Q7QUFHL0Q7SUFBQTtJQWNBLENBQUM7SUFYRztRQURDLGdDQUFzQixFQUFFOztvQ0FDZDtJQUdYO1FBREMsZ0JBQU0sRUFBRTs7MkNBQ1M7SUFHbEI7UUFEQyxnQkFBTSxFQUFFOzswQ0FDUTtJQUdqQjtRQURDLGdCQUFNLEVBQUU7O3FDQUNHO0lBWkgsSUFBSTtRQURoQixnQkFBTSxFQUFFO09BQ0ksSUFBSSxDQWNoQjtJQUFELFdBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RW50aXR5LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBDb2x1bW59IGZyb20gXCJ0eXBlb3JtXCI7XG5cbkBFbnRpdHkoKVxuZXhwb3J0IGNsYXNzIFVzZXIge1xuXG4gICAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICAgIGlkOiBudW1iZXI7XG5cbiAgICBAQ29sdW1uKClcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcblxuICAgIEBDb2x1bW4oKVxuICAgIGxhc3ROYW1lOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uKClcbiAgICBhZ2U6IG51bWJlcjtcblxufVxuIl19