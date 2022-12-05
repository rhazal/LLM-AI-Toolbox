import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 🎯 TODO:  Update the for produciton 
// 🤓 Dev: for developing make sure this is the absoute url (https://localhost:3000)
// create an absolute url for stripe to return back to our website
export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}