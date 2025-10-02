import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { MdClose } from "react-icons/md";
import Modal from "react-modal";

type ModalContextType = {
  isOpen: boolean;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "70%",
      padding: "40px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(2px)",
    },
  };

  const openModal = (c: ReactNode) => {
    setContent(c);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}

      <div className="relative">
        <Modal
          onRequestClose={closeModal}
          ariaHideApp={false}
          style={customStyles}
          isOpen={isOpen}
          contentLabel="Example Modal"
        >
          <div>
            <button
              aria-label="Close modal"
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 cursor-pointer hover:text-red-400"
            >
              <MdClose size={25} />
            </button>
            {content}
          </div>
        </Modal>
      </div>
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used inside ModalProvider");
  return context;
}
