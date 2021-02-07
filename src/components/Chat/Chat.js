import React, { useState, useContext, useCallback, useEffect } from "react";
import { Tooltip } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faPaperPlane, faTimes } from "@fortawesome/free-solid-svg-icons";
import { SocketContext } from "../../context/socket";

import "./styles.scss";

const Chat = () => {
	const [tooltipOpen, setTooltipOpen] = useState(false);
	const socket = useContext(SocketContext);
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);
	const [adminSocketId, setAdminSocketId] = useState(null);
	const [openChat, setOpenChat] = useState(false);

	const handleJoinChat = () => {
		setOpenChat(true);
	};

	const handleAdminJoined = useCallback((socketId) => {
		if (adminSocketId === null) setAdminSocketId(socketId);
	}, []);

	useEffect(() => {
		socket.on("admin joined", (socketId) => handleAdminJoined(socketId));

		return () => {
			socket.off("admin joined");
		};
	}, [socket]);

	const sendMessage = () => {
		setMessages([
			{
				sender: "user",
				content: input,
			},
			...messages,
		]);

		if (adminSocketId !== null) {
			socket.emit("private message", adminSocketId, input);
		} else {
			socket.emit("open new chat", input);
		}

		setInput("");
	};

	socket.on("private message", (socketId, msg) => {
		setMessages([
			{
				sender: "admin",
				content: msg,
			},
			...messages,
		]);
	});

	const handleEnter = (e) => {
		if (e.key === "Enter") {
			setMessages([
				{
					sender: "user",
					content: input,
				},
				...messages,
			]);

			if (adminSocketId !== null) {
				socket.emit("private message", adminSocketId, input);
			} else {
				socket.emit("open new chat", input);
			}

			setInput("");
		}
	};

	const onCloseChat = () => {
		setOpenChat(false);
	};

	const toggle = () => setTooltipOpen(!tooltipOpen);
	return (
		<>
			<div className="chat-icon" id="chatTooltip" onClick={handleJoinChat}>
				<FontAwesomeIcon icon={faComment} size="lg" />
			</div>
			<Tooltip placement="right" isOpen={tooltipOpen} target="chatTooltip" toggle={toggle}>
				Help desk chat
			</Tooltip>
			<div className={`chat ${openChat ? "active" : ""}`}>
				<div className="chat-header p-2 font-weight-bold dark-color border-bottom d-flex justify-content-between align-items-center">
					<div>Food Delivery Support Team</div>
					<FontAwesomeIcon icon={faTimes} size="1x" className="mr-1" onClick={onCloseChat} />
				</div>
				<div className="chat-body d-flex flex-column flex-column-reverse pt-3 px-2">
					{messages.map((message, index) => (
						<div
							key={index}
							className={`message-wrapper d-flex ${
								message.sender == "user" ? "justify-content-end" : "left"
							}`}
						>
							<div
								className={`message ${
									message.sender == "user" ? "message-user" : "message-team"
								} px-2 py-1`}
							>
								{message.content}
							</div>
						</div>
					))}
				</div>
				<div className="chat-input py-2">
					<div className="d-flex align-items-center">
						<input
							name="message"
							className="flex-grow-1 ml-2 mr-3 pl-3"
							placeholder="miben segíthetünk?"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyPress={(e) => handleEnter(e)}
							autoComplete="off"
							required
						/>
						<FontAwesomeIcon icon={faPaperPlane} onClick={sendMessage} className="mr-2" size="lg" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Chat;
