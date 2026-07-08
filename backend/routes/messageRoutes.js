const express = require("express");

const router = express.Router();

const {
  sendMessage,
  getInbox,
  getConversation,
  deleteMessage,
} = require("../controllers/exhibitor/messageController");

// Send Message
router.post("/send", sendMessage);

// Inbox
router.get("/inbox/:userId", getInbox);

// Conversation
router.get(
  "/conversation/:senderId/:receiverId",
  getConversation
);

// Delete Message
router.delete("/:id", deleteMessage);

module.exports = router;