import React from "react";
import * as Select from "@radix-ui/react-select";
import ChevronDownIcon from "@/public/icons/icon-chevron-down.svg";

type SelectProps = {
  label: string;
  defaultValue: string;
  options: { name: string; value: string }[];
  name: string;
};

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default ({ label, defaultValue, name, options }: SelectProps) => {
  return (
    <label className=" text-darkgray block">
      <span className="block mb-1 text-body-s">{label}</span>
      <Select.Root defaultValue={defaultValue} name={name}>
        <Select.Trigger className="bg-white rounded-lg w-full border border-borders p-2 text-left hover:border-purple hover:shadow-purple-blur  transition-all outline-none inline-flex justify-between items-center pr-4">
          <Select.Value placeholder="Select a platform..." />
          <Select.Icon>
            <ChevronDownIcon className="w-4" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            position="popper"
            className="overflow-hidden bg-white shadow-lg rounded-lg border border-borders mt-2 w-[var(--radix-select-trigger-width)]"
          >
            <Select.Viewport className="p-1">
              {options.map((option, index) => (
                <React.Fragment key={`${option.name}-${index}`}>
                  <Select.Item
                    className="p-2 hover:bg-lightgray outline-none rounded-lg transition-colors cursor-pointer"
                    value={option.value}
                  >
                    <Select.ItemText>{option.name}</Select.ItemText>
                  </Select.Item>
                </React.Fragment>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </label>
  );
};
