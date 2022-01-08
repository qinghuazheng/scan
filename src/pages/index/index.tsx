import { IGetInitialProps } from 'umi';
import styles from './index.less';

const IndexPage = (props) => {
  const { data } = props;
  console.log('process.env:', process, process.env);
  return (
    <div>
      <h1>hello world</h1>
      <h1 className={styles.title}>{data.title}</h1>
    </div>
  );
}

IndexPage.getInitialProps = (async (ctx) => {
  return Promise.resolve({
    data: {
      title: 'Hello World',
    }
  })
}) as IGetInitialProps;

export default IndexPage;
