import React from "react";

const Room = ({
  username,
  room,
  setUsername,
  setRoom,
  setChatScreen,
  socket,
}) => {
  const sendRoom = () => {
    socket.emit("room",room);
    setChatScreen(true);
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="rounded-lg w-1/3 h-[300px] bg-indigo-600 flex flex-col space-y-4 p-3">
        <h1 className="text-center my-4 font-bold text-2xl">Welcome to chat</h1>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="h-12 rounded-xl p-3 outline-none"
          type="text"
          placeholder="Username"
        />
        <input
          onChange={(e) => setRoom(e.target.value)}
          value={room}
          className="h-12 rounded-xl p-3 outline-none"
          type="text"
          placeholder="Room"
        />
        <div
          onClick={sendRoom}
          className=" tracking-wider hover:opacity-80 cursor-pointer text-white bg-indigo-900 h-12 pt-2 text-xl text-center rounded-xl"
        >
          CHAT!!!
        </div>
      </div>
    </div>
  );
};

export default Room;
