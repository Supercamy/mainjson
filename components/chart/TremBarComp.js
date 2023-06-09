import React from 'react';
import jsonData from '../../json/project_js.json';
import { BarList, Card, Title, Bold, Flex, Text } from '@tremor/react';

function prepareTremBarData(data) {
  const stagesMap = data.reduce((acc, project) => {
    const stage = project.PROJECT_STAGE;
    const budget = parseFloat(project.ORIGINAL_TOT_BUDGET) || 0;

    if (!acc[stage]) {
      acc[stage] = { name: stage, value: 0 };
    }

    acc[stage].value += budget;
    return acc;
  }, {});

  return Object.values(stagesMap).sort((a, b) => b.value - a.value);
}

const TremBarComp = () => {
  const tremgg = prepareTremBarData(jsonData);

  const formatValue = (value) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(0)}M`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}K`;
    } else {
      return value.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    }
  };

  const formattedData = tremgg.map((item) => ({
    ...item,
    label: formatValue(item.value),
    value: parseFloat(item.value.toFixed(0)),
  }));

  return (
    <Card className='max-w-lg'>
      <Title>Website Analytics</Title>
      <Flex className='mt-4'>
        <Text>
          <Bold>Source</Bold>
        </Text>
        <Text>
          <Bold>Visits</Bold>
        </Text>
      </Flex>
      <BarList data={formattedData} className='mt-2' />
    </Card>
  );
};

export default TremBarComp;
