import React, { useState, useEffect } from "react";
import {
  fetchStartupProgress,
  StartupProgress,
} from "../services/ProgressService";

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

  return (
    <div>
      {status.loading ? <p>Loading...</p> : null}
      {status.error ? (
        <p>Whoops, something went wrong on our servers...</p>
      ) : null}
      {status.finish ? <p>Finish</p> : null}

      {status.edit ? (
        <>
          <h1>{progress.name}</h1>
          <div>{JSON.stringify(progress.stages, null, 2)}</div>
        </>
      ) : null}
    </div>
  );
};

export default ProgressPanel;
