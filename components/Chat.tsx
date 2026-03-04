"use client"

import { useState } from "react"

export default function Chat() {
  const [msg, setMsg] = useState("")
  const [reply, setReply] = useState("")

  const send = async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: msg }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await res.json()
    setReply(data.reply)
    setMsg("")
  }

  return (
    <div className="fixed bottom-5 right-5 bg-slate-900 p-4 rounded-xl w-64 shadow-2xl z-40">
      <input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Ask me anything..."
        className="w-full mb-2 p-2 bg-black text-white rounded"
        onKeyDown={(e) => e.key === "Enter" && send()}
      />
      <button onClick={send} className="bg-blue-600 px-3 py-1 rounded w-full hover:bg-blue-700 transition">
        Send
      </button>
      {reply && <p className="mt-2 text-sm text-gray-400">{reply}</p>}
    </div>
  )
}
