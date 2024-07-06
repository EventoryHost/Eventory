import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  id: string;
  type: string;
  value: string | number | readonly string[] | undefined;
  onChangeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
};

const TextArea = (props: Props) => {
  return (
    <input
      id={props.id}
      type={props.type}
      className={cn(
        "w-full rounded-xl border-2 bg-white p-5 py-3 outline-none",
        props.className,
      )}
      placeholder="Re-Enter your password"
      value={props.value}
      onChange={props.onChangeFunction}
    />
  );
};

export default TextArea;
