import { useRef, useState } from 'react'
import { useBodyScrollLock } from './useBodyScrollLock'
import { useClickOutside } from './useClickOutside'

export const useModal = () => {
  const [isOpened, setIsOpened] = useState(false)
  const openModal = () => setIsOpened(true)
  const closeModal = () => setIsOpened(false)
  const toggleModal = () => setIsOpened((prev) => !prev)
  const modalRef = useRef(null)
  useClickOutside([modalRef], closeModal)
  useBodyScrollLock(isOpened)

  return { isOpened, setIsOpened, openModal, closeModal, toggleModal, modalRef }
}
