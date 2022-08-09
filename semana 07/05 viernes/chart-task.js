// const barChart = document.querySelector("#bar-chart").getContext("2d");
// new Chart(barChart, {
//   type: "doughnut",
//   data: {
//     labels: [
//       "Enero",
//       "Febrero",
//       "Marzo",
//       "Abril",
//       "Mayo",
//       "Junio",
//       "Julio",
//       "Agosto",
//       "Septiembre",
//       "Octubre",
//       "Noviembre",
//       "Diciembre",
//     ],
//     datasets: [
//       {
//         label: "Meses del año",
//         data: [10, 12, 5, 11, 8, 10, 12, 5, 11, 8, 10, 12],
//         backgroundColor: ["#FF6420", "#20FFA0", "#009EFF", "#DE25FF"],
//         borderColor: "#c9c9c9", //["#000", "#f01", "#aac", "#019"],
//         borderWidth: 1,
//       },
//     ],
//   },
// });

const selectChart = document.querySelector("#select-chart");

const chartTaskReport = document
  .querySelector("#task-chart-report")
  .getContext("2d");

function generateChart(type = "doughnut") {
  return new Chart(chartTaskReport, {
    type,
    data: {
      labels: ["TODO", "DONE", "DELETE"],
      datasets: [
        {
          // data: [10, 11, 12] // data[0] = 10 data[1] = 11 data[2] = 12
          label: "Estados de tareas",
          backgroundColor: ["#25A9FF", "#00C45F", "#FF6674"],
        },
      ],
    },
  });
}

let myChart = generateChart();

selectChart.onchange = (event) => {
  myChart.destroy();
  myChart = generateChart(event.target.value);
  updateCalcChart();
};

function updateCalcChart() {
  const countTODO = getCountTask("todo");
  const countDONE = getCountTask("done");
  const countDelete = getCountTask("delete");

  myChart.data.datasets[0].data[0] = countTODO;
  // {
  //   data: [countTODO]
  //   label: "Estados de tareas",
  //   backgroundColor: ["#25A9FF", "#00C45F", "#FF6674"],
  // },
  myChart.data.datasets[0].data[1] = countDONE;
  // {
  //   data: [countTODO, countDONE]
  //   label: "Estados de tareas",
  //   backgroundColor: ["#25A9FF", "#00C45F", "#FF6674"],
  // },
  myChart.data.datasets[0].data[2] = countDelete;
  // {
  //   data: [countTODO, countDONE, countDelete]
  //   label: "Estados de tareas",
  //   backgroundColor: ["#25A9FF", "#00C45F", "#FF6674"],
  // },
  myChart.update();
}

// esta funcion filtra por el estado y retorna la cantidad de elementos encontrados
function getCountTask(status) {
  const tasks = arrayTask.filter((task) => task.status === status);
  return tasks.length;
}

const btnExportChart = document.querySelector("#btn-export-chart");
const btnDownloadChart = document.querySelector("#btn-download-chart");

btnExportChart.onclick = () => {
  const base64URL = myChart.toBase64Image("image/jpeg", 1);
  // opcion1
  // btnDownloadChart.href = base64URL;
  // opcion2
  const a = document.createElement("a");
  a.href = base64URL;
  a.download = `chart-${new Date().toLocaleDateString()}`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};