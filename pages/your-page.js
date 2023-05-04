import fs from 'fs';
import path from 'path';

function MyPage({ data }) {
  return (
    <div>
      <h1>{data.record.name}</h1>
      <p>ID: {data.record.id}</p>
      <p>UID: {data.record.uid}</p>
      {/* <p>Language: {data.record.language}</p> */}
    </div>
  );
}

export async function getStaticProps() {
  try {
    const filePath = path.join(process.cwd(), 'json', 'data.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileData);

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error reading JSON file:', error);

    return {
      notFound: true,
    };
  }
}

export default MyPage;
