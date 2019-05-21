"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
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
app.listen(config_1.default.port, '0.0.0.0', function () {
    console.log('Api inicializada');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvdmluaWNpdXMvRG9jdW1lbnRvcy90eXBlU2NyaXB0L2dldE1lc3RyZXMvZ2V0TWVzdHJlcy5BcGkvc3JjL2luZGV4LnRzIiwic291cmNlcyI6WyIvaG9tZS92aW5pY2l1cy9Eb2N1bWVudG9zL3R5cGVTY3JpcHQvZ2V0TWVzdHJlcy9nZXRNZXN0cmVzLkFwaS9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0QkFBMEI7QUFFMUIsaUNBQW1DO0FBQ25DLHdDQUEwQztBQUUxQyxtQ0FBZ0M7QUFDaEMsaURBQTRDO0FBR3hDLHFCQUFxQjtBQUNyQixJQUFNLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUN0QixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRTNCLDBEQUEwRDtBQUMxRCxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztJQUNmLEdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxVQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBYztRQUNoRixJQUFNLE1BQU0sR0FBRyxDQUFDLElBQUssS0FBSyxDQUFDLFVBQWtCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RSxJQUFJLE1BQU0sWUFBWSxPQUFPLEVBQUU7WUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUF0RSxDQUFzRSxDQUFDLENBQUM7U0FFakc7YUFBTSxJQUFJLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUNoRCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUdQLEdBQUcsQ0FBQyxNQUFNLENBQUMsZ0JBQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtBQUNuQyxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7Y3JlYXRlQ29ubmVjdGlvbn0gZnJvbSBcInR5cGVvcm1cIjtcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XG5pbXBvcnQge1JlcXVlc3QsIFJlc3BvbnNlfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHtSb3V0ZXN9IGZyb20gXCIuL3JvdXRlc1wiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9jb25maWd1cmF0aW9uL2NvbmZpZ1wiO1xuXG5cbiAgICAvLyBjcmVhdGUgZXhwcmVzcyBhcHBcbiAgICBjb25zdCBhcHAgPSBleHByZXNzKCk7XG4gICAgYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5cbiAgICAvLyByZWdpc3RlciBleHByZXNzIHJvdXRlcyBmcm9tIGRlZmluZWQgYXBwbGljYXRpb24gcm91dGVzXG4gICAgUm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xuICAgICAgICAoYXBwIGFzIGFueSlbcm91dGUubWV0aG9kXShyb3V0ZS5yb3V0ZSwgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IChuZXcgKHJvdXRlLmNvbnRyb2xsZXIgYXMgYW55KSlbcm91dGUuYWN0aW9uXShyZXEsIHJlcywgbmV4dCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC50aGVuKHJlc3VsdCA9PiByZXN1bHQgIT09IG51bGwgJiYgcmVzdWx0ICE9PSB1bmRlZmluZWQgPyByZXMuc2VuZChyZXN1bHQpIDogdW5kZWZpbmVkKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgIT09IG51bGwgJiYgcmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXMuanNvbihyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuXG5hcHAubGlzdGVuKGNvbmZpZy5wb3J0LCAnMC4wLjAuMCcsICgpPT4ge1xuICAgIGNvbnNvbGUubG9nKCdBcGkgaW5pY2lhbGl6YWRhJylcbn0pXG4iXX0=