const resultadoIMC = document.getElementById("resultado-imc");
const orientacao = document.getElementById("orientacao");

const imc = localStorage.getItem("imcFinal");

if (!imc) {
  resultadoIMC.innerText = "Nenhum dado encontrado.";
} else {
  resultadoIMC.innerHTML = `Seu IMC é <strong>${imc}</strong>`;

  const valor = parseFloat(imc);

  if (valor < 18.5) {
    resultadoIMC.style.color = "#f2a900";
    orientacao.innerHTML = `
      Classificação: <strong>Abaixo do peso</strong><br><br>
      Segundo o PROESP-BR, esse resultado pode indicar baixa reserva
      energética e possível risco para o desenvolvimento físico.
      É recomendado acompanhamento nutricional e incentivo à
      atividade física orientada.
    `;
  } 
  else if (valor < 25) {
    resultadoIMC.style.color = "#2e8b57";
    orientacao.innerHTML = `
      Classificação: <strong>Peso adequado</strong><br><br>
      Segundo o PROESP-BR, esse é o intervalo considerado saudável.
      Indica bom equilíbrio entre massa corporal e estatura.
      Recomenda-se manter hábitos ativos e alimentação equilibrada.
    `;
  } 
  else {
    resultadoIMC.style.color = "#cc0000";
    orientacao.innerHTML = `
      Classificação: <strong>Sobrepeso</strong><br><br>
      Segundo o PROESP-BR, esse resultado pode estar associado a
      menor desempenho motor e risco aumentado para a saúde.
      Recomenda-se prática regular de atividade física e atenção
      à alimentação.
    `;
  }
}
