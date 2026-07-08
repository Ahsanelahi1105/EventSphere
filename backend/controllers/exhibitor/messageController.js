const Message = require("../../models/Message");

// ================= SEND MESSAGE =================

const sendMessage = async (req, res) => {
  try {
    const message = await Message.create(req.body);

    res.status(201).json({
      success: true,
      message: "Message Sent Successfully",
      data: message,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ================= GET INBOX =================

const getInbox = async (req, res) => {
  try {

    const messages = await Message.find({
      receiver: req.params.userId,
    })
      .populate("sender", "firstName lastName email role")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      messages,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ================= GET CONVERSATION =================

const getConversation = async (req, res) => {
  try {

    const { senderId, receiverId } = req.params;

    const messages = await Message.find({
      $or: [
        {
          sender: senderId,
          receiver: receiverId,
        },
        {
          sender: receiverId,
          receiver: senderId,
        },
      ],
    })
      .populate("sender", "firstName lastName")
      .populate("receiver", "firstName lastName")
      .sort({ createdAt: 1 });

    res.status(200).json({
      success: true,
      messages,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ================= DELETE MESSAGE =================

const deleteMessage = async (req, res) => {
  try {

    const message = await Message.findById(req.params.id);

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message Not Found",
      });
    }

    await message.deleteOne();

    res.status(200).json({
      success: true,
      message: "Message Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  sendMessage,
  getInbox,
  getConversation,
  deleteMessage,
};