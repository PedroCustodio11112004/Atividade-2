document.getElementById('form-datas').addEventListener('submit', function(event) {
  event.preventDefault()
  let data1 = document.getElementById('data1').value;
  let data2 = document.getElementById('data2').value;

  compararDatas(data1, data2);
});

function compararDatas(data1, data2) {
  let date1 = new Date(data1);
  let date2 = new Date(data2);

  if (date1 < date2) {
      console.log("Data 2 maior que Data 1");
  } else if (date1 > date2) {
      console.log("Data 1 maior que Data 2");
  } else {
      console.log("As datas são iguais.");
  }
  calcularIntervalo(data1, data2);
  
}

function calcularIntervalo(data1, data2) {
  let date1 = new Date(data1);
  let date2 = new Date(data2);

  if (date1 > date2) {
      console.log("Erro: a data1 não pode vir depois da segunda");
      alert("Erro: a primeira data deve ser antes da segunda.");
      return;
  }

  let ano1 = date1.getFullYear();
  let mes1 = date1.getMonth();
  let dia1 = date1.getDate();

  let ano2 = date2.getFullYear();
  let mes2 = date2.getMonth();
  let dia2 = date2.getDate();

  let anosDif = ano2 - ano1;

  if (mes2 < mes1 || (mes2 === mes1 && dia2 < dia1)) {
      anosDif--;
  }

  
  let mesesDif = mes2 - mes1;
  if (mesesDif < 0) {
      mesesDif += 12;
  }

  let diasDif = dia2 - dia1;
  if (diasDif < 0) {
      
      date2.setMonth(date2.getMonth() - 1);
      diasDif += new Date(date2.getFullYear(), date2.getMonth() + 1, 0).getDate();
      mesesDif--;
  }

  console.log("A diferença entre a primeira e a segunda data é:", anosDif, "anos,", mesesDif, "meses e", diasDif, "dias.");

  dataHoraAtual();
}

// Professor quer assim-> hora:minuto - dia/mês/ano
function dataHoraAtual(){
  const data = new Date();

  const hora = data.getHours(); 
  const min = data.getMinutes();

   const dia =String(data.getDate()).padStart(2,'0');
   const mes =String(data.getMonth()+ 1).padStart(2,'0');
   const ano =data.getFullYear();
   const horaData = `${hora}:${min} - ${dia}/${mes}/${ano}.`;

   console.log(horaData);

}


