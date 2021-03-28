import Message from "components/Chat/Message";

export default function Chat(): JSX.Element {
  const messages = [
    { name: "A san", message: "Hey How are you today?", isMe: false, id: 1 },
    {
      name: "A san",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicingelit. \nVel ipsa commodi illum saepe numquam maxime asperiores voluptate sit, minima perspiciatis.",
      isMe: false,
      id: 2,
    },
    {
      name: "B san",
      message: "I'm ok what about you?",
      isMe: true,
      id: 3,
    },
    {
      name: "B san",
      message: "Lorem ipsum dolor sit, amet consectetur adipisicing. ?",
      isMe: true,
      id: 4,
    },
    {
      name: "A san",
      message: "Lorem ipsum dolor sit amet !",
      isMe: false,
      id: 5,
    },
    {
      name: "B san",
      message: "Lorem ipsum dolor sit, amet consectetur adipisicing. ?",
      isMe: true,
      id: 6,
      isSeen: true,
    },
    {
      name: "A san",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing",
      isMe: false,
      id: 7,
    },
  ];

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row w-full h-full overflow-x-hidden">
        <div className="flex flex-col flex-auto h-full p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 h-full p-4 bg-gray-100 rounded-2xl">
            <div className="flex flex-col h-full mb-4 overflow-x-auto">
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">
                  {messages.map((message) => {
                    return (
                      <Message
                        name={message.name}
                        message={message.message}
                        isMe={message.isMe}
                        key={message.id}
                        isSeen={message.isSeen}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center w-full h-16 px-4 bg-white rounded-xl">
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="flex w-full h-10 pl-4 border rounded-xl focus:outline-none focus:border-indigo-300"
                  />
                </div>
              </div>
              <div className="ml-4">
                <button className="flex items-center justify-center flex-shrink-0 px-4 py-1 text-white bg-indigo-500 hover:bg-indigo-600 rounded-xl">
                  <span>Send</span>
                  <span className="ml-2">
                    <svg
                      className="w-4 h-4 -mt-px transform rotate-45"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
