"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { KeyValue } from "@/types/types";
import axiosClient from "@/api/axiosClient";

interface AppContextType {
  devices: KeyValue[];
  setDevices: React.Dispatch<React.SetStateAction<KeyValue[]>>;
  selectedDevice: string | undefined;
  setSelectedDevice: React.Dispatch<React.SetStateAction<string | undefined>>;
}

interface AppProviderProps {
  children: React.ReactNode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

/**
 * AppProvider
 * @param children - ReactNode
 */
const AppProvider = ({ children }: AppProviderProps) => {
  const [devices, setDevices] = useState<KeyValue[]>([
    { name: "ESP32", value: "192.168.1.147" },
  ]);
  const [selectedDevice, setSelectedDevice] = useState<string | undefined>(
    devices[0].value,
  );
  const [armedState, setArmedState] = useState(false);

  useEffect(() => {
    axiosClient.defaults.baseURL = `http://${selectedDevice}`;
  }, [selectedDevice]);

  useEffect(() => {
    const socket = new WebSocket("ws://your-esp32-ip:81"); // Change to your ESP32 IP and port

    socket.onopen = () => {
      console.log("WebSocket connected");
    };

    socket.onmessage = (event) => {
      const message = event.data;
      if (message === "armed") {
        setArmedState(true);
      } else if (message === "disarmed") {
        setArmedState(false);
      }
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <AppContext.Provider
      value={{ devices, setDevices, selectedDevice, setSelectedDevice }}
    >
      {children}
    </AppContext.Provider>
  );
};

/**
 * Custom hook to use the context
 * @returns AppContextType
 * @throws Error
 * @example
 * const ctx = useAppContext()
 * console.log(ctx.devices)
 */
const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within the AppProvider");
  }
  return context;
};

export { AppProvider, useAppContext };
