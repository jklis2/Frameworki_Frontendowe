import { FC, HtmlHTMLAttributes, useState } from "react";

interface Props {
  userId: number;
  idHandleChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const AlbumFilter: FC<Props> = (Props) => {
  return (
    <div className="form-container d-flex justify-content-center">
      <form>
        <input
          className="input-search"
          type="text"
          placeholder="Type id of user"
          onChange={Props.idHandleChange}
        ></input>
      </form>
    </div>
  );
};
