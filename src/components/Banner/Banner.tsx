import styles from './Banner.module.scss';
import banner from '../../assets/images/banner.jpeg';

export const Banner = () => {
  return <img src={banner} className={styles.banner} />;
};
