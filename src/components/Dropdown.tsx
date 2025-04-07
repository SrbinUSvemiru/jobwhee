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
  arrowClassName?: string;
  isSearchBar?: boolean;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  btnClassName,
  arrowClassName,
  className,
  iconEnabled = true,
  arrowFill = "white",
  hasLine = true,
  descriptionClass = "",
  itemsClass = "",
  isSearchBar = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="relative">
      <button
        className={`flex items-center relative ${btnClassName} ${
          isSearchBar && !isOpen ? "bg-transparent border-0" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isSearchBar && !isOpen ? (
          <div className="absolute h-[22.5px] w-[1px] left-[0px]   -translate-x-1/2  bg-[#737373] "></div>
        ) : null}
        {selected?.icon && iconEnabled ? (
          <span className="mr-[10.5px]">{selected?.icon}</span>
        ) : null}
        <span className="font-[500]">{selected?.value}</span>
        <span className=" flex justify-center">
          {isOpen ? (
            <ArrowDownIcon
              className={`rotate-180 ${arrowClassName}`}
              fill={arrowFill}
            />
          ) : (
            <ArrowDownIcon className={arrowClassName} fill={arrowFill} />
          )}
        </span>
      </button>

      {isOpen && (
        <div
          className={`absolute  z-50  rounded-[14px] px-[6px]  ${className}`}
        >
          {options?.map((option: Option, index) => (
            <div key={option.label.value}>
              <div
                key={option.label.value}
                className={`flex items-start  gap-x-[8.5px]   cursor-pointer ${itemsClass}`}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
              >
                <span className="flex justify-center h-fit items-start">
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
