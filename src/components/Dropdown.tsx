"use client";

import React, { useState } from "react";
import ArrowDownIcon from "./ArrowDownIcon";

type Option = {
  label: { className?: string; value: string };
  description?: string;
  icon?: React.ReactNode;
  value: string;
};

type DropdownProps = {
  options: Option[];
  btnClassName?: string;
  className?: string;
  iconEnabled?: boolean;
  arrowFill?: string;
  hasLine?: boolean;
  descriptionClass?: string;
  itemsClass?: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  btnClassName,
  className,
  iconEnabled = true,
  arrowFill = "white",
  hasLine = true,
  descriptionClass = "",
  itemsClass = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="relative">
      <button
        className={`flex items-center  w-fit p-1.5 ${btnClassName}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected?.icon && iconEnabled ? (
          <span className="mr-[10.5px]">{selected?.icon}</span>
        ) : null}
        <span className="font-[500]">{selected?.value}</span>
        <span className="w-[18px] flex justify-center">
          <ArrowDownIcon fill={arrowFill} />
        </span>
      </button>

      {isOpen && (
        <div
          className={`absolute mt-2 z-50 left-1/2 -translate-x-1/2 rounded-[14px] px-[6px]  w-fit ${className}`}
        >
          {options?.map((option: Option, index) => (
            <>
              <div
                key={option.label.value}
                className={`flex items-center   gap-x-[8.5px] pr-[34px]  cursor-pointer ${itemsClass}`}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
              >
                <span className="flex justify-center h-full items-start">
                  {option.icon}
                </span>
                <div className="text-[14px]">
                  <p className={`text-nowrap ${option?.label?.className}`}>
                    {option?.label?.value}
                  </p>
                  <p className={`text-nowrap ${descriptionClass}`}>
                    {option?.description}
                  </p>
                </div>
              </div>
              {index < options.length - 1 && hasLine ? (
                <div className="h-[1px] mx-auto bg-gray-600  w-[95%]" />
              ) : null}
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
