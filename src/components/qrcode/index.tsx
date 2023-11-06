import classNames from 'classnames'
import Image from 'next/image'
import styles from './index.module.scss'

interface Props {
  /**
   * wechat - 公众号
   * wecom - 企业微信
   * tiktok - 抖音版
   */
  name: 'wechat' | 'wecom' | 'tiktok'
  size?: number
  alt?: string
  className?: string
}

const QRCodeImage = ({ name, alt = '二维码', size = 72, className = '' }: Props) => {
  let src = ''
  switch (name) {
    case 'wecom':
      src = '/static/qrcode/wecom.png'
      break
    case 'tiktok':
      src = '/static/qrcode/tiktok.png'
      break
    case 'wechat':
    default:
      src = '/static/qrcode/wechat.png'
      break
  }
  return <Image className={classNames(styles.qrcode, className)} src={src} alt={alt} width={size} height={size} />
}

export default QRCodeImage
