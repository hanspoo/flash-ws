import styles from './react-comps.module.css';

/* eslint-disable-next-line */
export interface ReactCompsProps {}

export function ReactComps(props: ReactCompsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactComps!</h1>
    </div>
  );
}

export default ReactComps;
