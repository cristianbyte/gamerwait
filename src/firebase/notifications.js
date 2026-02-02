import { getToken } from "firebase/messaging";
import { messaging, auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

export const requestNotificationsPermission = async () => {
  const permission = await Notification.requestPermission();
  if (permission !== "granted") return null;

  await navigator.serviceWorker.register("/firebase-messaging-sw.js");
  const registration = await navigator.serviceWorker.ready;

  const token = await getToken(messaging, {
    vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
    serviceWorkerRegistration: registration,
  });

  if (!token) return null;

  await setDoc(doc(db, "users", auth.currentUser.uid, "tokens", token), {
    token,
    createdAt: new Date(),
  });

  return token;
};
