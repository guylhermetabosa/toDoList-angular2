System.register(['angular2/core', './tarefas.mock'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, tarefas_mock_1;
    var TarefaService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tarefas_mock_1_1) {
                tarefas_mock_1 = tarefas_mock_1_1;
            }],
        execute: function() {
            core_1.Injectable();
            TarefaService = (function () {
                function TarefaService() {
                }
                TarefaService.prototype.getListaTarefa = function () {
                    return Promise.resolve(tarefas_mock_1.TAREFAS);
                };
                TarefaService.prototype.getListaTarefaMockServer = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(tarefas_mock_1.TAREFAS); }, 1000);
                    });
                };
                TarefaService.prototype.addTarefaArray = function (tarefa) {
                    tarefas_mock_1.TAREFAS.push(tarefa);
                };
                return TarefaService;
            }());
            exports_1("TarefaService", TarefaService);
        }
    }
});
//# sourceMappingURL=tarefa.service.js.map