import React, { useState, useEffect } from "react";
import {
  fetchStartupProgress,
  StartupProgress,
  StartupStage,
} from "../services/ProgressService";
import ProgressStage from "./ProgressStage";

interface PanelStatus {
  loading?: boolean;
  error?: boolean;
  edit?: boolean;
  finish?: boolean;
}

const ProgressPanel = () => {
  const [progress, setStartupProgress] = useState({} as StartupProgress);
  const [status, setStatus] = useState({} as PanelStatus);

  useEffect(() => {
    setStatus({ loading: true });
    fetchStartupProgress()
      .then((progress) => {
        setStartupProgress(progress);
        setStatus({ edit: true });
      })
      .catch((_err) => setStatus({ error: true }));
  }, []);

  const onStageChange = (index: number, stage: StartupStage) => {
    const { name, stages } = progress;
    stages[index] = stage;
    setStartupProgress({ name, stages });
    console.warn(progress);
  };

  return (
    <div className="w-80 p-10 bg-white shadow-lg rounded">
      {status.loading ? <p>Loading...</p> : null}
      {status.error ? (
        <p>Whoops, something went wrong on our servers...</p>
      ) : null}
      {status.finish ? <p>Finish</p> : null}

      {status.edit ? (
        <>
          <h1 className="font-bold text-xl mb-5 select-none">
            {progress.name}
          </h1>
          <ol>
            {progress.stages.map((stage, index) => (
              <ProgressStage
                index={index}
                stage={stage}
                key={`stage-${index}`}
                onChange={onStageChange}
              />
            ))}
          </ol>
        </>
      ) : null}
    </div>
  );
};

export default ProgressPanel;
