import { ModalBackdrop, ModalContent, ModalDialog, ModalWrapper } from '@/style/modal'

const Modal = ({active, maxwidth, children}) => {
  return (
    <div>
      <ModalBackdrop $active={active} />
      <ModalWrapper $active={active}>
        <ModalDialog>
          <ModalContent $maxWidth={maxwidth}>
            {children}
          </ModalContent>
        </ModalDialog>
      </ModalWrapper>
    </div>
  )
}

export default Modal