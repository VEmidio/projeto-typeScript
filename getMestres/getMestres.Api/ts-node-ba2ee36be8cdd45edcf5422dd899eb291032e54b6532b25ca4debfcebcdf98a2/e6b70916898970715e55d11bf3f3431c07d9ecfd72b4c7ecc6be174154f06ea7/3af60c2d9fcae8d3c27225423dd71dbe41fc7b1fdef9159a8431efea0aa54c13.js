"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserController_1 = require("./controller/UserController");
exports.Routes = [{
        method: "get",
        route: "/users",
        controller: UserController_1.UserController,
        action: "all"
    }, {
        method: "get",
        route: "/users/:id",
        controller: UserController_1.UserController,
        action: "one"
    }, {
        method: "post",
        route: "/users",
        controller: UserController_1.UserController,
        action: "save"
    }, {
        method: "delete",
        route: "/users/:id",
        controller: UserController_1.UserController,
        action: "remove"
    }];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvdmluaWNpdXMvRG9jdW1lbnRvcy90eXBlU2NyaXB0L2dldE1lc3RyZXMvZ2V0TWVzdHJlcy5BcGkvc3JjL3JvdXRlcy50cyIsInNvdXJjZXMiOlsiL2hvbWUvdmluaWNpdXMvRG9jdW1lbnRvcy90eXBlU2NyaXB0L2dldE1lc3RyZXMvZ2V0TWVzdHJlcy5BcGkvc3JjL3JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhEQUEyRDtBQUU5QyxRQUFBLE1BQU0sR0FBRyxDQUFDO1FBQ25CLE1BQU0sRUFBRSxLQUFLO1FBQ2IsS0FBSyxFQUFFLFFBQVE7UUFDZixVQUFVLEVBQUUsK0JBQWM7UUFDMUIsTUFBTSxFQUFFLEtBQUs7S0FDaEIsRUFBRTtRQUNDLE1BQU0sRUFBRSxLQUFLO1FBQ2IsS0FBSyxFQUFFLFlBQVk7UUFDbkIsVUFBVSxFQUFFLCtCQUFjO1FBQzFCLE1BQU0sRUFBRSxLQUFLO0tBQ2hCLEVBQUU7UUFDQyxNQUFNLEVBQUUsTUFBTTtRQUNkLEtBQUssRUFBRSxRQUFRO1FBQ2YsVUFBVSxFQUFFLCtCQUFjO1FBQzFCLE1BQU0sRUFBRSxNQUFNO0tBQ2pCLEVBQUU7UUFDQyxNQUFNLEVBQUUsUUFBUTtRQUNoQixLQUFLLEVBQUUsWUFBWTtRQUNuQixVQUFVLEVBQUUsK0JBQWM7UUFDMUIsTUFBTSxFQUFFLFFBQVE7S0FDbkIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtVc2VyQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9Vc2VyQ29udHJvbGxlclwiO1xuXG5leHBvcnQgY29uc3QgUm91dGVzID0gW3tcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgcm91dGU6IFwiL3VzZXJzXCIsXG4gICAgY29udHJvbGxlcjogVXNlckNvbnRyb2xsZXIsXG4gICAgYWN0aW9uOiBcImFsbFwiXG59LCB7XG4gICAgbWV0aG9kOiBcImdldFwiLFxuICAgIHJvdXRlOiBcIi91c2Vycy86aWRcIixcbiAgICBjb250cm9sbGVyOiBVc2VyQ29udHJvbGxlcixcbiAgICBhY3Rpb246IFwib25lXCJcbn0sIHtcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgIHJvdXRlOiBcIi91c2Vyc1wiLFxuICAgIGNvbnRyb2xsZXI6IFVzZXJDb250cm9sbGVyLFxuICAgIGFjdGlvbjogXCJzYXZlXCJcbn0sIHtcbiAgICBtZXRob2Q6IFwiZGVsZXRlXCIsXG4gICAgcm91dGU6IFwiL3VzZXJzLzppZFwiLFxuICAgIGNvbnRyb2xsZXI6IFVzZXJDb250cm9sbGVyLFxuICAgIGFjdGlvbjogXCJyZW1vdmVcIlxufV07Il19