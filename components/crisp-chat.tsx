"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("079e88e3-729a-4d50-8709-cb92149f1ed8");
  }, []);

  return null;
};