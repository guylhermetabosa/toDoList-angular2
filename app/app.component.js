System.register(['angular2/core', './services/tarefa.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tarefa_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tarefa_service_1_1) {
                tarefa_service_1 = tarefa_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_tarefaService) {
                    this._tarefaService = _tarefaService;
                    this.novaTarefa = {
                        nome: null,
                        concluido: false
                    };
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getTarefasMock();
                };
                AppComponent.prototype.getTarefas = function () {
                    var _this = this;
                    this._tarefaService.getListaTarefa()
                        .then(function (tarefas) { return _this.tarefas = tarefas; });
                };
                AppComponent.prototype.getTarefasMock = function () {
                    var _this = this;
                    this._tarefaService.getListaTarefaMockServer().
                        then(function (tarefas) { return _this.tarefas = tarefas; });
                };
                AppComponent.prototype.adicionarTarefa = function (tarefa) {
                    var copy = Object.assign({}, tarefa);
                    this._tarefaService.addTarefaArray(copy);
                    tarefa.nome = "";
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'meu-app',
                        templateUrl: 'app/templates/app.component.html',
                        providers: [tarefa_service_1.TarefaService]
                    }), 
                    __metadata('design:paramtypes', [tarefa_service_1.TarefaService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map