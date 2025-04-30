// Array para armazenar as tarefas adicionadas
let tarefas = [];

// Função para adicionar uma nova tarefa

function adicionarTarefa() {
	// Mensagens de feedback para o usuário

	let mensagemSucesso = 'Tarefa adicionada com sucesso!';
	let mensagemErro = 'Por favor, digite uma tarefa válida.';

	// Elementos da interface para exibir mensagens e capturar o valor do input

	let mensagem = document.getElementById('mensagem');
	let inputTarefa = document.getElementById('inputTarefa');

	// Obtém o valor do input e remove espaços extras

	let tarefa = inputTarefa.value.trim();

	// Verifica se o campo de entrada está vazio

	if (tarefa === '') {
    
		// Exibe mensagem de erro se a tarefa for inválida
		mensagem.textContent = mensagemErro;
		mensagem.style.color = 'rgb(255, 0, 0)'; // Define a cor do texto como vermelho
		mensagem.style.fontWeight = 'bold'; // Define o texto em negrito
		mensagem.style.backgroundColor = 'white'; // Define o fundo como branco
	} else {
		// Exibe mensagem de sucesso se a tarefa for válida
		mensagem.textContent = mensagemSucesso;
		mensagem.style.color = 'green'; // Define a cor do texto como verde
		mensagem.style.fontWeight = 'bold'; // Define o texto em negrito
		mensagem.style.backgroundColor = 'white'; // Define o fundo como branco

		// Adiciona a tarefa ao array de tarefas
		tarefas.push(tarefa);
	}

	// Atualiza a lista de tarefas exibida na interface
	renderizarTarefas();

	// Limpa o campo de entrada para que o usuário possa adicionar outra tarefa
	inputTarefa.value = '';
}

// Função para renderizar a lista de tarefas na interface
function renderizarTarefas() {
	// Obtém o elemento da lista de tarefas
	let listaTarefas = document.getElementById('listaTarefas');

	// Limpa o conteúdo atual da lista para evitar duplicações
	listaTarefas.innerHTML = '';

	
	for (let i = 0; i < tarefas.length; i++) {
		let novaTarefa = document.createElement('li'); // Cria um novo item de lista
		novaTarefa.textContent = tarefas[i]; // Define o texto do item como a tarefa atual
		let botaoRemover = document.createElement('button'); // Cria um botão de remoção
		botaoRemover.className = 'remover'; // Define a classe do botão
		botaoRemover.onclick = () => removerTarefas(i) // Define a função de remoção ao clicar no botão
		botaoRemover.textContent = 'Remover'; // Define o texto do botão
		let botaoEditar = document.createElement('button'); // Cria um botão de edição
		botaoEditar.className = 'editar'; // Define a classe do botão
		botaoEditar.onclick = () => EditarTarefas(i) // Define a função de edição ao clicar no botão
		botaoEditar.textContent = 'Editar'; // Define o texto do botão
		novaTarefa.appendChild(botaoEditar); // Adiciona o botão ao item de lista
		novaTarefa.appendChild(botaoRemover); // Adiciona o botão ao item de lista		
		listaTarefas.appendChild(novaTarefa); // Adiciona o item à lista na interface
	}
}

function removerTarefas(i) {
	// Remove a tarefa do array de tarefas
	tarefas.splice(i, 1); // Remove a tarefa na posição i do array

	// Atualiza a lista de tarefas exibida na interface
	renderizarTarefas(); // Chama a função para renderizar a lista novamente
}

function EditarTarefas(i) {
	let TarefaEditada = prompt('Edite a tarefa:'); // Solicita ao usuário a nova tarefa
	if  (TarefaEditada.trim !== "") {
		tarefas[i] = TarefaEditada;
		renderizarTarefas();
	
	}	

}

function limparLista() {
	tarefas.length = 0; // Limpa o array de tarefas
	renderizarTarefas();
	let mensagem = document.getElementById('mensagem');
	mensagem.textContent = 'Lista de tarefas limpa com sucesso!';
}