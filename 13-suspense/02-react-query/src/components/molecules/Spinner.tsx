import { FC } from "react";

const Spinner: FC = () => (
  <button type="button" className="bg-indigo-500 ..." disabled>
    <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
    読み込み中...
  </button>
);

export default Spinner;
