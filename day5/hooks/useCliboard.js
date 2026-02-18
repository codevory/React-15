import { useState } from "react";

export const useCopyToCliboard = (text) => {
  try {
    navigator.clipboard.writeText(text).then(() => {
      console.log("Text copied successfully", text);
    });
  } catch (err) {
    console.error("Failed to copy ", err);
  }
};

export const usePasteToCliboard = () => {
  const [data, setData] = useState("");

  const paste = async () => {
    try {
      const res = await navigator.clipboard.readText();
      setData(res);
      console.log("Content pasted ", res);
    } catch (err) {
      console.error("Failed to paste ", err);
      return null;
    }
  };
  return { data, paste };
};
