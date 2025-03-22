import React, { useState } from "react";
// import axios from "axios";

interface ChatMessage {
  user: string;
  message: string;
}

const Chatbot: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { user: "Trevor Salamanca", message: "Hello! How can I assist you today?" },
    { user: "You", message: "What is the stock price of Apple?" },
    {
      user: "Trevor Salamanca",
      message:
        "The latest stock price of Apple is $178.50.The latest stock price of Apple is $178.50.The latest stock price of Apple is $178.50.The latest stock price of Apple is $178.50.The latest stock price of Apple is $178.50.The latest stock price of Apple is $178.50.",
    },
    { user: "You", message: "Thank you! Can you give investment tips?" },
    {
      user: "Trevor Salamanca",
      message: "Sure! Diversify your investments and think long-term.",
    },
  ]);
  const [loading, setLoading] = useState<boolean>(false);

  const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userInput.trim()) return;

    const newChat: ChatMessage = { user: "You", message: userInput };
    const updatedChatHistory = [...chatHistory, newChat];
    setChatHistory(updatedChatHistory);
    setUserInput("");
    setLoading(true);

    // try {
    //   const response = await axios.post("/api/v1/chat", { userInput });
    //   setChatHistory([
    //     ...updatedChatHistory,
    //     { user: "Trevor Salamanca", message: response.data.response },
    //   ]);
    // } catch (error) {
    //   console.error("Error:", error);
    //   setChatHistory([
    //     ...updatedChatHistory,
    //     {
    //       user: "System",
    //       message: "Error sending message. Please try again later.",
    //     },
    //   ]);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="h-full w-full flex flex-col text-gray-200">
      {/* Chat Messages */}
      <div className="flex flex-col-reverse overflow-hidden flex-grow px-4 py-2">
        {chatHistory
          .slice()
          .reverse()
          .map((chat, index) => (
            <div
              key={index}
              className={` ${chat.user === "You" ? "text-right" : "text-left"}`}
            >
              <div
                className={`inline-block px-4 py-2 my-1 border shadow-xl ${
                  chat.user === "You"
                    ? "bg-zinc-800 border-zinc-700 rounded-l-xl rounded-t-xl"
                    : "bg-emerald-800 border-emerald-700 rounded-r-xl rounded-t-xl"
                }`}
              >
                <h3 className="text-xs">{chat.message}</h3>
              </div>
            </div>
          ))}
      </div>

      {/* Input Field Fixed at Bottom */}
      <div className="p-4 border-t border-zinc-700">
        <form onSubmit={sendMessage} className="flex">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="flex-grow border text-gray-300 text-sm border-zinc-600 bg-zinc-700 p-2 rounded-l-lg focus:outline-none focus:border-gray-500"
            placeholder="Enter your message"
          />
          <button
            type="submit"
            className="bg-emerald-800 hover:bg-green-500 text-white px-3 border text-sm border-emerald-700 rounded-r-lg"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
