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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var TeamService = (function () {
    function TeamService(http) {
        this.http = http;
        this.teamsUrl = 'api/teams'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    TeamService.prototype.getTeams = function () {
        return this.http.get(this.teamsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    TeamService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    TeamService.prototype.getTeam = function (id) {
        var url = this.teamsUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    TeamService.prototype.update = function (team) {
        var url = this.teamsUrl + "/" + team.id;
        return this.http
            .put(url, JSON.stringify(team), { headers: this.headers })
            .toPromise()
            .then(function () { return team; })
            .catch(this.handleError);
    };
    TeamService.prototype.create = function (teamname) {
        return this.http
            .post(this.teamsUrl, JSON.stringify({ teamname: teamname }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    TeamService.prototype.delete = function (id) {
        var url = this.teamsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return TeamService;
}());
TeamService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TeamService);
exports.TeamService = TeamService;
//# sourceMappingURL=team.service.js.map