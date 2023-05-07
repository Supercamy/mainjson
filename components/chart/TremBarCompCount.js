import React from 'react';
import jsonData from '../../json/project_js.json';
import { BarList, Card, Title, Bold, Flex, Text } from '@tremor/react';

function prepareTremBarData(data) {
  const stagesMap = data.reduce((acc, project) => {
    const stage = project.PROJECT_STAGE;

    if (!acc[stage]) {
      acc[stage] = { name: stage, value: 0 };
    }

    acc[stage].value += 1;
    return acc;
  }, {});

  return Object.values(stagesMap).sort((a, b) => b.value - a.value);
}

const TremBarCompCount = () => {
  const tremgg = prepareTremBarData(jsonData);

  const formattedData = tremgg.map((item) => ({
    ...item,
    label: item.name,
    value: item.value,
  }));

  return (
    <Card className='max-w-lg'>
      <Title>Project Count by Stage</Title>
      <Flex className='mt-4'>
        <Text>
          <Bold>Stage</Bold>
        </Text>
        <Text>
          <Bold>Count</Bold>
        </Text>
      </Flex>
      <BarList data={formattedData} className='mt-2' />
    </Card>
  );
};

export default TremBarCompCount;
