import styles from '../index.less';

export default function IndexPage() {
  console.log('process.env:',process,process.env);
  return (
    <div>
      <h1 className={styles.title}>user inner</h1>
    </div>
  );
}

