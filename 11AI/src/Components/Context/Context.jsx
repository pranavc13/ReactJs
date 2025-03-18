import { createContext, useState } from "react"; // Import useState
import runChat from "../Config/config";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [resultData, setResultData] = useState("");
    const [loading, setLoading] = useState(false);
    const [theme, setTheme] = useState("light"); // Add theme state

    // Function to toggle theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const onSent = async (prompt) => {
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);
        setPrevPrompts(prev=>[...prev,input])
        try {
            const response = await runChat(prompt);
            let responseArray = response.split("*");
            let newResponse = "";
            for (let i = 0; i < responseArray.length; i++) {
                if (i === 0 || i % 2 !== 1) {
                    newResponse += responseArray[i];
                } else {
                    newResponse += "<b>" + responseArray[i] + "</b>";
                }
            }
            setResultData(newResponse);
        } catch (error) {
            console.error("Error in onSent:", error);
            setResultData("An error occurred while processing your request.");
        } finally {
            setLoading(false);
            setInput("");
        }
    };

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        theme, // Add theme to context
        toggleTheme, // Add toggleTheme function to context
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;