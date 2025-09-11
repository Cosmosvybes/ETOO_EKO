import { writeFeedBacks } from "../../../model/index.js";

export const sendFeedBacks = async (req: any, res: any) => {
  const { Fullname, Email, Message, ratings } = req.body;

  const data = {
    fullname: Fullname,
    email: Email,
    message: Message,
    ratings: ratings,
  };
  try {
    const feedbacksAttempt = await writeFeedBacks(data);
    return feedbacksAttempt?.insertedId
      ? res
          .status(200)
          .send({ response: "Feedback sent successfully, thank you !" })
      : res.status(503).send({ response: "Internal server error, ty again" });
  } catch (error) {
    res.status(500).send({ response: "Operation failed, connection error" });
  }
};
