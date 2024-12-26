import React, { FC } from "react";
import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onLoadMore: () => void;
  disabled?: boolean;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onLoadMore, disabled }) => {
  return (
    <div className={s.buttonBox}>
      <button onClick={onLoadMore} className={s.loadMore} disabled={disabled}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
