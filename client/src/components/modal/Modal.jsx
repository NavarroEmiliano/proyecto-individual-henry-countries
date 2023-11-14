/* eslint-disable react/prop-types */
import styles from "./Modal.module.css"
const Modal = ({message}) => {
  return (
    <div className={styles.modal}>{message}</div>
  )
}

export default Modal