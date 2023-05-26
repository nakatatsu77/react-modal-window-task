import "./Modal.css";
import React, { useState } from "react";

const Modal = () => {
  // モーダルの表示、非表示の状態管理。初期はfalseにする
  const [isOpen, setIsOpen] = useState(false);

  // モーダルの表示、非表示を切り替える
  const toggleModal = () => {
    // isOpenをtrueに切り替える
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>モーダルを開く</button>

      {/* isOpenがtrueの場合、モーダルを表示する */}
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>モーダルウィンドウ</h2>
            <span onClick={toggleModal} className="modalClose">
              &times;
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
