import { useEffect, useState } from "react";
// import {
//     PropertyStructure,
//     useGlobalAllContext,
// } from "../context/allPropertiesContext";

const Icon = () => {
    return (
        <svg height="20" width="20" viewBox="0 0 20 20">
            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
        </svg>
    );
};

export const Dropdown = ({
    type,
    placeHolder,
    specifications,
}) => {
    const [showMenu, setShowMenu] = useState(false);
    const [lists, setLists] = useState([]);
    const [selectedValue, setSelectedValue] = useState({
        value: "",
        label: "",
        type: "",
    });

    const allList = [
        { value: "v1", label: "V1 2L", type: "engin" },
        { value: "v2", label: "V2 3.6L", type: "engin" },
        { value: "v3", label: "V3 2.2L", type: "engin" },
        { value: "v4", label: "V4 4.1L", type: "engin" },
        { value: "v5", label: "V5 3L", type: "engin" },
        { value: "leather", label: "Leather", type: "material" },
        { value: "cotton", label: "Cotton", type: "material" },
        { value: "green", label: "Green", type: "color" },
        { value: "blue", label: "Blue", type: "color" },
        { value: "red", label: "Red", type: "color" },
        { value: "yellow", label: "Yellow", type: "color" },
        { value: "pink", label: "Pink", type: "color" },
        { value: "purple", label: "Purple", type: "color" },
        { value: "grey", label: "Grey", type: "color" },
        { value: "16", label: "16 inches", type: "wheel" },
        { value: "18", label: "18 inches", type: "wheel" },
        { value: "20", label: "20 inches", type: "wheel" },
        { value: "22", label: "22 inches", type: "wheel" },
        { value: "bbs", label: "BBS", type: "wheelType" },
    ];

    console.log(allList)

    useEffect(() => {
        if (showMenu) {
            setLists(allList.filter((item) => item.type === type));
        }
    }, [showMenu]);

    // useEffect(() => {
    //   const handler = () => {
    //     setShowMenu(false);
    //   };
    //   console.log("h", handler);
    //   window.addEventListener("click", handler);
    //   return () => {
    //     window.removeEventListener("click", handler);
    //   };
    // }, []);

    useEffect(() => {
        if (specifications.length === 0) {
            setSelectedValue({
                value: "",
                label: "",
                type: "",
            });
        }
    }, [specifications]);

    const handleInputclick = (e) => {
        setShowMenu(!showMenu);
    };

    const getDisplay = () => {
        if (selectedValue.label === "" || specifications.length === 0) {
            return placeHolder;
        }
        return selectedValue.label;
    };

    const onItemClick = (option) => {
        setSelectedValue(option);
        if (specifications) {
            // let index = specifications.findIndex((item) => item.type === option.type);
            // if (index === -1) {
            //     setSpecifications([...specifications, option]);
            // } else {
            //     specifications[index] = option;
            //     setSpecifications(specifications);
            // }
        }
        setShowMenu(false);
    };

    const isSelected = (option) => {
        if (!selectedValue) {
            return false;
        }
        return selectedValue.value === option.value;
    };

    return (
        <div
            id="dropDown"
            className="text-left relative border-2 border-primary-dark rounded-md bg-white"
        >
            <div
                id="dropDownInput"
                className="p-[5px] flex items-center justify-between select-none"
                onClick={handleInputclick}
            >
                <div>{getDisplay()}</div>
                <div id="dropIcon" className="cursor-pointer">
                    <Icon />
                </div>
            </div>
            {showMenu && (
                <div className="absolute bg-white max-h-20 w-full border-[1px] border-primary-dark rounded-md overflow-auto translate-y-1">
                    {lists.map((list) => (
                        <div
                            className={`p-[5px] cursor-pointer bg-[#9fc3f870] ${isSelected(list) && "bg-[#0d6efd] text-white"
                                }`}
                            key={list.value}
                            onClick={() => onItemClick(list)}
                        >
                            {list.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
