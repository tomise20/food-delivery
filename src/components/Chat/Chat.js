import React, { useState, useContext, useCallback, useEffect } from "react";
import { Tooltip } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { SocketContext } from "../../context/socket";
import { v4 as uuid_v4 } from "uuid";

import "./styles.scss";

const Chat = () => {
	const [tooltipOpen, setTooltipOpen] = useState(false);
	const socket = useContext(SocketContext);
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);
	const [isAdminJoinned, setIsAdminJoinned] = useState(false);
	const [joined, setJoined] = useState(false);
	const [roomId, setRoomId] = useState(uuid_v4());

	const handleInviteAccepted = useCallback(() => {
		setJoined(true);
	}, []);

	const handleJoinChat = () => {
		socket.emit("user join", roomId);
	};

	useEffect(() => {
		socket.on("join accepted", handleInviteAccepted);

		return () => {
			socket.off("join accepted", handleInviteAccepted);
		};
	}, [socket]);

	const sendMessage = () => {
		setMessages([
			...messages,
			{
				sender: "user",
				content: input,
			},
		]);

		console.log(roomId);

		if(isAdminJoinned) {
			socket.emit("private message", roomId, input);
		} else {
			socket.emit("open new chat", roomId, input);
		}

		setInput("");
	};

	socket.on("private message", (senderSocketId, msg) => {
		setMessages([
			...messages,
			{
				sender: senderSocketId,
				content: msg,
			},
		]);
	});

	const handleEnter = (e) => {
		if (e.key === "Enter") {
			setMessages([
				...messages,
				{
					sender: "user",
					content: input,
				},
			]);

			console.log(roomId);

			if(isAdminJoinned) {
				socket.emit("private message", roomId, input);
			} else {
				socket.emit("open new chat", roomId, input);
			}

			setInput("");
		}
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
			<div className={`chat ${joined ? "active" : ""}`}>
				<div className="chat-header p-2 font-weight-bold dark-color border-bottom">
					Food Delivery Support Team
				</div>
				<div className="chat-body d-flex flex-column flex-column-reverse pt-3 px-2">
					{messages.map((message) => (
						<div
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
