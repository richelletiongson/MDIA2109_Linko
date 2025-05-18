"use client";

import { useState } from "react";
import { WarningMessage, GetStartedModal } from "../.components/Modal/modal";
import { Button } from "../.components/buttons";

export default function Page() {
    const [showWarning, setShowWarning] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <main
            style={{ padding: "2rem", background: "#222", minHeight: "100vh" }}>
            <button onClick={() => setShowWarning(!showWarning)}>
                Toggle Warning
            </button>

            <button onClick={() => setShowModal(true)}>Show Modal</button>

            {showWarning && (
                <div style={{ marginTop: "2rem" }}>
                    <WarningMessage
                        message='Please write an answer to continue !'
                        type='error'
                        size='medium'
                    />
                </div>
            )}

            {showModal && (
                <GetStartedModal
                    isOpen={true}
                    size='small'
                    footer={
                        <Button
                            type='pink'
                            size='small_round'
                            buttonText='>'
                        />
                    }>
                    Cool! Let's move on to the next step
                    <br />
                    and get to know you better
                </GetStartedModal>
            )}
        </main>
    );
}
