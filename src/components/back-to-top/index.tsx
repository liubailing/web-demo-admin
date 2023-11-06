import BackToUp from '@uiw/react-back-to-top'
import Icon from '../icon'
import styles from './index.module.scss'

const BackToTop = () => {
  return (
    <BackToUp className={styles.backToTop} size={54} hideProgress>
      <Icon name="#icon-shang" size={42}></Icon>
    </BackToUp>
  )
}

export default BackToTop
