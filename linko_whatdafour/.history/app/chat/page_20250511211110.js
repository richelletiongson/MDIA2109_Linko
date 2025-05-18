"use client";

import { useState } from "react";
import { WarningMessage } from "../.components/Modal/modal";

export default function Page() {
    const [showWarning, setShowWarning] = useState(false);

    return (
        <main
            style={{ padding: "2rem", background: "#222", minHeight: "100vh" }}>
            <button onClick={() => setShowWarning(!showWarning)}>
                Toggle Warning
            </button>

            {showWarning && (
                <div style={{ marginTop: "2rem" }}>
                    <WarningMessage
                        message='Please write an answer to continue !'
                        type='error'
                        size='medium'
                    />
                </div>
            )}
        </main>
    );
}

import { GetStartedModal } from "../.components/Modal/modal";
import { Button } from "../.components/buttons";

export default function Page() {
  return (
    <GetStartedModal isOpen={true}>
      <>
        Cool! Let’s move on to the next step<br />
        and get to know you better
        <div style={{ marginTop: "1.5rem" }}>
          <Button type="pink" size="small_round" buttonText=">" />
        </div>
      </>
    </GetStartedModal>
  );
}
