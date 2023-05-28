import React, { useState } from "react";
import "./Modal.css";

const Modal = () => {
  // モーダルの表示、非表示の状態管理。初期はfalseにする
  const [isOpen, setIsOpen] = useState(false);

  // モーダルの表示、非表示を切り替える
  const toggleModal = () => {
    // isOpenをtrueに切り替える
    setIsOpen(!isOpen);
  };

  // 背景クリックでモーダルを閉じる
  const closeModal = () => {
    setIsOpen(false);
  };

  // モーダルの内部クリックでもモーダルが閉じるの防ぐ処理
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <button onClick={toggleModal}>モーダルを開く</button>

      {/* isOpenがtrueの場合、モーダルを表示する */}
      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modalContent" onClick={handleModalContentClick}>
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
