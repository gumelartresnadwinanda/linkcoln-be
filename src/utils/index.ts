import { v4 as uuidv4 } from "uuid";

export const generateUUID = (): string => {
  return uuidv4();
};

export const formatDate = (date: Date): string => {
  return date.toISOString();
};

export const isValidEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const sanitizeInput = (input: string): string => {
  return input.replace(/<[^>]*>/g, "");
};

export const parseJSON = (jsonString: string): any => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    return null;
  }
};
