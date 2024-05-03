import { ModalProps } from "../types";

const ConfirmModal = ({ checkChoice, close, modalRef }: ModalProps) => {
  return (
    <dialog id="my_modal_4" className="modal" ref={modalRef}>
      <div className="modal-box w-11/12 max-w-5xl bg-black border border-4 border-sky-400">
        <div className="bg-cover bg-center bg-no-repeat h-full w-full ">
          <p className="text-white text-4xl py-6">Is that your final answer?</p>
          <div className="flex space-x-6 justify-center items-end">
            <button
              className="bg-black h-12 w-32 h border border-2 border-sky-400 text-white rounded-xl hover:scale-110 hover:bg-green-500"
              onClick={checkChoice}
            >
              YES
            </button>
            <div className="modal-action">
              <form method="dialog">
                <button
                  className="bg-black h-12 w-32 h border border-2 border-sky-400 text-white rounded-xl hover:scale-110 hover:bg-green-500"
                  onClick={close}
                >
                  NO
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ConfirmModal;
