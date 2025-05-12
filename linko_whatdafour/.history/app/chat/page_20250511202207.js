"use client"; // สำหรับ Next.js 13+ ถ้าใช้ hook หรือ state

import { useState } from "react";
import { WarningMessage } from "@/components/WarningMessage";

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
