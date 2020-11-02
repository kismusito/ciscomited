import React, { useState } from "react";
import Timer from "react-compound-timer";
import { PlayArrow, Stop, RotateLeft, Pause } from "@material-ui/icons";
import { TextField } from "@material-ui/core";
import moment from "moment";

const TimerComponent = (_) => {

    const [finishDate , setFinishDate] = useState(moment().format("YYYY-MM-DDTkk:mm"));

    function updateActualTime() {
        setInterval(_ => {
            const actualDate = moment().format("YYYY-MM-DDTkk:mm");
            setFinishDate(actualDate)
        } , 60000)
    }

    return (
        <div className="rows center_elements mb-4">
            <div className="col_6 text_fields_dates">
                <TextField
                    id="datetime-local"
                    label="Inicio de la reunión"
                    type="datetime-local"
                    defaultValue={moment().format("YYYY-MM-DDTkk:mm")}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="datetime-local"
                    label="Fin de la reunión"
                    type="datetime-local"
                    value={finishDate}
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </div>
            <div className="col_6">
                <Timer
                    initialTime={0}
                    startImmediately={false}
                    onStart={() => updateActualTime()}
                    onResume={() => console.log("onResume hook")}
                    onPause={() => console.log("onPause hook")}
                    onStop={() => console.log("onStop hook")}
                    onReset={() => console.log("onReset hook")}
                >
                    {({ start, pause, stop, reset }) => (
                        <React.Fragment>
                            <div className="timer_container">
                                <div className="timer">
                                    <Timer.Days /> : <Timer.Hours /> : <Timer.Minutes /> :{" "}
                                    <Timer.Seconds />
                                </div>
                                {/* <div className="status:timer">{getTimerState()}</div> */}
                                <div className="timer_actions">
                                    <button onClick={start}>
                                        <PlayArrow />
                                    </button>
                                    <button onClick={pause}>
                                        <Pause />
                                    </button>
                                    <button onClick={stop}>
                                        <Stop />
                                    </button>
                                    <button onClick={reset}>
                                        <RotateLeft />
                                    </button>
                                </div>
                            </div>
                        </React.Fragment>
                    )}
                </Timer>
            </div>
        </div>
    );
};

export default TimerComponent;
