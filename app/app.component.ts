import {Component, OnInit} from 'angular2/core';

import {TarefaService} from './services/tarefa.service';
import {Tarefa} from './model/tarefa.model';


@Component({
	selector:'meu-app',
	templateUrl: 'app/templates/app.component.html',
	providers: [TarefaService]
})
export class AppComponent implements OnInit{
	tarefas: Tarefa[];
	novaTarefa: Tarefa = {		
		nome: null,
		concluido: false
	};

	constructor(private _tarefaService: TarefaService){
	}

	ngOnInit(){
		this.getTarefasMock();
	}

	getTarefas(){
		this._tarefaService.getListaTarefa()
			.then(tarefas => this.tarefas = tarefas);
	}

	getTarefasMock(){
		this._tarefaService.getListaTarefaMockServer().
			then(tarefas => this.tarefas = tarefas);
	}

	adicionarTarefa(tarefa: Tarefa) {
		let copy = Object.assign({}, tarefa);
		this._tarefaService.addTarefaArray(copy);
		tarefa.nome = "";

	}
}