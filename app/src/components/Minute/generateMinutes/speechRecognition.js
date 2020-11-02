import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { MicNoneOutlined, MicOffOutlined } from "@material-ui/icons";
import JoditEditor from "jodit-react";

const Dictaphone = () => {
    const { transcript } = useSpeechRecognition();
    const [selectedButton, setSelectedButton] = useState("stop");

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
    }

    const buttonClass = "button_generate_citation center_elements";

    return (
        <div>
            <div className="center_elements justify_right mb-4">
                <button
                    className={
                        selectedButton === "start"
                            ? buttonClass + " selected_print_color"
                            : buttonClass
                    }
                    onClick={() => {
                        SpeechRecognition.startListening({ language: "es-CO", continuous: true });
                        setSelectedButton("start");
                    }}
                >
                    Empezar grabación
                    <MicNoneOutlined />
                </button>
                <button
                    className={
                        selectedButton === "stop"
                            ? buttonClass + " selected_print_color"
                            : buttonClass
                    }
                    onClick={() => {
                        SpeechRecognition.stopListening();
                        setSelectedButton("stop");
                    }}
                >
                    Parar grabación
                    <MicOffOutlined />
                </button>
            </div>
            <JoditEditor
                value={transcript}
            />
        </div>
    );
};
export default Dictaphone;
