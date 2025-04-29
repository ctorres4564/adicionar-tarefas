Código com comentários

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

	// Itera sobre o array de tarefas e cria elementos <li> para cada uma
 
	let i = 0;
	for (i = 0; i < tarefas.length; i++) {
		let novaTarefa = document.createElement('li'); // Cria um novo item de lista
		novaTarefa.textContent = tarefas[i]; // Define o texto do item como a tarefa atual
		listaTarefas.appendChild(novaTarefa); // Adiciona o item à lista na interface
	}
}
