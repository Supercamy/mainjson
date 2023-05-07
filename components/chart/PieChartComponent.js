import React from 'react';
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

import jsonData from '../../json/project_js.json';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

function formatBudget(value) {
  if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(1) + 'M';
  } else if (value >= 1_000) {
    return (value / 1_000).toFixed(1) + 'K';
  }
  return value;
}

function prepareChartData(data) {
  const stagesMap = data.reduce((acc, project) => {
    const stage = project.PROJECT_STAGE;
    const budget = parseFloat(project.ORIGINAL_TOT_BUDGET) || 0;

    if (!acc[stage]) {
      acc[stage] = { name: stage, value: 0 };
    }

    acc[stage].value += budget;
    return acc;
  }, {});

  return Object.values(stagesMap);
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip'>
        <p className='label'>{`${label} : ${formatBudget(
          payload[0].value
        )} `}</p>
      </div>
    );
  }

  return null;
};

const PieChartComponent = () => {
  const chartData = prepareChartData(jsonData);

  return (
    // <ResponsiveContainer width='100%' height={400}>
    //   <PieChart>
    //     <Pie
    //       data={chartData}
    //       cx='50%'
    //       cy='50%'
    //       labelLine={false}
    //       outerRadius={130}
    //       fill='#8884d8'
    //       dataKey='value'
    //     >
    //       {chartData.map((entry, index) => (
    //         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    //       ))}
    //     </Pie>
    //     <Tooltip content={<CustomTooltip />} />
    //     <Legend />
    //   </PieChart>
    // </ResponsiveContainer>
    <ResponsiveContainer width='100%' height={400}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis tickFormatter={formatBudget} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey='value' fill={COLORS[0]}></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
