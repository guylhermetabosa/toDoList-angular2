import {Injectable} from 'angular2/core';

import {TAREFAS} from './tarefas.mock';
import {Tarefa} from '../model/tarefa.model';

Injectable()
export class TarefaService {

	getListaTarefa(){
		return Promise.resolve(TAREFAS);
	}

	getListaTarefaMockServer(){
		return new Promise<Tarefa[]>(resolve =>
			setTimeout(() => resolve(TAREFAS), 1000));
	}

	addTarefaArray(tarefa: Tarefa){
		TAREFAS.push(tarefa);
	}

}