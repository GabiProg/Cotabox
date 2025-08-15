import Chart from "react-apexcharts";

function ChartComponent({participations, labels}) {
  const options = {
    chart: {
      type: "donut",
    },
    labels: labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series = participations;  
  
  return (
   <>
     <Chart options={options} series={series} type="donut" width="380" />;
    </>
  );
}

export default ChartComponent;