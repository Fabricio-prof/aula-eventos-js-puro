# 📚 Aula de Eventos JavaScript Puro

Este projeto é uma demonstração prática e didática dos principais conceitos de **eventos DOM** e **Event Listeners** em JavaScript puro, sem frameworks ou bibliotecas externas.

## 🎯 Objetivo

O objetivo deste projeto é ensinar e demonstrar de forma prática:
- Como adicionar e gerenciar event listeners
- O funcionamento do objeto Event
- Prevenção de comportamentos padrão
- Propagação de eventos (bubbling e capturing)
- Como remover event listeners

## 📋 Conteúdo

O projeto contém 4 exemplos práticos interativos:

### 1️⃣ Exemplo Básico: Click
Demonstra o uso básico de `addEventListener` para capturar eventos de clique em um botão.

**Conceitos abordados:**
- Sintaxe básica do `addEventListener`
- Função callback (listener)
- Manipulação de estilos e conteúdo com JavaScript

### 2️⃣ Objeto Evento e Prevenção de Padrão
Mostra como utilizar o objeto `event` e o método `preventDefault()` para impedir o comportamento padrão do navegador.

**Conceitos abordados:**
- Parâmetro `event` nas funções callback
- `event.preventDefault()` - Impede ação padrão
- `event.type` - Identifica o tipo de evento

### 3️⃣ Borbulhamento (Bubbling)
Demonstra como os eventos se propagam através da hierarquia DOM, do elemento mais interno para o mais externo.

**Conceitos abordados:**
- **Event Bubbling** (Fase de Borbulhamento)
- **Event Capturing** (Fase de Captura)
- `event.stopPropagation()` - Para a propagação do evento
- Terceiro parâmetro do `addEventListener` (useCapture)
- Hierarquia de elementos (Pai → Filho → Neto)

### 4️⃣ Remover Listener
Explica como adicionar e remover event listeners dinamicamente usando `removeEventListener`.

**Conceitos abordados:**
- `removeEventListener()` - Remove um listener específico
- Necessidade de usar referência nomeada da função
- Gerenciamento dinâmico de listeners
- Uso de duplo clique (dblclick)

## 🚀 Como Executar

1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` no seu navegador
3. Interaja com os exemplos para ver os conceitos em ação

**Não é necessário instalar nada!** O projeto usa apenas HTML, CSS e JavaScript puro.

## 📁 Estrutura de Arquivos

```
├── index.html      # Estrutura HTML com os 4 exemplos
├── style.css       # Estilos para tornar a interface visual
├── script.js       # Lógica JavaScript com todos os event listeners
└── README.md       # Este arquivo
```

## 🔍 Detalhes Técnicos

### addEventListener vs onclick
Este projeto usa `addEventListener` em vez de propriedades como `onclick` porque:
- ✅ Permite múltiplos listeners no mesmo elemento
- ✅ Oferece controle sobre a fase de propagação (bubbling/capturing)
- ✅ Permite remover listeners específicos com `removeEventListener`
- ✅ Segue as melhores práticas modernas de JavaScript

### Fases de Propagação de Eventos

1. **Capturing Phase (Captura)**: O evento desce da raiz até o elemento alvo
2. **Target Phase (Alvo)**: O evento atinge o elemento alvo
3. **Bubbling Phase (Borbulhamento)**: O evento sobe do elemento alvo até a raiz

Por padrão, `addEventListener` captura eventos na fase de **Bubbling**. Para capturar na fase de **Capturing**, use o terceiro parâmetro como `true`:

```javascript
elemento.addEventListener('click', callback, true); // Capturing
elemento.addEventListener('click', callback, false); // Bubbling (padrão)
```

## 💡 Dicas de Aprendizado

- Abra o **Console do Navegador** (F12) para ver possíveis logs
- Experimente comentar e descomentar o `event.stopPropagation()` no exemplo 3
- Tente adicionar seus próprios event listeners
- Modifique as cores e mensagens para experimentar

## 🎓 Conceitos Importantes

| Método/Propriedade | Descrição |
|-------------------|-----------|
| `addEventListener()` | Adiciona um event listener a um elemento |
| `removeEventListener()` | Remove um event listener de um elemento |
| `event.preventDefault()` | Previne o comportamento padrão do evento |
| `event.stopPropagation()` | Para a propagação do evento na hierarquia DOM |
| `event.type` | Retorna o tipo de evento (click, dblclick, etc.) |

## 📖 Recursos para Estudo

- [MDN - addEventListener](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener)
- [MDN - Event](https://developer.mozilla.org/pt-BR/docs/Web/API/Event)
- [MDN - Event Bubbling and Capturing](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture)

## 👨‍💻 Autor

Projeto desenvolvido para fins educacionais - Demonstração de Eventos JavaScript Puro

## 📄 Licença

Este projeto é livre para uso educacional e aprendizado.

---

**Bons estudos! 🚀**
