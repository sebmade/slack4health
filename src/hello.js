/// <reference path="typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var Hello = (function () {
    function Hello() {
        var _this = this;
        this.name = 'World';
        setTimeout(function () {
            _this.name = 'NEW World';
        }, 2000);
    }
    Hello = __decorate([
        angular2_1.Component({
            selector: 'hello'
        }),
        angular2_1.View({
            template: "<span *ng-if=\"name\">Hello, {{name}}!</span>",
            directives: [angular2_1.coreDirectives]
        }), 
        __metadata('design:paramtypes', [])
    ], Hello);
    return Hello;
})();
exports.Hello = Hello;
angular2_1.bootstrap(Hello);
