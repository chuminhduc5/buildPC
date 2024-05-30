import React, { useState } from "react";
import RenderBuildPC from "./RenderBuildPC";
import '../Style/CustomBuildPC.css'


export default function CustomBuildPC() {
    const [isBuildPC, setBuildPC] = useState(false);
    const [money, setMoney] = useState(0);
    const [loading, setLoading] = useState(false);
    const [option] = useState([
        { id: "1", option: "Gaming" },
        { id: "2", option: "Workstation" }
    ]);

    const [selectedOption, setselectedOption] = useState("Gaming");

    const handleBuildPC = (event) => {
        event.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setBuildPC(!isBuildPC);
        }, 3000);
    };

    const handleStartOver = (event) => {
        setMoney(0);
        setBuildPC(false);
    };

    return (
        <>
            {loading ?
                <div className="div-loading"><span className="span-loading">Đang tiến hành chọn lựa linh kiện phù hợp ...</span></div>
                :
                (
                    isBuildPC === true ?
                        <RenderBuildPC money={money} selectedOption={selectedOption} handleStartOver={handleStartOver} />
                        :
                        <form>
                            <label htmlFor="money">How many dollars you want to spend?</label>
                            <div className="inputMoney">
                                <input type="number" value={money} onChange={(event) => setMoney(event.target.value)}></input>
                                <div className="iconDola">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M10.75 10.818v2.614A3.13 3.13 0 0011.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 00-1.138-.432zM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 00-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152z">
                                        </path>
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-6a.75.75 0 01.75.75v.316a3.78 3.78 0 011.653.713c.426.33.744.74.925 1.2a.75.75 0 01-1.395.55 1.35 1.35 0 00-.447-.563 2.187 2.187 0 00-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 11-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 111.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 01-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 011.653-.713V4.75A.75.75 0 0110 4z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="optionPC">
                                <label htmlFor="PCtype">PC type</label><br />
                                <select value={selectedOption} onChange={(event) => setselectedOption(event.target.value)}>
                                    {option && option.map((item) => {
                                        return (
                                            <option key={item.id} value={item.option}>{item.option}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="text-more-option">
                                <span>More options coming soon...</span>
                            </div>
                            <div className="button">
                                <button onClick={(event) => handleBuildPC(event)}>Get my PC</button>
                            </div>
                        </form>
                )}
        </>
    );
}
