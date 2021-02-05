import socketio from "socket.io-client";
import React from 'react';

export const socket = socketio.connect("http://server.tomise20.hu");
export const SocketContext = React.createContext();