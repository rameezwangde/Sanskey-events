import { collection, doc, setDoc, getCountFromServer, query, where } from "firebase/firestore";
import { db } from "../firebase";

/**
 * Submits a vote for a specific model.
 * Uses a composite ID (userId_modelSlug) to ensure a user can only vote for a specific model once.
 * 
 * @param {Object} user - The Firebase Auth user object
 * @param {string} modelSlug - The slug of the model being voted for
 * @param {string} modelName - The display name of the model
 */
export const submitVote = async (user, modelSlug, modelName) => {
  if (!user || !user.uid) throw new Error("User must be logged in to vote");
  
  const voteDocId = `${user.uid}_${modelSlug}`;
  const voteRef = doc(db, "votes", voteDocId);
  
  await setDoc(voteRef, {
    userId: user.uid,
    userEmail: user.email,
    modelSlug: modelSlug,
    modelName: modelName,
    timestamp: new Date().toISOString()
  }, { merge: true }); // merge true ensures we just overwrite/update if they vote again
};

/**
 * Gets the total number of votes for a specific model.
 * 
 * @param {string} modelSlug - The slug of the model
 * @returns {number} The total vote count
 */
export const getVoteCount = async (modelSlug) => {
  try {
    const votesCol = collection(db, "votes");
    const q = query(votesCol, where("modelSlug", "==", modelSlug));
    const snapshot = await getCountFromServer(q);
    return snapshot.data().count;
  } catch (error) {
    console.error("Error fetching vote count:", error);
    return 0; // Return 0 if there's a permission error or database is unreachable
  }
};
