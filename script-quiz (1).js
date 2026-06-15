<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz da Uva Premium</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <button id="botao-abrir-quiz" class="btn-abrir">Responder o Quiz da Uva 🍇</button>

    <div id="modal-quiz" class="modal-overlay">
        <div class="quiz-container">
            
            <span id="fechar-modal-quiz" class="fechar-modal">&times;</span>

            <div class="quiz-header">
                <h1>🍇 Quiz: O Mundo da Uva</h1>
                <p>Passo <span id="passo-quiz">1</span> de <span id="total-quiz">5</span></p>
            </div>

            <form id="formulario-quiz">
                
                <div class="etapa-quiz ativo">
                    <h2 class="question-text">Qual município é conhecido como a "Capital da Uva Niágara" no estado do Paraná?</h2>
                    <div class="options-container">
                        <label class="option-label opcao-quiz">
                            <input type="radio" name="q1" value="A">
                            <span class="option-text">Londrina</span>
                        </label>
                        <label class="option-label opcao-quiz" data-correta="true">
                            <input type="radio" name="q1" value="B">
                            <span class="option-text">Rosário do Ivaí</span>
                        </label>
                        <label class="option-label opcao-quiz">
                            <input type="radio" name="q1" value="C">
                            <span class="option-text">Marialva</span>
                        </label>
                        <label class="option-label opcao-quiz">
                            <input type="radio" name="q1" value="D">
                            <span class="option-text">Curitiba</span>
                        </label>
                    </div>
                    <button type="button" class="botao-proximo-quiz" disabled>Próxima Pergunta</button>
                </div>

                <div class="etapa-quiz">
                    <h2 class="question-text">A variedade "Niágara Rosada", muito cultivada na nossa região, é classificada principalmente como uma uva de:</h2>
                    <div class="options-container">
                        <label class="option-label opcao-quiz" data-correta="true">
                            <input type="radio" name="q2" value="A">
                            <span class="option-text">Mesa (consumo in natura)</span>
                        </label>
                        <label class="option-label opcao-quiz">
                            <input type="radio" name="q2" value="B">
                            <span class="option-text">Fina para vinhos finos secos</span>
                        </label>
                        <label class="option-label opcao-quiz">
                            <input type="radio" name="q2" value="C">
                            <span class="option-text">Passas exclusivamente</span>
                        </label>
                        <label class="option-label opcao-quiz">
                            <input type="radio" name="q2" value="D">
                            <span class="option-text">Uva sem sementes industrial</span>
                        </label>
                    </div>
                    <button type="button" class="botao-proximo-quiz" disabled>Próxima Pergunta</button>
                </div>

                <div class="etapa-quiz">
                    <h2 class="question-text">Qual é o nome da ciência ou disciplina agrícola que estuda especificamente o cultivo e a produção das videiras?</h2>
                    <div class="options-container">
                        <label class="option-label opcao-quiz">
                            <input type="radio" name="q3" value="A">
                            <span class="option-text">Olericultura</span>
                        </label>
                        <label class="option-label opcao-quiz">
                            <input type="radio" name="q3" value="B">
                            <span class="option-text">Silvicultura</span>
                        </label>
                        <label class="option-label opcao-quiz" data-correta="true">
                            <input type="radio" name="q3" value="C">
                            <span class="option-text">Viticultura</span>
                        </label>
                        <label class="option-label opcao-quiz">
                            <input type="radio" name="q3" value="D">
                            <span class="option-text">Frutologia</span>
                        </label>
                    </div>
                    <button type="button" class="botao-proximo-quiz" disabled>Próxima Pergunta</button>
                </div>

                <div class="etapa-quiz">
                    <h2 class="question-text">O sistema de condução onde os ramos formam uma espécie de "teto ou varal suspenso" sobre a plantação é chamado de:</h2>
                    <div class="options-container">
                        <label class="option-label opcao-quiz">
                            <input type="radio" name="q4" value="A">
                            <span class="option-text">Espaldeira</span>
                        </label>
                        <label class="option-label opcao-quiz" data-correta="true">
                            <input type="radio" name="q4" value="B">
                            <span class="option-text">Latada ou Pérgola</span>
                        </label>
                        <label class="option-label opcao-quiz">
                            <input type="radio" name="q4" value="C">
                            <span class="option-text">Cultivo Vertical Livre</span>
                        </label>
                        <label class="option-label opcao-quiz">
                            <input type="radio" name="q4" value="D">
                            <span class="option-text">Estaca Individual</span>
                        </label>
                    </div>
                    <button type="button" class="botao-proximo-quiz" disabled>Próxima Pergunta</button>
                </div>

                <div class="etapa-quiz">
                    <h2 class="question-text">Qual importante substância antioxidante, abundante na casca das uvas roxas, faz bem para a saúde cardiovascular?</h2>
                    <div class="options-container">
                        <label class="option-label opcao-quiz" data-correta="true">
                            <input type="radio" name="q5" value="A">
                            <span class="option-text">Resveratrol</span>
                        </label>
                        <label class="option-label opcao-quiz">
                            <input type="radio" name="q5" value="B">
                            <span class="option-text">Licopeno</span>
                        </label>
                        <label class="option-label opcao-quiz">
                            <input type="radio" name="q5" value="C">
                            <span class="option-text">Betacaroteno</span>
                        </label>
                        <label class="option-label opcao-quiz">
                            <input type="radio" name="q5" value="D">
                            <span class="option-text">Ácido Cítrico</span>
                        </label>
                    </div>
                    <button type="button" class="botao-proximo-quiz" disabled>Finalizar Quiz</button>
                </div>
            </form>

            <div id="resultado-quiz" class="result-box-text"></div>
            
            <div id="acoes-quiz" class="oculto text-center">
                <button id="botao-reiniciar-quiz" class="btn-reiniciar">Tentar Novamente 🔄</button>
            </div>

        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>