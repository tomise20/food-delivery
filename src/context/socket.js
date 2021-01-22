import socketio from "socket.io-client";
import React from 'react';

export const socket = socketio.connect("http://tomise20.hu/server/");
export const SocketContext = React.createContext();