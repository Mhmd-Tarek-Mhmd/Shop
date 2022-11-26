import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage();

const getAvatarRef = (uid, fileType) =>
  ref(storage, `users/${uid}/avatar.${fileType.slice(6)}`);

export const uploadAvatar = (uid, file) =>
  uploadBytes(getAvatarRef(uid, file.type), file);

export const getAvatarURL = (uid) => getDownloadURL(getAvatarRef(uid));
