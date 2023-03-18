import { CSSProperties, useState } from "react";
import { isLightColor } from "../utils";

export const FindColor = () => {
  const [color, setColor] = useState<string | undefined>();

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const allValues = inputValue.split(" ");
    const s = new Option().style;

    const findLastColor = allValues?.reverse()?.find((value) => {
      s.color = value;
      return s.color !== "";
    });
    setColor(findLastColor);
  };

  return (
    <>
      <input
        onChange={onChangeInput}
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      {color && (
        <div
          className="h-40 w-44 flex justify-center items-center m-4 rounded-xl"
          style={styles.card(color)}
        >
          <p
            className={`text-base font-medium ${
              isLightColor(color) ? "text-black" : "text-white"
            }`}
          >
            {color}
          </p>
        </div>
      )}
    </>
  );
};

interface StylesType {
  card: (color: string) => CSSProperties;
}

const styles: StylesType = {
  card: (color) => ({
    backgroundColor: color,
  }),
};
