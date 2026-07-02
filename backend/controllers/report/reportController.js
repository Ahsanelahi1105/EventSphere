const Expo = require("../../models/Expo");
const Booth = require("../../models/Booth");
const Exhibitor = require("../../models/Exhibitor");
const Session = require("../../models/Session");

const getDashboardReport = async (req, res) => {

  const draftExpos = await Expo.countDocuments({ status: "Draft" });

  const liveExpos = await Expo.countDocuments({ status: "Live" });

  const completedExpos = await Expo.countDocuments({ status: "Completed" });

  const pendingExhibitors = await Exhibitor.countDocuments({
    status: "Pending",
  });

  const rejectedExhibitors = await Exhibitor.countDocuments({
    status: "Rejected",
  });

  const bookedBooths = await Booth.countDocuments({
    status: "Booked",
  });

  const upcomingSessions = await Session.countDocuments({
    status: "Upcoming",
  });

  const liveSessions = await Session.countDocuments({
    status: "Live",
  });

  const completedSessions = await Session.countDocuments({
    status: "Completed",
  });

  try {

    const totalExpos = await Expo.countDocuments();

    const totalBooths = await Booth.countDocuments();

    const totalExhibitors = await Exhibitor.countDocuments();

    const totalSessions = await Session.countDocuments();

    const upcomingExpos = await Expo.countDocuments({
      status: "Upcoming",
    });

    const approvedExhibitors = await Exhibitor.countDocuments({
      status: "Approved",
    });

    const availableBooths = await Booth.countDocuments({
      status: "Available",
    });

    const occupiedBooths = await Booth.countDocuments({
      status: "Occupied",
    });

    res.status(200).json({
      success: true,
      report: {
        totalExpos,
        totalBooths,
        totalExhibitors,
        totalSessions,
        upcomingExpos,
        approvedExhibitors,
        availableBooths,
        occupiedBooths,
        draftExpos,
        liveExpos,
        completedExpos,

        pendingExhibitors,
        rejectedExhibitors,

        bookedBooths,

        upcomingSessions,
        liveSessions,
        completedSessions,
      },
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  getDashboardReport,
};
