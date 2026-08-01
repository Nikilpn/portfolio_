import { useEffect, useRef, useState } from "react";

import { FaTimes, FaRobot, FaMicrophone, FaVolumeUp } from "react-icons/fa";

import knowledgeBase from "../../data/assistantData";

import "./Assistant.css";

function Assistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  const chatBodyRef = useRef(null);
  const lastBotMessageRef = useRef(null);

  const speak = (text) => {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  const getAnswer = (question) => {
    const q = question.toLowerCase();

    for (const [topic, keywords] of Object.entries(knowledgeBase.topics)) {
      if (keywords.some((keyword) => q.includes(keyword))) {
        return knowledgeBase.responses[topic];
      }
    }

    return knowledgeBase.fallback;
  };

  const addMessage = (text, from) => {
    setMessages((prev) => [...prev, { text, from }]);
  };

  const handleSend = (rawText) => {
    const text = (rawText || input).trim();
    if (!text || typing) return;

    addMessage(text, "user");
    setInput("");
    setTyping(true);

    setTimeout(() => {
      addMessage(getAnswer(text), "bot");
      setTyping(false);
    }, 800);
  };

  useEffect(() => {
    if (!open) return;

    const initialGreeting = knowledgeBase.greeting[0];

    const timer = setTimeout(() => {
      setMessages([{ text: initialGreeting, from: "bot" }]);
    }, 600);

    return () => clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, typing]);

  useEffect(() => {
    const el = lastBotMessageRef.current;
    if (!el) return;

    const speakOnce = () => {
      if (el.dataset.spoken === "true") return;
      el.dataset.spoken = "true";
      speak(el.textContent);
    };

    el.addEventListener("mouseenter", speakOnce);
    return () => el.removeEventListener("mouseenter", speakOnce);
  }, [messages]);

  const quickReplies = [
    "What are Nikhil's skills?",
    "What projects has he built?",
    "Tell me about his experience",
    "How can I contact him?"
  ];

  return (
    <>
      <button
        className={`assistant-fab ${open ? "assistant-fab-open" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open AI assistant"
      >
        {open ? <FaTimes /> : <FaRobot />}
      </button>

      {open && (
        <div className="assistant-panel hologram">
          <div className="assistant-header">
            <div className="assistant-avatar">
              <FaRobot />
              <span className="assistant-pulse" />
            </div>

            <div className="assistant-header-text">
              <h3>Nova - AI Assistant</h3>

              <p>Holographic guide · Online</p>
            </div>

            <button
              className={`assistant-voice-btn ${speaking ? "active" : ""}`}
              onClick={() => (speaking ? stopSpeaking() : speak(messages[messages.length - 1]?.text || ""))}
              aria-label="Toggle voice"
            >
              <FaVolumeUp />
            </button>
          </div>

          <div className="assistant-scanline" />

          <div className="assistant-body" ref={chatBodyRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`assistant-msg ${msg.from === "bot" ? "bot" : "user"}`}
              >
                <div
                  className="assistant-bubble"
                  ref={
                    msg.from === "bot" && index === messages.length - 1
                      ? lastBotMessageRef
                      : undefined
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="assistant-msg bot">
                <div className="assistant-bubble typing-bubble">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}
          </div>

          <div className="assistant-quick-replies">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => handleSend(reply)}
              >
                {reply}
              </button>
            ))}
          </div>

          <div className="assistant-footer">
            <input
              type="text"
              placeholder="Ask about skills, projects, contact..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />

            <button
              className="assistant-send-btn"
              onClick={() => handleSend()}
              aria-label="Send message"
            >
              <FaMicrophone />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Assistant;
