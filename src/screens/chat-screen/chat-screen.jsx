import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ChatHeads from "../../components/chatheads/chatHeads";
import Conversation from "../../components/conversation/conversation";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import "./chat-screen.css";

export default function ChatScreen({ setUser, user }) {
  let history = useHistory();

  const [chatHeads, setChatHeads] = useState([]);
  const [receiver, setReceiver] = useState(null);

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) setUser(user);
    else history.push("/");
  }, [history, setUser]);

  React.useEffect(() => {
    if (!user) return;

    (async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      setChatHeads(
        querySnapshot.docs
          .map((doc) => doc.data())
          .filter((obj) => obj.uid !== user.uid)
      );
    })();
  }, [user]);

  return (
    <div className="chat-screen">
      {/* chatHeads */}
      <div className="half-screen chat-heads">
        <ChatHeads items={chatHeads} setReceiver={setReceiver} />
      </div>
      {/* conversation */}
      <div className="half-screen">
        <Conversation receiver={receiver} user={user} />
      </div>
    </div>
  );
}
